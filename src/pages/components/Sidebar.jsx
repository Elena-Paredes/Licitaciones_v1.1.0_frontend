import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faUsers, faCreditCard, faShieldAlt, faUser, faFlag, faBookOpen, faXRay, faHospital, faBuildingNgo } from '@fortawesome/free-solid-svg-icons';
import '../../pages/styles/sidebar.css';

const Sidebar = ({ isOffcanvasOpen, toggleOffcanvas, user }) => {

  useEffect(() => {
    console.log('User object:', user);
  }, [user]);

  return (
    <div
      className={`offcanvas offcanvas-start text-bg-dark ${isOffcanvasOpen ? "show" : ""}`}
      tabIndex='-1'
      id='offcanvasDarkNavbar'
      aria-labelledby='offcanvasDarkNavbarLabel'
      style={{ visibility: isOffcanvasOpen ? "visible" : "hidden", width: "300px" }}>
      <div className='offcanvas-header'>
        <button type='button' className='btn-close btn-close-white' onClick={toggleOffcanvas} aria-label='Close'></button>
      </div>
      <div className='offcanvas-body'>
        <div className='sidebar-header'>
          <img
            src={user?.userPhoto ? `data:image/jpeg;base64,${user.userPhoto}` : "/default-avatar.png"}
            className='rounded-circle user-avatar'
            alt='User Avatar'
          />
          <div className='user-info'>
            <span className='user-name'>
              {user?.firstName} {user?.lastName}
            </span>
            <span className='user-department'>{user?.deptoName}</span>
          </div>
        </div>
        <ul className='navbar-nav'>
          <li className='nav-section'>
            <span className='nav-section-title'>PROYECTOS</span>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <FontAwesomeIcon icon={faBookOpen} /> Licitaciones
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <FontAwesomeIcon icon={faXRay} /> L. de Negocios
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <FontAwesomeIcon icon={faHospital} /> Dependencias
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <FontAwesomeIcon icon={faBuildingNgo} /> Empresa
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <FontAwesomeIcon icon={faCreditCard} /> Montos
            </a>
          </li>
          <li className='nav-section'>
            <span className='nav-section-title'>AJUSTES</span>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <FontAwesomeIcon icon={faShieldAlt} /> Security
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <FontAwesomeIcon icon={faUser} /> Profile
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <FontAwesomeIcon icon={faFlag} /> Notifications
            </a>
          </li>
        </ul>
        <div className='sidebar-footer'>
          <p>Haz iniciado sesión como: Administrador</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

