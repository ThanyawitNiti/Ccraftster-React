
import { useOrderContext } from "../hooks/order-context-hook"


export default function ProfilePage() {
  const {order} = useOrderContext()
  console.log(order)
  const totaFormOrder = order.reduce((acc, item) => {
    let total = item.amount * item.product.price;
    acc += total;
    return acc;
  }, 0);

  return (
    <>
    <div className="border-2 border-green-200 flex flex-col justify-start  ">
    <div>Bank Account</div>
    <div>Account 123456789</div>
    <div>นายสันดอน นอนดึก</div>
    </div>
    <div className="border-2 border-red-200 flex flex-row justify-evenly">
      <div>total : {totaFormOrder}</div>
      <div>upload slip</div>
    </div>
    </>
  )
}
