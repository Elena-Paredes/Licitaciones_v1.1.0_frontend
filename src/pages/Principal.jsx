 
// /src/pages/principal.jsx 
import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import { Link } from 'react-router-dom';
import './styles/principal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMugSaucer, faCircleUser, faProjectDiagram, faUsers, faFileInvoice, faRedo} from '@fortawesome/free-solid-svg-icons';

const Principal = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div className={`principal-wrapper ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Navbar toggleSidebar={toggleSidebar} />
      <main className={`principal-content ${isSidebarOpen ? 'main-reduced' : ''}`}>
        <div className="styled-card">
          <div className="styled-card-content">
            <h2 className="styled-card-title">COMERLAT</h2>
            <p className="styled-card-text">¡Integrando Soluciones!</p>
          </div>
        </div>

        <section className="dashboard-overview">
          
          <div className="overview-cards">
            <div className="overview-card">
              <FontAwesomeIcon icon={faProjectDiagram} size="2x" className="overview-icon" />
              <div>
                <h4>Proyectos</h4>
                <p>Awaiting processing</p>
              </div>
            </div>
            <div className="overview-card">
              <FontAwesomeIcon icon={faUsers} size="2x" className="overview-icon" />
              <div>
                <h4>Miembros</h4>
                <p>Working hard</p>
              </div>
            </div>
            <div className="overview-card">
              <FontAwesomeIcon icon={faFileInvoice} size="2x" className="overview-icon" />
              <div>
                <h4>Contratos</h4>
                <p>Soon to be cleared</p>
              </div>
            </div>
            <div className="overview-card">
              <FontAwesomeIcon icon={faRedo} size="2x" className="overview-icon" />
              <div>
                <h4>Devoluciones</h4>
                <p>Fresh start</p>
              </div>
            </div>
          </div>
        </section>

        <section className="latest-projects">
          <h3 className="section-title">
            <FontAwesomeIcon icon={faMugSaucer} /> Opciones
          </h3>
        </section>

        <div className="card-deck">
          <Link to="/clientes" className="styled-card small-card clientes">
            <h3 className="card-title">CLIENTE</h3>
          </Link>
          <Link to="/departamentos" className="styled-card small-card departamentos">
            <h3 className="card-title">DEPARTAMENTOS</h3>
          </Link>
          <Link to="/especialidades" className="styled-card small-card especialidades">
            <h3 className="card-title">ESPECIALIDADES</h3>
          </Link>
          <Link to="/licitaciones" className="styled-card small-card inventario">
            <h3 className="card-title">LICITACIONES</h3>
          </Link>
        </div>

        <section className="latest-projects">
          <h3 className="section-title">
            <FontAwesomeIcon icon={faCircleUser} /> Últimos Usuarios
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