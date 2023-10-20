
import { useState } from "react";
import { useProductContext } from "../../hooks/product-context-hook";
import ButtonDecrese from "./ButtonDecrese";
import ButtonDecreseAndIncrease from "./ButtonDecrese";
import ButtonIncrease from "./ButtonIncrease";

export default function DetailCart({ amount, name, price, photo,objIdInArray }) {

  
  console.log(amount)
  const [productAmount ,setProductAmount] = useState(amount)
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
              <ButtonDecrese objIdInArray={objIdInArray} setProductAmount={setProductAmount} productAmount={productAmount}/>
            </div>
            {productAmount}
            <div>
              <ButtonIncrease objIdInArray={objIdInArray} setProductAmount={setProductAmount} productAmount={productAmount}/>
            </div>
            </div>
          </td>
        </tr>
        <div className="w-40"></div>
        <div className="flex gap-4">
          <div className="flex flex-col border-2 border-cGreen w-20 h-10 justify-center">
            <button>Delete</button>
          </div>
        </div>
      </tbody>
    </>
  );
}
