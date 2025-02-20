import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import Service from './Components/Service/Service';
import Footer from './Components/Footer/Footer';
import Company from './Components/Company/Company';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer/>
    </>
  );
};

export default App;
