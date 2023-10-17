import { Outlet } from "react-router-dom";
import HeaderAdmin from "../pagesadmin/HeaderAdmin";
import Footer from "./Footer";
import AdminContextProvider from "../contexts/AdminContext";


export default function LayoutAdmin() {
  
    return (
        <>
        <AdminContextProvider>
          <HeaderAdmin/>
          <Outlet />
          <Footer/>
        </AdminContextProvider>
        </>
      );

}
