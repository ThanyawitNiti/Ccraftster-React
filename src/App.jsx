import { ToastContainer } from "react-toastify";
// import { useAuth } from "./hooks/use-auth";
import Route from "./router/Route";

function App() {
  return (
    <>
      <Route />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
