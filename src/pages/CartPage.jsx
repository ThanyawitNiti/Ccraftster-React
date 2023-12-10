
import { useEffect, useState } from "react";
import axios from "axios";
import { useProductContext } from "../hooks/product-context-hook";
import { useOrderContext } from "../hooks/order-context-hook";
import { Link } from "react-router-dom";
import Img from "./cart/Img";

export default function CartPage() {
  const [showOrder, setShowOrder] = useState([]);
  const [total, setTotal] = useState("");
  const { isRefresh, deleteProductInCart } = useProductContext();
  const { sendCartToOrder } = useOrderContext();

  useEffect(() => {
    axios
      .get("/user/cartpage")
      .then((res) => {
        setShowOrder(res.data.showItemToUser);
        setTotal(res.data.grandTotal);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isRefresh]);

  const productIdInCart = showOrder.map((el) => el.product_id);
  const handleClickPay = () => {
    sendCartToOrder(showOrder);
    for (const elId of productIdInCart) {
      deleteProductInCart(elId);
    }
  };

  console.log(showOrder);
  return (
    <>
      <div className="flex justify-center flex-col">
        {/* <div className="border-2 border-red-100 w-3/5 flex justify-around items-center h-full">
    <div className="border-2 border-blue-200 w-3/5"> */}
        {showOrder.map((el) => (
          <Img
            key={el.id}
            photo={el.product.img_url}
            name={el.product.product_name}
            price={el.product.price}
            amount={el.amount}
            objIdInArray={el.product_id}
            setShowOrder={setShowOrder}
          />
        ))}
      </div>
      {/* <div className="border-2 border-yellow-200 ">
      {showOrder.map((el)=>(
      <Name  key={el.id}         
      name={el.product.product_name}
      price={el.product.price}/>
    ))}
    </div> */}
      {/* <div className="border-2 border-green-200">
      <div>amount</div>
    </div> */}

      {/* </div>
    </div> */}
      <div className=" flex justify-center gap-6">
      <div className="w-2/5"></div>
        <div className=" flex justify-center items-center gap-4">
        <div className="flex mt-3 justify-center">
          <div className="text-center px-2 border-2 border-yellow-300 font-bold rounded-md cr">
            Total : {total}
          </div>
        </div>
        <div className="flex mt-3 justify-center">
          <Link to="/profilepage">
            <button
              className="text-center w-20 border-2 border-red-200 rounded-md hover:bg-green-300"
              onClick={handleClickPay}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
      </div>
    </>
    // <div className="broder border-2 border-red-400">
    //   <div className="overflow-x-auto flex justify-center ">
    //     <table className="table broder border-2 border-red-400 w-4/5">
    //       {/* head */}
    //       <HeaderCart />
    //       {showOrder.map((el) => (
    //         <DetailCart
    //           key={el.id}
    //           amount={el.amount}
    //           name={el.product.product_name}
    //           price={el.product.price}
    //           photo={el.product.img_url}
    //           objIdInArray={el.product_id}
    //           showOrder={showOrder}
    //           setShowOrder={setShowOrder}
    //           setTotal={setTotal}
    //         />
    //       ))}
    //     </table>
    //   </div>

    //   <div className="flex mt-3 justify-center">
    //     <div className="text-center w-20 border-2 border-red-200 rounded-md">
    //       Total : {total}
    //       {/* Total : {total} */}
    //     </div>
    //     <div></div>
    //   </div>
    //   <div className="flex mt-3 justify-center">
    //     <Link to="/profilepage">
    //       <button
    //       className="text-center w-20 border-2 border-red-200 rounded-md"
    //       onClick={handleClickPay}>
    //         PAY
    //       </button>
    //     </Link>
    //   </div>
    // </div>
  );
}
