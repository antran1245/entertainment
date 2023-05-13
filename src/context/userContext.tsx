import { Data } from "@/types/data";
import React, { ReactNode, createContext, useState } from "react";

type userContextType = {
  user: { email: string | null; id: number | null, bookmarks: {movies: Data | []; tvSeries: Data | []} };
  setUser: React.Dispatch<React.SetStateAction<{ email: string | null; id: number | null, bookmarks: {movies: Data | []; tvSeries: Data | []} }>>;
}
const userContextDefaultValues: userContextType = {
  user: { email: null, id: null, bookmarks: {movies: [], tvSeries: []} },
  setUser: () => {},
}
export const UserContext = createContext<userContextType>(userContextDefaultValues)

type UserProp = {
  children: ReactNode
}

export default function UserWrapper({children} : UserProp) {
  const [user, setUser] = useState<{ email: string | null; id: number | null, bookmarks: {movies: Data | []; tvSeries: Data | []} }>({ email: null, id: null, bookmarks: {movies: [], tvSeries: []} })

  return(
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}