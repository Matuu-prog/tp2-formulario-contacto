import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageUploader from './components/ImageUploader';
import ContactForm from './components/ContactForm';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Servicios from './components/Servicios';



function App() {
  return (
    <Router>
      <nav >
        <Link to="/" style={{ marginRight: "10px" }}>Subir Imagen</Link>
        <Link to="/contacto" style={{ marginRight: "10px" }}>Contacto</Link>
        <Link to="/servicios">Servicios</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ImageUploader />} />
        <Route path="/contacto" element={<ContactForm />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </Router>
  );
}

export default App
