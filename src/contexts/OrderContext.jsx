
import { useState,useEffect } from "react";
import { createContext } from "react";
import axios from '../config/axios'
import { useProductContext } from "../hooks/product-context-hook";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
const [order,setOrder] = useState([])

const {isRefresh,setIsRefresh} = useProductContext()

useEffect(() => {
  axios
    .get("/user/cartpage")
    .then((res) => {
      setOrder(res.data.showItemToUser);
    })
    .catch((err) => {
      console.log(err);
    });
}, [isRefresh]);


const sendCartToOrder = async (data) =>{
   try{
    console.log(data)
    const req = await axios.post('/order',data)
    console.log(req)
    
    setIsRefresh(!isRefresh)
  }catch(err){
    console.log(err.response.data)
  }
}

const uploadSlip = async (data) => {
  try{
    await axios.post("/order/slip", data);

  }catch(err){
    console.log(err)
  }
  
};


  return (
    <>
      <OrderContext.Provider value={{order,sendCartToOrder,uploadSlip}}>
        {children}
      </OrderContext.Provider>
    </>
  );
}
