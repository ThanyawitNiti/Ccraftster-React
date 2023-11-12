import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ProductContextProvider from "../contexts/ProductContext";

export default function Layout() {
  return (
    <>
      <ProductContextProvider>
          <Header />
          <Outlet />
          <Footer />
      </ProductContextProvider>
    </>
  );
}
