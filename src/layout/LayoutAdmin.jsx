import { Outlet } from "react-router-dom";
import HeaderAdmin from "../pagesadmin/HeaderAdmin";
import Footer from "./Footer";


export default function LayoutAdmin() {
  
    return (
        <>
          <HeaderAdmin/>
          <Outlet />
          <Footer/>
        </>
      );

}
