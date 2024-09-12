// /src/pages/principal.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles/principal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleUser,faStarHalfStroke,faUsers,faVial,faArrowPointer,faBookOpen,faXRay,faHospital, faBuildingNgo, faDoorOpen, faPenToSquare} from "@fortawesome/free-solid-svg-icons";

const Principal = () => {
  const location = useLocation();
  const user = location.state?.user;

  // Definimos el estado para controlar si la barra lateral está abierta o cerrada
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Función para alternar la visibilidad de la barra lateral
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`principal-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar
        user={user}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <main
        className={`principal-content ${isSidebarOpen ? "main-reduced" : ""}`}
      >
        <div className="styled-card">
          <div className="styled-card-content">
            <h2 className="styled-card-title">COMERLAT</h2>
            <p className="styled-card-text">¡Integrando Soluciones!</p>
          </div>
        </div>
        <section className="dashboard-overview">
          <div className="overview-cards">
            <div className="overview-card">
              <FontAwesomeIcon
                icon={faDoorOpen}
                size="2x"
                className="overview-icon"
              />
              <div>
                <h4>Visita</h4>
                <p>Presentados</p>
              </div>
            </div>
            <div className="overview-card">
              <FontAwesomeIcon
                icon={faUsers}
                size="2x"
                className="overview-icon"
              />
              <div>
                <h4>Junta de Aclaraciones</h4>
              </div>
            </div>
            <div className="overview-card">
              <FontAwesomeIcon
                icon={faStarHalfStroke}
                size="2x"
                className="overview-icon"
              />
              <div>
                <h4>Precalificación</h4>
              </div>
            </div>
            <div className="overview-card">
              <FontAwesomeIcon
                icon={faVial}
                size="2x"
                className="overview-icon"
              />
              <div>
                <h4>Muestras</h4>
              </div>
            </div>
            <div className="overview-card">
              <FontAwesomeIcon
                icon={faPenToSquare}
                size="2x"
                className="overview-icon"
              />
              <div>
                <h4>P. y A. de Proposiciones</h4>
                <p>Mensuales</p>
              </div>
            </div>
          </div>
        </section>
        <section className="latest-projects">
          <h3 className="section-title">
            <FontAwesomeIcon icon={faArrowPointer} /> Opciones
          </h3>
        </section>
        <div className="card-deck">
          <div className="styled-card clientes">
            <div className="card-content">
              <FontAwesomeIcon
                icon={faBookOpen}
                size="2x"
                className="card-icon"
              />
              <h3 className="card-value">LICITACIONES</h3>
              <p className="card-description">Total Revenue (Jan - Apr 2019)</p>
            </div>
          </div>
          <div className="styled-card departamentos">
            <div className="card-content">
              <FontAwesomeIcon icon={faXRay} size="2x" className="card-icon" />
              <h3 className="card-value">L. DE NEGOCIOS</h3>
              <p className="card-description">
                Total Unique Visitors (Jan - Apr 2019)
              </p>
            </div>
          </div>
          <div className="styled-card especialidades">
            <div className="card-content">
              <FontAwesomeIcon icon={faHospital} size="2x" className="card-icon" />
              <h3 className="card-value">DEPENDENCIAS</h3>
              <p className="card-description">
                Number of Transactions (Jan - Apr 2019)
              </p>
            </div>
          </div>
          <div className="styled-card inventario">
            <div className="card-content">
              <FontAwesomeIcon icon={faBuildingNgo} size="2x" className="card-icon" />
              <h3 className="card-value">EMPRESA</h3>
              <p className="card-description">
                Conversion Rate (Jan - Apr 2019)
              </p>
            </div>
          </div>
        </div>

        <section className="latest-projects">
          <h3 className="section-title">
            <FontAwesomeIcon icon={faArrowPointer} /> Documentos
          </h3>
        </section>
        <div className="project-list">
          <div className="project-header">
            <div className="project-column">Compañía</div>
            <div className="project-column">Miembros</div>
            <div className="project-column">Presupuesto</div>
            <div className="project-column">Progreso</div>
          </div>

          <div className="project-row">
            <div className="project-column">
              <img
                src="/path-to-image/xd-logo.png"
                alt="Material XD Version"
                className="project-icon"/>
              Material XD Version
            </div>
            <div className="project-column">
              <img
                src="/path-to-image/user1.png"
                alt="User 1"
                className="member-icon"/>
              <img
                src="/path-to-image/user2.png"
                alt="User 2"
                className="member-icon"/>
              <img
                src="/path-to-image/user3.png"
                alt="User 3"
                className="member-icon"/>
            </div>
            <div className="project-column">$14,000</div>
            <div className="project-column">
              <div className="progress-bar" style={{ width: "60%" }}></div> 60%
            </div>
          </div>
          <div className="project-row">
            <div className="project-column">
              <img
                src="/path-to-image/google-logo.png"
                alt="Add Progress Track"
                className="project-icon"/>
              Add Progress Track
            </div>
            <div className="project-column">
              <img
                src="/path-to-image/user1.png"
                alt="User 1"
                className="member-icon"/>
            </div>
            <div className="project-column">$3,000</div>
            <div className="project-column">
              <div className="progress-bar" style={{ width: "10%" }}></div> 10%
            </div>
          </div>
        </div>
        <section className="latest-projects">
          <h3 className="section-title">
            <FontAwesomeIcon icon={faArrowPointer} /> Estadísticas
          </h3>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 COMERLAT. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
export default Principal;
