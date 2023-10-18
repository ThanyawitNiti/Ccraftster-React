import { useContext } from "react"

import { ProductContext } from "../contexts/ProductContext"


export function useProductContext(){
    return useContext(ProductContext)
}