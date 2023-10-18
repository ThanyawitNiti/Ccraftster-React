import axios from "axios";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ProductContext = createContext()

export default function ProductContextProvider({children}){
const [showProduct,setShowProduct] = useState([])
const [showOrder,setShowOrder] =useState([])


console.log(`####################1111111111${showOrder}`)





useEffect(()=>{
    axios
    .get('/user/product')
    .then((res)=>{
        setShowProduct(res.data.showProducts)
    })
    .catch((err)=>{
        console.log(err)
    })
    axios
    .get('/user/cartpage')
    .then((res)=>{
        setShowOrder(res.data.showItemToUser)
    }).catch((err)=>{
        console.log(err)
    })
},[])

console.log(showOrder)

const addProductToCart = async (productId) =>{
    try{
            const updateObj = {id : productId}
         await axios.post('/user/cart',updateObj)
        
    }catch(err){
        console.log(err)
    }
}

// const showOrderItem = async (id)=>{
//     try{
//      const res = await axios.get('/user/cartpage',{userId:id})
//       const showOrderFormBack = res.data.showItemToUser
//       console.log(showOrderFormBack)
//       setShowOrder
//     } catch(err){
//         console.log(err)
//     }
// }


return (
    <>
    <ProductContext.Provider value={{showProduct,addProductToCart,showOrder}}>
        {children}
    </ProductContext.Provider>
    </>
)
}