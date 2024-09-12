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
import Especialidad from "./pages/Especialidad.jsx";
import Licitacion from "./pages/Licitacion.jsx";
import Dependencia from "./pages/Dependencia.jsx";
import Empresa from "./pages/Empresa.jsx";
import Incumplimiento from "./pages/Incumplimiento.jsx";
import Estatus from "./pages/Estatus.jsx";
import Contrato from "./pages/Contrato.jsx";
import Proceso from "./pages/Proceso.jsx";
import Form_Licitaciones from "./pages/Form_Licitaciones.jsx";

import $ from "jquery";
import Incumplimientos from "./pages/Incumplimiento.jsx";

/* Creación de rutas*/
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/lineas-negocios" element={<Especialidad />} />
        <Route path="/licitaciones" element={<Licitacion />} />
        <Route path="/dependencias" element={<Dependencia />} />
        <Route path="/empresas" element={<Empresa />} />
        <Route path="/incumplimientos" element={<Incumplimiento />} />
        <Route path="/estatus" element={<Estatus />} />
        <Route path="/detalles-contrato" element={<Contrato />} />
        <Route path="/proceso" element={<Proceso />} />
        <Route path="/agregar_licitaciones" element={<Form_Licitaciones />} />
      </Routes>
    </Router>
  );
}

export default App;
