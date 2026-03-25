import {
  Search,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
  setIsBookingModalOpen: (val: boolean) => void;
  navItems: { name: string; href: string }[];
}

export default function Navbar({ isMenuOpen, setIsMenuOpen, setIsBookingModalOpen, navItems }: NavbarProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAppointment = location.pathname === '/appointment';
  const isDarkPage = isHome || isAppointment;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 m-5 z-[80] 
  transition-all duration-500
  px-6 py-4 flex justify-between items-center
  rounded-full w-auto backdrop-blur-xl  
  ${isMenuOpen
            ? 'bg-medical-dark text-white'
            : `bg-white/80 backdrop-blur-xl border border-white/20 shadow-sm 
         ${isDarkPage
              ? 'lg:bg-medical-blue lg:backdrop-blur-none lg:border-none lg:shadow-none lg:text-white'
              : 'lg:bg-medical-blue lg:backdrop-blur-md lg:border lg:border-medical-soft/20 lg:text-white'
            }`
          }`}
      >

        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 z-10">
          <div className="w-8 h-8 rounded-full bg-medical-blue flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className={`text-2xl font-bold tracking-tight transition-colors ${isMenuOpen ? 'text-white' : `text-white ${isDarkPage ? 'lg:text-white' : 'lg:text-white'}`}`}>Abba Sena Hospital</span>
        </Link>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
          {navItems.map((item) => (
            item.href.startsWith('#') && isHome ? (
              <a
                key={item.name}
                href={item.href}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all hover:bg-white/20 ${isDarkPage ? 'text-white' : 'text-white'}`}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href.startsWith('#') ? `/${item.href}` : item.href}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all hover:bg-white/20 ${isDarkPage ? 'text-white' : 'text-white'}`}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        {/* Right: Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/appointment"
            className={`hidden md:flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all bg-white text-medical-blue hover:bg-white/90 shadow-xl shadow-black/10`}
          >
            Book Appointment
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all ${isMenuOpen ? 'bg-white/10 text-white' : 'bg-medical-dark text-white'}`}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu-overlay"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <motion.div key={item.name} whileHover={{ scale: 1.1 }}>
                  {item.href.startsWith('#') && isHome ? (
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="mobile-nav-link"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.href.startsWith('#') ? `/${item.href}` : item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="mobile-nav-link"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <Link
                to="/appointment"
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 bg-medical-blue text-white px-12 py-4 rounded-full font-bold text-xl text-center"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
