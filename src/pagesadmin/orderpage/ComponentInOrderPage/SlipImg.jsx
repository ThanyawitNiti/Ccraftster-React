import { useState } from "react";

import Modal from '../../../component/Modal'
import ShowSlip from "./ShowSlip";
export default function SlipImg({approveOrder}) {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <>
    <button onClick ={()=> setIsOpen(true)}>
      <span className="font-bold">Slip Pyament</span>
    </button>
    
    <Modal
    open={isOpen}
    title="Add Product"
    onClose={()=> setIsOpen(false)}
    maxWidth={30}>
        <ShowSlip 
        approveOrder={approveOrder}
        onSuccess={()=> setIsOpen(false)}

        />
    </Modal>


    </> )
    
   
  

}
