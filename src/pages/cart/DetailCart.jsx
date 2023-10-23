import { useState,useEffect } from "react";
import { useProductContext } from "../../hooks/product-context-hook";
import ButtonDecrese from "./ButtonDecrese";
import ButtonIncrease from "./ButtonIncrease";
import axios from "../../config/axios";

export default function DetailCart({
  amount,
  name,
  price,
  photo,
  objIdInArray,
  showOrder,
  setShowOrder,
}) {
  const [productAmount, setProductAmount] = useState(amount);

  useEffect(() => {
    axios
      .get("/user/cartpage")
      .then((res) => {
        setShowOrder(res.data.showItemToUser); 
      })
      .catch((err) => {
        console.log(err);
      });
  },[] );

 
  console.log(showOrder);
const {deleteProductInCart} =useProductContext()
  const handleDeleteClick = async () => {
    deleteProductInCart(objIdInArray);
  };

  // if(productAmount <1){
  //   console.log('first')
  //   // setProductAmount(0)
  //   // if(productAmount == 0){
      
  //   // }

  // }

  return (
    <>
      <tbody>
        <tr className="items-center border-2 border-gray-200">
          <th className="w-20 h-20">
            <img src={photo} />
          </th>
          <td className="text-center">{name}</td>
          <td className="text-center">{price}</td>
          <td className="text-center  border-2 border-cdGreen  ">
            <div className="flex justify-center gap-5">
              <div>
                <ButtonDecrese
                  objIdInArray={objIdInArray}
                  setProductAmount={setProductAmount}
                  productAmount={productAmount}
                />
              </div>
              {productAmount}
              <div>
                <ButtonIncrease
                  objIdInArray={objIdInArray}
                  setProductAmount={setProductAmount}
                  productAmount={productAmount}
                />
              </div>
            </div>
          </td>
        </tr>
        <div className="w-40"></div>
        <div className="flex gap-4">
          <div className="flex flex-col border-2 border-cGreen w-20 h-10 justify-center">
            <button onClick={handleDeleteClick}>Delete</button>
          </div>
        </div>
      </tbody>
    </>
  );
}
