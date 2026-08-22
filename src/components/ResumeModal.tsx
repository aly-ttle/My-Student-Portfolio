import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Download, Mail, Globe, Bookmark, Printer,
  MapPin, Phone, Github, Linkedin, Calendar, CheckSquare, Sparkles 
} from 'lucide-react';
import { STUDENT_PROFILE, EDUCATION_DATA, EXPERIENCE_DATA } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const triggerDownloadAction = () => {
    setIsDownloading(true);
    setDownloadComplete(false);

    // Simulate PDF generation & compile
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadComplete(true);

      // Create a simulated text record file of Jane's profile and download it
      const resumeContent = `
=========================================
JANE ALYSSA J. PAGBILAO - INFORMATION TECHNOLOGY RESUME
=========================================
Email: ${STUDENT_PROFILE.socials.email}
Phone: ${STUDENT_PROFILE.socials.phone}
Portfolio: https://github.com/janealyssa-it

EDUCATION:
-----------------------------------------
${EDUCATION_DATA.school}
${EDUCATION_DATA.degree}
GPA: ${EDUCATION_DATA.gpa}
Period: ${EDUCATION_DATA.period}

Relevant Coursework:
${EDUCATION_DATA.coursework.map(c => ` - ${c}`).join('\n')}

CERTIFICATIONS:
${EDUCATION_DATA.certifications.map(c => ` - ${c.name} (${c.issuer}, ${c.date})`).join('\n')}

EXPERIENCES & COLLABORATIVE INITIATIVES:
-----------------------------------------
${EXPERIENCE_DATA.map(exp => `
Role: ${exp.role} | ${exp.organization} (${exp.period})
Description: ${exp.description}
Key Contributions:
${exp.bullets.map(b => `  * ${b}`).join('\n')}
`).join('\n')}

      `;

      // Trigger automatic plain-text download
      const blob = new Blob([resumeContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Jane_Alyssa_Pagbilao_IT_Resume.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setTimeout(() => {
        setDownloadComplete(false);
      }, 4000);

    }, 1200);
  };

  const triggerPagePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="resume-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop screen filter */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
          />

          {/* Modal Content Drawer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl shadow-cyan-500/5 flex flex-col pointer-events-auto"
          >
            
            {/* Header controls bar */}
            <div className="bg-slate-950 px-6 py-4 border-b border-slate-900 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 font-semibold uppercase">
                <Bookmark className="h-4.5 w-4.5 text-cyan-400" />
                <span>Interactive PDF print preview</span>
              </div>

              <div className="flex items-center space-x-3">
                
                {/* Print button */}
                <button 
                  onClick={triggerPagePrint}
                  title="Print Resume Layout"
                  className="p-1.5 bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white rounded-lg border border-slate-800 cursor-pointer hidden sm:flex items-center space-x-1 text-xs font-mono"
                >
                  <span>Print</span>
                </button>

                {/* Simulated download */}
                <button 
                  onClick={triggerDownloadAction}
                  disabled={isDownloading}
                  className="px-3.5 py-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-[10px] uppercase font-mono font-bold tracking-wider text-white rounded-lg cursor-pointer flex items-center space-x-1.5 hover:scale-102 transition-transform"
                >
                  {isDownloading ? (
                    <span>Compiling...</span>
                  ) : downloadComplete ? (
                    <span className="text-emerald-300">File Received ✅</span>
                  ) : (
                    <>
                      <Download className="h-3.5 w-3.5" />
                      <span>Download TXT</span>
                    </>
                  )}
                </button>

                <div className="h-5 w-[1px] bg-slate-800" />

                {/* Close Button */}
                <button 
                  onClick={onClose}
                  className="p-1.5 rounded-full bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white border border-slate-800 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Resume Main Body Sheets */}
            <div id="printable-resume-container" className="p-6 sm:p-10 flex-1 overflow-y-auto bg-white text-slate-950 select-text scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
              
              {/* Header Box */}
              <div className="border-b-2 border-slate-900 pb-5 text-left">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <h2 className="font-sans font-bold text-3xl tracking-tight text-slate-950">
                      {STUDENT_PROFILE.name}
                    </h2>
                    <p className="text-sm font-sans font-semibold text-cyan-700 tracking-wide mt-1 uppercase">
                      {STUDENT_PROFILE.title} • {STUDENT_PROFILE.specialization}
                    </p>
                  </div>

                  {/* Direct details stack */}
                  <div className="text-xs font-sans text-slate-600 space-y-1 sm:text-right">
                    <p className="flex items-center sm:justify-end gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
                      <span>{STUDENT_PROFILE.socials.email}</span>
                    </p>
                    <p className="flex items-center sm:justify-end gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
                      <span>{STUDENT_PROFILE.socials.phone}</span>
                    </p>
                    <p className="flex items-center sm:justify-end gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
                      <span>Ilocos Sur, Philippines</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio Statement */}
              <div className="py-4 text-left border-b border-slate-200">
                <h4 className="font-sans font-bold text-[11px] text-slate-500 uppercase tracking-widest mb-1.5">Professional Objective / Bio</h4>
                <p className="text-xs sm:text-xs text-slate-700 font-sans leading-relaxed">
                  {STUDENT_PROFILE.detailedBio}
                </p>
              </div>

              {/* Grid content loops */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5">
                
                {/* Left side elements (Spans 8 cols) */}
                <div className="md:col-span-8 text-left space-y-6">
                  
                  {/* Initiatives experiences */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-extrabold text-[12px] text-slate-800 uppercase border-b-2 border-slate-400 pb-1 tracking-wide">
                      Selected Initiatives & Projects
                    </h3>

                    <div className="space-y-4">
                      {EXPERIENCE_DATA.map((exp, idx) => (
                        <div key={idx} className="space-y-1 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-sans font-bold text-slate-900">{exp.role}</span>
                            <span className="font-sans text-[10px] text-slate-500 font-medium">{exp.period}</span>
                          </div>
                          <p className="font-sans font-semibold text-cyan-800 uppercase text-[9px] tracking-wider">
                            {exp.organization} • <span className="capitalize">{exp.type} contract</span>
                          </p>
                          <ul className="list-disc pl-4 space-y-1 text-slate-600 mt-1">
                            {exp.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="leading-relaxed font-sans">{b}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlighted project list */}
                  <div className="space-y-3">
                    <h3 className="font-sans font-extrabold text-[12px] text-slate-800 uppercase border-b-2 border-slate-400 pb-1 tracking-wide">
                      Selected Technical Codebases
                    </h3>

                    <div className="space-y-2.5 text-xs text-slate-700">
                      <div>
                        <span className="font-sans font-bold text-slate-900">SK Budget Tracker</span>
                        <p className="text-slate-600 italic block mt-0.5 leading-relaxed font-sans">
                          Developed a web budget and expense tracking application enabling local youth council leadership to manage funds and publish automatic visual transparency reports under secure SQL configurations.
                        </p>
                      </div>
                      <div>
                        <span className="font-sans font-bold text-slate-900">iTHINK! Quiz App</span>
                        <p className="text-slate-600 italic block mt-0.5 leading-relaxed font-sans">
                          Engineered an interactive academic trivia and timed IT assessment game featuring streak multipliers, progress trackers, and cached historical score logs.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right side elements (Spans 4 cols) */}
                <div className="md:col-span-4 text-left space-y-6 md:border-l md:border-slate-200 md:pl-6">
                  
                  {/* Education details */}
                  <div className="space-y-2">
                    <h3 className="font-sans font-extrabold text-[12px] text-slate-800 uppercase border-b-2 border-slate-400 pb-1 tracking-wide">
                      Education
                    </h3>
                    <div className="text-xs text-slate-700 space-y-1">
                      <p className="font-bold text-slate-900">{EDUCATION_DATA.school}</p>
                      <p className="font-sans text-[11px] leading-tight text-slate-600">{EDUCATION_DATA.degree}</p>
                      <p className="font-sans text-[11px] text-slate-600 font-semibold mt-1">GPA: {EDUCATION_DATA.gpa}</p>
                      <p className="font-sans text-[10px] text-slate-500 italic uppercase mt-1">{EDUCATION_DATA.period}</p>
                    </div>
                  </div>

                  {/* Certifications block */}
                  <div className="space-y-2.5">
                    <h3 className="font-sans font-extrabold text-[12px] text-slate-800 uppercase border-b-2 border-slate-400 pb-1 tracking-wide">
                      Certificates
                    </h3>
                    <div className="space-y-2 text-[11px] text-slate-600 font-sans">
                      {EDUCATION_DATA.certifications.map((cert, idx) => (
                        <div key={idx} className="border-l border-slate-300 pl-2">
                          <p className="font-bold text-slate-900 leading-tight">{cert.name}</p>
                          <p className="text-slate-500 text-[10px]">{cert.issuer} • {cert.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical standards block */}
                  <div className="space-y-2">
                    <h3 className="font-sans font-extrabold text-[12px] text-slate-800 uppercase border-b-2 border-slate-400 pb-1 tracking-wide">
                      Developer Skills
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {['React.js', 'Node.js', 'Python', 'SQL / MySQL', 'Git / GitHub', 'Agile / Scrum'].map(skill => (
                        <span 
                          key={skill}
                          className="px-2 py-0.5 bg-slate-100 text-[10px] font-sans text-slate-700 font-semibold rounded border border-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Toast notification overlay in modal */}
            {downloadComplete && (
              <div className="absolute inset-x-0 bottom-6 flex justify-center z-40">
                <div className="bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-lg border border-emerald-500/30 flex items-center space-x-2 text-xs font-semibold animate-bounce">
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                  <span>File 'Jane_Alyssa_Pagbilao_IT_Resume.txt' Downloaded Successfully!</span>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
