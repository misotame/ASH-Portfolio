import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Zap,
  ShieldCheck,
  Users,
  Award,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export default function Contact({ setIsBookingModalOpen }: { setIsBookingModalOpen: (val: boolean) => void }) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [hideMarker, setHideMarker] = useState(false);


  const faqs = [
    {
      question: "How quickly will I get a response?",
      answer: "Our team typically responds to all inquiries within 2-4 hours during business hours. For urgent medical matters, please use our emergency hotline."
    },
    {
      question: "Can I book appointments online?",
      answer: "Yes! You can book appointments directly through our website using the 'Book Appointment' button found on most pages."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "We provide 24/7 emergency medical support and a round-the-clock trauma center. General inquiries are handled during standard business hours."
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We accept most major insurance providers, including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, and Medicare. Please contact our billing department for specific plan verification."
    },
    {
      question: "How do I access my medical records?",
      answer: "You can access your medical records securely through our Patient Portal. Alternatively, you can request physical copies by contacting our Medical Records department directly."
    },
    {
      question: "Is there parking available on-site?",
      answer: "Yes, we offer free on-site parking for patients and visitors, including dedicated accessible parking spaces near the main entrance and valet services during peak hours."
    },
    {
      question: "How can I cancel or reschedule an appointment?",
      answer: "You can reschedule or cancel your appointment through the Patient Portal or by calling our central scheduling line at least 24 hours in advance."
    },
    {
      question: "Do you offer telemedicine or virtual consultations?",
      answer: "Absolutely. We offer secure video consultations for many specialties, allowing you to speak with your doctor from the comfort of your home."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant previous medical records or test results."
    }
  ];

  const contactDetails = [
    { icon: <MapPin className="w-5 h-5" />, title: "Address", content: "East Welega Zone, Nekemte, Ethiopia" },
    { icon: <Phone className="w-5 h-5" />, title: "Phone", content: "+251 911 718 959", sub: "Emergency: 24/7 Available" },
    { icon: <Mail className="w-5 h-5" />, title: "Email", content: "abbasenahospital@gmail.com" },
    { icon: <Clock className="w-5 h-5" />, title: "Working Hours", content: "Emergency: 24/7", sub: "General: Mon-Sun 8:00 AM - 6:00 PM" }
  ];

  const quickActions = [
    { icon: <Calendar className="w-6 h-6" />, title: "Book Appointment", text: "Schedule your visit online", action: () => navigate('/appointment') },
    { icon: <Phone className="w-6 h-6" />, title: "Call Emergency", text: "Immediate trauma support", action: () => window.location.href = 'tel:+15559110000' },
    { icon: <MessageSquare className="w-6 h-6" />, title: "Live Chat", text: "Speak with our agents", action: () => console.log('Chat opened') },
    { icon: <Mail className="w-6 h-6" />, title: "Email Support", text: "Get a detailed response", action: () => window.location.href = 'mailto:support@futurehealth.com' }
  ];

  return (
    <div className="min-h-screen bg-white text-medical-dark selection:bg-medical-blue/30 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-medical-blue/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

          {/* Glowing Particles (Animated via CSS) */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 50 - 25, 0],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
                className="absolute w-1 h-1 bg-medical-blue rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#1A5FFF 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-blue/5 border border-medical-blue/10 backdrop-blur-md text-medical-blue text-sm font-bold tracking-widest uppercase">
              <MessageSquare className="w-4 h-4" /> Always Connected
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-medical-dark">
              Get in <span className="text-medical-blue italic font-serif">Touch</span>.
            </h1>
            <p className="text-xl text-medical-gray max-w-2xl mx-auto leading-relaxed">
              We’re here to care for you — anytime, anywhere. Reach out to our dedicated team of professionals.
            </p>
          </motion.div>

          {/* Floating Glass UI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { label: "24/7 Emergency Support", icon: <Zap className="w-6 h-6" />, color: "blue" },
              { label: "Quick Response Team", icon: <ShieldCheck className="w-6 h-6" />, color: "purple" },
              { label: "Multiple Channels", icon: <Users className="w-6 h-6" />, color: "cyan" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(26, 95, 255, 0.1)" }}
                className="bg-white/80 backdrop-blur-2xl border border-medical-blue/10 p-6 rounded-3xl shadow-xl flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-2xl bg-${stat.color === 'blue' ? 'medical-blue' : stat.color === 'purple' ? 'purple-500' : 'cyan-500'}/10 flex items-center justify-center text-${stat.color === 'blue' ? 'medical-blue' : stat.color === 'purple' ? 'purple-600' : 'cyan-600'}`}>
                  {stat.icon}
                </div>
                <div className="text-sm font-bold text-medical-dark text-left">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Panel */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-3xl border border-medical-blue/10 rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
          >
            {/* Left Side: Contact Details */}
            <div className="lg:w-2/5 p-12 md:p-16 space-y-12 bg-medical-blue/5">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight text-medical-dark">Contact Information</h2>
                <p className="text-medical-gray">Our dedicated support team is ready to assist you with any questions or concerns.</p>
              </div>

              <div className="space-y-6">
                {contactDetails.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-6 p-6 rounded-3xl bg-white border border-medical-blue/5 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-medical-blue/10 flex items-center justify-center text-medical-blue group-hover:scale-110 transition-transform">
                      {detail.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-medical-muted uppercase tracking-widest mb-1">{detail.title}</div>
                      <div className="text-medical-dark font-bold">{detail.content}</div>
                      {detail.sub && <div className="text-sm text-medical-blue mt-1 font-medium">{detail.sub}</div>}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 border-t border-medical-blue/10">
                <div className="text-xs font-bold text-medical-muted uppercase tracking-widest mb-6">Stay Connected</div>
                <div className="flex gap-4">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -5, backgroundColor: '#1A5FFF', color: '#fff' }}
                      className="w-12 h-12 rounded-2xl bg-white border border-medical-blue/10 flex items-center justify-center text-medical-blue transition-all shadow-sm"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="flex-1 p-12 md:p-16 space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight text-medical-dark">Send us a Message</h2>
                <p className="text-medical-gray">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold text-medical-muted uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-medical-soft/30 border border-medical-blue/5 rounded-2xl py-4 px-6 text-medical-dark focus:outline-none focus:border-medical-blue/40 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold text-medical-muted uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-medical-soft/30 border border-medical-blue/5 rounded-2xl py-4 px-6 text-medical-dark focus:outline-none focus:border-medical-blue/40 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold text-medical-muted uppercase tracking-widest ml-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+251 911 718 959"
                      className="w-full bg-medical-soft/30 border border-medical-blue/5 rounded-2xl py-4 px-6 text-medical-dark focus:outline-none focus:border-medical-blue/40 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold text-medical-muted uppercase tracking-widest ml-1">Subject</label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full bg-medical-soft/30 border border-medical-blue/5 rounded-2xl py-4 px-6 text-medical-dark focus:outline-none focus:border-medical-blue/40 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-medical-muted uppercase tracking-widest ml-1">Your Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full bg-medical-soft/30 border border-medical-blue/5 rounded-2xl py-4 px-6 text-medical-dark focus:outline-none focus:border-medical-blue/40 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(26, 95, 255, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-medical-blue text-white py-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl transition-all relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  Send Message <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="h-[600px] rounded-[4rem] overflow-hidden border border-medical-blue/10 shadow-2xl relative">
            {/* Placeholder for Map - In real app use Google Maps or Mapbox */}
            <div className="absolute inset-0 bg-medical-soft/50 flex items-center justify-center" onMouseDown={() => setHideMarker(true)}
              onTouchStart={() => setHideMarker(true)}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7505062610244!2d36.5470659!3d9.086478299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x165301af49d07e47%3A0xc53732e75ad436a4!2sAbba%20Sena%20Hospital!5e0!3m2!1sen!2set!4v1774459567051!5m2!1sen!2set" allowfullscreen="" loading="lazy" className="w-full h-full object-cover" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>

            Floating Map Card
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute top-12 right-12 z-20 bg-transparent backdrop-blur-sm p-10 rounded-[3rem] border border-medical-blue/10 shadow-2xl max-w-sm"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-medical-dark">Visit Our Hospital</h3>
                  <p className="text-medical-gray text-sm leading-relaxed">
                    Our hospital is located in Nekemte, East Welega Zone, Oromia Region, Ethiopia. We serve the community of Western Oromia with accessible healthcare services.
                  </p>
                </div>
                <button className="w-full py-4 rounded-2xl bg-medical-blue text-white font-bold text-sm uppercase tracking-widest hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  Get Directions <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Map Marker Placeholder */}
            {!hideMarker && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-12 h-12 bg-medical-blue/20 rounded-full flex items-center justify-center"
                >
                  <div className="w-4 h-4 bg-medical-blue rounded-full shadow-[0_0_20px_rgba(26,95,255,1)]"></div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className="py-32 px-6 bg-medical-soft/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickActions.map((action, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10, backgroundColor: '#fff', borderColor: 'rgba(26, 95, 255, 0.2)' }}
                onClick={action.action}
                className="p-8 rounded-[2.5rem] border border-medical-blue/5 bg-white/50 backdrop-blur-xl transition-all cursor-pointer group shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-medical-blue/5 flex items-center justify-center text-medical-blue mb-6 group-hover:scale-110 transition-transform">
                  {action.icon}
                </div>
                <h4 className="text-xl font-bold text-medical-dark mb-2">{action.title}</h4>
                <p className="text-sm text-medical-gray leading-relaxed">{action.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Highlight Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-20 rounded-[4rem] overflow-hidden text-center space-y-8"
          >
            {/* Red Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-red-600/5 to-transparent backdrop-blur-3xl border border-red-500/10"></div>

            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-600 mx-auto animate-pulse">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-medical-dark">
                In Case of Emergency, <br />
                <span className="text-red-600">Call Immediately</span>.
              </h2>
              <div className="text-5xl md:text-7xl font-black text-medical-dark tracking-tighter">
                +251 911 718 959
              </div>
              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = 'tel:+15559110000'}
                  className="bg-red-600 text-white px-12 py-6 rounded-2xl font-bold text-xl flex items-center gap-4 mx-auto shadow-2xl"
                >
                  <Phone className="w-6 h-6" /> Call Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Mini Section */}
      <section className="py-32 px-6 bg-medical-soft/10">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter text-medical-dark">Common Questions</h2>
            <p className="text-medical-gray">Quick answers to frequently asked contact inquiries.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-3xl border border-medical-blue/5 bg-white overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-medical-soft/30 transition-all"
                >
                  <span className="font-bold text-medical-dark">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-medical-blue transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-medical-gray text-sm leading-relaxed border-t border-medical-soft">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Element Bar */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-3xl border border-medical-blue/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl"
          >
            {[
              { label: "Patient Satisfaction", value: "99%", icon: <Award className="w-5 h-5" /> },
              { label: "Years of Service", value: "25+", icon: <Clock className="w-5 h-5" /> },
              { label: "Patients Served", value: "1M+", icon: <Users className="w-5 h-5" /> }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-medical-blue/5 flex items-center justify-center text-medical-blue group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold text-medical-dark mb-1">{stat.value}</div>
                  <div className="text-xs text-medical-muted uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
                {idx < 2 && <div className="hidden md:block w-px h-12 bg-medical-blue/10 ml-8"></div>}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
