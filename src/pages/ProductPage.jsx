import axios from "../config/axios";
import { useState, useEffect } from "react";
import Card from "./card/Card";
export default function ProductPage() {
  const [showProduct, setShowProduct] = useState([]);
  useEffect(() => {
    axios
      .get("/productpage")
      .then((res) => {
        setShowProduct(res.data.showProductsFromSharingRoute);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-center gap-5 flex-wrap">
          {showProduct.map((el) => (
            <Card key={el.id} productObj={el} />
          ))}
        </div>
      </div>
    </>
  );
}
