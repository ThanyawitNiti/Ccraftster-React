import { useProductContext } from '../../hooks/product-context-hook'

export default function ButtonIncrease({objIdInArray,setProductAmount}) {
    const { addProductToCart} = useProductContext()
  
    const handleIncrease =()=>{
      setProductAmount(amount=>amount+1)
      addProductToCart(objIdInArray)
    }
  return (
    <div className="bg-green-300 w-6 h-6 rounded-sm">
        <button onClick={handleIncrease}
        className=" w-full mb-0.5 font-extrabold text-2 hover:bg-green-600">
        +
        </button>
    </div>
  )
}
