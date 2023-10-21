import axios from "axios";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ProductContext = createContext()

export default function ProductContextProvider({children}){
const [noti,setNoti] = useState('')
const [isRefresh,setIsRefresh] = useState(false)

const handleClickNoti = ()=>{
    setNoti('text-lg')
    setNoti('')
}

const addProductToCart = async (productId) =>{
    try{
            const updateObj = {id : productId}
         await axios.post('/user/cart',updateObj)
         setIsRefresh(!isRefresh)
    }catch(err){
        console.log(err)
    }
}

const decreaseProductInCart = async (productId) =>{
    try{
        await axios.delete(`/user/cart/${productId}`)
        setIsRefresh(!isRefresh)

    }catch(err){
        console.log(err)
    }
}



return (
    <>
    <ProductContext.Provider value={{decreaseProductInCart,addProductToCart,isRefresh,noti,setNoti,handleClickNoti
}}>
        {children}
    </ProductContext.Provider>
    </>
)
}