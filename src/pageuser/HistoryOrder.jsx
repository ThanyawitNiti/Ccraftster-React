export default function HistoryOrder({ total_price, payment_status }) {
  return (
    <>
      <div className=" border-black border-b-2 px-5">
        <div className="font-bold">Total Price : {total_price}</div>
        <div className="flex gap-1">
          <div className="font-bold">Status Oder : </div>
          <div
            className={`${payment_status ? "text-green-500" : "text-red-500"}`}
          >
            {payment_status
              ? "จัดส่งสินค้าเรียบร้อยแล้ว"
              : "รอแอดมินตรวจสอบสลิปก่อนนะ"}
          </div>
        </div>
      </div>
    </>
  );
}
