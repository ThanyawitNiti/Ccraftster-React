import { useEffect } from "react";
import { useState } from "react";
import axios from "../config/axios";

import { createContext } from "react";


export const AdminContext = createContext()

export default function AdminContextProvider({children}) {
  const [allItem, setAllItem] = useState([]);

  const [isOpen,setIsOpen] = useState(false)



  const uploadProduct = async (data) => {
    const res = await axios.post("/admin", data);
    const newItem = res.data.addItem;
    setAllItem([newItem, ...allItem]);
  };
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`/admin/${productId}`);
      setAllItem(allItem.filter((el) => el.id !== productId));
    } catch (err) {
      console.log(err);
    }
  };
console.log("first")

console.log(allItem)

  const editProduct = async (productId,data) =>{
    try{
      const res = await axios.patch(`/admin/${productId}`,data)
      const editProduct = res.data.doneEditProductByAdmin

      const indexEditProduct =allItem.findIndex((el)=>el.id == editProduct.id)
      allItem.splice(indexEditProduct,1,editProduct)
      
      // console.log(`###########${allItem}`)
      setAllItem([...allItem])
      // setAllItem([...allItem,...editProduct])

    } catch(err){
      console.log(err)
    }
  }

console.log(`###########${allItem}`)
  useEffect(() => {
    axios
      .get("/admin/item")
      .then((res) => {
        setAllItem(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <>
    <AdminContext.Provider value={{allItem,deleteProduct,uploadProduct,setAllItem,editProduct,setIsOpen,isOpen}}>
        {children}
    </AdminContext.Provider>      
    
    </> 
  );
}
