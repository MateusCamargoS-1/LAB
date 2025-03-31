import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Insurance from './components/Insurance';
import Contact from './components/Contact';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Insurance />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/convenios" element={<Insurance />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;