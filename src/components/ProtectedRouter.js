import { useUserData } from "../contexts/UserDataContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [userData] = useUserData();

  if (userData) {
    return <>{children}</>;
  }

  return <Navigate to="/" />;
}
