import React from "react";
import { useProductContext } from "../../hooks/product-context-hook";

export default function ButtonDecrese({objIdInArray,setProductAmount}) {
  const {addProductToCart} = useProductContext()
  const handleDecrease =()=>{
    addProductToCart(objIdInArray)
    setProductAmount(amount=>amount-1)
  }
  return (
    <div>
      <button
      onClick={handleDecrease}>-</button>
    </div>
  );
}
