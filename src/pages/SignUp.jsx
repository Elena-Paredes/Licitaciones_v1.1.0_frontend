// src/pages/SignUp.jsx
import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLock } from 'react-icons/fa';
import axios from '../axiosConfig.js';
import './styles/signup_signin.css'; 

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    department: '', // Añadido para el departamento
  });

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Obtener los departamentos al montar el componente
    axios.get('/api/departments')
      .then(response => setDepartments(response.data))
      .catch(error => console.error('Error obteniendo departamentos:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', formData);
      console.log(response.data);
      // Limpiar el formulario después de un registro exitoso
      setFormData({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        department: '',
      });
    } catch (error) {
      console.error('Error registrando usuario:', error);
    }
  };

  return (
    <div className="register-page">
      <div className="login-container">
        <div className="login-box">
          <div className="login-logo">
            <img src="/logo.png" alt="Logo" />
          </div>
          <h2>REGISTRO</h2>
          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <input
                type="text"
                name="firstName"
                placeholder="Nombres"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="login-field">
              <input
                type="text"
                name="lastName"
                placeholder="Apellidos"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="login-field">
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
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="login-field">
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="login-field">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="login-field">
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Seleccione un departamento</option>
                {departments.map(department => (
                  <option key={department.DeptoId} value={department.DeptoId}>
                    {department.deptoName}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;