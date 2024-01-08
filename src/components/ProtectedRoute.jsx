import { UseAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  if (loading) return <h1>Loading</h1>;
  if (!user) return <Navigate to="/login" />;
  return <>{children}</>;
};
