import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export default function CartPage() {
  const { checkUser } = useAuth();
  if (!checkUser) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="broder border-2 border-red-400">
      <div className="flex justify-between pb-2 pt-4 px-20">
        <div>Photos</div>
        <div>Name</div>
        <div>Price</div>
      </div>
    </div>
  );
}
