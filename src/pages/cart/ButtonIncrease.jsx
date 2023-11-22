import { useProductContext } from '../../hooks/product-context-hook'

export default function ButtonIncrease({objIdInArray,setProductAmount}) {
    const { addProductToCart} = useProductContext()
  
    const handleIncrease =()=>{
      setProductAmount(amount=>amount+1)
      addProductToCart(objIdInArray)
    }
  return (
    <div className="bg-green-300 w-8 rounded-full mb-1">
        <button onClick={handleIncrease}
        className="font-semibold w-full mb-0.5">
        +
        </button>
    </div>
  )
}
