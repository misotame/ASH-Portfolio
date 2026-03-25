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

export default function Footer({ setIsNewsletterModalOpen, setIsBookingModalOpen }: { setIsNewsletterModalOpen: (val: boolean) => void, setIsBookingModalOpen: (val: boolean) => void }) {
  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Footer: Let's Connect */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-24">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Let's Connect with us</h2>
          <div className="flex gap-4">
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-medical-blue text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#7C3AED] transition-all"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="border border-white/20 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-white/5 transition-all"
            >
              Contact Us <ArrowUpRight className="w-5 h-5" />
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
                M
              </div>
              <span className="text-3xl font-bold tracking-tight">Abba Sena Hospital</span>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold">Subscribe our newsletter for update</h4>
              <div className="relative max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter you email address.." 
                  className="newsletter-input"
                />
                <button 
                  onClick={() => setIsNewsletterModalOpen(true)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-medical-blue text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#7C3AED] transition-all"
                >
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-all">
                 <div className="flex items-center gap-3">
                   <Apple className="w-6 h-6" />
                   <div className="text-left">
                     <p className="text-[10px] text-gray-400 uppercase leading-none">Download on the</p>
                     <p className="text-sm font-bold leading-none mt-1">App Store</p>
                   </div>
                 </div>
              </button>
              <button className="bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-all">
                 <div className="flex items-center gap-3">
                   <Play className="w-6 h-6" />
                   <div className="text-left">
                     <p className="text-[10px] text-gray-400 uppercase leading-none">GET IT ON</p>
                     <p className="text-sm font-bold leading-none mt-1">Google Play</p>
                   </div>
                 </div>
              </button>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="space-y-8">
              <h4 className="font-bold text-lg text-white">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="footer-link">People platform</a></li>
                <li><a href="#" className="footer-link">Full-service</a></li>
                <li><a href="#" className="footer-link">Employee Benefits</a></li>
                <li><a href="#" className="footer-link">Hiring and onboarding</a></li>
                <li><a href="#" className="footer-link">Talent management</a></li>
                <li><a href="#" className="footer-link">Insights and reporting</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="font-bold text-lg text-white">Features</h4>
              <ul className="space-y-4">
                <li><a href="#" className="footer-link">Primary Care</a></li>
                <li><a href="#" className="footer-link">Telehealth</a></li>
                <li><a href="#" className="footer-link">Cardiology</a></li>
                <li><a href="#" className="footer-link">Mental Health Services</a></li>
                <li><a href="#" className="footer-link">Integrations</a></li>
                <li><a href="#" className="footer-link">Pricing</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="font-bold text-lg text-white">Solutions</h4>
              <ul className="space-y-4">
                <li><a href="#" className="footer-link">CareCrafters</a></li>
                <li><a href="#" className="footer-link">HealthBridge</a></li>
                <li><a href="#" className="footer-link">VitalLink</a></li>
                <li><a href="#" className="footer-link">Global Business</a></li>
                <li><a href="#" className="footer-link">Health Articles & Blogs</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="font-bold text-lg text-white">For Accountants</h4>
              <ul className="space-y-4">
                <li><a href="#" className="footer-link">Become a partner</a></li>
                <li><a href="#" className="footer-link">Partner community</a></li>
                <li><a href="#" className="footer-link">Professional development</a></li>
                <li><a href="#" className="footer-link">People Advisory</a></li>
                <li><a href="#" className="footer-link">Accountant blog</a></li>
                <li><a href="#" className="footer-link">Resources</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
            <span>Abba Sena Hospital© 2026 Privacy</span>
            <span>Accessibility</span>
            <span>Terms</span>
            <span>Licenses</span>
            <span>Site map</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="social-icon"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="social-icon"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="social-icon"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="social-icon"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
