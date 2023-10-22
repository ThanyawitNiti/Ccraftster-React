import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";


export function useOrderContext(){
    return useContext(OrderContext)
}