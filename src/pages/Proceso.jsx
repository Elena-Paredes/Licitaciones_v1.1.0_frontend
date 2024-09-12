import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faPlus,
  faDownload,
  faTrashCan,
  faPencil,
  faFileExcel,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import api from "../axiosConfig.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/principal.css";
import "./styles/table.css";
import "./styles/modal.css";

const Proceso = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState("tabla1");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchAttribute, setSearchAttribute] = useState("id");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const itemsPerPage = 15;

  const fetchTableData = (table) => {
    let url;
    switch (table) {
      case "tabla1":
        url = "/tabla1";
        break;
      case "tabla2":
        url = "/tabla2";
        break;
      case "tabla3":
        url = "/tabla3";
        break;
      case "tabla4":
        url = "/tabla4";
        break;
      case "tabla5":
        url = "/tabla5";
        break;
      default:
        url = "/tabla1";
    }

    api
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => {
        console.error(`Error obteniendo datos de ${table}:`, error);
        setError(error);
      });
  };

  useEffect(() => {
    fetchTableData(selectedTable);
  }, [selectedTable]);

  const toggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  const filteredData = data.filter((item) =>
    item[searchAttribute]?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

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
    setSearchAttribute("id");
  };

  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Definir las columnas según la tabla seleccionada
  const getTableColumns = () => {
    switch (selectedTable) {
      case "tabla1":
        return ["ID", "Nombre", "Descripción", "Fecha"];
      case "tabla2":
        return ["ID", "Número", "Monto", "Estado"];
      case "tabla3":
        return ["ID", "Participante", "Resultado", "Puntos"];
      case "tabla4":
        return ["ID", "Producto", "Cantidad", "Precio"];
      case "tabla5":
        return ["ID", "Cliente", "Orden", "Fecha de Entrega"];
      default:
        return ["ID", "Nombre", "Descripción", "Fecha"];
    }
  };

  return (
    <div className={`principal-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar toggleSidebar={toggleSidebar} />
      <main
        className={`principal-content ${isSidebarOpen ? "main-reduced" : ""}`}
      >
        <div className="styled-card">
          <div className="styled-card-content">
            <h2 className="styled-card-title">Proceso</h2>
          </div>
        </div>

        <section className="latest-projects">
          <h3 className="section-title">
            <FontAwesomeIcon icon={faPaperPlane} /> TABLAS
          </h3>
        </section>

        <section className="proceso-section">
          <h3 className="section-title">Tablas de Procesos</h3>
          <div className="table-controls">
            {/* Dropdown para seleccionar la tabla */}
            <select
              value={selectedTable}
              onChange={(e) => setSelectedTable(e.target.value)}
              className="table-dropdown"
            >
              <option value="tabla1">Tabla 1</option>
              <option value="tabla2">Tabla 2</option>
              <option value="tabla3">Tabla 3</option>
              <option value="tabla4">Tabla 4</option>
              <option value="tabla5">Tabla 5</option>
            </select>

            {/* Búsqueda y filtros */}
            <select
              value={searchAttribute}
              onChange={handleAttributeChange}
              className="attribute-dropdown"
            >
              <option value="id">ID</option>
              <option value="numero">Número</option>
              <option value="atributo3">Atributo 3</option>
              <option value="atributo4">Atributo 4</option>
              <option value="atributo5">Atributo 5</option>
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
          </div>

          {error && <p className="error-message">{error.message}</p>}

          {/* Tabla de datos */}
          <div className="table-responsive">
            <table className="styled-table">
              <thead>
                <tr>
                  {getTableColumns().map((column, index) => (
                    <th key={index}>{column}</th>
                  ))}
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {displayedData.map((item, index) => (
                  <tr key={index}>
                    {getTableColumns().map((column, colIndex) => (
                      <td key={colIndex}>{item[column.toLowerCase()]}</td>
                    ))}
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

          {/* Paginación */}
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
    </div>
  );
};
export default Proceso;
