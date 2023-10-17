import HeaderShowItem from "./HeaderShowItem";
import DetailItem from "./DetailItem";
import { useAdminContext } from "../hooks/admin-context-hook";

export default function EachItem() {
  const { allItem } = useAdminContext();
  return (
    <>
      <table className="table-auto w-full mb-2 pb-2">
        <HeaderShowItem />
          {allItem.map((el) => (
        
            <DetailItem key={el.id} itemObj={el} />
          ))}
      </table>
    </>
  );
}
