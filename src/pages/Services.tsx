import { motion } from 'motion/react';
import { 
  Heart, 
  Baby, 
  Bone, 
  Brain, 
  Scan, 
  Stethoscope, 
  Activity, 
  AlertCircle, 
  Scissors, 
  UserRound, 
  ShieldCheck,
  Calendar,
  UserPlus,
  ClipboardCheck,
  Zap,
  CheckCircle2,
  PhoneCall,
  ChevronRight,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const mainServices = [
  {
    id: 'cardiology',
    icon: <Heart className="w-8 h-8 text-blue-600" />,
    name: 'Cardiology',
    description: 'Advanced heart care including diagnostics, interventional cardiology, and heart failure management.',
    details: 'Our cardiology department is equipped with state-of-the-art technology for early detection and treatment of cardiovascular diseases. We offer comprehensive services from routine check-ups to complex surgical procedures.',
    treatment: ['ECG & Stress Testing', 'Echocardiography', 'Cardiac Catheterization', 'Heart Valve Repair'],
    technology: '3D Mapping Systems, Robotic-Assisted Surgery',
    benefits: 'Reduced recovery time, high success rates, personalized care plans.'
  },
  {
    id: 'pediatrics',
    icon: <Baby className="w-8 h-8 text-blue-600" />,
    name: 'Pediatrics',
    description: 'Comprehensive healthcare for infants, children, and adolescents in a child-friendly environment.',
    details: 'We provide a wide range of pediatric services, from routine vaccinations and wellness check-ups to specialized care for chronic conditions. Our team is dedicated to the physical and emotional well-being of your child.',
    treatment: ['Neonatal Care', 'Developmental Screening', 'Pediatric Surgery', 'Immunizations'],
    technology: 'Pediatric-specific diagnostic tools, Child-friendly imaging',
    benefits: 'Specialized child care, family-centered approach, supportive environment.'
  },
  {
    id: 'orthopedics',
    icon: <Bone className="w-8 h-8 text-blue-600" />,
    name: 'Orthopedics',
    description: 'Expert treatment for bone, joint, and muscle conditions, including sports medicine and joint replacement.',
    details: 'Our orthopedic surgeons use the latest techniques for joint replacement, spinal surgery, and sports injury treatment. We focus on restoring mobility and improving quality of life.',
    treatment: ['Joint Replacement', 'Spinal Surgery', 'Sports Medicine', 'Fracture Management'],
    technology: 'Minimally invasive surgical tools, Computer-aided navigation',
    benefits: 'Faster recovery, improved mobility, long-term pain relief.'
  },
  {
    id: 'neurology',
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    name: 'Neurology',
    description: 'Specialized care for disorders of the brain, spinal cord, and nervous system.',
    details: 'We offer advanced diagnostics and treatment for conditions such as stroke, epilepsy, Parkinson\'s disease, and multiple sclerosis. Our neurological team is at the forefront of brain research.',
    treatment: ['Stroke Management', 'Epilepsy Treatment', 'Neuro-rehabilitation', 'Sleep Disorder Studies'],
    technology: 'Advanced MRI & CT Scans, EEG Monitoring',
    benefits: 'Expert diagnosis, comprehensive rehabilitation, improved neurological function.'
  },
  {
    id: 'radiology',
    icon: <Scan className="w-8 h-8 text-blue-600" />,
    name: 'Radiology',
    description: 'State-of-the-art imaging and diagnostic services for accurate and timely medical assessments.',
    details: 'Our radiology department provides a full spectrum of imaging services, including X-rays, CT scans, MRI, and ultrasound. We ensure high-quality images for precise diagnosis.',
    treatment: ['Diagnostic Imaging', 'Interventional Radiology', 'Nuclear Medicine', 'Mammography'],
    technology: 'Digital Radiography, High-field MRI',
    benefits: 'Accurate diagnosis, early detection, minimally invasive procedures.'
  },
  {
    id: 'general-medicine',
    icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
    name: 'General Medicine',
    description: 'Primary care and internal medicine services for adults, focusing on prevention and chronic disease management.',
    details: 'Our general practitioners provide comprehensive care for a variety of health issues. We emphasize preventive medicine and long-term health management.',
    treatment: ['Routine Check-ups', 'Chronic Disease Management', 'Health Screenings', 'Infectious Disease Care'],
    technology: 'Electronic Health Records, Telemedicine platforms',
    benefits: 'Personalized care, comprehensive health monitoring, easy access to specialists.'
  }
];

const specializedDepartments = [
  {
    name: 'Intensive Care Unit (ICU)',
    description: '24/7 specialized care for critically ill patients with advanced life support systems.',
    icon: <Activity className="w-12 h-12 text-white" />,
    color: 'bg-blue-600'
  },
  {
    name: 'Emergency & Trauma Care',
    description: 'Immediate medical attention for life-threatening conditions and severe injuries.',
    icon: <AlertCircle className="w-12 h-12 text-white" />,
    color: 'bg-red-600'
  },
  {
    name: 'Surgical Services',
    description: 'Comprehensive surgical care ranging from routine procedures to complex operations.',
    icon: <Scissors className="w-12 h-12 text-white" />,
    color: 'bg-green-600'
  },
  {
    name: 'Maternity & Women’s Health',
    description: 'Dedicated care for women through all stages of life, including pregnancy and childbirth.',
    icon: <UserRound className="w-12 h-12 text-white" />,
    color: 'bg-purple-600'
  },
  {
    name: 'Oncology (Cancer Care)',
    description: 'Multidisciplinary approach to cancer diagnosis, treatment, and support.',
    icon: <ShieldCheck className="w-12 h-12 text-white" />,
    color: 'bg-indigo-600'
  }
];

const processSteps = [
  { icon: <Calendar />, title: 'Book Appointment', desc: 'Schedule your visit online or via phone.' },
  { icon: <UserPlus />, title: 'Consultation', desc: 'Meet with our expert specialists.' },
  { icon: <ClipboardCheck />, title: 'Diagnosis & Tests', desc: 'Comprehensive evaluation and testing.' },
  { icon: <Zap />, title: 'Treatment Plan', desc: 'Personalized care strategy developed for you.' },
  { icon: <CheckCircle2 />, title: 'Recovery', desc: 'Follow-up care and rehabilitation support.' }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    text: 'The cardiology team saved my life. Their expertise and the advanced technology they used were truly impressive.',
    rating: 5,
    service: 'Cardiology'
  },
  {
    name: 'Michael Chen',
    text: 'Excellent pediatric care. My kids actually enjoy going to the doctor now because of the friendly environment.',
    rating: 5,
    service: 'Pediatrics'
  },
  {
    name: 'Emma Williams',
    text: 'The recovery process after my knee replacement was much faster than I expected. Great orthopedic team!',
    rating: 5,
    service: 'Orthopedics'
  }
];

interface ServicesProps {
  onBookNow: () => void;
}

export default function Services({ onBookNow }: ServicesProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical Services" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex justify-center space-x-2 text-blue-200 mb-4 text-sm font-medium uppercase tracking-wider">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Services</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Our Medical Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light max-w-2xl mx-auto">
              Comprehensive Care for Every Stage of Life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Patient-Centered Excellence</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At our hospital, we believe in providing more than just medical treatment; we provide care that is centered around you. Our wide range of services is supported by a team of world-class experts and the latest medical advancements, ensuring that every patient receives the highest standard of care in a compassionate environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Medical Specialties</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-xl p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 border border-white/40 group"
              >
                <div className="mb-6 p-4 bg-blue-50 rounded-xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => document.getElementById(`details-${service.id}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors"
                  >
                    Learn More <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                  <button 
                    onClick={onBookNow}
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Departments */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Specialized Departments</h2>
            <p className="text-blue-200">Advanced care for complex medical needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedDepartments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${dept.color} p-10 rounded-[2.5rem] flex flex-col items-center text-center hover:scale-[1.05] hover:shadow-2xl transition-all duration-500 relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="mb-6 relative z-10">
                  {dept.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{dept.name}</h3>
                <p className="text-white/80 leading-relaxed relative z-10">
                  {dept.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">In-Depth Care Details</h2>
            <p className="text-gray-600">Understand our approach to specialized treatment</p>
          </div>

          <div className="space-y-24">
            {mainServices.slice(0, 3).map((service, index) => (
              <div 
                key={service.id} 
                id={`details-${service.id}`}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{service.name} Excellence</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.details}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Treatment Options
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          {service.treatment.map(t => <li key={t}>• {t}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                          <Zap className="w-5 h-5 text-yellow-500 mr-2" /> Advanced Tech
                        </h4>
                        <p className="text-gray-600">{service.technology}</p>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-8 bg-gradient-to-br from-blue-50 to-white rounded-[2rem] border border-blue-100/50 shadow-sm">
                      <h4 className="font-bold text-blue-900 mb-2">Patient Benefits</h4>
                      <p className="text-blue-800 leading-relaxed">{service.benefits}</p>
                    </div>
                  </motion.div>
                </div>
                <div className="flex-1 w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video"
                  >
                    <img 
                      src={`https://i0.wp.com/www.treatathomes.com/wp-content/uploads/2022/07/paediatric.jpg?fit=640%2C427&ssl=1`} 
                      alt={service.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Journey to Recovery</h2>
            <p className="text-gray-600">A seamless process designed for your comfort and health</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-lg p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 border border-white/50 text-center group"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Equipment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full" />
            
            <div className="flex-1 relative z-10">
              <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">Innovation</span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">Cutting-Edge Medical Technology</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We invest in the future of healthcare. Our facility is equipped with the latest diagnostic and surgical technologies, from AI-assisted imaging to robotic surgery systems, ensuring unparalleled precision and patient safety.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>AI Diagnostics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>Robotic Surgery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>Next-Gen MRI</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>Tele-Health</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" 
                alt="Technology" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/20 rounded-full animate-pulse">
                <PhoneCall className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">24/7 Emergency Care</h2>
                <p className="text-red-100">Our trauma center is always ready to save lives.</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <span className="text-sm uppercase tracking-widest text-red-200 block mb-2">Emergency Hotline</span>
              <a href="tel:1800-999-0000" className="text-4xl md:text-5xl font-black hover:text-red-100 transition-colors">
                1800-999-0000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Support */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Insurance & Billing</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We work with a wide range of insurance providers to make healthcare accessible. Our billing team is here to assist you with claims and payment plans.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['BlueCross', 'Aetna', 'Cigna', 'UnitedHealth', 'Kaiser', 'Medicare'].map(plan => (
                  <div key={plan} className="bg-white/60 backdrop-blur-md p-4 rounded-2xl text-center border border-white/40 font-bold text-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
                    {plan}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Patient Support</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Beyond medical treatment, we offer emotional and logistical support to our patients and their families.
              </p>
              <ul className="space-y-4">
                {[
                  'Financial Assistance Counseling',
                  'Patient Advocacy Services',
                  'Language Interpretation',
                  'Spiritual & Emotional Care',
                  'Post-Discharge Support'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Success Stories</h2>
            <p className="text-gray-600">Real feedback from those we've had the privilege to care for</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/60 relative shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10">"{t.text}"</p>
                <div className="relative z-10">
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{t.service} Patient</p>
                </div>
                <div className="absolute top-8 right-8 text-blue-600/5 group-hover:text-blue-600/10 transition-colors duration-500">
                  <Star className="w-16 h-16 fill-current" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Prioritize Your Health?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-light">
              Our specialists are available for consultations. Book your appointment today and take the first step towards a healthier life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={onBookNow}
                className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
              >
                Book an Appointment
              </button>
              <button className="px-10 py-5 bg-blue-700 text-white rounded-full font-bold text-lg hover:bg-blue-800 transition-all border border-blue-500">
                Contact Our Specialists
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
