// /src/pages/principal.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke, faUsers, faVial, faBookOpen, faXRay, faHospital, faBuildingNgo, faDoorOpen, faPenToSquare, faFileCircleExclamation, faCalendar, faFileContract, faEye } from "@fortawesome/free-solid-svg-icons";
import "./styles/principal.css";

const Principal = () => {
  const location = useLocation();
  const user = location.state?.user;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Función para alternar la visibilidad de la barra lateral
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Funciones para navegar a las diferentes rutas
  const goToLicitaciones = () => navigate('/licitaciones');
  const goToLineasNegocios = () => navigate('/lineas-negocios');
  const goToCaracteristicas = () => navigate('/caracteristica');
  const goToEmpresas = () => navigate('/empresas');
  const goToEstatus = () => navigate('/estatus');
  const goToFechas = () => navigate('/fechas');
  const goToContrato = () => navigate('/detalles-contrato');

  return (
    <div className={`principal-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar user={user} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className={`principal-content ${isSidebarOpen ? "main-reduced" : ""}`}>
        <div className='styled-card'>
          <div className='styled-card-content'>
            <h1 className='styled-card-title'>COMERLAT</h1>
            <h4 className='styled-card-text'>¡Integrando Soluciones!</h4>
          </div>
        </div>
        <section className='latest-projects'>
          <h3 className='section-title'>
            <FontAwesomeIcon icon={faEye} /> Fases del proceso
          </h3>
        </section>
        <section className='dashboard-overview'>
          <div className='overview-cards'>
            <button className='overview-card'>
              <FontAwesomeIcon icon={faDoorOpen} size='2x' className='overview-icon' />
              <div>
                <h4>Visita</h4>
                <p>Presentados</p>
              </div>
            </button>
            <button className='overview-card'>
              <FontAwesomeIcon icon={faUsers} size='2x' className='overview-icon' />
              <div>
                <h4>Junta de Aclaraciones</h4>
              </div>
            </button>
            <button className='overview-card'>
              <FontAwesomeIcon icon={faStarHalfStroke} size='2x' className='overview-icon' />
              <div>
                <h4>Precalificación</h4>
              </div>
            </button>
            <button className='overview-card'>
              <FontAwesomeIcon icon={faVial} size='2x' className='overview-icon' />
              <div>
                <h4>Muestras</h4>
              </div>
            </button>
            <button className='overview-card'>
              <FontAwesomeIcon icon={faPenToSquare} size='2x' className='overview-icon' />
              <div>
                <h4>P. y A. de Proposiciones</h4>
                <p>Mensuales</p>
              </div>
            </button>
          </div>
        </section>
        <section className='latest-projects'>
          <h3 className='section-title'>
            <FontAwesomeIcon icon={faEye} /> Categorías
          </h3>
        </section>
        <div className='card-deck'>
          <button className='styled-card categorias' onClick={goToLicitaciones}>
            <div className='card-content'>
              <FontAwesomeIcon icon={faBookOpen} size='2x' className='card-icon' />
              <h3 className='card-value'>LICITACIONES</h3>
              <p className='card-description'>Total Revenue (Jan - Apr 2019)</p>
            </div>
          </button>
          <button className='styled-card categorias' onClick={goToLineasNegocios}>
            <div className='card-content'>
              <FontAwesomeIcon icon={faXRay} size='2x' className='card-icon' />
              <h3 className='card-value'>LÍNEAS DE NEGOCIO</h3>
              <p className='card-description'>Total Unique Visitors (Jan - Apr 2019)</p>
            </div>
          </button>
          <button className='styled-card categorias' onClick={goToCaracteristicas}>
            <div className='card-content'>
              <FontAwesomeIcon icon={faHospital} size='2x' className='card-icon' />
              <h3 className='card-value'>CARACTERÍSTICAS</h3>
              <p className='card-description'>Number of Transactions (Jan - Apr 2019)</p>
            </div>
          </button>
          <button className='styled-card categorias' onClick={goToEmpresas}>
            <div className='card-content'>
              <FontAwesomeIcon icon={faBuildingNgo} size='2x' className='card-icon' />
              <h3 className='card-value'>EMPRESAS</h3>
              <p className='card-description'>Conversion Rate (Jan - Apr 2019)</p>
            </div>
          </button>
          <button className='styled-card categorias' onClick={goToEstatus}>
            <div className='card-content'>
              <FontAwesomeIcon icon={faFileCircleExclamation} size='2x' className='card-icon' />
              <h3 className='card-value'>ESTATUS</h3>
              <p className='card-description'>Conversion Rate (Jan - Apr 2019)</p>
            </div>
          </button>
          <button className='styled-card categorias' onClick={goToFechas}>
            <div className='card-content'>
              <FontAwesomeIcon icon={faCalendar} size='2x' className='card-icon' />
              <h3 className='card-value'>FECHAS RELEVANTES</h3>
              <p className='card-description'>Conversion Rate (Jan - Apr 2019)</p>
            </div>
          </button>
          <button className='styled-card categorias' onClick={goToContrato}>
            <div className='card-content'>
              <FontAwesomeIcon icon={faFileContract} size='2x' className='card-icon' />
              <h3 className='card-value'>DETALLES DE CONTRATO</h3>
              <p className='card-description'>Conversion Rate (Jan - Apr 2019)</p>
            </div>
          </button>
        </div>

        <section className='latest-projects'>
          <h3 className='section-title'>
            <FontAwesomeIcon icon={faEye} /> Documentos
          </h3>
        </section>
        <div className='project-list'>
          <div className='project-header'>
            <div className='project-column'>Compañía</div>
            <div className='project-column'>Miembros</div>
            <div className='project-column'>Presupuesto</div>
            <div className='project-column'>Progreso</div>
          </div>

          <div className='project-row'>
            <div className='project-column'>
              <img src='/path-to-image/xd-logo.png' alt='Material XD Version' className='project-icon' />
              Material XD Version
            </div>
            <div className='project-column'>
              <img src='/path-to-image/user1.png' alt='User 1' className='member-icon' />
              <img src='/path-to-image/user2.png' alt='User 2' className='member-icon' />
              <img src='/path-to-image/user3.png' alt='User 3' className='member-icon' />
            </div>
            <div className='project-column'>$14,000</div>
            <div className='project-column'>
              <div className='progress-bar' style={{ width: "60%" }}></div> 60%
            </div>
          </div>
          <div className='project-row'>
            <div className='project-column'>
              <img src='/path-to-image/google-logo.png' alt='Add Progress Track' className='project-icon' />
              Add Progress Track
            </div>
            <div className='project-column'>
              <img src='/path-to-image/user1.png' alt='User 1' className='member-icon' />
            </div>
            <div className='project-column'>$3,000</div>
            <div className='project-column'>
              <div className='progress-bar' style={{ width: "10%" }}></div> 10%
            </div>
          </div>
        </div>
        <section className='latest-projects'>
          <h3 className='section-title'>
            <FontAwesomeIcon icon={faEye} /> Estadísticas
          </h3>
        </section>
      </main>
      <footer className='footer'>
        <div className='footer-content'>
          <p>&copy; 2024 COMERLAT. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
export default Principal;
