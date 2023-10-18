import axios from "axios";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ProductContext = createContext()

export default function ProductContextProvider({children}){
const [showProduct,setShowProduct] = useState([])
const [showOrder,setShowOrder] =useState([])



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


const addProductToCart = async (productId) =>{
    try{
            const updateObj = {id : productId}
         await axios.post('/user/cart',updateObj)
        
    }catch(err){
        console.log(err)
    }
}

// const showOrderItem = async ()=>{
//     try{
//         // console.log(id)
//        const res = await axios.get('/user/cartpage')

//        setShowOrder(res.data.showOrder)
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