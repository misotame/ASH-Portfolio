import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modals from './components/Modals';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Facilities from './pages/Facilities';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';

// Scroll to top component to handle route changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  
  return null;
}

export default function App() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<any>(null);

  const navItems = [
    { name: 'Doctors', href: '/doctors' },
    { name: 'Book Appointment', href: '/appointment' },
    { name: 'Contact', href: '/contact' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Membership', href: '/#membership' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          setIsBookingModalOpen={setIsBookingModalOpen}
          navItems={navItems}
        />
        
        <Routes>
          <Route path="/" element={
            <Home 
              setIsBookingModalOpen={() => navigate('/appointment')} 
              setSelectedFacility={setSelectedFacility} 
            />
          } />
          <Route path="/about" element={
            <About onBookNow={() => navigate('/appointment')} />
          } />
          <Route path="/services" element={
            <Services onBookNow={() => navigate('/appointment')} />
          } />
          <Route path="/facilities" element={
            <Facilities setIsBookingModalOpen={() => navigate('/appointment')} />
          } />
          <Route path="/doctors" element={
            <Doctors setIsBookingModalOpen={() => navigate('/appointment')} />
          } />
          <Route path="/contact" element={
            <Contact setIsBookingModalOpen={() => navigate('/appointment')} />
          } />
          <Route path="/appointment" element={
            <Appointment />
          } />
        </Routes>

        <Footer 
          setIsNewsletterModalOpen={setIsNewsletterModalOpen} 
          setIsBookingModalOpen={setIsBookingModalOpen} 
        />

        <Modals 
          isBookingModalOpen={isBookingModalOpen}
          setIsBookingModalOpen={setIsBookingModalOpen}
          isNewsletterModalOpen={isNewsletterModalOpen}
          setIsNewsletterModalOpen={setIsNewsletterModalOpen}
          selectedFacility={selectedFacility}
          setSelectedFacility={setSelectedFacility}
        />
      </div>
    </>
  );
}
