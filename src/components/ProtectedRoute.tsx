import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const isAdmin = localStorage.getItem("admin");

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;