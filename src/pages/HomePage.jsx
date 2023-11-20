import { Link } from "react-router-dom";
import Event from "./event/Event";

export default function HomePage() {
  return (
    <>
      <div>
        <div className=" border-1  bg-heroPattern bg-bottom ">
          <div className=" w-full flex justify-center items-center h-80  "></div>
        </div>
        <div className=" flex justify-center mt-7">
          <div className="border-2 border-red-200 rounded-lg font-semibold bg-yellow-50 py-2 px-2">
            Upcoming Events
          </div>
        </div>
        <div className="flex flex-row  justify-center gap-5">
          <Event src="\src\assets\01bf9f00174d11ee911101117567899b_0.png" />
          <Event src="\src\assets\F5uVSvzbwAEYKIQ_0.png" />
          <Event src="src\assets\F7HGuE9agAATo41_0.jpg" />
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
