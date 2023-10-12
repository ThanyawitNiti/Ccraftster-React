import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/use-auth"


export default function ProfilePage() {
  const {checkUser} = useAuth()
  if(checkUser)
  
  return (
    <div>ProfilePage</div>
  )
}
