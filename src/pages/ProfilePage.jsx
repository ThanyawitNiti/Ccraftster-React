import { useEffect } from "react";
import { useOrderContext } from "../hooks/order-context-hook";
import axios from "axios";
import { useState } from "react";
import OrderList from "../pageuser/OrderList";
import HistoryOrder from "../pageuser/HistoryOrder";

export default function ProfilePage() {
  const [statusPayment, setStatusPayment] = useState([]);
  const [checkingPayment, setCheckingPayment] = useState([]);
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
        setCheckingPayment(res.data.statusPaymentTrue);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(checkingPayment);
  console.log(statusPayment);

  return (
    <>
      <div className="flex justify-center flex-col items-center  border-2 border-blue-200">

        <div className="border-2 border-green-200 flex flex-col  w-full items-center py-10 gap-3 ">
          <div>Bank Account</div>
          <div>Account 123456789</div>
          <div>นายสันดอน นอนดึก</div>
        </div>

        <div className="border-2 border-red-200 flex flex-col justify-evenly items-center gap-3 w-3/4">
          {statusPayment.map((el) => (
            <OrderList
              key={el.id}
              id={el.id}
              total_price={el.total_price}
              payment_status={el.payment_status}
            />
          ))}
        </div>
  
        <div className="border-2 border-red-200 flex flex-col justify-evenly items-center gap-3 w-3/4">
          {checkingPayment.map((el) => (
            <HistoryOrder
              key={el.id}
              id={el.id}
              total_price={el.total_price}
              payment_status={el.payment_status}
            />
          ))}
        </div>

      </div>
    </>
  );
}
