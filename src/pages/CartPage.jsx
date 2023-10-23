import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import HeaderCart from "./cart/HeaderCart";
import DetailCart from "./cart/DetailCart";
import { useEffect, useState } from "react";
import axios from "axios";
import { useProductContext } from "../hooks/product-context-hook";
import { useOrderContext } from "../hooks/order-context-hook";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { checkUser } = useAuth();
  const [showOrder, setShowOrder] = useState([]);
  if (!checkUser) {
    return <Navigate to="/login" />;
  }

  const { isRefresh } = useProductContext();
  const { sendCartToOrder } = useOrderContext();

  useEffect(() => {
    axios
      .get("/user/cartpage")
      .then((res) => {
        setShowOrder(res.data.showItemToUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isRefresh]);

  const grandTotal = showOrder?.reduce((acc, item) => {
    let total = item.amount * item.product.price;
    acc += total;
    return acc;
  }, 0);

  const handleClickPay = () => {
    sendCartToOrder(showOrder);
    
  };

  return (
    <div className="broder border-2 border-red-400">
      <div className="overflow-x-auto flex justify-center ">
        <table className="table broder border-2 border-red-400 w-4/5">
          {/* head */}
          <HeaderCart />
          {showOrder.map((el) => (
            <DetailCart
              key={el.id}
              amount={el.amount}
              name={el.product.product_name}
              price={el.product.price}
              photo={el.product.img_url}
              objIdInArray={el.product_id}
              showOrder={showOrder}
              setShowOrder={setShowOrder}
            />
          ))}
        </table>
      </div>

      <div className="flex mt-3 justify-center">
        <div className="text-center w-20 border-2 border-red-200 rounded-md">
          Total : {grandTotal}
        </div>
        <div></div>
      </div>
      <div className="flex mt-3 justify-center">
        <Link to="/profilepage">
          <button 
          className="text-center w-20 border-2 border-red-200 rounded-md"
          onClick={handleClickPay}>
            PAY
          </button>
        </Link>
      </div>
    </div>
  );
}
