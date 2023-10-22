
import { useState,useEffect } from "react";
import { createContext } from "react";
import axios from '../config/axios'

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
const [order,setOrder] = useState([])

useEffect(() => {
  axios
    .get("/user/cartpage")
    .then((res) => {
      setOrder(res.data.showItemToUser);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);


  return (
    <>
      <OrderContext.Provider value={{order}}>
        {children}
      </OrderContext.Provider>
    </>
  );
}
