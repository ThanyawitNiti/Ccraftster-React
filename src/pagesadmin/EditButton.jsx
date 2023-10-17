import { useState } from "react";
import Modal from "../component/Modal";
import { useAdminContext } from "../hooks/admin-context-hook";

export default function EditButton({onSuccess}) {
    const [newProductState,setNewProductState] = useState(
        {
            product_name: "",
            price: "",
            category: "",
          }
    )
    const handleChangeInput = (e)=>{
        setNewProductState({...newProductState,[e.target.name]:e.target.value})
    }
  
    const {editProduct} =useAdminContext()

    const handleSubmitEdit = async(e) =>{
        try{
            e.preventDefault()
            await editProduct(newProductState)
            // onSuccess()
        }catch(err){
            console.log(err)
        }
      }
    
  return (
   
      <form  className="flex flex-col gap-5 items-center"
      onSubmit={handleSubmitEdit}>
        <div className="flex gap-5 flex-col">
            <span>Product Name</span>
            <input type="text"
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
      </form>
    // </Modal>
  );
}
