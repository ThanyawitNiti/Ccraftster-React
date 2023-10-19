import React from "react";
import { useProductContext } from "../../hooks/product-context-hook";

export default function ButtonDecrese({objIdInArray,setProductAmount,productAmount}) {
  const {addProductToCart} = useProductContext()
  const handleDecrease =()=>{
    setProductAmount(amount=>amount-1)
    // addProductToCart(objIdInArray)
    addProductToCart(productAmount)
  }
  return (
    <div>
      <button
      onClick={handleDecrease}>-</button>
    </div>
  );
}
