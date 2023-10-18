import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/use-auth"

export default function CartPage() {
  const {checkUser} = useAuth()
  if(!checkUser){
    return <Navigate to='/login' />
  }
  return (
    <div>CartPage</div>
  )
}
