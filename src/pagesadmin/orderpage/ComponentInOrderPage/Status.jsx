import axios from "axios"

export default function Status({statusOrder,approve,id}) {


const updateOrderStatus = async (orderId) =>{
    try{
        await axios
        .patch(`/admin/status/${orderId}`,orderId)
    }catch(err){
        console.log(err)
    }
}

const handleClick  = () =>{
    updateOrderStatus(id)
    approve()

}

console.log(statusOrder)
console.log(id)
  return (
    <div className="flex flex-row text-center gap-3 my-2">
    <div className={`${statusOrder? "bg-green-400 rounded-md px-2" : "bg-red-400 rounded-md px-2"}`}>{statusOrder ? 'จัดส่งสินค้า':'รอคอนเฟิร์ม'}</div>
    <button onClick={handleClick} className=" bg-slate-300 rounded-lg px-4">ยืนยันออเดอร์</button>
  </div>
  )
}
