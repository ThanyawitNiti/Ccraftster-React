export default function Card({ productObj }) {
  console.log(productObj);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div>
        <img src={`${productObj.img_url}`} alt="Shoes" />
      </div>
      <div className="card-body flex gap-6 justify-center">
        <h2 className="card-title">{productObj.product_name}</h2>
        <div>
          <span>{productObj.price}</span>
        </div>
        <div>
          <span>{productObj.category}</span>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
