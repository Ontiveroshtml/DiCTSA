import React from 'react'
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Nosotros from './components/Nosotros'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import Ubicacion from './components/Ubicacion'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Inicio />
      <Nosotros />
      {/* <Galeria /> */}
      <Contacto />
      <Ubicacion />
      <Footer />
    </div>
  );
}

export default App;
