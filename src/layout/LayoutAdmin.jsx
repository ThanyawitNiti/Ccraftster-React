import { Outlet } from "react-router-dom";
import HeaderAdmin from "../pagesadmin/HeaderAdmin";
import Footer from "./Footer";
import AdminContextProvider from "../contexts/AdminContext";
import ProductContextProvider from "../contexts/ProductContext";


export default function LayoutAdmin() {
  
    return (
        <>
        <AdminContextProvider>
        <ProductContextProvider>

          <HeaderAdmin/>
          <Outlet />
          <Footer/>
        </ProductContextProvider>
        </AdminContextProvider>
        </>
      );

}
