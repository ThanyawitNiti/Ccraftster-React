import { useAdminContext } from "../hooks/admin-context-hook";

import FormInsideModal from "./FormInsideModal";
import Modal from "../component/Modal";
import { useState } from "react";
export default function DetailItem({ itemObj }) {
  const { deleteProduct } = useAdminContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleClcikDelete = () => {
    deleteProduct(itemObj.id);
  };

  return (
    <>
      <tbody className="border border-gray-300">
        <tr>
          <td className="text-center">{itemObj.product_name}</td>
          <td className="text-center">{itemObj.price}</td>
          <td className="text-center">{itemObj.category}</td>
          <td className="flex justify-center">
            <img className="w-14 h-14" src={itemObj.img_url} />
          </td>
          <td className="border-2 border-gray-300 w-10 mx-3">
            <button className="mx-3" onClick={handleClcikDelete}>
              Delete
            </button>
          </td>
          <td
            className="border-2 border-gray-300 w-10 mx-3"
            onClick={() => setIsOpen(true)}
          >
            Edit
            <Modal
              title="Edit Product"
              open={isOpen}
           
              onClose={() => {
                setIsOpen(()=>{setIsOpen(false)})}}

              
                
            >
              <FormInsideModal
                onSuccess={() => setIsOpen(false)}
                className="bg-red-500"
                itemObj={itemObj}
              />
            </Modal>
          </td>
        </tr>
      </tbody>
    </>
  );
}
