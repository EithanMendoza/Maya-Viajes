// src/App.jsx (VERSIÓN CORRECTA)
import { useState } from 'react'
// Quita todas las importaciones no utilizadas: reactLogo, viteLogo, etc.
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/Home/HomePage'
import Footer from './components/Footer';

function App() {
    return (
        // Solo renderiza la página
        <div className="w-full">
            <Navbar />
            <HomePage />
            <Footer/>
        </div>  
    );
}

export default App