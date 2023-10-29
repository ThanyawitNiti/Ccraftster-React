
export default function Status({approveOrder}) {
  return (
    <div className="flex flex-row text-center gap-10">
    <div>{approveOrder ? 'ยืนยันออเดอร์':'รอคอนเฟิร์ม'}</div>
    <button> Confirm Order</button>
  </div>
  )
}
