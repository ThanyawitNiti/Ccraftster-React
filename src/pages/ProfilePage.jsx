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

  const history = () => {
    axios
      .get("/order/status")
      .then((res) => {
        console.log(res);
        setStatusPayment(res.data.statusPayment);
        setCheckingPayment(res.data.statusPaymentTrue);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    history();
  }, []);
  console.log("statusPayment", statusPayment);
  // console.log('statusPayment',statusPayment[0].slipImg);

  console.log("checkingPayment", checkingPayment);
  return (
    <>
      <div className="flex justify-start flex-row items-center  border-2 border-blue-200">
        <div className="border-2 border-green-200 flex flex-col   items-center py-10 gap-3 ">
          <div className="w-100 h-100 border-2 border-black">
            <img src="src\assets\Screenshot 2023-11-20 222159.png" />
          </div>
        </div>
        <div className="border-2 border-red-400 w-full flex flex-col ">
          <div className="  justify-evenly items-center gap-3 w-full border-2 border-blue-500 pl-5">
            {statusPayment.map((el) => (
              <OrderList
                key={el.id}
                id={el.id}
                total_price={el.total_price}
                payment_status={el.payment_status}
                slipImg={el.slipImg}
                history={history}
              />
            ))}
          </div>
          <div className="border-2 border-black flex flex-col justify-evenly items-center gap-3 w-full">
            <div className="font-semibold pt-2">Payment History</div>
            {checkingPayment.map((el) => (
              <HistoryOrder
                key={el.id}
                id={el.id}
                total_price={el.total_price}
                slipImg={el.slipImg}
                payment_status={el.payment_status}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
