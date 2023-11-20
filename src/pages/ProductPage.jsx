import axios from "../config/axios";
import { useState, useEffect } from "react";
import Card from "./card/Card";
import { IoSearchOutline } from "react-icons/io5";
export default function ProductPage() {
  const [showProduct, setShowProduct] = useState([]);
  const [search, setSearch] = useState("");
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
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  let filterProduct = [...showProduct];
  if (search) {
    filterProduct = showProduct.filter((el) => {
      if (el.product_name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });
  }
  return (
    <>
      <div>
        <div className=" border-1 w-full ">
          <div className=" w-full flex justify-center items-center h-20 bg-heroPattern">
            <div className=" w-1/3 items-center flex border-2 border-cdGreen bg-white rounded-lg">
              <div className="w-full ml-1">
                <input
                  type="text"
                  placeholder="Search ..."
                  className="h-6 w-full items-center flex rounded-lg  focus:outline-none "
                  onChange={handleInput}
                />
              </div>
              <IoSearchOutline className="mr-1" />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-5 flex-wrap">
          {filterProduct.map((el) => (
            <Card key={el.id} productObj={el} />
          ))}
        </div>
      </div>
    </>
  );
}
