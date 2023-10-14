
import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";
export default function AdminAuthenticated({ children }) {
  const { checkUser } = useAuth();
  if(!checkUser){
    return <Navigate to='/'/>
  }
  if (checkUser.role === 'USER') {
    
    return children
  }
  
  
}
