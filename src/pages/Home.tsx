import React, { useState, useEffect } from 'react';
import hero_img from "../../assets/img/hero_img.png";
import hospital_build from "../../assets/img/image.png";

import { 
  Search, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Play, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  Clock, 
  Phone, 
  Mail, 
  User, 
  Stethoscope, 
  Heart, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Microscope, 
  Award, 
  Globe, 
  MessageSquare, 
  FileText, 
  MapPin, 
  Calendar, 
  Plus, 
  Minus, 
  Menu, 
  X, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Apple, 
  Send, 
  Headphones, 
  Video, 
  Smartphone, 
  LayoutGrid, 
  List, 
  Filter 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HomeProps {
  setIsBookingModalOpen: (val?: boolean) => void;
  setSelectedFacility: (val: any) => void;
}

export default function Home({ setIsBookingModalOpen, setSelectedFacility }: HomeProps) {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const heroImages = [
    "https://picsum.photos/seed/med1/1920/1080",
    "https://picsum.photos/seed/med2/1920/1080",
    "https://picsum.photos/seed/med3/1920/1080"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { icon: <Heart className="w-8 h-8" />, name: "Cardiology", desc: "Advanced heart care and diagnostics for all ages." },
    { icon: <Activity className="w-8 h-8" />, name: "Neurology", desc: "Specialized treatment for brain and nervous system disorders." },
    { icon: <Stethoscope className="w-8 h-8" />, name: "Pediatrics", desc: "Comprehensive healthcare for infants, children, and adolescents." },
    { icon: <ShieldCheck className="w-8 h-8" />, name: "Orthopedics", desc: "Expert care for bones, joints, and musculoskeletal issues." },
    { icon: <Zap className="w-8 h-8" />, name: "Emergency", desc: "24/7 critical care and rapid response medical services." },
    { icon: <Microscope className="w-8 h-8" />, name: "Diagnostics", desc: "State-of-the-art laboratory and imaging services." }
  ];

  const doctors = [
    { name: "Dr. Sarah Johnson", specialty: "Cardiology", image: "https://picsum.photos/seed/doc1/400/400", bio: "Expert in interventional cardiology with 15+ years of experience." },
    { name: "Dr. Michael Chen", specialty: "Neurology", image: "https://picsum.photos/seed/doc2/400/400", bio: "Specializes in neurodegenerative diseases and brain health." },
    { name: "Dr. Emily Brown", specialty: "Pediatrics", image: "https://picsum.photos/seed/doc3/400/400", bio: "Dedicated to providing compassionate care for children of all ages." },
    { name: "Dr. James Wilson", specialty: "Orthopedics", image: "https://picsum.photos/seed/doc4/400/400", bio: "Expert in sports medicine and joint replacement surgeries." }
  ];

  const facilities = [
    { 
      tag: "Advanced Care", 
      title: "Cardiac Care Unit", 
      image: "https://d14d5nk8lue86f.cloudfront.net/s3fs-public/2017-04/4.28.17.care_.unit_.header.jpg",
      description: "Our Cardiac Care Unit is equipped with the latest monitoring technology and staffed by expert cardiologists 24/7.",
      hours: "24/7 Emergency Service",
      contact: "Dr. Sarah Johnson"
    },
    { 
      tag: "Modern Tech", 
      title: "Diagnostic Center", 
      image: "https://i0.wp.com/pdc-et.com/wp-content/uploads/2025/04/Who_We_are_PDC.jpg?fit=1280%2C853&ssl=1",
      description: "State-of-the-art diagnostic imaging including 3T MRI, 128-slice CT, and advanced pathology labs.",
      hours: "8:00 AM - 10:00 PM",
      contact: "Dr. Michael Chen"
    },
    { 
      tag: "Patient First", 
      title: "Pediatric Wing", 
      image: "https://www.hshs.org/getmedia/3ef780ac-49b2-43f6-9fba-b405f0c5c304/Pediatric-Unit.jpg?width=700&height=394&ext=.jpg",
      description: "A child-friendly environment designed to make medical visits comfortable and stress-free for our young patients.",
      hours: "9:00 AM - 8:00 PM",
      contact: "Dr. Emily Brown "
    }
  ];

  const filteredDoctors = doctors.filter(doc => 
    (selectedSpecialty === 'All' || doc.specialty === selectedSpecialty) &&
    (doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <main className="overflow-hidden bg-[#ffffff]">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[100vh] flex items-center justify-center px-4 py-12 lg:py-20 mt-30">
        {/* Background with Gradient and Grid */}
        <div className="absolute inset-4 rounded-[40px] overflow-hidden bg-gradient-to-b from-[#1b1fee] via-[#4f4199] to-[#ffffff] z-0">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 2px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
              #1 Best Medical Center in the World
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
              We bring professional <br /> 
             mental health support. 
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              Delivering comprehensive mental health support through our innovative 
              platform that seamlessly connects your teams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 rounded-full border border-white/40 text-white font-bold hover:bg-white/10 transition-all">
                Get Started Now
              </button>
              <button 
                onClick={() => setIsBookingModalOpen()}
                className="px-8 py-4 rounded-full bg-[#1A1A1A] text-white font-bold hover:bg-black transition-all shadow-xl"
              >
                Book Appointment
              </button>
            </div>

            {/* Doctors Badge */}
            <div className="pt-8">
              <div className="inline-flex flex-col p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 space-y-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden bg-medical-soft">
                      <img 
                        src={`https://picsum.photos/seed/doc${i}/100/100`} 
                        alt="Doctor" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-[#5D5FEF] flex items-center justify-center text-white font-bold text-sm">
                    +
                  </div>
                </div>
                <p className="text-medical-blue text-sm font-medium leading-tight">
                  More than 150+ experienced <br />
                  doctors around the world
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content: Doctor Image & Floating Badges */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-2xl"
            >
              {/* Main Doctor Image */}
              <img 
                src={hero_img} 
                alt="Doctor" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Social Icons (Top Right) */}
              <div className="absolute top-10 right-0 z-20 flex gap-2">
                {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 cursor-pointer transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                ))}
              </div>

              {/* 24 Hour Service Badge */}
              <motion.a
                href="tel:+13025550107"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute left-[-10%] bottom-[20%] z-20 flex items-center gap-4 p-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 group hover:bg-white/20 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full from-medical-blue to-[#172657] flex items-center justify-center text-white shadow-lg shadow-[#5D5FEF]/40 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest">24 hour service</div>
                  <div className="text-white font-bold text-lg">(302) 555-0107</div>
                </div>
              </motion.a>

              {/* Calling Notification */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute right-[-5%] bottom-[5%] z-20 flex items-center gap-3 p-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-2xl"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src="https://picsum.photos/seed/patient1/100/100" alt="Caller" />
                </div>
                <div className="pr-4">
                  <div className="text-medical-dark font-bold text-sm">Calling.......</div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-medical-soft flex items-center justify-center text-medical-dark">
                    <Video className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-bl from-medical-blue to-[#172657] flex items-center justify-center text-white">
                    <Phone className="w-4 h-4 rotate-[135deg]" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* How We Work (Bottom Left) */}
        <div className="absolute bottom-12 left-12 z-20 hidden lg:flex items-center gap-4 ">
          <a href="#how-we-work" className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white flex items-center justify-center text-white cursor-pointer hover:bg-white/20 transition-all group">
            <div className="w-10 h-10 rounded-full bg-[#fff] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Video className="w-5 h-5 text-medical-blue"/>
            </div>
          </a>
          <span className="text-medical-blue font-bold text-sm tracking-wide bg-white px-3 py-2 rounded-full">How We Work</span>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                <img src={hospital_build} alt="Modern Hospital" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-medical-blue rounded-[3rem] p-10 text-white shadow-2xl z-20 hidden md:block">
                <ShieldCheck className="w-12 h-12 mb-6" />
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">Patient Satisfaction</div>
              </div>
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-medical-soft rounded-full -z-10"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="pill-tag text-medical-lovely border-medical-lovely/20">About Abba Sena Hospital</span>
                <h2 className="text-5xl md:text-6xl font-bold text-medical-dark leading-tight tracking-tighter">
                  We are Setting the <br />
                  <span className="text-medical-blue">Standard</span> in Care.
                </h2>
              </div>
              
              <p className="text-xl text-medical-gray leading-relaxed">
                Abba Sena Hospitalis a world-class healthcare provider dedicated to delivering 
                exceptional medical services through innovation, compassion, and expertise. 
                Our state-of-the-art facilities and renowned specialists ensure you receive 
                the best possible care.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-medical-soft flex items-center justify-center text-medical-blue shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-medical-dark mb-1">Modern Equipment</h4>
                    <p className="text-sm text-medical-muted">Latest technology for precise diagnostics.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-medical-soft flex items-center justify-center text-medical-blue shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-medical-dark mb-1">Expert Doctors</h4>
                    <p className="text-sm text-medical-muted">World-renowned medical specialists.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button className="group flex items-center gap-4 text-medical-dark font-bold text-lg">
                  <div className="w-14 h-14 rounded-full bg-medical-dark text-white flex items-center justify-center group-hover:bg-medical-blue transition-all">
                    <Play className="w-5 h-5 fill-white" />
                  </div>
                  Watch Our Story
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Expertise Section */}
      <section className="section-padding bg-medical-dark text-white overflow-hidden relative rounded-tr-[24rem] rounded-bl-[24rem]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-medical-blue/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="pill-tag text-white border-white/20">Trust & Expertise</span>
                <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                  Your Health is Our <br />
                  <span className="text-medical-blue italic font-serif">Priority</span>.
                </h2>
                <p className="text-xl text-white/60 leading-relaxed max-w-xl">
                  We combine decades of experience with the latest medical breakthroughs 
                  to provide you with a healthcare experience that is safe, effective, 
                  and deeply personal.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { title: "Personalized Treatment Plans", desc: "Tailored care specifically for your unique health needs." },
                  { title: "Advanced Surgical Procedures", desc: "Minimally invasive techniques for faster recovery." },
                  { title: "Comprehensive Aftercare", desc: "Ongoing support and monitoring throughout your recovery." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 group cursor-default"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-medical-blue group-hover:bg-medical-blue group-hover:text-white transition-all shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/40">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="rounded-[3rem] border-5 border-white-500 overflow-hidden aspect-[4/5] shadow-2xl"
                  >
                    <img src="https://assets.cfr.org/image/fetch/t_tgh-max_2600x2600/https://build.thinkglobalhealth.org//wp-content/uploads/2025/04/thumbnail_Steubing20Bedside20with20patient_1.jpg" alt="Expert Care" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="rounded-[3rem] border-5 border-white-500 overflow-hidden aspect-square shadow-2xl"
                  >
                    <img src="https://media.istockphoto.com/id/496033775/photo/african-nurse-taking-care-of-senior-patient-in-wheelchair.jpg?s=612x612&w=0&k=20&c=UasQZ9h8v41hpWqMj_HDBc4C933DgZpP8QvjR5OYog8=" alt="Expert Care" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="rounded-[3rem] border-5 border-white-500 overflow-hidden aspect-square shadow-2xl"
                  >
                    <img src="https://thumbs.dreamstime.com/b/african-american-medic-consulting-pregnant-woman-cabinet-to-check-medical-diagnosis-specialist-talking-patient-expecting-child-234849524.jpg" alt="Expert Care" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="rounded-[3rem] border-5 border-white-500 overflow-hidden aspect-[4/5] shadow-2xl"
                  >
                    <img src="https://dam.northwell.edu/m/23da03e127103274/Drupal-Web_GettyImages-91156571.jpg" alt="Expert Care" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-medical-blue rounded-full flex flex-col items-center justify-center text-center p-6 shadow-2xl border-8 border-medical-dark">
                <Award className="w-10 h-10 mb-2" />
                <div className="text-xs font-bold uppercase tracking-widest leading-tight">Top Rated Hospital 2018</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Care Section */}
      <section id="facilities" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="space-y-4">
              <span className="pill-tag text-medical-blue border-medical-blue/20">Specialized Care</span>
              <h2 className="text-5xl md:text-6xl font-bold text-medical-dark tracking-tighter">
                Our World-Class <br />
                <span className="text-medical-blue">Facilities</span>.
              </h2>
            </div>
            <p className="text-xl text-medical-gray max-w-md leading-relaxed">
              We provide specialized care across multiple departments, each equipped 
              with the latest medical technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedFacility(facility)}
                className="group cursor-pointer"
              >
                <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] mb-8 shadow-lg">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute top-8 left-8">
                    <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold text-white uppercase tracking-widest">
                      {facility.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 bg-gradient-to-t from-medical-blue  to-transparent p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-3xl font-bold text-white mb-4">{facility.title}</h3>
                    <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
                      View Details <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Consultation Section */}
      <section className="section-padding bg-medical-soft/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-bl from-medical-blue/40 to-medical-blue rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-medical-dark/20 rounded-full blur-3xl"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-10">
                <div className="space-y-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold uppercase tracking-widest">
                    Virtual Care
                  </span>
                  <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                    Consult with our <br />
                    Doctors <span className="text-medical-dark italic font-serif">Online</span>.
                  </h2>
                  <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                    Can't make it to the hospital? No problem. Get expert medical advice 
                    from the comfort of your home through our secure video platform.
                  </p>
                </div>

                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                    <div className="w-12 h-12 rounded-2xl bg-white text-medical-blue flex items-center justify-center">
                      <Video className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Video Call</h4>
                      <p className="text-xs text-white/60">Face-to-face consultation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                    <div className="w-12 h-12 rounded-2xl bg-white text-medical-blue flex items-center justify-center">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Mobile App</h4>
                      <p className="text-xs text-white/60">Access care anywhere</p>
                    </div>
                  </div>
                </div>

                <button className="bg-white text-medical-blue px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-medical-soft transition-all shadow-2xl shadow-black/20">
                  Start Consultation <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="relative">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/10">
                  <img src="https://picsum.photos/seed/virtual/800/1000" alt="Virtual Consultation" className="w-full h-full object-cover" />
                </div>
                {/* Floating Status Card */}
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl text-medical-dark hidden md:block">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-bold uppercase tracking-widest text-medical-muted">Doctors Online</span>
                  </div>
                  <div className="flex -space-x-3 mb-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                        <img src={`https://picsum.photos/seed/doc${i}/100/100`} alt="Doctor" />
                      </div>
                    ))}
                  </div>
                  <div className="text-xl font-bold">12 Specialists</div>
                  <div className="text-xs text-medical-muted">Available for instant call</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <span className="pill-tag text-medical-blue border-medical-blue/20">Our Services</span>
            <h2 className="text-5xl md:text-6xl font-bold text-medical-dark tracking-tighter">
              Comprehensive Medical <br />
              <span className="text-medical-blue">Solutions</span>.
            </h2>
            <p className="text-xl text-medical-gray leading-relaxed">
              From routine checkups to complex surgeries, we offer a wide range 
              of medical services to meet your health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[3rem] bg-medical-soft/50 border border-transparent hover:border-medical-blue/20 hover:bg-white hover:shadow-2xl hover:shadow-medical-blue/5 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-medical-blue mb-8 group-hover:bg-medical-blue group-hover:text-white transition-all shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-medical-dark mb-4">{service.name}</h3>
                <p className="text-medical-gray leading-relaxed mb-8">
                  {service.desc}
                </p>
                <button className="flex items-center gap-2 text-medical-blue font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section id="membership" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="space-y-4">
              <span className="pill-tag text-medical-lovely border-medical-lovely/20">Our Specialists</span>
              <h2 className="text-5xl md:text-6xl font-bold text-medical-dark tracking-tighter">
                Meet Our Expert <br />
                <span className="text-medical-blue">Doctors</span>.
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-medical-muted" />
                <input 
                  type="text" 
                  placeholder="Search doctors..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-6 py-4 rounded-full bg-white border-none focus:ring-2 focus:ring-medical-blue w-full md:w-64 shadow-sm"
                />
              </div>
              <select 
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-6 py-4 rounded-full bg-white border-none focus:ring-2 focus:ring-medical-blue shadow-sm font-medium"
              >
                <option value="All">All Specialties</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Orthopedics">Orthopedics</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredDoctors.map((doc, idx) => (
                <motion.div 
                  key={doc.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <div className="relative rounded-[3rem] overflow-hidden aspect-[3/4] mb-6 shadow-lg">
                    <img 
                      src={doc.image} 
                      alt={doc.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                      <p className="text-white/80 text-sm mb-4 line-clamp-3">{doc.bio}</p>
                      <div className="flex gap-3">
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-medical-blue transition-all">
                          <Mail className="w-4 h-4" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-medical-blue transition-all">
                          <Phone className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-medical-dark mb-1">{doc.name}</h3>
                    <p className="text-medical-blue font-bold text-sm uppercase tracking-widest">{doc.specialty}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="cta-container bg-gradient-to-bl from-medical-blue/40 to-medical-blue rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden flex flex-col items-center justify-center text-center gap-8"
          >
            <div className="sphere-decoration top-[-10%] left-[-5%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="sphere-decoration bottom-[-20%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="text-center space-y-8 relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight">
                Ready to Experience <br />
                World-Class Healthcare?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Join thousands of satisfied patients who trust Abba Sena Hospitalfor their 
                medical needs. Book your appointment today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => setIsBookingModalOpen()}
                  className="bg-white text-medical-blue px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Book Appointment <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                  Contact Us <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
