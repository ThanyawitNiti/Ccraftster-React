import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import Layout from "../layout/Layout.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import CartPage from "../pages/CartPage.jsx";

import Authenticated from "../features/auth/Authenticated.jsx";


import AdminAuthenticated from "../features/auth/AdminAuthenticated.jsx";
import LayoutAdmin from "../layout/LayoutAdmin.jsx";


import InventoryAdmin from "../pagesadmin/InventoryAdmin.jsx";
import OrderContextProvider from "../contexts/OrderContext.jsx";
import CheckOrder from '../pagesadmin/orderpage/CheckOrder.jsx'
const router = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <AdminAuthenticated>
        <LayoutAdmin />
       </AdminAuthenticated>
    ),
    children: [
      { path: "/admin", element: <HomePage /> },
      { path: "/admin/productpage", element: <ProductPage/> },
      { path: "/admin/inventory/", element: <InventoryAdmin /> },
      { path : "/admin/checkorder",element:<CheckOrder/> }
    ],
  },
  {
    path: "/",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
  
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/productpage", element: <ProductPage/> },
      { path: "/profilepage", element:
      <OrderContextProvider>
        <ProfilePage/>
      </OrderContextProvider>

     },
      { path: "/login", element: <LoginPage /> },

      { path: "/cartpage", element: 
      <OrderContextProvider>
        <CartPage />
      </OrderContextProvider>
     },
     
    ],
  },
 
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
