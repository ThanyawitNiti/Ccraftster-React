import { useProductContext } from "../hooks/product-context-hook";
import Card from "./card/Card";
export default function ProductPage() {
  const { showProduct } = useProductContext();
  return (
    <div className="flex justify-center gap-5 flex-wrap">
      {showProduct.map((el) => (
        <Card key={el.id} productObj={el} />
      ))}
    </div>
  );
}
