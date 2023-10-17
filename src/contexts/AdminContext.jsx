import { useEffect } from "react";
import { useState } from "react";
import axios from "../config/axios";

import { createContext } from "react";


export const AdminContext = createContext()

export default function AdminContextProvider({children}) {
  const [allItem, setAllItem] = useState([]);

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

  const editProduct = async (data) =>{
    const res = await axios.patch('/:productId',data)
    const editProduct = res.data.doneEditProductByAdmin
    setAllItem([editProduct,...allItem])
  }


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
    <AdminContext.Provider value={{allItem,deleteProduct,uploadProduct,setAllItem,editProduct}}>
        {children}
    </AdminContext.Provider>      
    
    </> 
  );
}
