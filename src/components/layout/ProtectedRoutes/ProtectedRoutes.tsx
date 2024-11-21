import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAppSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoutes;
