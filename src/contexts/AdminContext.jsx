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

  const editProduct = async (productId,data) =>{
    try{
      const res = await axios.patch(`/admin/${productId}`,data)
      const editProduct = res.data.doneEditProductByAdmin
      console.log(res)

      const indexEditProduct =allItem.findIndex((el)=>el.id == editProduct.id)
      allItem.splice(indexEditProduct,1,editProduct)

      setAllItem([...allItem])

    } catch(err){
      console.log(err)
    }
  }

  const approve = () =>{
    axios
        .get("/admin/status")
        .then((res) => {
          console.log(res)
          const ress =res.data.statusPayment;
          return ress
        })
        .catch((err) => {
          console.log(err);
        });
  }

  useEffect(() => {
    axios
      .get("/productpage")
      .then((res) => {
        setAllItem(res.data.showProductsFromSharingRoute);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <>
    <AdminContext.Provider value={{allItem,deleteProduct,uploadProduct,setAllItem,editProduct,setIsOpen,isOpen,approve}}>
        {children}
    </AdminContext.Provider>      
    
    </> 
  );
}
