import { 
  Users, 
  History, 
  Target, 
  Eye, 
  Heart, 
  ShieldCheck, 
  Zap, 
  Microscope, 
  Award, 
  Globe, 
  MessageSquare,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Star,
  Clock,
  Phone,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

export default function About({ onBookNow }: { onBookNow: () => void }) {
  const stats = [
    { label: "Years of Service", value: "10+", icon: <History className="w-6 h-6" /> },
    { label: "Bed Capacity", value: "250", icon: <Users className="w-6 h-6" /> },
    { label: "Population Served", value: "5M+", icon: <ShieldCheck className="w-6 h-6" /> },
  ];

  const timeline = [
    { year: "2014", title: "Hospital Founded", desc: "Abba Sena General Hospital was established in Nekemte, Oromia, with a vision to provide accessible healthcare to Western Oromia." },
    { year: "2014-2020", title: "Growth & Development", desc: "Expanded services to include emergency care, obstetrics, pediatrics, and general surgery, serving the growing population." },
    { year: "2020-Present", title: "Community Service", desc: "Continuing to serve over 5 million people with approximately 4,000 births per year and 24/7 emergency services." },
  ];

  const coreValues = [
    { title: "Compassion", icon: <Heart className="w-8 h-8" />, desc: "We treat every patient with empathy and kindness." },
    { title: "Integrity", icon: <ShieldCheck className="w-8 h-8" />, desc: "We uphold the highest ethical standards in medicine." },
    { title: "Excellence", icon: <Award className="w-8 h-8" />, desc: "We strive for the best outcomes in everything we do." },
    { title: "Innovation", icon: <Zap className="w-8 h-8" />, desc: "We embrace new technologies to improve care." },
    { title: "Patient-First", icon: <Users className="w-8 h-8" />, desc: "Our patients are at the heart of every decision." },
  ];

  const whyChooseUs = [
    { title: "Certified Doctors", desc: "Our team consists of world-class, board-certified specialists.", icon: <Users className="w-6 h-6" /> },
    { title: "Modern Equipment", desc: "We use the latest medical technology for precise diagnostics.", icon: <Microscope className="w-6 h-6" /> },
    { title: "24/7 Emergency", desc: "Our emergency response team is always ready to save lives.", icon: <Clock className="w-6 h-6" /> },
    { title: "Transparent Pricing", desc: "Affordable healthcare with no hidden costs or surprises.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Safety & Hygiene", desc: "We maintain the highest standards of cleanliness and safety.", icon: <CheckCircle2 className="w-6 h-6" /> },
  ];

  const leadership = [
    { name: "Dr. Abebè", title: "Hospital Director", image: "https://picsum.photos/seed/leader1/400/400", bio: "Leading Abba Sena General Hospital with dedication to providing quality healthcare to the community of Western Oromia." },
    { name: "Medical Team", title: "Department Heads", image: "https://picsum.photos/seed/leader2/400/400", bio: "Our dedicated department heads oversee emergency services, obstetrics, pediatrics, internal medicine, and surgery." },
    { name: "Nursing Leadership", title: "Chief Nursing Officer", image: "https://picsum.photos/seed/leader3/400/400", bio: "Ensuring compassionate patient care and maintaining high standards of nursing practice across all wards." },
  ];

  const testimonials = [
    { name: "John Smith", quote: "The care I received at Abba Sena Hospitalwas exceptional. The staff was professional and truly cared about my recovery.", rating: 5 },
    { name: "Emily Davis", quote: "State-of-the-art facilities and very knowledgeable doctors. Highly recommend for any specialized care.", rating: 5 },
  ];

  return (
    <div className="pt-24 bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://thumbs.dreamstime.com/b/inside-modern-smart-hospital-cutting-edge-technologies-seamlessly-integrate-compassionate-care-creating-environment-305907805.jpg" 
            alt="About Our Hospital" 
            className="w-full h-full object-cover blur-sm"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-medical-blue">
              <span>Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">About Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">About Our Hospital</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
              Committed to Excellence in Healthcare. Emphasizing care, trust, and innovation in every step of your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="pill-tag text-medical-blue border-medical-blue/20">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-bold text-medical-dark">Dedicated to Your Well-being</h2>
              <p className="text-lg text-medical-gray leading-relaxed">
                Abba Sena General Hospital is more than just a hospital; we are a community dedicated to healing and innovation. Established in 2014, we serve over 5 million people in Western Oromia with 24/7 emergency care, maternity services (approximately 4,000 births per year), pediatrics, and general medicine. Our patient-centered approach ensures that every individual receives personalized care tailored to their unique needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="text-medical-blue mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-medical-dark">{stat.value}</div>
                    <div className="text-sm text-medical-muted font-medium uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/who-we-are/800/1000" alt="Hospital Interior" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-medical-blue text-white p-10 rounded-[2.5rem] shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Service</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY / HISTORY */}
      <section className="section-padding bg-medical-soft/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="pill-tag text-medical-lovely border-medical-lovely/20">Our History</span>
            <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mt-4">A Journey of Healing</h2>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-medical-blue/20 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className={`p-8 bg-white rounded-[2rem] shadow-sm border border-gray-100 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="text-medical-blue font-bold text-xl mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold text-medical-dark mb-2">{item.title}</h4>
                      <p className="text-medical-gray">{item.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-medical-blue border-4 border-white shadow-lg flex items-center justify-center text-white">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION, VISION & CORE VALUES */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-medical-blue text-white rounded-[3rem] space-y-6"
            >
              <Target className="w-12 h-12" />
              <h3 className="text-3xl font-bold">Our Mission</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                To provide high-quality, accessible, and compassionate healthcare services to the people of Western Oromia, improving community well-being through dedicated medical care and emergency services.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-12 bg-medical-dark text-white rounded-[3rem] space-y-6"
            >
              <Eye className="w-12 h-12" />
              <h3 className="text-3xl font-bold">Our Vision</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                To be the leading healthcare provider in Western Oromia, recognized for our commitment to patient-centered care, community service, and accessible medical solutions for all.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-12 bg-medical-soft text-medical-dark rounded-[3rem] space-y-6"
            >
              <Heart className="w-12 h-12 text-medical-blue" />
              <h3 className="text-3xl font-bold">Our Core Values</h3>
              <p className="text-medical-gray leading-relaxed text-lg">
                We are guided by compassion, integrity, and a relentless pursuit of excellence in every patient interaction and medical procedure.
              </p>
            </motion.div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-medical-dark border-b-2 border-medical-blue pb-4">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {coreValues.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center space-y-4 text-2xl font-bold text-medical-dark"
              >
                <div className="w-20 h-20 rounded-3xl bg-medical-soft flex items-center justify-center text-medical-blue mx-auto mb-4 ">
                  {value.icon}
                </div>
                <h4 className="font-bold text-medical-dark">{value.title}</h4>
                <p className="text-xs text-medical-gray px-4">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="section-padding bg-medical-dark text-white ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="pill-tag text-white border-white/20">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Setting New Standards in Healthcare</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                We combine world-class expertise with state-of-the-art technology to provide a healthcare experience that is safe, effective, and compassionate.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                    <div className="text-medical-blue shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-[24px] mb-1">{item.title}</h4>
                      <p className="text-xs text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden aspect-[4/5]">
                <img src="https://picsum.photos/seed/why-us/800/1000" alt="Medical Technology" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-10 -right-10 bg-medical-blue p-8 rounded-[2rem] shadow-2xl hidden xl:block">
                <ShieldCheck className="w-12 h-12 mb-4" />
                <div className="text-2xl font-bold">100% Safe</div>
                <div className="text-xs opacity-80">Patient Safety Standards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP TEAM */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="pill-tag text-medical-blue border-medical-blue/20">Our Leadership</span>
            <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mt-4">The Minds Behind Abba Sena Hospital</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leadership.map((leader, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="rounded-[2.5rem] overflow-hidden aspect-square mb-6 relative">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-medical-blue transition-colors cursor-pointer">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-medical-blue transition-colors cursor-pointer">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-medical-dark">{leader.name}</h4>
                <p className="text-medical-blue font-bold text-sm uppercase tracking-widest mb-4">{leader.title}</p>
                <p className="text-medical-gray text-sm leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR CULTURE & CARE APPROACH */}
      <section className="section-padding bg-medical-soft/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="pill-tag text-medical-lovely border-medical-lovely/20">Our Culture</span>
                <h2 className="text-4xl md:text-5xl font-bold text-medical-dark">A Philosophy of Empathy</h2>
                <p className="text-lg text-medical-gray leading-relaxed">
                  At Abba Sena Hospital, our culture is built on the foundation of patient-centered care. We believe that healing begins with respect and empathy. Our ethical medical practices ensure that every patient is treated with the dignity they deserve, fostering an environment where trust and recovery go hand in hand.
                </p>
                <div className="p-8 bg-medical-soft rounded-3xl border-l-4 border-medical-blue italic text-medical-dark font-medium">
                  "Our goal is not just to treat symptoms, but to care for the whole person. We believe in medicine that listens."
                  <span className="block mt-4 not-italic font-bold text-sm text-medical-muted">— Abba Sena General Hospital Team</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="rounded-[2rem] overflow-hidden aspect-square">
                    <img src="https://picsum.photos/seed/culture1/400/400" alt="Culture" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-[2rem] overflow-hidden aspect-[3/4]">
                    <img src="https://picsum.photos/seed/culture2/400/533" alt="Culture" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="rounded-[2rem] overflow-hidden aspect-[3/4]">
                    <img src="https://picsum.photos/seed/culture3/400/533" alt="Culture" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-[2rem] overflow-hidden aspect-square">
                    <img src="https://picsum.photos/seed/culture4/400/400" alt="Culture" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ACCREDITATIONS & 9. TECHNOLOGY */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <div>
                <span className="pill-tag text-medical-blue border-medical-blue/20">Accreditations</span>
                <h3 className="text-3xl font-bold text-medical-dark mt-4">Certified Excellence</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-24 bg-medical-soft rounded-2xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all cursor-pointer border border-transparent hover:border-medical-blue/20">
                    <div className="w-full h-full bg-medical-muted/20 rounded-lg flex items-center justify-center text-[10px] font-bold text-medical-muted uppercase tracking-widest text-center">
                      Accreditation Logo {i}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-medical-gray">
                Abba Sena Hospitalis fully compliant with international healthcare standards and holds multiple certifications for safety and quality of care.
              </p>
            </div>
            <div className="space-y-12">
              <div>
                <span className="pill-tag text-medical-blue border-medical-blue/20">Innovation</span>
                <h3 className="text-3xl font-bold text-medical-dark mt-4">Technology-Driven Care</h3>
              </div>
              <div className="space-y-6">
                <div className="flex gap-6 p-8 bg-medical-soft rounded-[2.5rem]">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-medical-blue shrink-0 shadow-sm">
                    <Zap className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-medical-dark">Advanced Diagnostics</h4>
                    <p className="text-sm text-medical-gray">Utilizing AI-powered imaging and real-time lab results for faster, more accurate diagnosis.</p>
                  </div>
                </div>
                <div className="flex gap-6 p-8 bg-medical-soft rounded-[2.5rem]">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-medical-blue shrink-0 shadow-sm">
                    <Globe className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-medical-dark">Digital Health Systems</h4>
                    <p className="text-sm text-medical-gray">Seamless integration of patient records and virtual care platforms for a unified experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. COMMUNITY IMPACT */}
      <section className="section-padding bg-gradient-to-b from-medical-blue  to-white text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full  blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="pill-tag text-white border-white/20">Community Impact</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Beyond the Hospital Walls</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                We believe that healthcare should be accessible to everyone. Our community outreach programs and free medical camps are designed to bring quality care to underserved populations.
              </p>
              <ul className="space-y-4">
                {[
                  "Annual Free Medical Camps in Rural Areas",
                  "Public Health Awareness Campaigns",
                  "School Health Screening Programs",
                  "Support Groups for Chronic Conditions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-white/80">
                    <div className="w-6 h-6 rounded-full bg-medical-blue flex items-center justify-center text-white">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <img src="https://picsum.photos/seed/impact1/400/500" className="rounded-[2rem] w-full" />
                <img src="https://picsum.photos/seed/impact2/400/400" className="rounded-[2rem] w-full" />
              </div>
              <div className="space-y-6">
                <img src="https://picsum.photos/seed/impact3/400/400" className="rounded-[2rem] w-full" />
                <img src="https://picsum.photos/seed/impact4/400/500" className="rounded-[2rem] w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIALS */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="pill-tag text-medical-blue border-medical-blue/20">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mt-4">What Our Patients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-12 bg-medical-soft rounded-[3rem] space-y-6 relative"
              >
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-500" />)}
                </div>
                <p className="text-xl text-medical-dark font-medium leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-12 rounded-full bg-medical-blue/20 flex items-center justify-center font-bold text-medical-blue">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-medical-dark">{t.name}</h4>
                    <p className="text-xs text-medical-muted uppercase tracking-widest">Verified Patient</p>
                  </div>
                </div>
                <MessageSquare className="absolute top-12 right-12 w-12 h-12 text-medical-blue/10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CALL TO ACTION */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-medical-blue to-medical-lovely/40 text-white rounded-[3rem] p-12 md:p-24 overflow-hidden"
          >
            <div className="sphere-decoration top-[-10%] left-[-5%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="sphere-decoration bottom-[-20%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="text-center space-y-8 relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight">
                Your Health Matters to Us – Book Your Visit Today
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Schedule your consultation with our world-class specialists and experience healthcare that truly listens.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={onBookNow}
                  className="bg-white text-medical-blue px-10 py-4 rounded-full font-bold flex items-center justify-center gap-4 hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Book Appointment
                  <div className="w-8 h-8 bg-medical-blue text-white rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
                <button className="border border-white/30 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-4 hover:bg-white/10 transition-all">
                  Contact Hospital
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
