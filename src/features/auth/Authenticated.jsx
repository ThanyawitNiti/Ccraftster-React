import { Navigate } from "react-router-dom"
import {useAuth} from "../../hooks/use-auth"

export default function Authenticated({children}) {
    const {checkUser} =useAuth()

    console.log("555555555555555555555555")


    if(!checkUser ){
        return children
    }
    console.log(checkUser)

    if(checkUser.role ==='ADMIN'){
        return <Navigate to='/admin'/>
    }

    if(checkUser.role ==='USER'){
        return children
    }
    
    
    
}
