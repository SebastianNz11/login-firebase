import { UseAuth } from "../context/AuthContext";

export const Home = () => {
  const { user, logOut } = UseAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <div>Bienvenido {user.displayName || user.email}</div>
      <button className="btn btn-warning" onClick={handleLogout}>
        Salir
      </button>
    </div>
  );
};
