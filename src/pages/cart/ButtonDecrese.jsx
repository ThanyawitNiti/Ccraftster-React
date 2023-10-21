import { useProductContext } from "../../hooks/product-context-hook";

export default function ButtonDecrese({objIdInArray,setProductAmount,}) {
  const {decreaseProductInCart,addProductToCart} = useProductContext()
  const handleDecrease =()=>{
    setProductAmount(amount=>amount-1)
    addProductToCart(objIdInArray)
    decreaseProductInCart(objIdInArray)
  }
  return (
    <div>
      <button
      onClick={handleDecrease}>-</button>
    </div>
  );
}
