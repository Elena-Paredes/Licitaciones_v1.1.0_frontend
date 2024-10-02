// frontend/src/pages/Form_Licitaciones.jsx
import React, { useState, useEffect } from 'react';
import api from '../axiosConfig';
import "./styles/form_licitaciones.css";  // Importa tu archivo CSS

const Form_Licitaciones = () => {
  // Estados para cada catálogo
  const [businessUnits, setBusinessUnits] = useState([]);
  const [states, setStates] = useState([]);
  const [dependencies, setDependencies] = useState([]);
  const [contractTypes, setContractTypes] = useState([]);
  const [procedureTypes, setProcedureTypes] = useState([]);
  const [characterTypes, setCharacterTypes] = useState([]);
  const [mediumTypes, setMediumTypes] = useState([]);
  const [criteria, setCriteria] = useState([]);
  const [users, setUsers] = useState([]); // Estado para los usuarios/encargados

  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    tenderNumber: "",
    purpose: "",
    publicationDate: "",
    firstName: "", // Aquí irá el encargado o responsable
    buId: "",
    stateId: "",
    dependencyId: "",
    contractTypeId: "",
    procedureTypeId: "",
    characterTypeId: "",
    mediumTypeId: "",
    criteriaId: "",
    basePublicationDate: "",
    basePurchaseDate: "",
    visitDate: "",
    clarificationMeetingDate: "",
    prequalificationDate: "",
    sampleDate: "",
    presentationDate: "",
  });

  // Cargar catálogos al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          buResponse,
          stateResponse,
          depResponse,
          contractResponse,
          procedureResponse,
          characterResponse,
          mediumResponse,
          criteriaResponse,
          usersResponse,
        ] = await Promise.all([
          api.get("/api/business-units"),
          api.get("/api/states"),
          api.get("/api/dependencies"),
          api.get("/api/contract-types"),
          api.get("/api/procedure-types"),
          api.get("/api/character-types"),
          api.get("/api/medium-types"),
          api.get("/api/criteria"),
          api.get("/api/users"), // Ruta para obtener los encargados o usuarios
        ]);
        setBusinessUnits(buResponse.data);
        setStates(stateResponse.data);
        setDependencies(depResponse.data);
        setContractTypes(contractResponse.data);
        setProcedureTypes(procedureResponse.data);
        setCharacterTypes(characterResponse.data);
        setMediumTypes(mediumResponse.data);
        setCriteria(criteriaResponse.data);
        setUsers(usersResponse.data); // Almacena los usuarios en el estado
      } catch (error) {
        console.error("Error al obtener los catálogos:", error);
      }
    };

    fetchData();
  }, []);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData); // Verifica qué datos se están enviando

    try {
      const response = await api.post("/api/create", formData);
      console.log("Respuesta del servidor:", response.data);

      // Restablecer el formulario a sus valores iniciales
      setFormData({
        tenderNumber: "",
        purpose: "",
        publicationDate: "",
        firstName: "",
        buId: "",
        stateId: "",
        dependencyId: "",
        contractTypeId: "",
        procedureTypeId: "",
        characterTypeId: "",
        mediumTypeId: "",
        criteriaId: "",
        basePublicationDate: "",
        basePurchaseDate: "",
        visitDate: "",
        clarificationMeetingDate: "",
        prequalificationDate: "",
        sampleDate: "",
        presentationDate: "",
      });
    } catch (error) {
      console.error("Error al enviar los datos:", error.response?.data); // Muestra el error que viene del backend
    }
  };

  return (
    <div className='form-licit-page'>
      <form className='form-licit-container' onSubmit={handleSubmit}>
        <h2 className='form-licit-h2'>INFORMACIÓN GENERAL</h2>

        <div className='form-licit-section'>
          <label className='form-licit-label'>N° Licitación:</label>
          <input className='form-licit-input' type='text' name='tenderNumber' value={formData.tenderNumber} onChange={handleChange} />

          <label className='form-licit-label'>Objeto:</label>
          <textarea className='form-licit-textarea' name='purpose' value={formData.purpose} onChange={handleChange} />

          <label className='form-licit-label'>Fecha de Publicación</label>
          <input className='form-licit-input' type='date' name='publicationDate' value={formData.publicationDate} onChange={handleChange} />

          <label className='form-licit-label'>Responsable</label>
          <select className='form-licit-select' name='firstName' value={formData.firstName} onChange={handleChange}>
            <option value=''>Selecciona</option>
            {users.map((user) => (
              <option key={user.userId} value={user.firstName}>
                {user.firstName}
              </option>
            ))}
          </select>
        </div>

        <h2 className='form-licit-h2'>UBICACIÓN</h2>
        <div className='form-licit-section'>
          <label className='form-licit-label'>Unidad de Negocio</label>
          <select className='form-licit-select' name='buId' value={formData.buId} onChange={handleChange}>
            <option value=''>Selecciona</option>
            {businessUnits.map((unit) => (
              <option key={unit.buId} value={unit.buId}>
                {unit.buName}
              </option>
            ))}
          </select>

          <label className='form-licit-label'>Estado</label>
          <select className='form-licit-select' name='stateId' value={formData.stateId} onChange={handleChange}>
            <option value=''>Selecciona</option>
            {states.map((state) => (
              <option key={state.stateId} value={state.stateId}>
                {state.stateName}
              </option>
            ))}
          </select>

          <label className='form-licit-label'>Dependencia</label>
          <select className='form-licit-select' name='dependencyId' value={formData.dependencyId} onChange={handleChange}>
            <option value=''>Selecciona</option>
            {dependencies.map((dep) => (
              <option key={dep.dependencyId} value={dep.dependencyId}>
                {dep.dependencyName}
              </option>
            ))}
          </select>
        </div>

        <h2 className='form-licit-h2'>CARACTERÍSTICAS</h2>
        <div className='form-licit-section'>
          <label className='form-licit-label'>Tipo de Contrato</label>
          <select className='form-licit-select' name='contractTypeId' value={formData.contractTypeId} onChange={handleChange}>
            <option value=''>Selecciona</option>
            {contractTypes.map((contract) => (
              <option key={contract.contractTypeId} value={contract.contractTypeId}>
                {contract.contractTypeName}
              </option>
            ))}
          </select>

          <label className='form-licit-label'>Tipo de Procedimiento</label>
          <select className='form-licit-select' name='procedureTypeId' value={formData.procedureTypeId} onChange={handleChange}>
            <option value=''>Selecciona</option>
            {procedureTypes.map((proc) => (
              <option key={proc.procedureTypeId} value={proc.procedureTypeId}>
                {proc.procedureTypeName}
              </option>
            ))}
          </select>

          <label className='form-licit-label'>Carácter</label>
          <select className='form-licit-select' name='characterTypeId' value={formData.characterTypeId} onChange={handleChange}>
            <option value=''>Selecciona</option>
            {characterTypes.map((char) => (
              <option key={char.characterTypeId} value={char.characterTypeId}>
                {char.characterTypeName}
              </option>
            ))}
          </select>

          <label className='form-licit-label'>Medio</label>
          <select className='form-licit-select' name='mediumTypeId' value={formData.mediumTypeId} onChange={handleChange}>
            <option value=''>Selecciona</option>
            {mediumTypes.map((medium) => (
              <option key={medium.mediumTypeId} value={medium.mediumTypeId}>
                {medium.mediumTypeName}
              </option>
            ))}
          </select>

          <label className='form-licit-label'>Criterio de Evaluación</label>
          <select className='form-licit-select' name='criteriaId' value={formData.criteriaId} onChange={handleChange}>
            <option value=''>Selecciona</option>
            {criteria.map((crit) => (
              <option key={crit.criteriaId} value={crit.criteriaId}>
                {crit.criteriaName}
              </option>
            ))}
          </select>
        </div>

        <h2 className='form-licit-h2'>Fechas</h2>
        <div className='form-licit-section'>
          <label className='form-licit-label'>Fecha de la Publicación de las Bases</label>
          <input className='form-licit-input' type='date' name='basePublicationDate' value={formData.basePublicationDate} onChange={handleChange} />

          <label className='form-licit-label'>Fecha de Compra de las Bases</label>
          <input className='form-licit-input' type='date' name='basePurchaseDate' value={formData.basePurchaseDate} onChange={handleChange} />

          <label className='form-licit-label'>Fecha de Visita</label>
          <input className='form-licit-input' type='date' name='visitDate' value={formData.visitDate} onChange={handleChange} />

          <label className='form-licit-label'>Fecha de Junta de Aclaraciones</label>
          <input
            className='form-licit-input'
            type='date'
            name='clarificationMeetingDate'
            value={formData.clarificationMeetingDate}
            onChange={handleChange}
          />

          <label className='form-licit-label'>Fecha de Precalificación</label>
          <input className='form-licit-input' type='date' name='prequalificationDate' value={formData.prequalificationDate} onChange={handleChange} />

          <label className='form-licit-label'>Fecha de Muestra</label>
          <input className='form-licit-input' type='date' name='sampleDate' value={formData.sampleDate} onChange={handleChange} />

          <label className='form-licit-label'>Fecha de Presentación y Apertura de Proposiciones</label>
          <input className='form-licit-input' type='date' name='presentationDate' value={formData.presentationDate} onChange={handleChange} />
        </div>

        <button type='submit' className='form-licit-submit-btn'>
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Form_Licitaciones;
