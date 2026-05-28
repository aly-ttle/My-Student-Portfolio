import React from 'react';
import { Award, Trophy, Target, Activity, Star, Calendar } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data';

export default function Achievements() {
  
  const getAchievementIcon = (iconName: string) => {
    switch(iconName) {
      case "Award": return <Award className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition-transform" />;
      case "Trophy": return <Trophy className="h-6 w-6 text-amber-400 group-hover:scale-110 transition-transform" />;
      case "Target": return <Target className="h-6 w-6 text-indigo-400 group-hover:scale-110 transition-transform" />;
      case "Activity": return <Activity className="h-6 w-6 text-pink-400 group-hover:scale-110 transition-transform" />;
      default: return <Star className="h-6 w-6 text-indigo-400 group-hover:scale-110 transition-transform" />;
    }
  };

  return (
    <section 
      id="achievements" 
      className="py-24 bg-slate-900/60 border-b border-slate-900 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-semibold mb-2 flex items-center justify-center">
            <Trophy className="h-4 w-4 mr-1.5 text-indigo-400" />
            06 . MILESTONES & RECOGNITION
          </p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Achievements</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded mt-3 mx-auto" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS_DATA.map((ach) => {
            // Pick a matching boundary glow
            let hoverOutline = "hover:border-cyan-500/30 hover:shadow-cyan-500/5";
            let circleColor = "bg-cyan-500/10 border-cyan-500/20";
            
            if (ach.icon === "Trophy") {
              hoverOutline = "hover:border-amber-500/30 hover:shadow-amber-500/5";
              circleColor = "bg-amber-500/10 border-amber-500/20";
            } else if (ach.icon === "Target") {
              hoverOutline = "hover:border-indigo-500/30 hover:shadow-indigo-500/5";
              circleColor = "bg-indigo-500/10 border-indigo-500/20";
            } else if (ach.icon === "Activity") {
              hoverOutline = "hover:border-pink-500/30 hover:shadow-pink-500/5";
              circleColor = "bg-pink-500/10 border-pink-500/20";
            }

            return (
              <div 
                key={ach.id}
                className={`bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80 transition-all duration-300 group ${hoverOutline} flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-xl`}
              >
                <div className="text-left flex flex-col space-y-4">
                  {/* Icon wrap */}
                  <div className={`p-3 rounded-xl border self-start ${circleColor}`}>
                    {getAchievementIcon(ach.icon)}
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-slate-500 tracking-widest uppercase flex items-center space-x-1">
                      <Calendar className="h-3 w-3 mr-0.5" />
                      <span>{ach.date}</span>
                    </span>
                    <h4 className="font-sans font-bold text-base text-white tracking-wide leading-snug group-hover:text-cyan-300 transition-colors">
                      {ach.title}
                    </h4>
                    <p className="font-sans text-[10px] text-slate-400 font-semibold uppercase tracking-wider italic">
                      {ach.issuer}
                    </p>
                  </div>

                  <p className="font-sans text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-900">
                    {ach.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
