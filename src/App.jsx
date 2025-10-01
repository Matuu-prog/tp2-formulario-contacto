import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageUploader from './components/ImageUploader';
import ContactForm from './components/ContactForm';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <Router>
      <nav >
        <Link to="/" style={{ marginRight: "10px" }}>Subir Imagen</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ImageUploader />} />
        <Route path="/contacto" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App
