import React from 'react'
import Home from './pages/Home'
import Section from './pages/Section'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'
import Footer from './components/Footer'

function App() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992); // Decide la larghezza massima per determinare se è mobile o desktop
    };

    handleResize(); // Controlla la dimensione iniziale all'avvio dell'app
    window.addEventListener('resize', handleResize); // Aggiunge un listener per rilevare i cambiamenti di dimensione della finestra

    return () => {
      window.removeEventListener('resize', handleResize); // Pulisce il listener quando il componente viene smontato
    };
  }, []);

  return (
    <div className='container-xl px-lg-5'>
      <BrowserRouter>
        {isMobile ? <NavbarMobile /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section/:sectionName" element={<Section />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
