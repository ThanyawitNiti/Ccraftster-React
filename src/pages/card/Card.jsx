
import { useProductContext } from "../../hooks/product-context-hook";

export default function Card({ productObj }) {
  const { addProductToCart } = useProductContext();

  const handleClickBuy = async () => {
    addProductToCart(productObj.id);
    alert("Added");
  };
  return (
    <>
      <div className="border-2 border-gray-300 w-96 h-96 mt-5 flex  flex-col justify-center rounded-2xl hover:shadow-xl">
        <div className="w-full h-full ">
          <img
            src={`${productObj.img_url}`}
            className=" pt-5 rounded-sm object-cover h-full w-full"
          />
        </div>
        <div className="px-4 font-medium flex flex-col">
          <p>Category : {productObj.category}</p>
          <p>Product name : {productObj.product_name}</p>
        </div>
        <div className="flex flex-row justify-between px-4">
          <div className="font-bold">{productObj.price} Baht</div>
          <button className=" bg-cdGreen rounded-md px-3 mb-1 font-semibold border-2  hover:bg-green-500 hover:font-extrabold hover:border-green-900
          transition delay-300 duration-300 ease-in-out" 
          onClick={handleClickBuy}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}
