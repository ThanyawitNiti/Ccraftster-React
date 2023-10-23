
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
    await axios.post('/order',data)
    setIsRefresh(!isRefresh)
  }catch(err){
    console.log(err)
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
      <OrderContext.Provider value={{order,sendCartToOrder}}>
        {children}
      </OrderContext.Provider>
    </>
  );
}
