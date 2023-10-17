import { useState } from "react";
import Modal from "../component/Modal";
import { useAdminContext } from "../hooks/admin-context-hook";

export default function EditButton({onSuccess}) {
  
    const {editProduct ,allItem} =useAdminContext()
    const handleClickEdit = () =>{
        editProduct(allItem)
        onSuccess()
      }
    
  return (
    // <Modal title="Edit Product" open={isOpen} onClose={() => setIsOpen(false)}>
    //   <button className="mx-3" onClick={handleClickEdit}>asdsad</button>
      <form  className="flex flex-col gap-5 items-center"
      onSubmit={handleClickEdit}>

      </form>
    // </Modal>
  );
}
