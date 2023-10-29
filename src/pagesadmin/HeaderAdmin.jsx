import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export default function Header() {
  const { checkUser, logout } = useAuth();
  return (
    <>
      <div>
        <nav className="bg-cGreen rounded-sm border-gray-200 px-4 lg:px-6 py-2.5">
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
              {checkUser ? (
                <Link
                  to="/"
                  className=" dark:text-white hover:bg-cdGreen focus:ring-2 focus:ring-violet-300 focus:border-violet-300 focus:bg-yellow-100 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700  dark:focus:ring-gray-800"
                >
                  Welcome {checkUser.first_name}
                </Link>
              ) : (
                <Link
                  to="/login"
                  className=" dark:text-white hover:bg-cdGreen focus:ring-2 focus:ring-violet-300 focus:border-violet-300 focus:bg-yellow-100 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700  dark:focus:ring-gray-800"
                >
                  Log in
                </Link>
              )}

              {checkUser ? (
                <Link
                  to="/"
                  className=" dark:text-white hover:bg-red-400  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none"
                  onClick={logout}
                >
                  Log out
                </Link>
              ) : (
                <div></div>
              )}
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
                    to="/admin/productpage"
                    className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white focus:ring-2 focus:ring-violet-300 focus:border-violet-300 focus:bg-yellow-100  hover:text-red-400"
                  >
                    Product
                  </Link>
                </li>

                <li>
                  <Link
                    to="/admin/inventory"
                    className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white focus:ring-1 focus:bg-yellow-100  hover:text-red-400"
                  >
                    Inventory Management
                  </Link>
                </li>

                <li>
                  <Link
                    to="/admin/checkorder"
                    className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white focus:ring-1 focus:bg-yellow-100  hover:text-red-400"
                  >
                    Order
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
