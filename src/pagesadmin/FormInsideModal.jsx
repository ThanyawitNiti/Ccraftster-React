import { useState } from "react";
import { useAdminContext } from "../hooks/admin-context-hook";

export default function FormInsideModal({ onSuccess, itemObj }) {
  // console.log(itemObj.id)
  const [newProductState, setNewProductState] = useState({
    product_name: "",
    price: "",
    category: "",
  });
  // console.log(newProductState)
  // useParams

  // const [file setFile] =useState(null)

  const handleChangeInput = (e) => {
    setNewProductState({ ...newProductState, [e.target.name]: e.target.value });
  };

  const { editProduct } = useAdminContext();

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
