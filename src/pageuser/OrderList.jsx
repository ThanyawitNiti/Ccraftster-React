import { useState } from "react";
import { useOrderContext } from "../hooks/order-context-hook";
import Loading from "../component/Loading";


export default function OrderList({ id,total_price, payment_status }) {


const [file,setFile] =useState(null)
const [loading, setLoading] = useState(false)

const {uploadSlip} = useOrderContext()

const handdlesubmitForm = async (e)=>{
    try{
        e.preventDefault()
        const formData = new FormData()
        formData.append('id',id)
        formData.append('slipImg',file)
        console.log(formData.id)
        setLoading(true)
        await uploadSlip(formData)

    }catch(err){
        console.log(err)
    }finally {
        setLoading(false);
      }
}
  return (
    <div className="flex gap-20">
      <div>Total Price : {total_price}</div>
      <div className="flex ">
      <div>StatusPayment :</div>
      <div className= {`${payment_status ?"text-green-500" : "text-red-500"}`} >
        {payment_status ? "Completed" : "Processing Payment"}
      </div>
      </div>
      {loading && <Loading/>}
      <form 
      className="w-10"
      onSubmit={handdlesubmitForm}
      >
        <button className=" border-2 border-green-200 w-60 bg-cGreen">Upload Slip</button>
        <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
      </form>
      
    </div>
  );
}
