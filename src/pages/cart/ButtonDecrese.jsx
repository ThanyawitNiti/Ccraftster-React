import { useProductContext } from "../../hooks/product-context-hook";

export default function ButtonDecrese({objIdInArray,setProductAmount,productAmount}) {
  const {deleteProductInCart,addProductToCart} = useProductContext()
  const handleDecrease =()=>{
    setProductAmount(amount=>amount-1)
    addProductToCart(objIdInArray)
    deleteProductInCart(objIdInArray)
  }
  return (
    <div>
      <button
      onClick={handleDecrease}>-</button>
    </div>
  );
}
