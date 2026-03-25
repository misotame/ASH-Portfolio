import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Activity, 
  Stethoscope, 
  Zap, 
  Microscope, 
  Heart, 
  ArrowRight, 
  ArrowUpRight,
  Monitor,
  Thermometer,
  Dna,
  Database,
  Users,
  Award,
  CheckCircle2
} from 'lucide-react';

interface FacilitiesProps {
  setIsBookingModalOpen: (val: boolean) => void;
}

export default function Facilities({ setIsBookingModalOpen }: FacilitiesProps) {
  const navigate = useNavigate();
  const stats = [
    { label: "Patients Served", value: "50,000+", icon: <Users className="w-5 h-5" /> },
    { label: "Years Experience", value: "20+", icon: <Award className="w-5 h-5" /> },
    { label: "Satisfaction Rate", value: "99%", icon: <CheckCircle2 className="w-5 h-5" /> },
  ];

  const facilityDetails = [
    {
      title: "Cardiac Care Unit",
      icon: <Heart className="w-8 h-8" />,
      image: "https://d14d5nk8lue86f.cloudfront.net/s3fs-public/2017-04/4.28.17.care_.unit_.header.jpg",
      description: "Our Cardiac Care Unit is equipped with the latest monitoring technology and staffed by expert cardiologists 24/7.",
      features: ["Advanced ECG Monitoring", "Emergency Defibrillation", "Specialized Nursing Staff", "Rapid Response Team"]
    },
    {
      title: "Diagnostic Center",
      icon: <Microscope className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1579154234431-da6781d70a2c?auto=format&fit=crop&q=80&w=800",
      description: "State-of-the-art diagnostic imaging including 3T MRI, 128-slice CT, and advanced pathology labs.",
      features: ["3T MRI Imaging", "128-Slice CT Scan", "Digital X-Ray", "Automated Lab Testing"]
    },
    {
      title: "Pediatric Wing",
      icon: <Stethoscope className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1502740479734-539d4f0d0582?auto=format&fit=crop&q=80&w=800",
      description: "A child-friendly environment designed to make medical visits comfortable and stress-free for our young patients.",
      features: ["Child-Friendly Rooms", "Specialized Pediatricians", "Play Areas", "Safety-First Design"]
    },
    {
      title: "Neurology Lab",
      icon: <Activity className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
      description: "Specialized lab for brain and nervous system diagnostics using advanced EEG and neuro-imaging.",
      features: ["Advanced EEG", "Sleep Study Lab", "Neuro-Imaging", "Cognitive Testing"]
    },
    {
      title: "Emergency Trauma Center",
      icon: <Zap className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      description: "24/7 critical care and rapid response medical services for all types of emergencies.",
      features: ["24/7 Availability", "Trauma Surgeons", "Ambulance Fleet", "Critical Care Units"]
    },
    {
      title: "Robotic Surgery Suite",
      icon: <Monitor className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
      description: "Minimally invasive surgical procedures using state-of-the-art robotic assistance for faster recovery.",
      features: ["Da Vinci Robotic System", "Precision Surgery", "Faster Recovery", "Expert Surgeons"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-medical-dark selection:bg-medical-blue/30">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Design */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-medical-blue/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-cyan-400/5 rounded-full blur-[100px]"></div>
          
          {/* Medical Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#1A5FFF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          {/* Abstract DNA/Heartbeat lines could be added here with SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.1]" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100 Q 250 50 500 100 T 1000 100" fill="none" stroke="#1A5FFF" strokeWidth="2" className="animate-[dash_10s_linear_infinite]" />
            <path d="M0 200 Q 300 250 600 200 T 1200 200" fill="none" stroke="#7C3AED" strokeWidth="2" className="animate-[dash_15s_linear_infinite]" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          {/* Left Side (Content) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-blue/5 border border-medical-blue/10 backdrop-blur-md text-medical-blue text-sm font-bold tracking-widest uppercase"
            >
              <Zap className="w-4 h-4" /> Future of Healthcare
            </motion.div>
            
            <h1 className="text-6xl lg:text-8xl font-bold leading-[1.1] tracking-tighter text-medical-dark">
              Redefining Healthcare with <br />
              <span className="text-medical-blue italic font-serif">Precision</span> & Care.
            </h1>
            
            <p className="text-xl text-medical-gray max-w-xl leading-relaxed">
              Advanced facilities, expert doctors, and compassionate service — all in one place. 
              Experience the next generation of medical excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(26, 95, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/appointment')}
                className="relative group overflow-hidden bg-medical-blue text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                Book Appointment <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(26, 95, 255, 0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white backdrop-blur-xl border border-medical-blue/20 text-medical-blue px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all"
              >
                Explore Facilities <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side (Visual Experience) */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 rounded-[3rem] overflow-hidden border border-medical-blue/10 shadow-2xl shadow-medical-blue/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" 
                alt="Advanced Medical Facility" 
                className="w-full aspect-[4/5] object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              
              {/* Holographic UI Overlays */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-medical-blue/30 rounded-tl-3xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 border-b-2 border-r-2 border-medical-blue/30 rounded-br-3xl"></div>
                
                {/* Scanning Line Animation */}
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-medical-blue/40 to-transparent z-20"
                />
              </div>
            </motion.div>

            {/* Floating Glass Cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 z-20 bg-white/80 backdrop-blur-2xl border border-medical-blue/10 p-6 rounded-3xl shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-medical-dark">24/7</div>
                  <div className="text-xs text-medical-muted uppercase tracking-widest">Emergency</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -left-16 z-20 bg-white/80 backdrop-blur-2xl border border-medical-blue/10 p-6 rounded-3xl shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-medical-dark">100+</div>
                  <div className="text-xs text-medical-muted uppercase tracking-widest">Doctors</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 right-10 z-20 bg-white/80 backdrop-blur-2xl border border-medical-blue/10 p-6 rounded-3xl shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                  <Microscope className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-medical-dark">Advanced</div>
                  <div className="text-xs text-medical-muted uppercase tracking-widest">Equipment</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        
      </section>

      {/* Advanced Facilities Grid */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block px-4 py-2 rounded-full bg-medical-blue/5 border border-medical-blue/10 text-medical-blue text-sm font-bold tracking-widest uppercase"
            >
              Our Infrastructure
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-medical-dark"
            >
              World-Class <span className="text-medical-blue">Facilities</span>.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-medical-gray leading-relaxed"
            >
              We invest in the most advanced medical technology to ensure our patients 
              receive the highest standard of care available globally.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilityDetails.map((facility, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-medical-soft/30 backdrop-blur-xl rounded-[2.5rem] border border-medical-blue/5 overflow-hidden hover:border-medical-blue/20 transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                      {facility.icon}
                    </div>
                    <div className="text-xs font-bold text-medical-muted uppercase tracking-widest">Facility 0{idx + 1}</div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-medical-dark group-hover:text-medical-blue transition-colors">{facility.title}</h3>
                    <p className="text-medical-gray leading-relaxed text-sm">
                      {facility.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {facility.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-xs text-medical-gray">
                        <div className="w-1.5 h-1.5 rounded-full bg-medical-blue"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-4 rounded-2xl bg-medical-blue/5 border border-medical-blue/10 text-medical-blue font-bold text-sm uppercase tracking-widest hover:bg-medical-blue hover:text-white transition-all flex items-center justify-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 bg-medical-soft/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 text-sm font-bold tracking-widest uppercase">
                Cutting Edge Tech
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-medical-dark">
                Innovation at the <br />
                <span className="text-purple-600 italic font-serif">Core</span>.
              </h2>
              <p className="text-xl text-medical-gray leading-relaxed">
                Our facilities are powered by the latest breakthroughs in medical science, 
                from AI-assisted diagnostics to robotic surgical systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "AI Diagnostics", desc: "Machine learning algorithms for early disease detection.", icon: <Database className="w-6 h-6" /> },
                { title: "Telemedicine", desc: "Remote consultation with world-class specialists.", icon: <Monitor className="w-6 h-6" /> },
                { title: "Precision Medicine", desc: "Treatments tailored to your genetic profile.", icon: <Dna className="w-6 h-6" /> },
                { title: "Smart Monitoring", desc: "Real-time health tracking with wearable tech.", icon: <Activity className="w-6 h-6" /> }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-medical-blue/5 hover:border-purple-500/30 transition-all group shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/5 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-bold mb-2 text-medical-dark">{item.title}</h4>
                  <p className="text-xs text-medical-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[4rem] overflow-hidden border border-medical-blue/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="Medical Technology" className="w-full aspect-square object-cover opacity-90" />
            </div>
            {/* Floating UI Elements */}
            <div className="absolute -top-10 -right-10 bg-white/90 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-medical-blue/10 shadow-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-1">99.9%</div>
              <div className="text-xs text-medical-muted uppercase tracking-widest font-bold">Accuracy Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-16 md:p-24 rounded-[4rem] overflow-hidden text-center space-y-10"
          >
            {/* Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/10 via-blue-600/5 to-purple-600/5 backdrop-blur-3xl border border-medical-blue/10"></div>
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-medical-dark">
                Ready to Experience the <br />
                <span className="text-medical-blue">Future</span> of Care?
              </h2>
              <p className="text-xl text-medical-gray max-w-2xl mx-auto">
                Join thousands of patients who have already benefited from our 
                advanced medical facilities and expert care.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-medical-blue text-white px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-medical-blue/20"
                >
                  Book Appointment Now
                </button>
                <button className="bg-white border border-medical-blue/20 text-medical-blue px-12 py-6 rounded-2xl font-bold text-xl hover:bg-medical-blue/5 transition-all">
                  Contact Support
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        svg path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }
      `}} />
    </div>
  );
}
