// src/pages/SignIn.jsx
import React, { useState } from "react";
import "./styles/signup_signin.css";
import api from "../axiosConfig.js";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/api/signin", formData)
      .then((response) => {
        console.log("Data submitted:", JSON.stringify(response.data, null, 2));
        setResponse(response.data);
        if (response.data.message === "Inicio de sesión exitoso") {
          navigate("/principal", { state: { user: response.data.user } }); // Pasamos el usuario a través de navigate
        }
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        setResponse({ message: "Error iniciando sesión" });
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <div className="login-logo">
            <img src="/logo.png" alt="Logo" />
          </div>
          <h2>INICIAR SESIÓN</h2>
          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <FaUser className="login-icon" />
              <input
                type="text"
                name="username"
                placeholder="Nombre de Usuario"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="login-field">
              <FaLock className="login-icon" />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Iniciar Sesión</button>
          </form>
          {response && (
            <div className="response">
              <h3>{response.message}</h3>
              {response.user && (
                <pre>{JSON.stringify(response.user, null, 2)}</pre>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
