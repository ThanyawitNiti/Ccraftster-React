import { Link } from "react-router-dom";
import {IoSearchOutline} from "react-icons/io5"

export default function HomePage() {
  return (
    <>
      <div>
        <div className=" border-2 border-blue-400 w-full ">
          <div className=" w-full flex justify-center items-center h-80 bg-heroPattern"
          > 
             <div className="h-8 w-1/3 items-center flex border-2 rounded-lg" >
              <p className="w-full ml-2">Search</p> 
              <IoSearchOutline className="mr-1"/>
              </div>
            
          </div>

        </div>
        <div className="bg-blue-400">Exibition</div>
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
          <Link to="/productpage">
            <div className="border-2 border-red-300 rounded-lg font-semibold bg-cdGreen py-2 px-2">
              View All Products
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
