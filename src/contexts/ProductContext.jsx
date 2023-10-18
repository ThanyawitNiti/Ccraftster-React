import axios from "axios";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ProductContext = createContext()

export default function ProductContextProvider({children}){
const [showProduct,setShowProduct] = useState([])

useEffect(()=>{
    axios
    .get('/user/product')
    .then((res)=>{
        setShowProduct(res.data.showProducts)
    })
    .catch((err)=>{
        console.log(err)
    })
},[])

return (
    <>
    <ProductContext.Provider value={{showProduct}}>
        {children}
    </ProductContext.Provider>
    </>
)
}