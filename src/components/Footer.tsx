import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Apple,
  Play,
  ArrowRight,
  ArrowUpRight,
  Mail
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export default function Footer({ setIsNewsletterModalOpen, setIsBookingModalOpen }: { setIsNewsletterModalOpen: (val: boolean) => void, setIsBookingModalOpen: (val: boolean) => void }) {
  const { footer } = useLanguage();
  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Footer: Let's Connect */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-24">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">{footer.connect.heading}</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-medical-blue text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#7C3AED] transition-all"
            >
              {footer.connect.getStarted} <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="border border-white/20 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-white/5 transition-all"
            >
              {footer.connect.contactUs} <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="h-[1px] bg-white/10 w-full mb-24"></div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4 space-y-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-medical-blue flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <span className="text-3xl font-bold tracking-tight">{footer.brand.hospitalName}</span>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold">{footer.brand.newsletter.heading}</h4>
              <div className="relative max-w-md">
                <input
                  type="email"
                  placeholder={footer.brand.newsletter.placeholder}
                  className="newsletter-input"
                />
                <button
                  onClick={() => setIsNewsletterModalOpen(true)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-medical-blue text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#7C3AED] transition-all"
                >
                  {footer.brand.newsletter.bookDemo} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex justify-center mb-10">
              <a href="https://mita-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="border border-medical-blue hover:border-white hover:text-white py-2 px-8 rounded-full">About Developer</a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="space-y-8">
              <h4 className="font-bold text-lg text-white">{footer.links.hospital.title}</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="footer-link">{footer.links.hospital.aboutUs}</Link></li>
                <li><Link to="services" className="footer-link">{footer.links.hospital.ourServices}</Link></li>
                <li><Link to="facilities" className="footer-link">{footer.links.hospital.departments}</Link></li>
                <li><Link to="services" className="footer-link">{footer.links.hospital.leadership}</Link></li>
                <li><Link to="services" className="footer-link">{footer.links.hospital.careers}</Link></li>
                <li><Link to="contact" className="footer-link">{footer.links.hospital.contact}</Link></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="font-bold text-lg text-white">{footer.links.services.title}</h4>
              <ul className="space-y-4">
                <li><Link to="appointment" className="footer-link">{footer.links.services.emergencyCare}</Link></li>
                <li><Link to="services" className="footer-link">{footer.links.services.maternity}</Link></li>
                <li><Link to="services" className="footer-link">{footer.links.services.pediatrics}</Link></li>
                <li><Link to="services" className="footer-link">{footer.links.services.surgery}</Link></li>
                <li><Link to="services" className="footer-link">{footer.links.services.internalMedicine}</Link></li>
                <li><Link to="services" className="footer-link">{footer.links.services.laboratory}</Link></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="font-bold text-lg text-white">{footer.links.patientResources.title}</h4>
              <ul className="space-y-4">
                <li><Link to="appointment" className="footer-link">{footer.links.patientResources.patientInformation}</Link></li>
                <li><Link to="appointment" className="footer-link">{footer.links.patientResources.visitingHours}</Link></li>
                <li><Link to="appointment" className="footer-link">{footer.links.patientResources.insurance}</Link></li>
                <li><Link to="appointment" className="footer-link">{footer.links.patientResources.billing}</Link></li>
                <li><Link to="appointment" className="footer-link">{footer.links.patientResources.healthArticles}</Link></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="font-bold text-lg text-white">{footer.links.connect.title}</h4>
              <ul className="space-y-4">
                <li><Link to="#" className="footer-link">{footer.links.connect.facebook}</Link></li>
                <li><Link to="#" className="footer-link">{footer.links.connect.emergency}</Link></li>
                <li><Link to="#" className="footer-link">{footer.links.connect.email}</Link></li>
                <li><Link to="#" className="footer-link">{footer.links.connect.location}</Link></li>
                <li><Link to="#" className="footer-link">{footer.links.connect.privacyPolicy}</Link></li>
                <li><Link to="#" className="footer-link">{footer.links.connect.termsOfService}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
            <span>{footer.bottom.copyright}</span>
            <span>{footer.bottom.accessibility}</span>
            <span>{footer.bottom.terms}</span>
            <span>{footer.bottom.licenses}</span>
            <span>{footer.bottom.siteMap}</span>
          </div>
          <div className="flex gap-4">
            <Link to="#" className="social-icon"><Facebook className="w-4 h-4" /></Link>
            <Link to="#" className="social-icon"><Instagram className="w-4 h-4" /></Link>
            <Link to="#" className="social-icon"><Twitter className="w-4 h-4" /></Link>
            <Link to="#" className="social-icon"><Linkedin className="w-4 h-4" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
