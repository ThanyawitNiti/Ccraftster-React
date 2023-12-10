import HeaderShowItem from "./HeaderShowItem";
import DetailItem from "./DetailItem";
import { useAdminContext } from "../hooks/admin-context-hook";

export default function EachItem() {
  const { allItem } = useAdminContext();
  return (
    <>
      <table className="table-auto w-3/4 flex-col border-separate border-spacing-3  border-slate-400">
        <HeaderShowItem />
          {allItem.map((el) => (
            <DetailItem key={el.id} itemObj={el} />
          ))}
      </table>
    </>
  );
}
