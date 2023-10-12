import { Navigate } from "react-router-dom"
import {useAuth} from "../../hooks/use-auth"

export default function Authenticated({children}) {
    const {checkUser} =useAuth()
    console.log(checkUser)
    if(checkUser){
        // return <Navigate to ='/login'/>
        return children
    }
//   return (
//     <div>Authenticated</div>
//   )
}
