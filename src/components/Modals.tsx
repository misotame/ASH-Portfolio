import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  User, 
  Stethoscope, 
  FileText, 
  ArrowRight,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ModalsProps {
  isBookingModalOpen: boolean;
  setIsBookingModalOpen: (val: boolean) => void;
  isNewsletterModalOpen: boolean;
  setIsNewsletterModalOpen: (val: boolean) => void;
  selectedFacility: any;
  setSelectedFacility: (val: any) => void;
}

export default function Modals({ 
  isBookingModalOpen, 
  setIsBookingModalOpen, 
  isNewsletterModalOpen, 
  setIsNewsletterModalOpen,
  selectedFacility,
  setSelectedFacility
}: ModalsProps) {

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking request submitted successfully! Our team will contact you shortly.");
    setIsBookingModalOpen(false);
  };

  return (
    <>
      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute inset-0 bg-medical-dark/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Left: Info */}
                <div className="md:w-1/3 bg-medical-blue p-12 text-white flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-6">Book Your Visit</h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Schedule a consultation with our world-class specialists today.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4" /> +1 (234) 567-890
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4" /> care@medify.com
                    </div>
                  </div>
                </div>

                {/* Right: Form */}
                <div className="md:w-2/3 p-12 relative">
                  <button 
                    onClick={() => setIsBookingModalOpen(false)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-medical-soft flex items-center justify-center text-medical-dark hover:bg-medical-blue hover:text-white transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-medical-muted">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-medical-blue" />
                          <input required type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-3 bg-medical-soft rounded-2xl border-none focus:ring-2 focus:ring-medical-blue transition-all" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-medical-muted">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-medical-blue" />
                          <input required type="email" placeholder="john@example.com" className="w-full pl-12 pr-4 py-3 bg-medical-soft rounded-2xl border-none focus:ring-2 focus:ring-medical-blue transition-all" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-medical-muted">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-medical-blue" />
                          <input required type="tel" placeholder="+1 (234) 567-890" className="w-full pl-12 pr-4 py-3 bg-medical-soft rounded-2xl border-none focus:ring-2 focus:ring-medical-blue transition-all" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-medical-muted">Service</label>
                        <div className="relative">
                          <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-medical-blue" />
                          <select required className="w-full pl-12 pr-4 py-3 bg-medical-soft rounded-2xl border-none focus:ring-2 focus:ring-medical-blue transition-all appearance-none">
                            <option value="">Select Service</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="neurology">Neurology</option>
                            <option value="pediatrics">Pediatrics</option>
                            <option value="orthopedics">Orthopedics</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-medical-muted">Preferred Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-medical-blue" />
                          <input required type="date" className="w-full pl-12 pr-4 py-3 bg-medical-soft rounded-2xl border-none focus:ring-2 focus:ring-medical-blue transition-all" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-medical-muted">Preferred Time</label>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-medical-blue" />
                          <input required type="time" className="w-full pl-12 pr-4 py-3 bg-medical-soft rounded-2xl border-none focus:ring-2 focus:ring-medical-blue transition-all" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-medical-muted">Additional Notes (Optional)</label>
                      <div className="relative">
                        <FileText className="absolute left-4 top-4 w-4 h-4 text-medical-blue" />
                        <textarea rows={3} placeholder="Any specific concerns or requests?" className="w-full pl-12 pr-4 py-3 bg-medical-soft rounded-2xl border-none focus:ring-2 focus:ring-medical-blue transition-all resize-none"></textarea>
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-medical-blue text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-medical-blue-alt transition-all shadow-lg shadow-medical-blue/20">
                      Confirm Booking <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Newsletter Modal */}
      <AnimatePresence>
        {isNewsletterModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNewsletterModalOpen(false)}
              className="absolute inset-0 bg-medical-dark/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-lg bg-white rounded-[3rem] p-12 text-center space-y-8"
            >
              <button 
                onClick={() => setIsNewsletterModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-medical-soft flex items-center justify-center text-medical-dark"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-20 h-20 bg-medical-blue/10 rounded-full flex items-center justify-center text-medical-blue mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-medical-dark">Thank You!</h3>
                <p className="text-medical-gray leading-relaxed">
                  You've successfully subscribed to our newsletter. We'll keep you updated with the latest health tips and hospital news.
                </p>
              </div>
              <button 
                onClick={() => setIsNewsletterModalOpen(false)}
                className="w-full bg-medical-dark text-white py-4 rounded-2xl font-bold"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Facility Detail Modal */}
      <AnimatePresence>
        {selectedFacility && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFacility(null)}
              className="absolute inset-0 bg-medical-dark/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="relative w-full max-w-4xl bg-white rounded-[4rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedFacility(null)}
                className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-medical-dark transition-all flex items-center justify-center"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-1/2 h-[300px] lg:h-auto relative">
                  <img src={selectedFacility.image} alt={selectedFacility.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/60 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 text-white">
                    <span className="pill-tag text-white border-white/40 mb-4">{selectedFacility.tag}</span>
                    <h3 className="text-4xl font-bold">{selectedFacility.title}</h3>
                  </div>
                </div>
                <div className="lg:w-1/2 p-12 lg:p-16 space-y-8 overflow-y-auto max-h-[60vh] lg:max-h-none">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-medical-muted">About the Facility</h4>
                    <p className="text-medical-gray leading-relaxed text-lg">
                      {selectedFacility.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-medical-muted">Operating Hours</h4>
                      <div className="flex items-center gap-3 text-medical-dark font-medium">
                        <Clock className="w-5 h-5 text-medical-blue" />
                        {selectedFacility.hours}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-medical-muted">Contact Person</h4>
                      <div className="flex items-center gap-3 text-medical-dark font-medium">
                        <User className="w-5 h-5 text-medical-blue" />
                        {selectedFacility.contact}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 flex gap-4">
                    <button 
                      onClick={() => { setIsBookingModalOpen(true); setSelectedFacility(null); }}
                      className="flex-1 bg-medical-blue text-white py-4 rounded-2xl font-bold hover:bg-medical-blue-alt transition-all shadow-lg shadow-medical-blue/20"
                    >
                      Book This Facility
                    </button>
                    <button className="w-16 h-16 rounded-2xl bg-medical-soft flex items-center justify-center text-medical-blue hover:bg-medical-blue hover:text-white transition-all">
                      <MapPin className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
