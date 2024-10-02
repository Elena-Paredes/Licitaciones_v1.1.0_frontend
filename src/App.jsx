//App.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*importación de rutas*/
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Principal from "./pages/Principal.jsx";
import Linea_Negocios from "./pages/Linea_Negocios.jsx";
import Licitacion from "./pages/Licitacion.jsx";
import Caracteristica from "./pages/Caracteristica.jsx";
import Empresa from "./pages/Empresa.jsx";
import Estatus from "./pages/Estatus.jsx";
import Fechas from "./pages/Fechas.jsx";
import Contrato from "./pages/Contrato.jsx";
import Form_Licitaciones from "./pages/Form_Licitaciones.jsx";

import $ from "jquery";

/* Creación de rutas*/
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/lineas-negocios" element={<Linea_Negocios />} />
        <Route path="/licitaciones" element={<Licitacion />} />
        <Route path="/caracteristicas" element={<Caracteristica />} />
        <Route path="/empresas" element={<Empresa />} />
        <Route path="/estatus" element={<Estatus />} />
        <Route path="/fechas" element={<Fechas />} />
        <Route path="/detalles-contrato" element={<Contrato />} />
        <Route path="/agregar_licitaciones" element={<Form_Licitaciones />} />
      </Routes>
    </Router>
  );
}

export default App;
