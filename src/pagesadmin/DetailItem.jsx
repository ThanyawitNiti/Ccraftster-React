import React from "react";

export default function DetailItem({ itemObj }) {
  return (
    <>
      <tbody>
        <tr>
          <td className="text-center">{itemObj.product_name}</td>
          <td className="text-center">{itemObj.price}</td>
          <td className="text-center">{itemObj.category}</td>
          <td className="flex justify-center"><img className="w-14 h-14" src={itemObj.img_url}/></td>
        </tr>
        
      </tbody>
    </>
  );
}
