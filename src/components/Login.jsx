import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";
import { BsGoogle } from "react-icons/bs";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { login, loginGoogle, reset } = UseAuth();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleGoogle = async () => {
    try {
      await loginGoogle();
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    if (!user.email)
      return setError("Ingresa un correo para cambiar la contraseña");
    try {
      await reset(user.email);
      setError("Se ha enviado un correo, checa tu bandeja");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container-fluid border d-flex flex-column justify-content-center vh-100  align-items-center">
      {error && (
        <p className="alert alert-danger col-sm-12 col-md-6 col-lg-3 col-xl-3">
          {error}
        </p>
      )}
      <div className="row col-sm-12 col-md-6 col-lg-4 col-xl-4 border border-3 p-4 rounded-3 mt-3">
        <h3 className="mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="correo@correo.com"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="form-control mt-3"
            placeholder="******"
            onChange={handleChange}
          />
          <div className="d-flex justify-content-evenly align-items-center">
            <button className="btn btn-success mt-3">Iniciar sesión</button>
            <a
              href="#"
              className="d-inline ms-4 text-decoration-none mt-3"
              onClick={handleReset}
            >
              Recuperar contraseña
            </a>
          </div>
        </form>
      </div>
      <div className=" row col-sm-12 col-md-6 col-lg-3 col-xl-3">
        <p className="mt-2 fw-bold">
          ¿No tienes una cuenta?{" "}
          <Link className="ms-5 text-decoration-none" to="/register">
            Registrate
          </Link>
        </p>
      </div>
      <div className=" row col-sm-12 col-md-6 col-lg-3 col-xl-3">
        <button className="btn btn-warning mt-2" onClick={handleGoogle}>
          {" "}
          Inicia sesión con Google <BsGoogle className="ms-2" />
        </button>
      </div>
    </div>
  );
};
