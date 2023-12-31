import { useState, useEffect } from "react";
import axios from "../../config/axios";
import FirstName from "./ComponentInOrderPage/FirstName";
import LastName from "./ComponentInOrderPage/LastName";
import Phone from "./ComponentInOrderPage/Phone";
import TotalPayment from "./ComponentInOrderPage/TotalPayment";
import Status from "./ComponentInOrderPage/Status";
import SlipImg from "./ComponentInOrderPage/slipImg";

export default function CheckOrder() {
  const [allPayment,setAllPayment] = useState([])
  const [approveOrder, setapproveOrder] = useState([]);
  const [confirmOrder,setConfirmOrder] = useState([])

  const approve = () => {
    axios
      .get("/admin/status")
      .then((res) => {
        console.log(res);
        setapproveOrder(res.data.statusPayment);
        setConfirmOrder(res.data.getApprovePaymentTrue)
        setAllPayment(res.data.findAllStatusPayment)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    approve();
  }, []);

  // console.log(approveOrder);
  return (
    <div className="border-2 border-cGreen w-full min-h-screen flex flex-row justify-between py-3 px-10 mt-2 text-center">
      <div>
        <div className="border-b-2 border-cdGreen">Firstname</div>
        {allPayment.map((el) => (
          <FirstName key={el.id} approveOrder={el.user.first_name} />
        ))}
      </div>

      <div>
        <div className="border-b-2 border-cdGreen">Lastname</div>
        {allPayment.map((el) => (
          <LastName key={el.id} approveOrder={el.user.last_name} />
        ))}
      </div>

      <div>
        <div className="border-b-2 border-cdGreen">Phone</div>
        {allPayment.map((el) => (
          <Phone key={el.id} approveOrder={el.user.phone} />
        ))}
      </div>
      <div>
        <div className="border-b-2 border-cdGreen">Total Payment</div>
        {allPayment.map((el) => (
          <TotalPayment key={el.id} approveOrder={el.total_price} />
        ))}
      </div>

      <div>
        <div className="border-b-2 border-cdGreen">Status Payment</div>
        {allPayment.map((el) => (
          <Status key={el.id} statusOrder={el.payment_status} id={el.id} 
          approve={approve} />
        ))}
      </div>

      <div>
        <div className="flex flex-col ">
          <div className="border-b-2 border-cdGreen">Slip</div>
          {allPayment.map((el) => (
            <SlipImg key={el.id} approveOrder={el.slipImg} />
          ))}
        </div>
      </div>
    </div>
  );
}
