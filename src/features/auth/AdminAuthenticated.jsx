
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function AdminAuthenticated({ children }) {
  const { checkUser } = useAuth();
  console.log("AdminAuthenticated")
  
  if(!checkUser){
    return <Navigate to='/'/>
  }
  if (checkUser.role === 'ADMIN') {
    
    return children
  }
  
  
  
}

