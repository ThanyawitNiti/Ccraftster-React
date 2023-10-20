import { useAdminContext } from "../hooks/admin-context-hook";
import { useProductContext } from "../hooks/product-context-hook";
import axios from "../config/axios";
import { useState,useEffect } from "react";
import Card from "./card/Card";
export default function ProductPage() {
  // const { showProduct } = useProductContext();

  const [showProduct,setShowProduct] = useState([])
useEffect(()=>{
  axios
  .get('/productpage')
  .then((res)=>{
      setShowProduct(res.data.showProductsFromSharingRoute)
  })
  .catch((err)=>{
      console.log(err)
  })
 
},[])

  return (
    <div className="flex justify-center gap-5 flex-wrap">
      {showProduct.map((el) => (
        <Card key={el.id} productObj={el} />
      ))}
    </div>
  );
  // const { allItem } = useAdminContext();
  // return (
  //   <div className="flex justify-center gap-5 flex-wrap">
  //     {allItem.map((el) => (
  //       <Card key={el.id} productObj={el} />
  //     ))}
  //   </div>
  // );
}


