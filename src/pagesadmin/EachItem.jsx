import HeaderShowItem from "./HeaderShowItem";
import DetailItem from "./DetailItem";
export default function EachItem({ allItem,deleteProduct }) {
  return (
    <>

        <table className="table-auto w-full mb-2 pb-2">
          <HeaderShowItem />
          {allItem.map((el) => (
            <DetailItem key={el.id} itemObj={el} deleteProduct={deleteProduct}/>
          ))}
        </table>
       
     
    </>
  );
}
