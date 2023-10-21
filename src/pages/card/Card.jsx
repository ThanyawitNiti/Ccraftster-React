import { useState,useEffect } from "react";
import { useProductContext } from "../../hooks/product-context-hook";
import axios from "../../config/axios";

export default function Card({ productObj }) {
  
 const {addProductToCart,handleClickNoti} = useProductContext()

 const handleClickBuy = async() =>{
    addProductToCart(productObj.id)
    handleClickNoti()
  
 }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div>
        <img src={`${productObj.img_url}`}  />
      </div>
      <div className="card-body flex gap-6 justify-center">
        <h2 className="card-title">{productObj.product_name}</h2>
        <div>
          <span>{productObj.price} Baht</span>
        </div>
        <div>
          <span>{productObj.category}</span>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary hover:bg-cdGreen rounded-md hover:font-semibold" onClick={handleClickBuy}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
