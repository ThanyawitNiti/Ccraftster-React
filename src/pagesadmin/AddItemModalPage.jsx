import { useState, useRef } from "react";
import axios from "../config/axios";
import Loading from "../component/Loading";
export default function AddItemModalPage({ onSubmit, onSuccess }) {
  const [listItem, setListItem] = useState({
    product_name: "",
    price: "",
    category: "",
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  //   const fileEl = useRef(null);

  const handleChangeInput = (e) => {
    setListItem({ ...listItem, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      console.log(formData);
      formData.append("img_url", file);
      formData.append("product_name", listItem.product_name);
      formData.append("price", listItem.price);
      formData.append("category", listItem.category);
      setLoading(true);
      await onSubmit(formData);
      onSuccess();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
    {loading && <Loading/>}
      <form
        className="flex flex-col gap-5 items-center"
        onSubmit={handleSubmitForm}
      >
        <div className="flex gap-5 flex-col">
          <span> Product Name</span>
          <input
            type="text"
            value={listItem.product_name}
            onChange={handleChangeInput}
            name="product_name"
            className="border border-gray-500 rounded-sm"
          />
        </div>

        <div className="flex gap-5 flex-col">
          <span> Price</span>
          <input
            type="text"
            value={listItem.price}
            onChange={handleChangeInput}
            name="price"
            className="border border-gray-500 rounded-sm"
          />
        </div>

        <div className="flex gap-5 flex-col">
          <span> Category</span>
          <input
            type="text"
            value={listItem.category}
            onChange={handleChangeInput}
            name="category"
            className="border border-gray-500 rounded-sm"
          />
        </div>

        <div className="flex gap-3 flex-col">
          <span> Product Image</span>
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>

        <button className=" border-2 border-green-200 w-20 bg-cGreen">
          {" "}
          Save{" "}
        </button>
      </form>
    </>
  );
}
