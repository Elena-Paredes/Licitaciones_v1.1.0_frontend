// src/pages/Home.jsx
import React from 'react';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '/comerlat.png';

const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="nav-logo">
            <img src={logo} alt="Logo de la empresa" className="logo" />
          </div>
          <ul>
            <li><a href="#">Principal</a></li>
            <li><a href="#">Nosotros</a></li>
            <li className="dropdown">
              <a href="#">Servicios</a>
            </li>
            <li className="dropdown">
              <a href="#">Especialidades</a>
            </li>
            
            {/*<li><a href="#">Conocenos</a></li>*/}
            <li><a href="#">Contacto</a></li>
            <li><a href="/signin">Iniciar sesión</a></li>
          </ul>
        </nav>
      </header>

      {/*----------------------CARRUSEL-------------------------------- */}
      <div className="hero">
        <div className="hero-background"></div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="d-block w-100 carousel-content">
                <h1>COMERLAT</h1><br></br>
                <h2>Innovación y calidad en cada servicio médico</h2>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="d-block w-100 carousel-content">
                <h1>Integrando soluciones</h1>
                <h2>¡con más de 20 años de experiencia!</h2>
                {/*<a href="#" className="cta-button">Más información</a>*/}
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-block w-100 carousel-content">
                <h1>Excelencia en Productos y Servicios Médicos</h1>
                <a href="#" className="cta-button">¡Conócenos!</a>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/*----------------------SOBRE NOSOTROS-------------------------------- */}
      <section className="about-us">
        <h1>COMERLAT</h1>
        <h3>Integrando soluciones desde 1999</h3>
        <div className="about-us-container">
          <div className="about-us-item">
            <h4>Nuestro Equipo</h4>
            <p>En Comerlat, SA de CV; creamos y suministramos soluciones integrales de salud dirigidos a resolver los grandes retos del país em materia de salud, privilegiando siempre el bienestar del paciente y la eficiencia en la operación de las instituciones.</p>
            {/*<button className="learn-more">Learn More</button>*/}
          </div>
          <div className="about-us-image">
            <img src="/Single_syringe.png" alt="Coffee_Splashing" />
          </div>
          <div className="about-us-item">
            <h4>Nuestra Misión</h4>
            <p>Todos los que integramos Comerlat, SA de CV; estamos comprometidos y por ello trabajamos con sistema de gestión de calidad certificado, y con un equipo dirigido a la mejora continua, el cual verifica el establecimiento cumplimiento y seguimiento de los objetivos de la calidad.</p>
            <ul>
              <li>Gestión de calidad certificada.</li>
              <li>Equipo dirigido a la mejora continua.</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
            {/*<button className="learn-more">Learn More</button>*/}
          </div>
        </div>
      </section>

      {/*----------------------SERVICIOS-------------------------------- */}
      <section className="services">
        <h2>Nuestros Servicios</h2>
        <div className="services-container">
          <div className="service-item">
            <h3>Servicios</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat tellus eget libero pretium, sollicitudin feugiat libero.</p>
            <div className="service-icon">
              <img src="/background.jpg" alt="Servicio" className="rounded-circle" />
            </div>
            <a href="#" className="read-more">Más info</a>
          </div>
          <div className="service-item">
            <h3>Productos</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat tellus eget libero pretium, sollicitudin feugiat libero.</p>
            <div className="service-icon">
              <img src="/background.jpg" alt="Servicio" className="rounded-circle" />
            </div>
            <a href="#" className="read-more">Más info</a>
          </div>
          <div className="service-item">
            <h3>Soporte técnico</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat tellus eget libero pretium, sollicitudin feugiat libero.</p>
            <div className="service-icon">
              <img src="/background.jpg" alt="Servicio" className="rounded-circle" />
            </div>
            <a href="#" className="read-more">Más info</a>
          </div>
          <div className="service-item">
            <h3>User Friendly</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat tellus eget libero pretium, sollicitudin feugiat libero.</p>
            <div className="service-icon">
              <img src="/Single_syringe.png" alt="Servicio" className="rounded-circle" />
            </div>
            <a href="#" className="read-more">Más info</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-item">
            <h3>NUESTRAS OFICINAS</h3>
            <p>Av. De la Reforma 2620 PH4, Col. Lomas Altas</p>
          </div>
          <div className="footer-item">
            <h3>CORREO</h3>
            <p>comerlat@co-merlat.com</p>
          </div>
          <div className="footer-item">
            <h3>TELÉFONOS</h3>
            <p>+012 345 6789</p>
            <p>+012 345 6789</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;