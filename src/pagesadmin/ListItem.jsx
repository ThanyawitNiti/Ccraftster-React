import EachItem from "./EachItem";
export default function ListItem({allItem}) {
  return (
    <>
      <div className="relative overflow-x-auto">
        <EachItem allItem={allItem}/>
      </div>
    </>
  );
}
