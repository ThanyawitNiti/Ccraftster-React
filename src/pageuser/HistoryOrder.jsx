

export default function HistoryOrder({total_price,payment_status}) {

  return (
    <>
    {/* <div className="font-semibold pt-2">Payment History</div> */}
    {/* <div className="flex gap-20 h-96 w-full"> */}
      <div className="font-semibold">Total Price : {total_price}</div>
      <div className="flex">
      <div className="font-semibold">StatusPayment :</div>
      <div className= {`${payment_status ?"text-green-600" : "text-red-500"}`} >
        {payment_status ? "กำลังเดินการจัดส่งสินค้า" : "รอแอดมินตรวจสอบสลิปก่อนนะ"} 
      </div>
      </div>
    {/* </div> */}
    </>
  )
}
