import { useAdminContext } from "../hooks/admin-context-hook";
import EachItem from "./EachItem";


export default function ListItem() {
  

  return (
    <>
      <div className="relative overflow-x-auto">
        <EachItem  />
      </div>
    </>
  );
}
