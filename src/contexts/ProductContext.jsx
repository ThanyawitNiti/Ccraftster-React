import axios from "axios";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ProductContext = createContext()

export default function ProductContextProvider({children}){


const addProductToCart = async (productId) =>{
    try{
            const updateObj = {id : productId}
         await axios.post('/user/cart',updateObj)
        
    }catch(err){
        console.log(err)
    }
}


return (
    <>
    <ProductContext.Provider value={{addProductToCart}}>
        {children}
    </ProductContext.Provider>
    </>
)
}