import { useEffect } from "react";
import axios from "../config/axios";
import AddItem from "./AddItem";
import { useState } from "react";

export default function InventoryAdmin() {
const [allItem , setAllItem] = useState([])

  const uploadProduct = async (data) =>{
    const res = await axios.post('/admin',data)
    const newItem = res.data.addItem
    setAllItem([newItem,...allItem])

  }

  // useEffect(()=>{
  //   axios
  //   .get("/admin")
  //   .then((res)=>{
  //     setAllItem(res.data.addItem)
  //   })
  // })

  return (
    <>
      <div>
        <div className="flex  justify-center pt-3 pb-3">
          
        <AddItem uploadProduct={uploadProduct}/>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Photo
                </th>

              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  productname
                </th>
                <td className="px-6 py-4">price</td>
                <td className="px-6 py-4">category</td>
                <td className="px-6 py-4">img_url</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
