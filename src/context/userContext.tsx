import React, { ReactNode, createContext, useEffect, useState } from "react";

type userContextType = {
  user: { email: string | null; id: number | null };
  setUser: React.Dispatch<React.SetStateAction<{ email: string | null; id: number | null }>>;
  bookmark: [];
  setBookmark: React.Dispatch<React.SetStateAction<[]>>
}
const userContextDefaultValues: userContextType = {
  user: { email: null, id: null },
  setUser: () => {},
  bookmark: [],
  setBookmark: () => {}
}
export const UserContext = createContext<userContextType>(userContextDefaultValues)

type UserProp = {
  children: ReactNode
}

export default function UserWrapper({children} : UserProp) {
  const [user, setUser] = useState<{ email: string | null; id: number | null }>({ email: null, id: null })
  const [bookmark, setBookmark] = useState<[]>([])
  
  return(
    <UserContext.Provider value={{user, setUser, bookmark, setBookmark}}>
      {children}
    </UserContext.Provider>
  )
}