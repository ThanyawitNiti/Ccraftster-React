import { useContext } from "react"
import { AdminContext } from "../contexts/AdminContext"


export function useAdminContext(){
    return useContext(AdminContext)
}