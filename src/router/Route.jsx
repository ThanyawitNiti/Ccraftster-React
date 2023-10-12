import {RouterProvider,createBrowserRouter} from "react-router-dom"
import HomePage from '../pages/HomePage.jsx'
import LoginPage from "../pages/LoginPage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import Layout from "../layout/Layout.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import CartPage from "../pages/CartPage.jsx";
import Authenticated from "../features/auth/Authenticated.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";

const router = createBrowserRouter([
    // {
    //     path:'/login',
    //     element:(
    //         // <RedirectIfAuthenticated>
    //         <LoginPage />
    //     //   </RedirectIfAuthenticated>
    //     )
    // },
    {
        path:'/',
        element:(
            // <Authenticated>
            <Layout />
            // </Authenticated>
        ),
        children:[
            {path:"",element:<HomePage />},
            {path:"/login",element:<LoginPage/>},
            {path:"/productpage",element:<ProductPage/>},
            {path:"/profilepage",element:<ProfilePage/>},
            {path:"/cartpage",element:<CartPage/>},
            {path:"/register",element:<RegisterPage/>}
            // {path:"/login",element:<LogoutPage/>},
        ]
    }
])

export default function Route() {
 
    return <RouterProvider router={router} />;
  }