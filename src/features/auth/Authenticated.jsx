import { Navigate } from "react-router-dom"
import {useAuth} from "../../hooks/use-auth"

export default function Authenticated({children}) {
    const {checkUser} =useAuth()
    if(!checkUser ){
        return children
    }
    if(checkUser.role ==='ADMIN'){
        return <Navigate to='/admin'/>
    }
    if(checkUser.role ==='USER'){
        return children
    }
    
    
    
}
