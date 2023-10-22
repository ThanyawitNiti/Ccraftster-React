import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ProductContextProvider from "../contexts/ProductContext";
import AdminContextProvider from "../contexts/AdminContext";
import OrderContextProvider from "../contexts/OrderContext";

export default function Layout() {
  return (
    <>
      <ProductContextProvider>
        <OrderContextProvider>
          <Header />
          <Outlet />
          <Footer />
        </OrderContextProvider>
      </ProductContextProvider>
    </>
  );
}
