import { useState } from "react"
import Modal from "../component/Modal"
import RegisterForm from "../features/auth/RegisterForm"

export default function RegisterPage() {
    const[isOpen,setIsOpen]=useState(false)
  return (
    <div>
    <div className=" flex justify-center">
         <button className=" bg-violet-400  w-52 h-10 rounded-md hover:bg-violet-600" onClick={()=>setIsOpen(true)}>
            Register</button>
    </div>
        <Modal title ="Sign up" open={isOpen} onClose={()=>setIsOpen(false)}>
            <RegisterForm/>
        </Modal>
    </div>
  )
}
