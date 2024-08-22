// src/pages/Especialidad.jsx
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// Importación de rutas
import Navbar from './components/Navbar.jsx';
import './styles/principal.css';
import './styles/table.css';

//Importación de bibliotecas
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import List from 'list.js';

const Especialidad = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  useEffect(() => {
    const options = {
      valueNames: ['name', 'email', 'payment'],
      page: 5,
      pagination: true,
      searchClass: 'search',
      filter: {
        key: 'payment'
      }
    };
    new List('tableExample4', options);
  }, []);

  return (
    <div className={`principal-wrapper ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Navbar toggleSidebar={toggleSidebar} />
      <main className={`principal-content ${isSidebarOpen ? 'main-reduced' : ''}`}>
        <div className="styled-card">
          <div className="styled-card-content">
            <h2 className="styled-card-title">Especialidades</h2>
            <p className="styled-card-text">Hola mundo</p>
          </div>
        </div>

        <section className="latest-projects">
          <h3 className="section-title">
            <FontAwesomeIcon icon={faCircleUser} /> Últimos Usuarios
          </h3>
        </section>

        <div id="tableExample4" data-list='{"valueNames":["name","email","payment"],"page":5,"pagination":true,"filter":{"key":"payment"}}'>
          <div className="row justify-content-end g-0">
            <div className="col-auto px-3">
              <select className="form-select form-select-sm mb-3" data-list-filter="data-list-filter">
                <option selected="" value="">Select payment status</option>
                <option value="Pending">Pending</option>
                <option value="Success">Success</option>
                <option value="Blocked">Blocked</option>
              </select>
            </div>
          </div>
          <div className="search-box mb-3 mx-auto">
            <form className="position-relative">
              <input className="form-control search-input search form-control-sm" type="search" placeholder="Search" aria-label="Search" />
              <span className="fas fa-search search-box-icon"></span>
            </form>
          </div>
          <div className="table-responsive">
            <table className="table table-sm fs-9 mb-0">
              <thead>
                <tr className="bg-body-highlight">
                  <th className="sort border-top border-translucent ps-3" data-sort="name">Customer</th>
                  <th className="sort border-top border-translucent" data-sort="email">Email</th>
                  <th className="sort border-top border-translucent text-end pe-3" data-sort="payment">Payment</th>
                </tr>
              </thead>
              <tbody className="list">
                <tr>
                  <td className="align-middle ps-3 name">Sylvia Plath</td>
                  <td className="align-middle email">john@gmail.com</td>
                  <td className="align-middle payment text-end py-3 pe-3">
                    <div className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="fw-bold">Success</span><span className="ms-1 fas fa-check"></span></div>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle ps-3 name">Homer</td>
                  <td className="align-middle email">sylvia@mail.ru</td>
                  <td className="align-middle payment text-end py-3 pe-3">
                    <div className="badge badge-phoenix fs-10 badge-phoenix-warning"><span className="fw-bold">Pending</span><span className="ms-1 fas fa-stream"></span></div>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle ps-3 name">Edgar Allan Poe</td>
                  <td className="align-middle email">edgar@yahoo.com</td>
                  <td className="align-middle payment text-end py-3 pe-3">
                    <div className="badge badge-phoenix fs-10 badge-phoenix-secondary"><span className="fw-bold">Blocked</span><span className="ms-1 fas fa-ban"></span></div>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle ps-3 name">William Butler Yeats</td>
                  <td className="align-middle email">william@gmail.com</td>
                  <td className="align-middle payment text-end py-3 pe-3">
                    <div className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="fw-bold">Success</span><span className="ms-1 fas fa-check"></span></div>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle ps-3 name">Rabindranath Tagore</td>
                  <td className="align-middle email">tagore@twitter.com</td>
                  <td className="align-middle payment text-end py-3 pe-3">
                    <div className="badge badge-phoenix fs-10 badge-phoenix-warning"><span className="fw-bold">Pending</span><span className="ms-1 fas fa-stream"></span></div>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle ps-3 name">Emily Dickinson</td>
                  <td className="align-middle email">emily@gmail.com</td>
                  <td className="align-middle payment text-end py-3 pe-3">
                    <div className="badge badge-phoenix fs-10 badge-phoenix-secondary"><span className="fw-bold">Blocked</span><span className="ms-1 fas fa-ban"></span></div>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle ps-3 name">Giovanni Boccaccio</td>
                  <td className="align-middle email">giovanni@outlook.com</td>
                  <td className="align-middle payment text-end py-3 pe-3">
                    <div className="badge badge-phoenix fs-10 badge-phoenix-warning"><span className="fw-bold">Pending</span><span className="ms-1 fas fa-stream"></span></div>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle ps-3 name">Oscar Wilde</td>
                  <td className="align-middle email">oscar@hotmail.com</td>
                  <td className="align-middle payment text-end py-3 pe-3">
                    <div className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="fw-bold">Success</span><span className="ms-1 fas fa-check"></span></div>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle ps-3 name">John Doe</td>
                  <td className="align-middle email">doe@gmail.com</td>
                  <td className="align-middle payment text-end py-3 pe-3">
                    <div className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="fw-bold">Success</span><span className="ms-1 fas fa-check"></span></div>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle ps-3 name">Emma Watson</td>
                  <td className="align-middle email">emma@gmail.com</td>
                  <td className="align-middle payment text-end py-3 pe-3">
                    <div className="badge badge-phoenix fs-10 badge-phoenix-warning"><span className="fw-bold">Pending</span><span className="ms-1 fas fa-stream"></span></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <span className="d-none d-sm-inline-block" data-list-info="data-list-info"></span>
            <div className="d-flex">
              <button className="page-link" data-list-pagination="prev"><span className="fas fa-chevron-left"></span></button>
              <ul className="mb-0 pagination"></ul>
              <button className="page-link pe-0" data-list-pagination="next"><span className="fas fa-chevron-right"></span></button>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 COMERLAT. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
export default Especialidad;