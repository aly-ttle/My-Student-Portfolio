import React, { useState } from 'react';
import { 
  Mail, Phone, Github, Linkedin, Instagram, Download, 
  Send, Sparkles, CheckSquare, Terminal, Heart, ArrowRight, Loader2, Bookmark 
} from 'lucide-react';
import { STUDENT_PROFILE } from '../data';

interface ContactProps {
  onOpenResumeModal: () => void;
}

export default function Contact({ onOpenResumeModal }: ContactProps) {
  // Form hooks
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('submitting');

    // Simulate database post and routing response
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormStatus('idle');
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-slate-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-semibold mb-2 flex items-center justify-center">
            <Mail className="h-4 w-4 mr-1.5 text-indigo-400" />
            07 . GET IN TOUCH
          </p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">With Me</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded mt-3 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct info options (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
            <h3 className="font-sans font-bold text-xl text-white tracking-wide">
              Let's build something efficient together
            </h3>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
              I am actively seeking <strong>Summer 2026/Fall 2026 internships</strong>, local freelance contracts, and volunteer coding tasks. Write me an inquiry, or ping me on corporate networks. I generally replies inside standard business working periods.
            </p>

            {/* Practical Contact Info Blocks */}
            <div className="space-y-4 pt-4">
              
              <a 
                href={`mailto:${STUDENT_PROFILE.socials.email}`}
                className="p-4 bg-slate-900/40 border border-slate-900 hover:border-slate-800 rounded-2xl flex items-center space-x-4 transition-colors group"
              >
                <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-sans text-[10px] text-slate-500 uppercase tracking-wider">Email Address</span>
                  <span className="block font-mono text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">{STUDENT_PROFILE.socials.email}</span>
                </div>
              </a>

              <a 
                href={`tel:${STUDENT_PROFILE.socials.phone}`}
                className="p-4 bg-slate-900/40 border border-slate-900 hover:border-slate-800 rounded-2xl flex items-center space-x-4 transition-colors group"
              >
                <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-sans text-[10px] text-slate-500 uppercase tracking-wider">Mobile Contact</span>
                  <span className="block font-mono text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">{STUDENT_PROFILE.socials.phone}</span>
                </div>
              </a>

            </div>

            {/* Social handles links */}
            <div className="pt-6 border-t border-slate-900">
              <span className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-3">
                // Corporate & Code Handles
              </span>

              <div className="flex flex-wrap gap-2">
                <a 
                  href={STUDENT_PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 font-mono rounded-xl hover:text-white flex items-center space-x-2 transition-all hover:scale-102"
                >
                  <Github className="h-4 w-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>

                <a 
                  href={STUDENT_PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 font-mono rounded-xl hover:text-white flex items-center space-x-2 transition-all hover:scale-102"
                >
                  <Linkedin className="h-4 w-4 text-indigo-400" />
                  <span>LinkedIn</span>
                </a>

                <a 
                  href={STUDENT_PROFILE.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 font-mono rounded-xl hover:text-white flex items-center space-x-2 transition-all hover:scale-102"
                >
                  <Instagram className="h-4 w-4 text-pink-400" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* PDF resume download shortcut */}
            <div className="pt-4">
              <button 
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-mono font-semibold text-cyan-300 flex items-center justify-center space-x-2 cursor-pointer transition-colors"
              >
                <Download className="h-4 w-4 text-cyan-400" />
                <span>Launch Interactive Resume Canvas</span>
              </button>
            </div>

          </div>

          {/* Right Column: Contact form with mock auto responder (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/30 p-6 sm:p-8 rounded-2xl border border-slate-800/80 text-left">
            {formStatus !== 'success' ? (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-900">
                  <span className="font-mono text-xs text-slate-400 flex items-center space-x-1.5 font-semibold">
                    <CheckSquare className="h-4 w-4 text-indigo-400" />
                    <span>Inquiry Routing Form</span>
                  </span>
                  <span className="font-mono text-[9px] text-slate-500 uppercase">Secure SMTP mockup</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="font-mono text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Your Name <span className="text-red-400">*</span></label>
                    <input 
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name as per your ID"
                      className="bg-slate-950 border border-slate-850 focus:border-cyan-500/60 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none transition-colors focus:ring-1 focus:ring-cyan-500/20"
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="font-mono text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Your Email <span className="text-red-400">*</span></label>
                    <input 
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="youremail@domain.com"
                      className="bg-slate-950 border border-slate-850 focus:border-cyan-500/60 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none transition-colors focus:ring-1 focus:ring-cyan-500/20"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="font-mono text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Subject / Purpose</label>
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Minds behind ISPSC Academic Project, Summer 2026 Interview..."
                    className="bg-slate-950 border border-slate-850 focus:border-cyan-500/60 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none transition-colors focus:ring-1 focus:ring-cyan-500/20"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="font-mono text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Your Message <span className="text-red-400">*</span></label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hi Jane! I saw your SK Budget Tracker and iTHINK! Quiz projects. Let's schedule an interview chat..."
                    className="bg-slate-950 border border-slate-850 focus:border-cyan-500/60 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none transition-colors focus:ring-1 focus:ring-cyan-500/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 text-xs text-white uppercase font-bold tracking-wider rounded-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20 transition-all flex items-center justify-center space-x-2 w-full cursor-pointer disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <Loader2 className="h-4.5 w-4.5 animate-spin text-white" />
                      <span>Transmitting Telemetry Packets...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4.5 w-4.5" />
                      <span>Transmit Message Core</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* High Tech Custom Responsive Success View */
              <div className="space-y-6 flex flex-col justify-between py-2">
                
                <div className="flex items-center space-x-3 text-emerald-400">
                  <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <Terminal className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase">Message Transmitted</span>
                    <span className="block font-sans font-bold text-lg text-white">IT SMTP Handshake: 200 OK</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-900 font-mono text-[11px] leading-relaxed text-slate-300 space-y-4 shadow-inner">
                  <div className="border-b border-slate-900 pb-3 text-slate-500">
                    // jane_pagbilao_core_responder.bash output:
                  </div>
                  
                  <div>
                    <span className="text-cyan-400">FROM:</span> Jane Alyssa J. Pagbilao Auto-Mailer &lt;jane.pagbilao@ispsc.edu.ph&gt;
                  </div>
                  <div>
                    <span className="text-cyan-400">TO:</span> {formData.name} &lt;{formData.email}&gt;
                  </div>
                  <div>
                    <span className="text-cyan-400">SUBJECT:</span> RE: {formData.subject || "Academic Collaboration Inquiry"}
                  </div>

                  <div className="text-indigo-300 pt-2 font-sans text-xs">
                    "Thank you, <strong>{formData.name}</strong>! Your message packet has successfully synced inside my terminal queue. I have cached a record file detailing your interest in the subject: <em>'{formData.subject || "General IT Inquiry"}'</em>. I inspect mailbox feeds daily and will follow up with you shortly via your address: <strong>{formData.email}</strong>. Have an awesome week!"
                  </div>

                  <div className="text-slate-500 italic pt-2">
                    // Handshake completed at UTC current timestamp
                  </div>
                </div>

                <button 
                  onClick={resetForm}
                  className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer self-start"
                >
                  Write Another Message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
