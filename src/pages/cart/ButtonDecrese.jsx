import { useProductContext } from "../../hooks/product-context-hook";

export default function ButtonDecrese({objIdInArray,setProductAmount,productAmount}) {
  const {decreaseProductInCart,addProductToCart} = useProductContext()
  
  const handleDecrease =()=>{
    if(productAmount >0){
      setProductAmount(amount=>amount-1)
      addProductToCart(objIdInArray)
      decreaseProductInCart(objIdInArray)
    }
  }

  console.log(productAmount)
  return (
    <div>
      <button
      onClick={handleDecrease}>-</button>
    </div>
  );
}
