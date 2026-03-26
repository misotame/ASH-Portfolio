import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  User, 
  Stethoscope, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  ShieldCheck, 
  Zap, 
  Users,
  Heart,
  Baby,
  Brain,
  Eye,
  Activity,
  ArrowRight,
  Download,
  Mail,
  MessageSquare
} from 'lucide-react';

// Mock Data
const departments = [
  { id: 'cardiology', name: 'Cardiology', icon: <Heart className="w-6 h-6" />, description: 'Heart & Vascular Care' },
  { id: 'pediatrics', name: 'Pediatrics', icon: <Baby className="w-6 h-6" />, description: 'Child Healthcare' },
  { id: 'neurology', name: 'Neurology', icon: <Brain className="w-6 h-6" />, description: 'Brain & Nervous System' },
  { id: 'ophthalmology', name: 'Ophthalmology', icon: <Eye className="w-6 h-6" />, description: 'Eye Care Specialists' },
  { id: 'orthopedics', name: 'Orthopedics', icon: <Activity className="w-6 h-6" />, description: 'Bone & Joint Care' },
  { id: 'general', name: 'General Medicine', icon: <Stethoscope className="w-6 h-6" />, description: 'Primary Healthcare' },
];

const doctors = [
  { id: 1, name: 'Dr. Sarah Chen', specialty: 'Cardiology', deptId: 'cardiology', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300', availability: 'Available Today' },
  { id: 2, name: 'Dr. Michael Roberts', specialty: 'Cardiology', deptId: 'cardiology', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300', availability: 'Next Available: Tomorrow' },
  { id: 3, name: 'Pediatrics Team', specialty: 'Pediatrics', deptId: 'pediatrics', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300', availability: 'Available Today' },
  { id: 4, name: 'Internal Medicine Team', specialty: 'Internal Medicine', deptId: 'internal-medicine', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300', availability: 'Available Today' },
];

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
];

export default function Appointment() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    department: '',
    doctor: null as any,
    date: '',
    time: '',
    patientName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleBooking = () => {
    setIsSuccess(true);
  };

  const filteredDoctors = doctors.filter(doc => doc.deptId === bookingData.department);

  return (
    <div className="min-h-screen bg-white text-medical-dark selection:bg-medical-blue/30 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-medical-blue/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Glowing Particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 0.4, 0]
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 4
                }}
                className="absolute w-1 h-1 bg-medical-blue rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-blue/5 border border-medical-blue/10 backdrop-blur-md text-medical-blue text-sm font-bold tracking-widest uppercase">
              <Zap className="w-4 h-4" /> Smart Booking System
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-medical-dark">
              Book Your <span className="text-medical-blue italic font-serif">Appointment</span>.
            </h1>
            <p className="text-xl text-medical-gray max-w-2xl mx-auto leading-relaxed">
              Fast, easy, and personalized healthcare booking. Secure your consultation with our world-class specialists in seconds.
            </p>
          </motion.div>

          {/* Floating Glass UI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
            {[
              { label: "24/7 Booking Available", icon: <Clock className="w-6 h-6" />, color: "blue" },
              { label: "Instant Confirmation", icon: <CheckCircle2 className="w-6 h-6" />, color: "purple" },
              { label: "Expert Doctors", icon: <Users className="w-6 h-6" />, color: "cyan" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="bg-white/80 backdrop-blur-2xl border border-medical-blue/10 p-6 rounded-3xl shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                  {stat.icon}
                </div>
                <div className="text-sm font-bold text-medical-dark text-left">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Booking Interface */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {!isSuccess ? (
            <motion.div
              layout
              className="bg-white/80 backdrop-blur-3xl border border-medical-blue/10 rounded-[3rem] overflow-hidden shadow-2xl"
            >
              {/* Progress Indicator */}
              <div className="bg-medical-blue/5 p-8 border-b border-medical-blue/10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-medical-muted uppercase tracking-widest">Step {step} of 5</span>
                  <span className="text-sm font-bold text-medical-blue">
                    {step === 1 && "Select Department"}
                    {step === 2 && "Choose Doctor"}
                    {step === 3 && "Pick Date & Time"}
                    {step === 4 && "Patient Details"}
                    {step === 5 && "Confirmation"}
                  </span>
                </div>
                <div className="h-2 bg-medical-blue/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 5) * 100}%` }}
                    className="h-full bg-medical-blue shadow-[0_0_10px_rgba(26,95,255,0.5)]"
                  />
                </div>
              </div>

              <div className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                  {/* Step 1: Select Department */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {departments.map((dept) => (
                          <motion.button
                            key={dept.id}
                            whileHover={{ scale: 1.02, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setBookingData({ ...bookingData, department: dept.id });
                              nextStep();
                            }}
                            className={`p-8 rounded-[2rem] border transition-all text-left space-y-4 group ${
                              bookingData.department === dept.id 
                                ? 'bg-medical-blue border-medical-blue text-white shadow-xl shadow-medical-blue/20' 
                                : 'bg-white border-medical-blue/10 hover:border-medical-blue/30'
                            }`}
                          >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                              bookingData.department === dept.id ? 'bg-white/20 text-white' : 'bg-medical-blue/5 text-medical-blue'
                            }`}>
                              {dept.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold">{dept.name}</h3>
                              <p className={`text-sm ${bookingData.department === dept.id ? 'text-white/70' : 'text-medical-gray'}`}>
                                {dept.description}
                              </p>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Choose Doctor */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredDoctors.length > 0 ? (
                          filteredDoctors.map((doc) => (
                            <motion.button
                              key={doc.id}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => {
                                setBookingData({ ...bookingData, doctor: doc });
                                nextStep();
                              }}
                              className={`p-6 rounded-[2rem] border flex items-center gap-6 transition-all text-left ${
                                bookingData.doctor?.id === doc.id 
                                  ? 'bg-medical-blue border-medical-blue text-white shadow-xl' 
                                  : 'bg-white border-medical-blue/10'
                              }`}
                            >
                              <img src={doc.image} alt={doc.name} className="w-20 h-20 rounded-2xl object-cover" />
                              <div className="flex-1">
                                <h3 className="text-xl font-bold">{doc.name}</h3>
                                <p className={`text-sm ${bookingData.doctor?.id === doc.id ? 'text-white/70' : 'text-medical-gray'}`}>
                                  {doc.specialty}
                                </p>
                                <div className={`mt-2 inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${
                                  bookingData.doctor?.id === doc.id ? 'bg-white/20 text-white' : 'bg-green-500/10 text-green-600'
                                }`}>
                                  <div className={`w-1.5 h-1.5 rounded-full ${bookingData.doctor?.id === doc.id ? 'bg-white' : 'bg-green-500'}`}></div>
                                  {doc.availability}
                                </div>
                              </div>
                            </motion.button>
                          ))
                        ) : (
                          <div className="col-span-full py-20 text-center space-y-4">
                            <div className="w-16 h-16 bg-medical-blue/5 rounded-full flex items-center justify-center text-medical-blue mx-auto">
                              <Stethoscope className="w-8 h-8" />
                            </div>
                            <p className="text-medical-gray">No doctors available for this department yet.</p>
                            <button onClick={prevStep} className="text-medical-blue font-bold hover:underline">Go back and select another</button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Pick Date & Time */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-6">
                          <h3 className="text-2xl font-bold text-medical-dark">Select Date</h3>
                          <div className="p-6 bg-medical-soft/30 rounded-[2rem] border border-medical-blue/5">
                            {/* Simplified Calendar UI */}
                            <div className="grid grid-cols-7 gap-2 text-center mb-4">
                              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                                <div key={d} className="text-xs font-bold text-medical-muted">{d}</div>
                              ))}
                            </div>
                            <div className="grid grid-cols-7 gap-2">
                              {[...Array(31)].map((_, i) => (
                                <button
                                  key={i}
                                  onClick={() => setBookingData({ ...bookingData, date: `2026-03-${i + 1}` })}
                                  className={`aspect-square rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                                    bookingData.date === `2026-03-${i + 1}`
                                      ? 'bg-medical-blue text-white shadow-lg'
                                      : 'hover:bg-medical-blue/10 text-medical-dark'
                                  }`}
                                >
                                  {i + 1}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <h3 className="text-2xl font-bold text-medical-dark">Select Time</h3>
                          <div className="grid grid-cols-3 gap-3">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                onClick={() => setBookingData({ ...bookingData, time })}
                                className={`py-4 rounded-xl text-sm font-bold border transition-all ${
                                  bookingData.time === time
                                    ? 'bg-medical-blue border-medical-blue text-white shadow-lg'
                                    : 'bg-white border-medical-blue/10 text-medical-dark hover:border-medical-blue/30'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Patient Details */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-medical-muted uppercase tracking-widest ml-1">Full Name</label>
                          <input 
                            type="text" 
                            value={bookingData.patientName}
                            onChange={(e) => setBookingData({ ...bookingData, patientName: e.target.value })}
                            placeholder="John Doe"
                            className="w-full bg-medical-soft/30 border border-medical-blue/5 rounded-2xl py-4 px-6 text-medical-dark focus:outline-none focus:border-medical-blue/40 focus:bg-white transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-medical-muted uppercase tracking-widest ml-1">Email Address</label>
                          <input 
                            type="email" 
                            value={bookingData.email}
                            onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full bg-medical-soft/30 border border-medical-blue/5 rounded-2xl py-4 px-6 text-medical-dark focus:outline-none focus:border-medical-blue/40 focus:bg-white transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-medical-muted uppercase tracking-widest ml-1">Phone Number</label>
                          <input 
                            type="tel" 
                            value={bookingData.phone}
                            onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                            placeholder="+251 911 718 959"
                            className="w-full bg-medical-soft/30 border border-medical-blue/5 rounded-2xl py-4 px-6 text-medical-dark focus:outline-none focus:border-medical-blue/40 focus:bg-white transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-medical-muted uppercase tracking-widest ml-1">Optional Message</label>
                          <input 
                            type="text" 
                            value={bookingData.message}
                            onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                            placeholder="Any specific concerns?"
                            className="w-full bg-medical-soft/30 border border-medical-blue/5 rounded-2xl py-4 px-6 text-medical-dark focus:outline-none focus:border-medical-blue/40 focus:bg-white transition-all"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: Confirmation */}
                  {step === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="bg-medical-soft/30 p-8 rounded-[2.5rem] border border-medical-blue/5 space-y-8">
                        <div className="flex flex-col md:flex-row justify-between gap-8">
                          <div className="space-y-6">
                            <div>
                              <div className="text-xs font-bold text-medical-muted uppercase tracking-widest mb-2">Selected Specialist</div>
                              <div className="flex items-center gap-4">
                                <img src={bookingData.doctor?.image} alt="" className="w-16 h-16 rounded-2xl object-cover" />
                                <div>
                                  <div className="text-xl font-bold text-medical-dark">{bookingData.doctor?.name}</div>
                                  <div className="text-sm text-medical-blue">{bookingData.doctor?.specialty}</div>
                                </div>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                              <div>
                                <div className="text-xs font-bold text-medical-muted uppercase tracking-widest mb-1">Date</div>
                                <div className="text-medical-dark font-bold">{bookingData.date || 'Not selected'}</div>
                              </div>
                              <div>
                                <div className="text-xs font-bold text-medical-muted uppercase tracking-widest mb-1">Time</div>
                                <div className="text-medical-dark font-bold">{bookingData.time || 'Not selected'}</div>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-6">
                            <div>
                              <div className="text-xs font-bold text-medical-muted uppercase tracking-widest mb-1">Patient Name</div>
                              <div className="text-medical-dark font-bold">{bookingData.patientName || 'Not provided'}</div>
                            </div>
                            <div>
                              <div className="text-xs font-bold text-medical-muted uppercase tracking-widest mb-1">Contact Info</div>
                              <div className="text-medical-dark font-bold">{bookingData.email}</div>
                              <div className="text-sm text-medical-gray">{bookingData.phone}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="mt-12 flex justify-between items-center">
                  {step > 1 ? (
                    <button 
                      onClick={prevStep}
                      className="flex items-center gap-2 text-medical-muted font-bold hover:text-medical-blue transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" /> Back
                    </button>
                  ) : <div></div>}

                  {step < 5 ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={nextStep}
                      disabled={step === 1 && !bookingData.department}
                      className="bg-medical-blue text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(26, 95, 255, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleBooking}
                      className="bg-medical-blue text-white px-12 py-5 rounded-2xl font-bold text-lg flex items-center gap-2 shadow-xl"
                    >
                      Confirm Appointment <CheckCircle2 className="w-6 h-6" />
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/80 backdrop-blur-3xl border border-medical-blue/10 rounded-[4rem] p-12 md:p-20 text-center space-y-10 shadow-2xl"
            >
              <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center text-green-600 mx-auto">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-medical-dark">Appointment Confirmed ✅</h2>
                <p className="text-xl text-medical-gray max-w-xl mx-auto">
                  Your booking with {bookingData.doctor?.name} has been successfully scheduled. A confirmation email has been sent to {bookingData.email}.
                </p>
              </div>

              <div className="bg-medical-soft/30 p-8 rounded-[2.5rem] border border-medical-blue/5 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-xs font-bold text-medical-muted uppercase tracking-widest mb-1">Doctor</div>
                  <div className="text-medical-dark font-bold">{bookingData.doctor?.name}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-medical-muted uppercase tracking-widest mb-1">Date</div>
                  <div className="text-medical-dark font-bold">{bookingData.date}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-medical-muted uppercase tracking-widest mb-1">Time</div>
                  <div className="text-medical-dark font-bold">{bookingData.time}</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 pt-6">
                <button className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-medical-blue text-white font-bold shadow-lg hover:scale-105 transition-transform">
                  <Download className="w-5 h-5" /> Download Receipt
                </button>
                <button className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border border-medical-blue/10 text-medical-blue font-bold shadow-sm hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" /> Resend Email
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick Book Panel (Alternative) */}
      {!isSuccess && (
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-medical-dark text-white p-12 rounded-[3.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-medical-blue/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="space-y-4 text-center md:text-left">
                  <h2 className="text-3xl font-bold tracking-tight">Returning Patient?</h2>
                  <p className="text-white/60">Use our express booking to schedule in under 30 seconds.</p>
                </div>
                <button className="bg-medical-blue text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-transform flex items-center gap-3">
                  Quick Book Now <Zap className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Doctor Availability Visual */}
      <section className="py-32 px-6 bg-medical-soft/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter text-medical-dark">Doctor Availability</h2>
            <p className="text-medical-gray">Real-time schedule status for our top specialists.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doc) => (
              <div key={doc.id} className="bg-white p-8 rounded-[2.5rem] border border-medical-blue/5 shadow-sm space-y-6">
                <div className="flex items-center gap-4">
                  <img src={doc.image} alt="" className="w-14 h-14 rounded-2xl object-cover" />
                  <div>
                    <div className="font-bold text-medical-dark">{doc.name}</div>
                    <div className="text-xs text-medical-muted">{doc.specialty}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-medical-muted">
                    <span>Daily Schedule</span>
                    <span className={doc.availability.includes('Today') ? 'text-green-500' : 'text-yellow-500'}>
                      {doc.availability}
                    </span>
                  </div>
                  <div className="flex gap-1 h-2">
                    {[...Array(12)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 rounded-full ${
                          i < 4 ? 'bg-green-500' : i < 8 ? 'bg-yellow-500/30' : 'bg-red-500/10'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Assurance Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Data Secure", text: "Your health data is encrypted and confidential.", icon: <ShieldCheck className="w-8 h-8" /> },
              { title: "Certified Staff", text: "All our doctors are board-certified professionals.", icon: <Award className="w-8 h-8" /> },
              { title: "Instant Booking", text: "Receive confirmation via SMS and Email instantly.", icon: <Zap className="w-8 h-8" /> }
            ].map((item, idx) => (
              <div key={idx} className="p-10 rounded-[3rem] bg-medical-soft/30 border border-medical-blue/5 text-center space-y-6">
                <div className="w-16 h-16 bg-medical-blue/10 rounded-2xl flex items-center justify-center text-medical-blue mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-medical-dark">{item.title}</h3>
                <p className="text-medical-gray leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Option */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 rounded-[4rem] bg-red-600 text-white text-center space-y-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Need Immediate Help?</h2>
              <div className="text-5xl md:text-7xl font-black tracking-tighter">+251 911 718 959</div>
              <button className="bg-white text-red-600 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 mx-auto">
                <Phone className="w-6 h-6" /> Call Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Benefits */}
      <section className="py-32 px-6 bg-medical-soft/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "No Waiting Lines", text: "Skip the queue with priority booking.", icon: <Users className="w-6 h-6" /> },
              { title: "Easy Rescheduling", text: "Change your visit date in one click.", icon: <Calendar className="w-6 h-6" /> },
              { title: "Online Support", text: "24/7 digital assistance for patients.", icon: <MessageSquare className="w-6 h-6" /> },
              { title: "Fast Confirmation", text: "Get your receipt in under 5 seconds.", icon: <Zap className="w-6 h-6" /> }
            ].map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-[2.5rem] bg-white border border-medical-blue/5 shadow-sm group hover:border-medical-blue/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-medical-blue/5 flex items-center justify-center text-medical-blue mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-medical-dark mb-2">{benefit.title}</h4>
                <p className="text-sm text-medical-gray leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

function Award({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}
