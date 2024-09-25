// frontend/src/pages/Form_Licitaciones.jsx
import React, { useState, useEffect } from 'react';
import "./styles/form_licitaciones.css"; // Asegúrate de que esta ruta sea correcta

const Form_Licitaciones = () => {
  const [formData, setFormData] = useState({
    tenderNumber: "",
    purpose: "",
    publicationDate: "",
    firstName: "",
    buName: "",
    stateName: "",
    dependencyName: "",
    contractTypeName: "",
    procedureTypeName: "",
    characterTypeName: "",
    mediumTypeName: "",
    criteriaName: ""
  });

  const [catalogs, setCatalogs] = useState({
    users: [],
    businessUnits: [],
    states: [],
    dependencies: [],
    contractTypes: [],
    procedureTypes: [],
    characterTypes: [],
    mediumTypes: [],
    criteria: []
  });

  // Obtener catálogos desde el backend cuando el componente se carga
  useEffect(() => {
    const fetchCatalogs = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/tender/catalogs');
        const data = await response.json();
        setCatalogs(data); // Guardar los catálogos en el estado
      } catch (error) {
        console.error('Error al obtener los catálogos:', error);
      }
    };

    fetchCatalogs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  // Aquí puedes enviar los datos al backend
  };

  return (
    <div className="form-licit-page">
      <form className="form-licit-container" onSubmit={handleSubmit}>

        <h2 className="form-licit-h2">INFORMACIÓN GENERAL</h2>

        <div className="form-licit-section">
          <label className="form-licit-label">N° Licitación:</label>
          <input
            className="form-licit-input"
            type="text"
            name="tenderNumber"
            value={formData.tenderNumber}
            onChange={handleChange}
          />

          <label className="form-licit-label">Objeto:</label>
          <textarea
            className="form-licit-textarea"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            rows="5"
            cols="50"
          />

          <label className="form-licit-label">Fecha de publicación:</label>
          <input
            className="form-licit-input"
            type="date"
            name="publicationDate"
            value={formData.publicationDate}
            onChange={handleChange}
          />

          <label className="form-licit-label">Responsable:</label>
          <select
            className="form-licit-select"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          >
            <option value="">Selecciona</option>
            {catalogs.users.map((user) => (
              <option key={user.userId} value={user.firstName}>
                {user.firstName}
              </option>
            ))}
          </select>
        </div>

        <h2 className="form-licit-h2">UBICACIÓN</h2>

        <div className="form-licit-section">
          <label className="form-licit-label">Línea de negocio:</label>
          <select
            className="form-licit-select"
            name="buName"
            value={formData.buName}
            onChange={handleChange}
          >
            <option value="">Selecciona</option>
            {catalogs.businessUnits.map((unit) => (
              <option key={unit.buId} value={unit.buName}>
                {unit.buName}
              </option>
            ))}
          </select>

          <label className="form-licit-label">Dependencia:</label>
          <select
            className="form-licit-select"
            name="dependencyName"
            value={formData.dependencyName}
            onChange={handleChange}
          >
            <option value="">Selecciona</option>
            {catalogs.dependencies.map((dep) => (
              <option key={dep.dependencyId} value={dep.dependencyName}>
                {dep.dependencyName}
              </option>
            ))}
          </select>

          <label className="form-licit-label">Estado:</label>
          <select
            className="form-licit-select"
            name="stateName"
            value={formData.stateName}
            onChange={handleChange}
          >
            <option value="">Selecciona</option>
            {catalogs.states.map((state) => (
              <option key={state.stateId} value={state.stateName}>
                {state.stateName}
              </option>
            ))}
          </select>
        </div>

        <h2 className="form-licit-h2">CARACTERÍSTICAS</h2>

        <div className="form-licit-section">
          <label className="form-licit-label">Tipo de contratación:</label>
          <select
            className="form-licit-select"
            name="contractTypeName"
            value={formData.contractTypeName}
            onChange={handleChange}
          >
            <option value="">Selecciona</option>
            {catalogs.contractTypes.map((type) => (
              <option key={type.contractTypeId} value={type.contractTypeName}>
                {type.contractTypeName}
              </option>
            ))}
          </select>

          <label className="form-licit-label">Tipo de procedimiento:</label>
          <select
            className="form-licit-select"
            name="procedureTypeName"
            value={formData.procedureTypeName}
            onChange={handleChange}
          >
            <option value="">Selecciona</option>
            {catalogs.procedureTypes.map((type) => (
              <option key={type.procedureTypeId} value={type.procedureTypeName}>
                {type.procedureTypeName}
              </option>
            ))}
          </select>

          <label className="form-licit-label">Carácter de la licitación:</label>
          <select
            className="form-licit-select"
            name="characterTypeName"
            value={formData.characterTypeName}
            onChange={handleChange}
          >
            <option value="">Selecciona</option>
            {catalogs.characterTypes.map((type) => (
              <option key={type.characterTypeId} value={type.characterTypeName}>
                {type.characterTypeName}
              </option>
            ))}
          </select>

          <label className="form-licit-label">Medio:</label>
          <select
            className="form-licit-select"
            name="mediumTypeName"
            value={formData.mediumTypeName}
            onChange={handleChange}
          >
            <option value="">Selecciona</option>
            {catalogs.mediumTypes.map((type) => (
              <option key={type.mediumTypeId} value={type.mediumTypeName}>
                {type.mediumTypeName}
              </option>
            ))}
          </select>

          <label className="form-licit-label">Criterio de evaluación:</label>
          <select
            className="form-licit-select"
            name="criteriaName"
            value={formData.criteriaName}
            onChange={handleChange}
          >
            <option value="">Selecciona</option>
            {catalogs.criteria.map((type) => (
              <option key={type.criteriaId} value={type.criteriaName}>
                {type.criteriaName}
              </option>
            ))}
          </select>
        </div>

        <h2 className="form-licit-h2">Fechas</h2>

        <div className="form-licit-section">
          <label className="form-licit-label">Fecha de la publicación de las Bases:</label>
          <input
            className="form-licit-input"
            type="date"
            name="basePublicationDate"
            value={formData.basePublicationDate}
            onChange={handleChange}
          />

          <label className="form-licit-label">Fecha de la compra de las Bases:</label>
          <input
            className="form-licit-input"
            type="date"
            name="basePurchaseDate"
            value={formData.basePurchaseDate}
            onChange={handleChange}
          />

          <label className="form-licit-label">Fecha de visita:</label>
          <input
            className="form-licit-input"
            type="date"
            name="visitDate"
            value={formData.visitDate}
            onChange={handleChange}
          />

          <label className="form-licit-label">Fecha de junta de aclaraciones:</label>
          <input
            className="form-licit-input"
            type="date"
            name="clarificationMeetingDate"
            value={formData.clarificationMeetingDate}
            onChange={handleChange}
          />

          <label className="form-licit-label">Fecha de precalificación:</label>
          <input
            className="form-licit-input"
            type="date"
            name="prequalificationDate"
            value={formData.prequalificationDate}
            onChange={handleChange}
          />

          <label className="form-licit-label">Fecha de Muestra:</label>
          <input
            className="form-licit-input"
            type="date"
            name="sampleDate"
            value={formData.sampleDate}
            onChange={handleChange}
          />

          <label className="form-licit-label">Fecha de presentación y apertura de proposiciones:</label>
          <input
            className="form-licit-input"
            type="date"
            name="presentationDate"
            value={formData.presentationDate}
            onChange={handleChange}
          />

          <label className="form-licit-label">Fecha de fallo:</label>
          <input
            className="form-licit-input"
            type="date"
            name="verdictDate"
            value={formData.verdictDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="form-licit-submit-btn">REGISTRAR</button>
      </form>
    </div>
  );
};

export default Form_Licitaciones;

