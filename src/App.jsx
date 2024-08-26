//App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import Principal from './pages/Principal.jsx';
import Especialidad from './pages/Especialidad.jsx';
import Licitacion from './pages/Licitacion.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';

/* Creación de rutas*/
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/especialidades" element={<Especialidad />} />
        <Route path="/licitaciones" element={<Licitacion />} />
      </Routes>
    </Router>
  );
}

export default App;
