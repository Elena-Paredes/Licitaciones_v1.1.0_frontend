import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPlus, faTrashCan, faPencil, faFileExcel, faTimes } from "@fortawesome/free-solid-svg-icons";
import api from "../axiosConfig.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/principal.css";
import "./styles/table.css";
import "./styles/modal.css";

const Caracteristica = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchAttribute, setSearchAttribute] = useState("tenderNumber");
  const [currentPage, setCurrentPage] = useState(1);
  const [tenders, setTenders] = useState([]);
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const itemsPerPage = 15;

  useEffect(() => {
    api
      .get("/tenders") // Cambia la ruta según tu backend
      .then((response) => setTenders(response.data))
      .catch((error) => {
        console.error("Error obteniendo datos:", error);
        setError(error);
      });
  }, []);

  const toggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  const filteredTenders = tenders.filter((tender) =>
    tender[searchAttribute]?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTenders.length / itemsPerPage);

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
    setSearchAttribute("tenderNumber");
  };

  const displayedTenders = filteredTenders.slice(
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
      <main className={`principal-content ${isSidebarOpen ? "main-reduced" : ""}`}>
        <div className="styled-card">
          <div className="styled-card-content">
            <h2 className="styled-card-title">Características</h2>
          </div>
        </div>

        <section className="latest-projects">
          <h3 className="section-title">
            <FontAwesomeIcon icon={faPaperPlane} /> TABLAS
          </h3>
        </section>

        <section className="licitaciones-section">
          <h3 className="section-title">Características de Licitaciones</h3>
          <div className="table-controls">
            <select value={searchAttribute} onChange={handleAttributeChange} className="attribute-dropdown">
              <option value="tenderNumber">Número</option>
              <option value="contractTypeName">Contratación</option>
              <option value="procedureTypeName">Procedimiento</option>
              <option value="characterTypeName">Carácter</option>
              <option value="mediumTypeName">Medio</option>
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
                  <th>Número</th>
                  <th>Contratación</th>
                  <th>Procedimiento</th>
                  <th>Carácter</th>
                  <th>Medio</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {displayedTenders.map((tender, index) => (
                  <tr key={index}>
                    <td>{tender.tenderId}</td>
                    <td>{tender.tenderNumber}</td>
                    <td>{tender.contractTypeName}</td>
                    <td>{tender.procedureTypeName}</td>
                    <td>{tender.characterTypeName}</td>
                    <td>{tender.mediumTypeName}</td>
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
                className={currentPage === index + 1 ? "active" : ""}>
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
      <div className={`modal fade ${modalShow ? "show" : ""}`} tabIndex="-1" role="dialog" style={{ display: modalShow ? "block" : "none" }} aria-labelledby="exampleModalLabel" aria-hidden={!modalShow}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{modalTitle}</h5>
            </div>
            <div className="modal-body">{modalContent}</div>
            <div className="modal-footer">
              <button type="button" className="btn-close" onClick={handleModalClose}></button>
            </div>
          </div>
        </div>
      </div>
      {modalShow && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default Caracteristica;

