import { useProductContext } from '../../hooks/product-context-hook'

export default function ButtonIncrease({objIdInArray,setProductAmount}) {
    const { addProductToCart} = useProductContext()
  
    const handleIncrease =()=>{
      console.log('dasdadads')
      setProductAmount(amount=>amount+1)
      addProductToCart(objIdInArray)
    }
  return (
    <div>
        <button onClick={handleIncrease}>
        +
        </button>
    </div>
  )
}
