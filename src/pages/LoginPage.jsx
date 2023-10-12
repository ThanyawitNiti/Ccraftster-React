import LoginContent from "../features/auth/LoginContent";
import LoginForm from "../features/auth/LoginForm";
import { useAuth } from "../hooks/use-auth";
import RegisterPage from "../pages/RegisterPage"

export default function LoginPage() {
  
  return (
    <>
        <div className=" flex gap-4 pl-3 ">
        
        <LoginContent/>
          
        <div className="flex flex-1 max-h-full items-center justify-center flex-col">

        <div className="flexitems-center justify-center ">
          <LoginForm />
          {/* <div>Register Component</div> */}
          {/* <LoginForm/> */}
        </div>
        <div className="mt-2">
          <RegisterPage/>
        </div>

        </div>

      </div>
    </>
  )
}
