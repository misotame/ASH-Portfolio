import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Calendar, 
  ChevronRight,
  Stethoscope,
  Heart,
  Baby,
  Activity,
  Brain,
  Zap,
  Users,
  ShieldCheck,
  Medal
} from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  bio: string;
  fullBio: string;
  image: string;
  qualifications: string;
  certifications: string[];
  expertise: string[];
  schedule: string[];
  featured?: boolean;
  availability: 'Available Today' | 'Online' | 'Next Week';
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    specialty: "Cardiology",
    experience: "15+ Years",
    rating: 4.9,
    bio: "Expert in advanced heart failure and non-invasive cardiac imaging.",
    fullBio: "Dr. Sarah Jenkins is a world-renowned cardiologist with over 15 years of experience in treating complex heart conditions. She has pioneered several non-invasive imaging techniques and is a frequent speaker at international medical conferences.",
    image: "https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png",
    qualifications: "MD, FACC, Harvard Medical School",
    certifications: ["Board Certified in Cardiovascular Disease", "Advanced Cardiac Life Support"],
    expertise: ["Heart Failure Management", "Echocardiography", "Preventive Cardiology"],
    schedule: ["Mon: 9:00 AM - 5:00 PM", "Wed: 10:00 AM - 6:00 PM", "Fri: 9:00 AM - 3:00 PM"],
    featured: true,
    availability: 'Available Today'
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    experience: "12+ Years",
    rating: 4.8,
    bio: "Specializing in neuro-oncology and advanced brain mapping technologies.",
    fullBio: "Dr. Michael Chen leads our Neurology department with a focus on cutting-edge brain mapping and neuro-oncology. His research into neuroplasticity has helped hundreds of patients recover from severe brain injuries.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
    qualifications: "MD, PhD, Johns Hopkins University",
    certifications: ["Board Certified in Neurology", "Neuro-Oncology Fellowship"],
    expertise: ["Brain Mapping", "Epilepsy Treatment", "Neuro-Regeneration"],
    schedule: ["Tue: 8:00 AM - 4:00 PM", "Thu: 8:00 AM - 4:00 PM"],
    featured: true,
    availability: 'Online'
  },
  {
    id: 3,
    name: "Dr. Elena Rodriguez",
    specialty: "Pediatrics",
    experience: "10+ Years",
    rating: 5.0,
    bio: "Compassionate care for newborns and children with complex medical needs.",
    fullBio: "Dr. Elena Rodriguez is known for her gentle approach and expertise in pediatric complex care. She believes in a family-centered approach to medicine, ensuring parents are involved in every step of their child's health journey.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
    qualifications: "MD, Stanford School of Medicine",
    certifications: ["American Board of Pediatrics", "Pediatric Advanced Life Support"],
    expertise: ["Neonatal Care", "Pediatric Nutrition", "Developmental Assessment"],
    schedule: ["Mon-Fri: 8:30 AM - 4:30 PM"],
    availability: 'Available Today'
  },
  {
    id: 4,
    name: "Dr. David Kim",
    specialty: "Orthopedics",
    experience: "18+ Years",
    rating: 4.7,
    bio: "Expert in robotic-assisted joint replacement and sports medicine.",
    fullBio: "Dr. David Kim is a pioneer in robotic-assisted orthopedic surgery. With nearly two decades of experience, he has helped thousands of athletes and seniors regain their mobility through advanced surgical and non-surgical techniques.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    qualifications: "MD, Yale University",
    certifications: ["Board Certified in Orthopedic Surgery", "Sports Medicine Specialist"],
    expertise: ["Robotic Knee Replacement", "Shoulder Reconstruction", "Arthroscopy"],
    schedule: ["Mon, Wed: 7:00 AM - 3:00 PM"],
    availability: 'Next Week'
  },
  {
    id: 5,
    name: "Dr. Sophia Al-Fayed",
    specialty: "Dermatology",
    experience: "8+ Years",
    rating: 4.9,
    bio: "Specializing in cosmetic dermatology and advanced skin cancer treatments.",
    fullBio: "Dr. Sophia Al-Fayed combines medical expertise with an aesthetic eye. She specializes in the early detection of skin cancer using digital dermoscopy and offers a wide range of advanced cosmetic procedures.",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800",
    qualifications: "MD, Oxford University",
    certifications: ["Board Certified in Dermatology", "Laser Surgery Certification"],
    expertise: ["Mohs Surgery", "Laser Rejuvenation", "Psoriasis Management"],
    schedule: ["Tue, Wed, Fri: 10:00 AM - 5:00 PM"],
    availability: 'Available Today'
  },
  {
    id: 6,
    name: "Dr. James Wilson",
    specialty: "Oncology",
    experience: "20+ Years",
    rating: 4.8,
    bio: "Leading expert in immunotherapy and targeted cancer therapies.",
    fullBio: "Dr. James Wilson has dedicated his career to finding more effective, less invasive cancer treatments. He leads our oncology research team, focusing on how the immune system can be harnessed to fight various types of cancer.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800",
    qualifications: "MD, Columbia University",
    certifications: ["Board Certified in Internal Medicine & Oncology"],
    expertise: ["Immunotherapy", "Clinical Trials", "Precision Oncology"],
    schedule: ["Mon-Thu: 9:00 AM - 5:00 PM"],
    availability: 'Online'
  }
];

const specializations = ["All", "Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Dermatology", "Oncology"];
const availabilityOptions = ["All", "Available Today", "Online", "Next Week"];

export default function Doctors({ setIsBookingModalOpen }: { setIsBookingModalOpen: (val: boolean) => void }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("All");
  const [selectedAvail, setSelectedAvail] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doc => {
      const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSpec = selectedSpec === "All" || doc.specialty === selectedSpec;
      const matchesAvail = selectedAvail === "All" || doc.availability === selectedAvail;
      return matchesSearch && matchesSpec && matchesAvail;
    });
  }, [searchQuery, selectedSpec, selectedAvail]);

  const featuredDoctors = doctors.filter(doc => doc.featured);

  return (
    <div className="min-h-screen bg-white text-medical-dark selection:bg-medical-blue/30">
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-medical-blue/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Medical Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#1A5FFF 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          
          {/* Animated Wave Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 150 Q 300 100 600 150 T 1200 150" fill="none" stroke="#1A5FFF" strokeWidth="1" className="animate-dash" />
            <path d="M0 250 Q 350 300 700 250 T 1400 250" fill="none" stroke="#7C3AED" strokeWidth="1" className="animate-dash" style={{ animationDelay: '-5s' }} />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-blue/5 border border-medical-blue/10 backdrop-blur-md text-medical-blue text-sm font-bold tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4" /> World-Class Expertise
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-medical-dark">
              Meet Our <span className="text-medical-blue italic font-serif">Specialists</span>.
            </h1>
            <p className="text-xl text-medical-gray max-w-2xl mx-auto leading-relaxed">
              Expert care from highly qualified medical professionals dedicated to your well-being.
            </p>
          </motion.div>

          {/* Floating Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: "100+ Doctors", icon: <Users className="w-6 h-6" />, color: "blue" },
              { label: "20+ Specialties", icon: <Stethoscope className="w-6 h-6" />, color: "purple" },
              { label: "24/7 Availability", icon: <Clock className="w-6 h-6" />, color: "cyan" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/80 backdrop-blur-2xl border border-medical-blue/10 p-6 rounded-3xl shadow-xl flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-2xl bg-${stat.color === 'blue' ? 'medical-blue' : stat.color === 'purple' ? 'purple-500' : 'cyan-500'}/10 flex items-center justify-center text-${stat.color === 'blue' ? 'medical-blue' : stat.color === 'purple' ? 'purple-600' : 'cyan-600'}`}>
                  {stat.icon}
                </div>
                <div className="text-lg font-bold text-medical-dark">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="relative z-20 -mt-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/90 backdrop-blur-3xl border border-medical-blue/10 rounded-[2.5rem] p-4 md:p-6 shadow-2xl flex flex-col lg:flex-row gap-4 items-center"
          >
            <div className="relative flex-1 w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-medical-muted w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search by doctor name..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-medical-soft/50 border border-medical-blue/5 rounded-2xl py-4 pl-14 pr-6 text-medical-dark focus:outline-none focus:border-medical-blue/30 transition-all"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative flex-1 sm:flex-none">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-medical-muted w-4 h-4" />
                <select 
                  value={selectedSpec}
                  onChange={(e) => setSelectedSpec(e.target.value)}
                  className="appearance-none bg-medical-soft/50 border border-medical-blue/5 rounded-2xl py-4 pl-12 pr-10 text-medical-dark text-sm font-medium focus:outline-none focus:border-medical-blue/30 transition-all cursor-pointer w-full"
                >
                  {specializations.map(spec => <option key={spec} value={spec}>{spec}</option>)}
                </select>
              </div>
              
              <div className="relative flex-1 sm:flex-none">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-medical-muted w-4 h-4" />
                <select 
                  value={selectedAvail}
                  onChange={(e) => setSelectedAvail(e.target.value)}
                  className="appearance-none bg-medical-soft/50 border border-medical-blue/5 rounded-2xl py-4 pl-12 pr-10 text-medical-dark text-sm font-medium focus:outline-none focus:border-medical-blue/30 transition-all cursor-pointer w-full"
                >
                  {availabilityOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Specialists */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 rounded-full bg-purple-500/5 border border-purple-500/10 text-purple-600 text-sm font-bold tracking-widest uppercase">
                Elite Medical Team
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-medical-dark">
                Featured <span className="text-purple-600">Specialists</span>.
              </h2>
            </div>
            <p className="text-medical-gray max-w-md text-right hidden md:block">
              Meet our senior consultants and department heads who lead with innovation and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredDoctors.map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative bg-medical-soft/20 backdrop-blur-xl rounded-[3rem] border border-medical-blue/5 p-8 flex flex-col md:flex-row gap-8 hover:border-medical-blue/20 transition-all duration-500 shadow-sm"
              >
                <div className="w-full md:w-1/3 aspect-square rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-medical-dark">{doc.name}</h3>
                      <p className="text-medical-blue font-bold text-sm uppercase tracking-widest">{doc.specialty}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-bold">{doc.rating}</span>
                    </div>
                  </div>
                  <p className="text-medical-gray text-sm leading-relaxed italic">"{doc.bio}"</p>
                  <div className="flex flex-wrap gap-2">
                    {doc.expertise.slice(0, 2).map(exp => (
                      <span key={exp} className="px-3 py-1 rounded-full bg-white text-[10px] font-bold text-medical-muted uppercase border border-medical-blue/5">
                        {exp}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button 
                      onClick={() => setSelectedDoctor(doc)}
                      className="flex-1 py-3 rounded-2xl bg-white border border-medical-blue/10 text-medical-dark font-bold text-xs uppercase tracking-widest hover:bg-medical-soft transition-all"
                    >
                      View Profile
                    </button>
                    <button 
                      onClick={() => setIsBookingModalOpen(true)}
                      className="flex-1 py-3 rounded-2xl bg-medical-blue text-white font-bold text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-medical-blue/20 transition-all"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-32 px-6 bg-medical-soft/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-medical-dark">
              Our Medical <span className="text-medical-blue">Network</span>.
            </h2>
            <p className="text-medical-gray">Browse our full list of specialists and find the right match for your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredDoctors.map((doc, idx) => (
                <motion.div
                  key={doc.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-[2.5rem] border border-medical-blue/5 p-6 hover:border-medical-blue/20 transition-all duration-500 shadow-sm hover:shadow-2xl"
                >
                  <div className="relative mb-6">
                    <div className="aspect-square rounded-[2rem] overflow-hidden border-2 border-white shadow-lg">
                      <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-xl border border-medical-soft flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${doc.availability === 'Available Today' ? 'bg-green-500' : doc.availability === 'Online' ? 'bg-blue-500' : 'bg-orange-500'}`}></div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-medical-dark">{doc.availability}</span>
                    </div>
                  </div>

                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-medical-dark">{doc.name}</h3>
                      <p className="text-medical-blue text-xs font-bold uppercase tracking-widest">{doc.specialty}</p>
                    </div>
                    
                    <div className="flex justify-center items-center gap-6 py-2 border-y border-medical-soft">
                      <div className="text-center">
                        <div className="text-xs font-bold text-medical-dark">{doc.experience}</div>
                        <div className="text-[8px] text-medical-muted uppercase tracking-widest">Exp.</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs font-bold text-medical-dark flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          {doc.rating}
                        </div>
                        <div className="text-[8px] text-medical-muted uppercase tracking-widest">Rating</div>
                      </div>
                    </div>

                    <p className="text-medical-gray text-xs leading-relaxed line-clamp-2">{doc.bio}</p>

                    <div className="flex gap-3 pt-2">
                      <button 
                        onClick={() => setSelectedDoctor(doc)}
                        className="flex-1 py-3 rounded-xl bg-medical-soft text-medical-dark font-bold text-[10px] uppercase tracking-widest hover:bg-medical-blue hover:text-white transition-all"
                      >
                        Profile
                      </button>
                      <button 
                        onClick={() => setIsBookingModalOpen(true)}
                        className="flex-1 py-3 rounded-xl bg-medical-blue text-white font-bold text-[10px] uppercase tracking-widest hover:shadow-lg hover:shadow-medical-blue/20 transition-all"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredDoctors.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-medical-soft flex items-center justify-center text-medical-muted mx-auto mb-6">
                <Search className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-medical-dark">No doctors found</h3>
              <p className="text-medical-gray">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Trust & Credentials */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-blue/5 -skew-y-3 origin-right"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-medical-dark">
              Certified <br />
              <span className="text-medical-blue">Excellence</span>.
            </h2>
            <p className="text-xl text-medical-gray leading-relaxed">
              Our specialists are board-certified and recognized globally for their contributions to medical science and patient care.
            </p>
            <div className="space-y-6">
              {[
                { title: "Board Certified Specialists", icon: <ShieldCheck className="w-6 h-6" /> },
                { title: "International Medical Awards", icon: <Award className="w-6 h-6" /> },
                { title: "Advanced Research Centers", icon: <Zap className="w-6 h-6" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-4 rounded-2xl bg-white shadow-sm border border-medical-blue/5">
                  <div className="w-12 h-12 rounded-xl bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                    {item.icon}
                  </div>
                  <span className="font-bold text-medical-dark">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Combined Exp.", value: "500+ Yrs", icon: <Clock className="w-5 h-5" /> },
              { label: "Certifications", value: "1,200+", icon: <Medal className="w-5 h-5" /> },
              { label: "Awards Won", value: "85+", icon: <Award className="w-5 h-5" /> },
              { label: "Research Papers", value: "2,000+", icon: <BookOpen className="w-5 h-5" /> }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-medical-blue/5 text-center space-y-4">
                <div className="w-10 h-10 rounded-full bg-medical-soft flex items-center justify-center text-medical-blue mx-auto">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-medical-dark">{stat.value}</div>
                <div className="text-[10px] text-medical-muted uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-medical-blue font-bold tracking-widest uppercase text-sm">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-medical-dark">Voices of <span className="text-medical-blue">Trust</span>.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Robert Wilson", rating: 5, text: "Dr. Jenkins saved my life. Her expertise in cardiology is unmatched, but it's her compassion that truly sets her apart.", doctor: "Dr. Sarah Jenkins" },
              { name: "Emily Chen", rating: 5, text: "The neurology team here is incredible. Dr. Chen explained everything so clearly and made me feel at ease during a difficult time.", doctor: "Dr. Michael Chen" },
              { name: "Sarah Thompson", rating: 4, text: "Dr. Rodriguez is amazing with kids. My daughter actually looks forward to her check-ups now!", doctor: "Dr. Elena Rodriguez" }
            ].map((review, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-medical-soft/20 p-8 rounded-[2.5rem] border border-medical-blue/5 space-y-6"
              >
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-medical-gray italic leading-relaxed">"{review.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-medical-soft">
                  <div>
                    <div className="font-bold text-medical-dark">{review.name}</div>
                    <div className="text-[10px] text-medical-muted uppercase tracking-widest">Patient</div>
                  </div>
                  <div className="text-[10px] font-bold text-medical-blue uppercase tracking-widest">Ref: {review.doctor}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-16 md:p-24 rounded-[4rem] overflow-hidden text-center space-y-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/20 via-purple-600/10 to-cyan-500/10 backdrop-blur-3xl border border-medical-blue/10"></div>
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-medical-dark">
                Find the Right Doctor for You — <br />
                <span className="text-medical-blue">Book Instantly</span>.
              </h2>
              <p className="text-xl text-medical-gray max-w-2xl mx-auto">
                Our specialists are ready to provide you with the expert care you deserve. 
                Schedule your consultation in just a few clicks.
              </p>
              <div className="pt-8">
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-medical-blue text-white px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-medical-blue/20 flex items-center gap-4 mx-auto"
                >
                  Book Appointment Now <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Doctor Profile Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoctor(null)}
              className="absolute inset-0 bg-medical-dark/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-medical-soft flex items-center justify-center text-medical-dark hover:bg-medical-blue hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-2/5 relative">
                <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/80 via-transparent to-transparent md:hidden"></div>
                <div className="absolute bottom-8 left-8 text-white md:hidden">
                  <h2 className="text-3xl font-bold">{selectedDoctor.name}</h2>
                  <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm">{selectedDoctor.specialty}</p>
                </div>
              </div>

              <div className="flex-1 p-10 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="hidden md:block mb-8">
                  <h2 className="text-4xl font-bold text-medical-dark mb-2">{selectedDoctor.name}</h2>
                  <p className="text-medical-blue font-bold uppercase tracking-widest text-sm">{selectedDoctor.specialty}</p>
                </div>

                <div className="space-y-8">
                  <section>
                    <h4 className="text-xs font-bold text-medical-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" /> Professional Bio
                    </h4>
                    <p className="text-medical-gray leading-relaxed">{selectedDoctor.fullBio}</p>
                  </section>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <section>
                      <h4 className="text-xs font-bold text-medical-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Award className="w-4 h-4" /> Qualifications
                      </h4>
                      <p className="text-sm font-bold text-medical-dark">{selectedDoctor.qualifications}</p>
                    </section>
                    <section>
                      <h4 className="text-xs font-bold text-medical-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Certifications
                      </h4>
                      <ul className="space-y-2">
                        {selectedDoctor.certifications.map((cert, i) => (
                          <li key={i} className="text-sm text-medical-gray flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-medical-blue" /> {cert}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  <section>
                    <h4 className="text-xs font-bold text-medical-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4" /> Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDoctor.expertise.map((exp, i) => (
                        <span key={i} className="px-4 py-2 rounded-xl bg-medical-soft text-xs font-bold text-medical-blue">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section className="bg-medical-soft/50 p-6 rounded-3xl border border-medical-blue/5">
                    <h4 className="text-xs font-bold text-medical-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Available Schedule
                    </h4>
                    <ul className="space-y-2">
                      {selectedDoctor.schedule.map((slot, i) => (
                        <li key={i} className="text-sm font-bold text-medical-dark flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-medical-blue"></div>
                          {slot}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <div className="pt-4">
                    <button 
                      onClick={() => {
                        setSelectedDoctor(null);
                        navigate('/appointment');
                      }}
                      className="w-full bg-medical-blue text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-medical-blue/30 transition-all flex items-center justify-center gap-4"
                    >
                      Book Appointment <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
