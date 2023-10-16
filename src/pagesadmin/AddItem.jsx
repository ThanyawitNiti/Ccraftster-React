
import { useState } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";
import AddItemButton from "./AddItemButton";
import Modal from '../component/Modal'
import AddItemModalPage from "./AddItemModalPage";

export default function AddItem({uploadProduct}) {
    const [isOpen,setIsOpen] = useState(false)
   
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
        onSubmit={uploadProduct}
        />
    </Modal>
    </>
  );
}
