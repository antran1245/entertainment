import { useFetch } from "@/hooks/useFetch";
import { Data } from "@/types/data";
import React, { ReactNode, createContext, useEffect, useState } from "react";

type userContextType = {
  user: { email: string | null; id: number | null, bookmarks: {movies: Data | []; tvSeries: Data | []} };
  setUser: React.Dispatch<React.SetStateAction<{ email: string | null; id: number | null, bookmarks: {movies: Data | []; tvSeries: Data | []} }>>;
  isBookmarkArr: number[];
  setIsBookmarkArr: React.Dispatch<React.SetStateAction<number[]>>
}
const userContextDefaultValues: userContextType = {
  user: { email: null, id: null, bookmarks: {movies: [], tvSeries: []} },
  setUser: () => {},
  isBookmarkArr: [],
  setIsBookmarkArr: () => {}
}
export const UserContext = createContext<userContextType>(userContextDefaultValues)

type UserProp = {
  children: ReactNode
}

export default function UserWrapper({children} : UserProp) {
  const [user, setUser] = useState<{ email: string | null; id: number | null, bookmarks: {movies: Data | []; tvSeries: Data | []} }>({ email: null, id: null, bookmarks: {movies: [], tvSeries: []} })
  const [isBookmarkArr, setIsBookmarkArr] = useState<number[]>([])
  const { data = [] } = useFetch('/api/show')
  
  useEffect(() => {
    let storeUser = localStorage.getItem('user')
    if(storeUser) {
      const body = JSON.parse(storeUser)
      fetch('/api/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .then(dataResp => {
          if(dataResp.result) {
            let currMovies = []
            let currTVSeries = []
            let bookmarksArr = dataResp.bookmarks.map((item : any) => item.showId)
              for(let i = 0; i < data.length; i++) {
                if(bookmarksArr.includes(data[i]["id"])) {
                  if(data[i]["category"] === "TV Series") {
                    currTVSeries.push(data[i])
                  } else {
                    currMovies.push(data[i])
                  }
                }
              }
            setUser({email: body.email, id: dataResp.id, bookmarks: {movies: currMovies, tvSeries: currTVSeries}})
            setIsBookmarkArr(bookmarksArr)
          }
        })
        .catch(err => console.log('Login Error: ', err))
    }
  }, [data])

  return(
    <UserContext.Provider value={{user, setUser, isBookmarkArr, setIsBookmarkArr}}>
      {children}
    </UserContext.Provider>
  )
}