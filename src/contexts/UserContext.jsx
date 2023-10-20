import axios from '../config/axios'
import { createContext } from 'react'

export const UserContext = createContext()
export default function UserContextProvider({children}) {

  

  return (
    <>
    <UserContext.Provider>

    {children}

    </UserContext.Provider>
    </>
  )
}
