// src/pages/components/Navbar.jsx
import React, { useState } from 'react';
import '../../pages/styles/navbar.css';
import '../../pages/styles/sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faHouse, faCartShopping, faBell, faTools, faUsers, faCreditCard, faShieldAlt, faUser, faFlag } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ toggleSidebar }) => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
    toggleSidebar(!isOffcanvasOpen);
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top navbar-background">
      <div className="background-overlay"></div>
      <div className={`container-fluid d-flex align-items-center ${isOffcanvasOpen ? 'navbar-reduced' : ''}`}>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleOffcanvas}
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBarsStaggered} style={{color: "#888127",}} />
        </button>

        <div className="navbar-icons ms-auto">
          <button className="btn btn-link d-flex align-items-center">
            <FontAwesomeIcon icon={faHouse} />
          </button>

          <div className="btn-group">
            <button className="btn btn-link d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">Opción 1</a></li>
              <li><a className="dropdown-item" href="#">Opción 2</a></li>
              <li><a className="dropdown-item" href="#">Opción 3</a></li>
            </ul>
          </div>

          <div className="btn-group">
            <button className="btn btn-link d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faBell} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">Mensaje 1</a></li>
              <li><a className="dropdown-item" href="#">Mensaje 2</a></li>
              <li><a className="dropdown-item" href="#">Mensaje 3</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button className="btn btn-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
              <img
                src="/Cartoon-kitten.png"
                className="rounded-circle"
                height="22"
                alt="User Avatar"
                loading="lazy"
              />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">Mi perfil</a></li>
              <li><a className="dropdown-item" href="#">Ajustes</a></li>
              <li><a className="dropdown-item" href="#">Salir</a></li>
            </ul>
          </div>
        </div>
        {/*AQUÍ EMPIEZA EL SIDEBAAAR*/}
        <div
          className={`offcanvas offcanvas-start text-bg-dark ${isOffcanvasOpen ? 'show' : ''}`}
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
          style={{ visibility: isOffcanvasOpen ? 'visible' : 'hidden', width: '300px' }}
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={toggleOffcanvas}
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="sidebar-header">
              <img src="/Cartoon-kitten.png" className="rounded-circle user-avatar" alt="User Avatar" />
              <div className="user-info">
                <span className="user-name">Elena Paredes</span>
                <span className="user-department">T.I.</span>
              </div>
            </div>
            <ul className="navbar-nav">
              <li className="nav-section">
                <span className="nav-section-title">PROYECTOS</span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faTools} /> Licitaciones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faUsers} /> Contratos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faUsers} /> Equipos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faCreditCard} /> Pagos
                </a>
              </li>

              <li className="nav-section">
                <span className="nav-section-title">AJUSTES</span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faShieldAlt} /> Security
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faUser} /> Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faFlag} /> Notifications
                </a>
              </li>
            </ul>
            <div className="sidebar-footer">
              <p>Haz iniciado sesión como: Administrador</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;