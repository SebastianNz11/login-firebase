import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";
import { BsGoogle } from "react-icons/bs";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signUp, loginGoogle } = UseAuth();

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
      await signUp(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container-fluid border d-flex flex-column justify-content-center vh-100  align-items-center p-4">
      {error && (
        <p className="alert alert-danger col-sm-12 col-md-6 col-lg-3 col-xl-3">
          {error}
        </p>
      )}
      <div className="row col-sm-12 col-md-6 col-lg-3 col-xl-3 border border-3 p-3 rounded-3 mt-3">
        <h3 className="mb-4">Registro</h3>
        <form className="" onSubmit={handleSubmit}>
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
          <button className="btn btn-success mt-3">Registarme</button>
        </form>
      </div>
      <div className=" row col-sm-12 col-md-6 col-lg-3 col-xl-3">
        <p className="mt-3 fw-bold">
          ¿Ya tienes una cuenta?{" "}
          <Link className="ms-4 text-decoration-none" to="/login">
            Inicia sesión
          </Link>
        </p>
      </div>
      <div className=" row col-sm-12 col-md-6 col-lg-3 col-xl-3">
        <button className="btn btn-primary mt-2" onClick={handleGoogle}>
          {" "}
          Registrate con Google <BsGoogle className="ms-2" />
        </button>
      </div>
    </div>
  );
};
