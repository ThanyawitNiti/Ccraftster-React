import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


export default function LayoutAdmin() {
  
    return (
        <>
          <Header/>
          <Outlet />
          <Footer/>
        </>
      );

}
