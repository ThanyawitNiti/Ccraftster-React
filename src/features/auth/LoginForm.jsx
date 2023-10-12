import { useState } from "react";
import LoginInput from "./LoginInput";
import { useAuth } from "../../hooks/use-auth";
import { toast } from "react-toastify"

export default function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const {login} =useAuth()
 

  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input).catch((err)=>{
      // console.log(err)
      toast.error(err.response.data.message);
      // console.log(err.response.data.message)
    })
  };

  return (
    <form className="flex justify-center flex-1 align-middle gap-5 h-full items-center flex-col
    " onSubmit={handleSubmitForm}>
      <div className="mt-5 flex gap-2 flex-col">
        <LoginInput
          placeholder="Enter your E-mail"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        
        <LoginInput
          placeholder="Password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        
      </div>
      <div className="gap-2 flex flex-col bordeborder-red-400 items-center  w-full">
      <button className=" bg-green-300 w-52 h-10 rounded-md hover:bg-green-500">Login</button>
      
      </div>
    </form>
  );
}
