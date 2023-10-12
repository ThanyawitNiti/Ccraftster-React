import { useAuth } from "../../hooks/use-auth";

export default function NotAuthenticated({ children }) {
  const { checkUser } = useAuth();
  if (!checkUser) {
    return children;
  }
}
