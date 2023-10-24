import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-row  justify-center gap-5">
        <div className="border-2 border-red-300 mt-4 rounded-lg">
          <img
            src="src\assets\LINE_ALBUM_220312_12.jpg"
            className="w-60 h-60 rounded-lg"
          />
        </div>
        <div className="border-2 border-red-300 w-60 h-60 mt-4 rounded-lg">
          <img
            src="src\assets\LINE_ALBUM_220312_51.jpg"
            className="w-60 h-60 rounded-lg"
          />
        </div>
        <div className="border-2 border-red-300 w-60 h-60 mt-4 rounded-lg">
          <img
            src="src\assets\Purified Plants5.jpg"
            className="w-60 h-60 rounded-lg"
          />
        </div>
      </div>
      <div className=" flex justify-center mt-7">
        <Link to='/productpage'>
        <div className="border-2 border-red-300 rounded-lg font-semibold bg-cdGreen py-2 px-2">
          View All Products
        </div>
        </Link>
      </div>
    </>
  );
}
