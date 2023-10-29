
export default function Status({approveOrder}) {


  return (
    <div className="flex flex-row text-center gap-10 h-10">
    <div>{approveOrder ? 'จัดส่งสินค้า':'รอคอนเฟิร์ม'}</div>
    <button> Confirm Order</button>
  </div>
  )
}
