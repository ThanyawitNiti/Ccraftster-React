import EachItem from "./EachItem";
export default function ListItem({allItem,deleteProduct}) {
  return (
    <>
      <div className="relative overflow-x-auto">
        <EachItem allItem={allItem} deleteProduct={deleteProduct}/>
      </div>
    </>
  );
}
