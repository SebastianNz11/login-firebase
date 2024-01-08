import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { AuthPrivider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const App = () => {
  return (
    <div>
      <AuthPrivider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthPrivider>
    </div>
  );
};
