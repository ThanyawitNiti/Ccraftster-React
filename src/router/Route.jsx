import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import Layout from "../layout/Layout.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import CartPage from "../pages/CartPage.jsx";
import Authenticated from "../features/auth/Authenticated.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import AdminOne from "../pagesadmin/AdminOne.jsx";
import AdminAuthenticated from "../features/auth/AdminAuthenticated.jsx";
import LayoutAdmin from "../layout/LayoutAdmin.jsx";
import UserOne from "../pageuser/UserOne.jsx";
import UserAuthenticated from "../features/auth/UserAuthenticated.jsx";
const router = createBrowserRouter([
  {
    path: "/admin",
    element: (
      //   <Authenticated>
      <AdminAuthenticated>
        <LayoutAdmin />
      </AdminAuthenticated>
      //   </Authenticated>
    ),
    children: [
      //   { path: "/admin", element: <HomePage /> },
      //   { path: "/productpage", element: <ProductPage /> },
      { path: "/admin", element: <AdminOne /> },
      // {path:"/productpage",element:<ProductPage/>},
      //   {path:"/admin/login",element:<LoginPage/>},
      // {path:"/profilepage",element:<LoginPage/>},
      // {path:"/cartpage",element:<CartPage/>},
    ],
  },
  {
    path: "/",
    element: (
      //   <AdminAuthenticated>
      <Authenticated>
        <Layout />
      </Authenticated>
      //  </AdminAuthenticated>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/productpage", element: <ProductPage /> },
      { path: "/profilepage", element: <ProfilePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/cartpage", element: <CartPage /> },
      // {path:"/register",element:<RegisterPage/>}
      // {path:"/login",element:<LogoutPage/>},
    ],
  },
  {
    path: "/user",
    element: (
      <UserAuthenticated>
        <Layout />
      </UserAuthenticated>
    ),
    children: [{ path: "/user", element: <UserOne /> }],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
