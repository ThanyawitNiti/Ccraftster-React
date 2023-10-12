import {RouterProvider,createBrowserRouter} from "react-router-dom"
import HomePage from '../pages/HomePage.jsx'
import LoginPage from "../pages/LoginPage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import Layout from "../layout/Layout.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import CartPage from "../pages/CartPage.jsx";
import Authenticated from "../features/auth/Authenticated.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import NotAuthenticated from "../features/auth/NotAuthenticated.jsx";

const router = createBrowserRouter([
    {
        path:'/admin',
        element:(
            <NotAuthenticated>
               <h1>test</h1>
            </NotAuthenticated>
        
        ),
        // children:[
        //     {path:"",element:<HomePage />},
        //     {path:"/productpage",element:<ProductPage/>},
        //     {path:"/login",element:<LoginPage/>},
        //     {path:"/profilepage",element:<LoginPage/>},
        //     {path:"/cartpage",element:<CartPage/>},
        // ]
    },
    {
        path:'/',
        element:(
            
            <Layout />
    
        ),
        children:[
            {path:"/",element:<HomePage />},
            {path:"/productpage",element:<ProductPage/>},
            {path:"/profilepage",element:<ProfilePage/>},
            {path:"/login",element:<LoginPage/>},
            {path:"/cartpage",element:<CartPage/>},
            // {path:"/register",element:<RegisterPage/>}
            // {path:"/login",element:<LogoutPage/>},
        ]
    }
])

export default function Route() {
 
    return <RouterProvider router={router} />;
  }