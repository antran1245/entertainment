import { ReactNode, createContext, useState } from "react";

type userContextType = {
  user: string | null;
}
const userContextDefaultValues: userContextType = {
  user: null
}
export const UserContext = createContext<userContextType>(userContextDefaultValues)

type UserProp = {
  children: ReactNode
}

export default function UserWrapper({children} : UserProp) {
  const [user, setUser] = useState<string | null>(null)
  return(
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  )
}