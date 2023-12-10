import { useState } from "react";
import ButtonDecrese from "./ButtonDecrese";
import ButtonIncrease from "./ButtonIncrease";
import { useProductContext } from "../../hooks/product-context-hook";

export default function Img({
  photo,
  name,
  price,
  amount,
  objIdInArray,
  setShowOrder,
}) {
  const [productAmount, setProductAmount] = useState(amount);
  const {deleteProductInCart} =useProductContext()
  const handleDeleteClick = async () => {
    deleteProductInCart(objIdInArray);
  };
  return (
    <div className=" border-gray-400 border-b-2 w-full flex justify-around h-full py-7">
      <div className="border-2 border-blue-500 w-3/5 justify-around hover:shadow-2xl py-5 px-1 rounded-lg">
        <div className="flex flex-row gap-5 ">
          <div className="w-20 h-full items-center flex border-2 border-cyan-200 rounded-md">
            <img src={photo} className="object-fill " />
          </div>
          <div className="border-2 border-cdGreen bg-slate-100 rounded-2xl font-bold flex-grow py-1">
            <p className="px-2">{name}</p>
            <p className="px-2">Price : {price} Baht</p>
          </div>
          <div className=" w-2/5 flex items-center justify-center relative">
            <div className=" flex flex-row gap-4 ">
              <div className="flex  items-center">
                <ButtonDecrese
                  objIdInArray={objIdInArray}
                  setProductAmount={setProductAmount}
                  productAmount={productAmount}
                  amount={amount}
                />
              </div>
              <p>{productAmount}</p>
              <div className="flex  items-center">
                <ButtonIncrease
                  objIdInArray={objIdInArray}
                  setProductAmount={setProductAmount}
                  productAmount={productAmount}
                />
              </div>
            </div>
            <div className=" absolute right-1 -top-7 font-bold text-red-500/100  text-xl cursor-pointer hover:text-2xl" onClick={handleDeleteClick}>x</div>
          </div>
        </div>
      </div>
    </div>
  );
}
