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
        return <Navigate to='/user'/>
    }
    
    
    // if(checkUser.role === 'ADMIN'){
    //     console.log(checkUser.role)
    //     return <Navigate to='/admin'/>
    // }
    // else (checkUser || !checkUser)
    //     // return <Navigate to ='/login'/>
    //     return 
    
}
