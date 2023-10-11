import LoginContent from "../features/auth/LoginContent";
import LoginForm from "../features/auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <div className=" flex gap-4 pl-3">
        
        <LoginContent/>
          
        
        <div className="flex flex-1 max-h-full items-center justify-center">
          

          <LoginForm />
          {/* <div>Register Component</div> */}
          {/* <LoginForm/> */}
          
        </div>


      </div>
    </>
  );
}
