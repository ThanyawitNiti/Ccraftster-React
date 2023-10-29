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
    <div className="flex flex-row text-center gap-10 h-10">
    <div>{statusOrder ? 'จัดส่งสินค้า':'รอคอนเฟิร์ม'}</div>
    <button onClick={handleClick}> Confirm Order</button>
  </div>
  )
}
