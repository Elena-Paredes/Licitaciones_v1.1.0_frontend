// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faHouse,
  faCartShopping,
  faBell,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar"; // Importamos el nuevo componente Sidebar
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../pages/styles/navbar.css";

const Navbar = ({ user }) => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // Estado para controlar la apertura del calendario
  const [startDate, setStartDate] = useState(new Date()); // Estado del calendario
  const calendarRef = useRef(null); // Referencia para detectar clics fuera del calendario

  useEffect(() => {
    // Manejo del clic fuera del calendario para cerrarlo
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarOpen(false); // Cerrar el calendario si se hace clic fuera
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calendarRef]);

  useEffect(() => {
    console.log("Usuario recibido en Navbar:", user); // Verificamos que el usuario llega
  }, [user]);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top navbar-background">
      <div className="background-overlay"></div>
      <div
        className={`container-fluid d-flex align-items-center ${
          isOffcanvasOpen ? "navbar-reduced" : ""
        }`}
      >
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleOffcanvas}
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faBarsStaggered}
            style={{ color: "#888127" }}
          />
        </button>

        <div className="navbar-icons ms-auto">
          {/* Home Icon */}
          <button className="btn btn-link d-flex align-items-center">
            <FontAwesomeIcon icon={faHouse} />
          </button>

          {/* Cart Dropdown */}
          <div className="btn-group">
            <button
              className="btn btn-link d-flex align-items-center"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faCartShopping} />
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

          {/* Bell/Notifications Dropdown */}
          <div className="btn-group">
            <button
              className="btn btn-link d-flex align-items-center"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faBell} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Mensaje 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mensaje 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mensaje 3
                </a>
              </li>
            </ul>
          </div>

          {/* Calendar Dropdown */}
          <div className="btn-group">
            <button
              className="btn btn-link d-flex align-items-center"
              onClick={toggleCalendar}
              aria-expanded={isCalendarOpen}
            >
              <FontAwesomeIcon icon={faCalendarDays} />
            </button>
            {isCalendarOpen && (
              <div ref={calendarRef} className="dropdown-menu show">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  inline
                />
              </div>
            )}
          </div>

          {/* User Avatar Dropdown */}
          <div className="btn-group">
            <button
              className="btn btn-link dropdown-toggle d-flex align-items-center"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="/Clientes.png"
                className="rounded-circle"
                height="24"
                alt="User Avatar"
                loading="lazy"
              />
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
                <a className="dropdown-item" href="#">
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
