import React from 'react';
import { 
  Brain, 
  ShieldCheck, 
  Globe, 
  Handshake, 
  Trophy, 
  BarChart2
} from 'lucide-react';

interface CorePlatformOSProps {
  onOpenDemo?: () => void;
}

export const CorePlatformOS: React.FC<CorePlatformOSProps> = () => {
  const features = [
    {
      id: 1,
      icon: Brain,
      title: 'Pathfinder AI',
      description: 'Matches jobs, people, and learning based on verified skills, not keywords.',
      tag: 'Fit score + skill gap analysis',
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: 'Skill Verification Hub',
      description: 'AI interviews, project uploads, peer endorsements — proof over claims.',
      tag: 'Mercor-style live vetting',
    },
    {
      id: 3,
      icon: Globe,
      title: 'Authentic Community',
      description: 'Niche groups, AI-facilitated networking, and local hubs in emerging markets.',
      tag: '150+ countries',
    },
    {
      id: 4,
      icon: Handshake,
      title: 'Agentic Headhunter',
      description: 'AI-to-AI negotiation for salary, culture fit, and skills — before humans talk.',
      tag: 'Zero friction hiring',
    },
    {
      id: 5,
      icon: Trophy,
      title: 'Gamified Engagement',
      description: 'Skill challenges, hackathons, and leaderboards that directly improve job prospects.',
      tag: 'Earn badges + rewards',
    },
    {
      id: 6,
      icon: BarChart2,
      title: 'Trust & Analytics',
      description: 'Dynamic reputation scores, bias detection, and live application insights.',
      tag: 'See your ranking',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-[#f8fbfe] border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from Screenshot 1 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f0f8ff] border border-[#dbeafe] text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <span>CORE FEATURES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#061f3d] tracking-[-0.035em] leading-tight mb-4">
            The <span className="text-gradient-blue">Intelligent</span> Professional OS
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Everything you need to prove, connect, and get hired — all in one platform.
          </p>
        </div>

        {/* 6 Feature Cards from Screenshot 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-[1.75rem] border border-[#e2edf8] p-7 transition-all duration-200 hover:border-[#bae6fd] hover:shadow-[0_10px_25px_rgba(2,132,199,0.06)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-full bg-[#f0f8ff] border border-[#dbeafe] flex items-center justify-center text-[#0066cc] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-[#061f3d] tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#0066cc]">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
