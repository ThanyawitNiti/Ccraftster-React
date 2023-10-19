import React from 'react'
import { useProductContext } from '../../hooks/product-context-hook'

export default function ButtonIncrease({objIdInArray,setProductAmount}) {
    const { addProductToCart} = useProductContext()
  
    const handleIncrease =()=>{
      addProductToCart(objIdInArray)
      setProductAmount(amount=>amount+1)
    }
  return (
    <div>
        <button onClick={handleIncrease}>
        +
        </button>
    </div>
  )
}
