import { useEffect } from "react";
import { useOrderContext } from "../hooks/order-context-hook";
import axios from "axios";
import { useState } from "react";

export default function ProfilePage() {
  const [statusPayment, setStatusPayment] = useState([]);
  const { order } = useOrderContext();

  const totaFormOrder = order.reduce((acc, item) => {
    let total = item.amount * item.product.price;
    acc += total;
    return acc;
  }, 0);

  useEffect(() => {
    axios
      .get("/order/status")
      .then((res) => {
        setStatusPayment(res.data.statusPayment);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(statusPayment);
  return (
    <>
      <div className="flex justify-center flex-col items-center  border-2 border-blue-200">

        <div className="border-2 border-green-200 flex flex-col justify-center w-full items-center py-10 gap-3 ">
          <div>Bank Account</div>
          <div>Account 123456789</div>
          <div>นายสันดอน นอนดึก</div>
        </div>

        <div className="border-2 border-red-200 flex flex-col justify-evenly items-center gap-3">
          <div>total : {totaFormOrder}</div>
          <div>total : {`${statusPayment.total_price}`}</div>
          <div>StatusPayment :{`${statusPayment.payment_status}`} </div>
        </div>
      </div>
    </>
  );
}
