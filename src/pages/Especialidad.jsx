// src/pages/Especialidad.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane,faPlus,faTrashCan,faPencil,faFileExcel,faCalendarDays,faUser,faClock,faTimes} from "@fortawesome/free-solid-svg-icons";
import api from "../axiosConfig.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/principal.css";
import "./styles/table.css";
import "./styles/modal.css";

const Especialidad = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchAttribute, setSearchAttribute] = useState("businessUnitName");
  const [currentPage, setCurrentPage] = useState(1);
  const [businessUnits, setBusinessUnits] = useState([]);
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const itemsPerPage = 15;

  useEffect(() => {
    api
      .get("/business-units") // Cambia la ruta según tu backend
      .then((response) => setBusinessUnits(response.data))
      .catch((error) => {
        console.error("Error obteniendo lineas de negocio:", error);
        setError(error);
      });
  }, []);

  const toggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  const filteredBusinessUnits = businessUnits.filter((unit) =>
    unit[searchAttribute]?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBusinessUnits.length / itemsPerPage);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAttributeChange = (e) => {
    setSearchAttribute(e.target.value);
    setSearchTerm(""); // Clear search term when attribute changes
    setCurrentPage(1); // Reset to the first page on attribute change
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchAttribute("businessUnitName");
  };

  const displayedBusinessUnits = filteredBusinessUnits.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleModalOpen = (title) => {
    setModalTitle(title);
    setModalContent(""); // Clear the modal content
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
  };

  return (
    <div className={`principal-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar toggleSidebar={toggleSidebar} />
      <main
        className={`principal-content ${isSidebarOpen ? "main-reduced" : ""}`}
      >
        <div className="styled-card">
          <div className="styled-card-content">
            <h2 className="styled-card-title">Linea de Negocios</h2>
          </div>
        </div>

        <section className="latest-projects">
          <h3 className="section-title">
            <FontAwesomeIcon icon={faPaperPlane} /> TABLAS
          </h3>
        </section>

        <section className="licitaciones-section">
          <h3 className="section-title">Lineas de Negocios</h3>
          <div className="table-controls">
            <select
              value={searchAttribute}
              onChange={handleAttributeChange}
              className="attribute-dropdown"
            >
              <option value="businessUnitName">L. de Negocios</option>
              <option value="dependency">Dependencia</option>
              <option value="contractType">Tipo de Contratación</option>
              <option value="procedureType">Tipo de Procedimiento</option>
            </select>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            <button onClick={handleClearSearch} className="btn-clear">
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="add-button">
              <div className="add-card">
                <FontAwesomeIcon icon={faPlus} className="add-icon" />
                <p className="add-text">Agregar</p>
              </div>
              <div className="add-card">
                <FontAwesomeIcon icon={faFileExcel} className="add-icon" />
                <p className="add-text">Descargar</p>
              </div>
            </div>
          </div>
          
          {error && <p className="error-message">{error.message}</p>}

          <div className="table-responsive">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>L. de Negocios</th>
                  <th>Dependencia</th>
                  <th>Tipo de Contratación</th>
                  <th>Tipo de Procedimiento</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {displayedBusinessUnits.map((unit, index) => (
                  <tr key={index}>
                    <td>{unit.id}</td>
                    <td>{unit.businessUnitName}</td>
                    <td>{unit.dependency}</td>
                    <td>{unit.contractType}</td>
                    <td>{unit.procedureType}</td>
                    <td className="options-column">
                      <button className="btn btn-red">
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                      <button className="btn btn-dark-blue">
                        <FontAwesomeIcon icon={faPencil} />
                      </button>
                      <button className="btn btn-dark-green">
                        <FontAwesomeIcon icon={faFileExcel} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 COMERLAT. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Modal */}
      <div
        className={`modal fade ${modalShow ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: modalShow ? "block" : "none" }}
        aria-labelledby="exampleModalLabel"
        aria-hidden={!modalShow}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {modalTitle}
              </h5>
            </div>
            <div className="modal-body">{modalContent}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-close"
                onClick={handleModalClose}
              ></button>
            </div>
          </div>
        </div>
      </div>
      {modalShow && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};
export default Especialidad;

