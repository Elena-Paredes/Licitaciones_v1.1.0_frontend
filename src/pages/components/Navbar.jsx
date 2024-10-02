// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faHouse, faCartShopping, faBell, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import Sidebar from "./Sidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../pages/styles/navbar.css";

const Navbar = ({ user }) => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const calendarRef = useRef(null);
  const navigate = useNavigate(); // Hook para navegación

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calendarRef]);

  useEffect(() => {
    console.log("Usuario recibido en Navbar:", user);
  }, [user]);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  // Función para navegar a la ruta principal
  const goToPrincipal = () => navigate('/principal');

  // Función para cerrar la sesión
  const handleLogout = () => {
    // Aquí colocas el código para cerrar la sesión, por ejemplo, remover el token o limpiar el estado
    // localStorage.removeItem('token');
    console.log("Cerrando sesión");
    // Redirige al usuario a la página de inicio de sesión
    navigate("/signin");
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top navbar-background">
      <div className="background-overlay"></div>
      <div className={`container-fluid d-flex align-items-center ${isOffcanvasOpen ? "navbar-reduced" : ""}`}>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleOffcanvas}
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation">
          <FontAwesomeIcon
            icon={faBarsStaggered}
            style={{ color: "#888127" }} />
        </button>
        <div className="navbar-icons ms-auto">
          {/* Home Icon */}
          <button
            className="btn btn-link d-flex align-items-center"
            onClick={goToPrincipal}>
            <FontAwesomeIcon icon={faHouse} />
          </button>

          <div className="btn-group">
            <button
              className="btn btn-link d-flex align-items-center"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <FontAwesomeIcon icon={faBell} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Opción 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Opción 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Opción 3
                </a>
              </li>
            </ul>
          </div>

          {/* Calendar Dropdown */}
          <div className="btn-group position-relative">
            <button
              className="btn btn-link d-flex align-items-center"
              onClick={toggleCalendar}
              aria-expanded={isCalendarOpen}>
              <FontAwesomeIcon icon={faCalendarDays} />
            </button>
            {isCalendarOpen && (
              <div ref={calendarRef} className="dropdown-menu calendar-dropdown show">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  inline
                />
              </div>
            )}
          </div>

          {/* Imagen de perfil */}
          <div className="btn-group">
            <button
              className="btn btn-link dropdown-toggle d-flex align-items-center"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <img
                src="/Clientes.png"
                className="rounded-circle"
                height="40"
                width="40"
                alt="User Avatar"
                loading="lazy" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Mi perfil
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Ajustes
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={handleLogout}>
                  Salir
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SIDEBAR */}
        <Sidebar
          isOffcanvasOpen={isOffcanvasOpen}
          toggleOffcanvas={toggleOffcanvas}
          user={user}
        />
      </div>
    </nav>
  );
};
export default Navbar;