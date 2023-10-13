import { Link } from "react-router-dom";
import HeaderButton from "./HeaderButton";
import { useAuth } from "../hooks/use-auth";

export default function Header() {
  const { checkUser } = useAuth();

  return (
    <>
      {/* <div className="flex bg-blue-400 px-4">

    <div className="border border-red-400">Logo</div>
    <div className="border border-red-400">Home Page</div>
    <div className="border border-red-400">Product</div>
    <div className="border border-red-400">Profile</div>
    <div className="border border-red-400">Cart</div>
    <div className="border border-red-400">Login</div>
    <div className="border border-red-400">Logout</div>
    
    </div> */}

      <div>
        <nav className="bg-green-200 rounded-sm border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-full">
            <Link to="/" className="flex items-center">
              <img
                src="\src\assets\Pics\Logo\384448025_1556009625137896_6630885721855312340_n.jpg"
                className="mr-3 sm:h-12 rounded-full"
                alt="CCRAFTSTER Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap hover:text-red-400">
                CCRAFTSTER
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <Link
                to="/login"
                className=" dark:text-white hover:bg-green-400 focus:ring-2 focus:ring-violet-300 focus:border-violet-300 focus:bg-yellow-100 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700  dark:focus:ring-gray-800"
              >
                Log in
              </Link>

              <Link
                to="/"
                className=" dark:text-white hover:bg-red-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log out
              </Link>
            </div>
            <div className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white focus:ring-2 focus:ring-violet-300 focus:border-violet-300 focus:bg-yellow-100 hover:text-red-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/productpage"
                    className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white focus:ring-2 focus:ring-violet-300 focus:border-violet-300 focus:bg-yellow-100  hover:text-red-400"
                  >
                    Product
                  </Link>
                </li>
                
                  <li>
                    <Link
                      to="/cartpage"
                      className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white focus:ring-1 focus:bg-yellow-100  hover:text-red-400"
                    >
                      Cart
                    </Link>
                  </li>
                  <li>
                  <Link
                    to="/profilepage"
                    className={` ${
                      checkUser ? "" : "hidden"
                    }  block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white focus:ring-2 focus:ring-violet-300 focus:border-violet-300 focus:bg-yellow-100  hover:text-red-400`}
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
