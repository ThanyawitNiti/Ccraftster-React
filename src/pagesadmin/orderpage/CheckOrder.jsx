import { useState,useEffect } from "react"
import axios from "../../config/axios";
import FirstName from "./ComponentInOrderPage/FirstName";
import LastName from "./ComponentInOrderPage/LastName";
import Phone from "./ComponentInOrderPage/Phone";
import TotalPayment from "./ComponentInOrderPage/TotalPayment";
import Status from "./ComponentInOrderPage/Status";


export default function CheckOrder() {
    const [approveOrder,setapproveOrder] = useState([])

    console.log(approveOrder)
    const approve = () =>{
        axios
            .get("/admin/status")
            .then((res) => {
              console.log(res)
              setapproveOrder(res.data.statusPayment);
              
            })
            .catch((err) => {
              console.log(err);
            });
      }
      
        useEffect(() => {
          approve()
        }, []);

console.log(approveOrder)

  return (
    <div className="border-2 border-red-400 w-full max-h-screen flex flex-row justify-between py-2 px-10" >
        
        {/* <div>Firstname</div> */}
        <FirstName />
        {/* <div>Lastname</div> */}
        <LastName/>
        {/* <div>Phone</div> */}
        <Phone/>
        {/* <div>Total Payment</div> */}
        <TotalPayment/>
        {/* <div>Status</div> */}
        <Status/>
    </div>
  )
}
