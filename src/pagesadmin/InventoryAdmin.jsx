import { useEffect } from "react";
import axios from "../config/axios";
import AddItem from "./AddItem";
import { useState } from "react";
import ListItem from "./ListItem";

export default function InventoryAdmin() {
  const [allItem, setAllItem] = useState([]);

  const uploadProduct = async (data) => {
    const res = await axios.post("/admin", data);
    const newItem = res.data.addItem;
    setAllItem([newItem, ...allItem]);
  };
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`/admin/${productId}`);
      setAllItem(allItem.filter((el) => el.id !== productId));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    axios
      .get("/admin/item")
      .then((res) => {
        setAllItem(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(
    "🚀 ~ file: InventoryAdmin.jsx:28 ~ InventoryAdmin ~ allItem:",
    allItem
  );
  return (
    <>
      <div>
        <div className="flex  justify-center pt-3 pb-3">
          <AddItem uploadProduct={uploadProduct} />
        </div>
        <ListItem allItem={allItem} deleteProduct={deleteProduct} />
      </div>
    </>
  );
}
