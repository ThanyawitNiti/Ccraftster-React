import { useState } from "react";
import { useAdminContext } from "../hooks/admin-context-hook";

export default function FormInsideModal({ onSuccess, itemObj }) {
  // console.log(itemObj.id)
  const { editProduct } = useAdminContext();
  const [newProductState, setNewProductState] = useState({
    product_name:itemObj.product_name,
    price:itemObj.price,
    category:itemObj.category,
  });

  const handleChangeInput = (e) => {
    setNewProductState({ ...newProductState, [e.target.name]: e.target.value });
  };


  const handleSubmitEdit = async (e) => {
    try {
      e.preventDefault();
      
      await editProduct(itemObj.id, newProductState);

      onSuccess();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="flex flex-col gap-5 items-center"
      onSubmit={handleSubmitEdit}
    >
      <div className="flex gap-5 flex-col">
        <span>Product Name</span>
        <input
          type="text"
          value={newProductState.product_name}
          onChange={handleChangeInput}
          name="product_name"
          className="border border-gray-500 rounded-sm"
        />
      </div>
      <div className="flex gap-5 flex-col">
        <span> Price</span>
        <input
          type="text"
          value={newProductState.price}
          onChange={handleChangeInput}
          name="price"
          className="border border-gray-500 rounded-sm"
        />
      </div>
      <div className="flex gap-5 flex-col">
        <span> Category</span>
        <input
          type="text"
          value={newProductState.category}
          onChange={handleChangeInput}
          name="category"
          className="border border-gray-500 rounded-sm"
        />
      </div>
      <button className=" border-2 border-green-200 w-20 bg-cGreen">
        {" "}
        Save{" "}
      </button>
    </form>
  );
}
