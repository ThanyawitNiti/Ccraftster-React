
import { useState } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";
import AddItemButton from "./AddItemButton";
import Modal from '../component/Modal'
import AddItemModalPage from "./AddItemModalPage";
import { useAdminContext } from "../hooks/admin-context-hook";



export default function AddItem() {
    const [isOpen,setIsOpen] = useState(false)
    
    // const {setIsOpen,isOpen} =useAdminContext()
   
  return (
    <>
    <AddItemButton onClick ={()=> setIsOpen(true)}>
      <span className="font-bold">ADDITEM</span>
      <MdAddPhotoAlternate className="w-10 h-7" />
    </AddItemButton>
    
    <Modal
    open={isOpen}
    title="Add Product"
    onClose={()=> setIsOpen(false)}
    maxWidth={44}>
        <AddItemModalPage onSuccess={()=> setIsOpen(false)}

        />
    </Modal>
    </>
  );
}
