import { useEffect } from "react";
import axios from "../config/axios";
import AddItem from "./AddItem";
import { useState } from "react";
import ListItem from "./ListItem";

export default function InventoryAdmin() {
  
  return (
    <>
      <div>
        <div className="flex  justify-center pt-3 pb-3">
          <AddItem  />
        </div>
        <ListItem  />
      </div>
    </>
  );
}
