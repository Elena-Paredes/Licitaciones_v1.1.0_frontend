import React, { useState } from 'react';
import './styles/form_licitaciones.css';

const Form_Licitaciones = () => {
  const [formData, setFormData] = useState({
    tenderNumber: '',
    purpose: '',
    publicationDate: '',
    basePublicationDate: '',
    basePurchaseDate: '',
    visitDate: '',
    clarificationMeetingDate: '',
    prequalificationDate: '',
    sampleDate: '',
    presentationDate: '',
    verdictDate: '',
    firstName: '',
    buName: '',
    cteName: '',
    tenderTypeName: '',
    procedureTypeName: '',
    characterName: '',
    mediumName: '',
    criteriaName: '',
    participationStatusName: '',
    tenderStatusName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="form-licit-container" onSubmit={handleSubmit}>
      <h2 className="form-licit-h2">Información de la Licitación</h2>

      <div className="form-licit-section">
        <label className="form-licit-label">N° Licitaciones:</label>
        <input className="form-licit-input" type="text" name="tenderNumber" value={formData.tenderNumber} onChange={handleChange} />

        <label className="form-licit-label">Objeto:</label>
        <input className="form-licit-input" type="text" name="purpose" value={formData.purpose} onChange={handleChange} />

        <label className="form-licit-label">Fecha de publicación:</label>
        <input className="form-licit-input" type="date" name="publicationDate" value={formData.publicationDate} onChange={handleChange} />
      </div>

      <h3 className="form-licit-h3">CATÁLOGOS</h3>

      <div className="form-licit-section">
        <label className="form-licit-label">Encargado:</label>
        <select className="form-licit-select" name="firstName" value={formData.firstName} onChange={handleChange}>
          <option value="">Selecciona</option>
          <option value="John">John</option>
          <option value="Jane">Jane</option>
        </select>

        <label className="form-licit-label">Unidad de negocio:</label>
        <select className="form-licit-select" name="buName" value={formData.buName} onChange={handleChange}>
          <option value="">Selecciona</option>
          <option value="Marketing">Marketing</option>
          <option value="Finanzas">Finanzas</option>
        </select>

        <label className="form-licit-label">Licitador:</label>
        <select className="form-licit-select" name="cteName" value={formData.cteName} onChange={handleChange}>
          <option value="">Selecciona</option>
          <option value="Cliente 1">Cliente 1</option>
          <option value="Cliente 2">Cliente 2</option>
        </select>

        <label className="form-licit-label">Tipo de licitación:</label>
        <select className="form-licit-select" name="tenderTypeName" value={formData.tenderTypeName} onChange={handleChange}>
          <option value="">Selecciona</option>
          <option value="Pública">Pública</option>
          <option value="Privada">Privada</option>
        </select>

        <label className="form-licit-label">Tipo de procedimiento:</label>
        <select className="form-licit-select" name="procedureTypeName" value={formData.procedureTypeName} onChange={handleChange}>
          <option value="">Selecciona</option>
          <option value="Procedimiento 1">Procedimiento 1</option>
          <option value="Procedimiento 2">Procedimiento 2</option>
        </select>

        <label className="form-licit-label">Carácter de la licitación:</label>
        <select className="form-licit-select" name="characterName" value={formData.characterName} onChange={handleChange}>
          <option value="">Selecciona</option>
          <option value="Carácter 1">Carácter 1</option>
          <option value="Carácter 2">Carácter 2</option>
        </select>

        <label className="form-licit-label">Medio de la licitación:</label>
        <select className="form-licit-select" name="mediumName" value={formData.mediumName} onChange={handleChange}>
          <option value="">Selecciona</option>
          <option value="Medio 1">Medio 1</option>
          <option value="Medio 2">Medio 2</option>
        </select>

        <label className="form-licit-label">Criterio de la licitación:</label>
        <select className="form-licit-select" name="criteriaName" value={formData.criteriaName} onChange={handleChange}>
          <option value="">Selecciona</option>
          <option value="Criterio 1">Criterio 1</option>
          <option value="Criterio 2">Criterio 2</option>
        </select>

        <label className="form-licit-label">Estatus de participación:</label>
        <select className="form-licit-select" name="participationStatusName" value={formData.participationStatusName} onChange={handleChange}>
          <option value="">Selecciona</option>
          <option value="Estatus 1">Estatus 1</option>
          <option value="Estatus 2">Estatus 2</option>
        </select>

        <label className="form-licit-label">Estatus de concurso:</label>
        <select className="form-licit-select" name="tenderStatusName" value={formData.tenderStatusName} onChange={handleChange}>
          <option value="">Selecciona</option>
          <option value="Concurso 1">Concurso 1</option>
          <option value="Concurso 2">Concurso 2</option>
        </select>
      </div>

      <h3 className="form-licit-h3">FECHAS</h3>

      <div className="form-licit-section">
        <label className="form-licit-label">Fecha de la publicación de las Bases:</label>
        <input className="form-licit-input" type="date" name="basePublicationDate" value={formData.basePublicationDate} onChange={handleChange} />

        <label className="form-licit-label">Fecha de la compra de las Bases:</label>
        <input className="form-licit-input" type="date" name="basePurchaseDate" value={formData.basePurchaseDate} onChange={handleChange} />

        <label className="form-licit-label">Fecha de visita:</label>
        <input className="form-licit-input" type="date" name="visitDate" value={formData.visitDate} onChange={handleChange} />

        <label className="form-licit-label">Fecha de junta de aclaraciones:</label>
        <input className="form-licit-input" type="date" name="clarificationMeetingDate" value={formData.clarificationMeetingDate} onChange={handleChange} />

        <label className="form-licit-label">Fecha de precalificación:</label>
        <input className="form-licit-input" type="date" name="prequalificationDate" value={formData.prequalificationDate} onChange={handleChange} />

        <label className="form-licit-label">Fecha de Muestra:</label>
        <input className="form-licit-input" type="date" name="sampleDate" value={formData.sampleDate} onChange={handleChange} />

        <label className="form-licit-label">Fecha de presentación y apertura de proposiciones:</label>
        <input className="form-licit-input" type="date" name="presentationDate" value={formData.presentationDate} onChange={handleChange} />

        <label className="form-licit-label">Fecha de fallo:</label>
        <input className="form-licit-input" type="date" name="verdictDate" value={formData.verdictDate} onChange={handleChange} />
      </div>

      <button type="submit" className="form-licit-submit-btn">Enviar</button>
    </form>
  );
};

export default Form_Licitaciones;
