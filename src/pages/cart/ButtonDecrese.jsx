import { useProductContext } from "../../hooks/product-context-hook";

export default function ButtonDecrese({objIdInArray,setProductAmount,productAmount}) {
  const {decreaseProductInCart,addProductToCart} = useProductContext()
  
  const handleDecrease =()=>{
    if(productAmount >0){
      setProductAmount(amount=>amount-1)
      // addProductToCart(objIdInArray)
      decreaseProductInCart(objIdInArray)
    }
  }

  console.log(productAmount,'Bottomdecrease')
  return (
    <div className="bg-red-300 w-8 rounded-full">
      <button
      onClick={handleDecrease}
      className="font-semibold w-full"
      >-</button>
      
    </div>
  );
}
