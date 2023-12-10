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
      <tbody  >
        <tr >
          <td className="text-center border border-slate-300">{itemObj.product_name}</td>
          <td className="text-center border border-slate-300">{itemObj.price}</td>
          <td className="text-center border border-slate-300">{itemObj.category}</td>
          <td className="flex justify-center border border-slate-300">
            <img className="w-14 h-14" src={itemObj.img_url} />
          </td>
          <td className=" text-center bg-red-500 rounded-lg ">
            <button  className="text-xl text-center" onClick={handleClcikDelete}>
              Delete
            </button>
          </td>
          <td
            className="  text-center bg-gray-200 rounded-lg text-xl"
            onClick={() => setIsOpen(true)}
          >
            Edit
            <Modal
              title="Edit Product"
              open={isOpen}
              onClose={() => {
                setIsOpen(() => {
                  setIsOpen(false);
                });
              }}
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
