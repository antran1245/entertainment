import React, { ReactNode, createContext, useEffect, useState } from "react";

type userContextType = {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  bookmark: [];
  setBookmark: React.Dispatch<React.SetStateAction<[]>>
}
const userContextDefaultValues: userContextType = {
  user: null,
  setUser: () => {},
  bookmark: [],
  setBookmark: () => {}
}
export const UserContext = createContext<userContextType>(userContextDefaultValues)

type UserProp = {
  children: ReactNode
}

export default function UserWrapper({children} : UserProp) {
  const [user, setUser] = useState<string | null>(null)
  const [bookmark, setBookmark] = useState<[]>([])
  
  return(
    <UserContext.Provider value={{user, setUser, bookmark, setBookmark}}>
      {children}
    </UserContext.Provider>
  )
}