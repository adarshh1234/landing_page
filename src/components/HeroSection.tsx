import React, { useState } from 'react';
import { Play, Sparkles, Building2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenDemo: () => void;
  onOpenVideoDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo, onOpenVideoDemo }) => {
  const [activeProfileIndex, setActiveProfileIndex] = useState(0);

  const profiles = [
    {
      initials: 'AK',
      name: 'Aisha Kapoor',
      role: 'Product Designer · Verified',
      fitScore: '98% Fit',
      interviewStatus: 'AI Interview Passed',
      interviewDuration: '5 min · Adaptive',
      portfolioStatus: 'Portfolio · 12 projects',
      portfolioRating: '97% peer rated',
      ranking: 'Top 5% · Design Community',
      tier: '🏆 Gold',
      activeBids: '3 companies viewing your profile',
      offerCompany: 'Stripe · hiring',
      offerDetails: 'Offered $185k · 2d ago',
    },
    {
      initials: 'MC',
      name: 'Marcus Chen',
      role: 'Staff ML Engineer · Verified',
      fitScore: '99% Fit',
      interviewStatus: 'APEX-SWE Bench Passed',
      interviewDuration: '12 min · Sandbox',
      portfolioStatus: 'Verified Repos · 8 audits',
      portfolioRating: '99.4% benchmark',
      ranking: 'Top 1% · Systems Guild',
      tier: '💎 Diamond',
      activeBids: '5 companies competing',
      offerCompany: 'Anthropic Partner · hiring',
      offerDetails: 'Offered $310k · 4h ago',
    }
  ];

  const activeProfile = profiles[activeProfileIndex];

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden screenshot-ambient-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content Matching Screenshot Exactly */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tag Badge matching screenshot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pill-bg border border-pill-border text-pill-text text-xs font-semibold tracking-wide mb-8 w-fit shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              <span>The future of professional identity</span>
            </div>

            {/* Main Headline matching screenshot */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-[68px] font-extrabold text-[#06284f] tracking-[-0.04em] leading-[1.08] mb-6">
              Stop Claiming.<br />
              Start <span className="text-gradient-blue">Proving.</span>
            </h1>

            {/* Subtitle matching screenshot */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mb-9 font-normal">
              The professional network where verified skills, not CVs, get you hired.{' '}
              <strong className="text-[#0a192f] font-bold">
                Companies bid for talent — not the other way around.
              </strong>
            </p>

            {/* Action Buttons matching screenshot */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-bold text-white btn-gradient-blue shadow-sm hover:shadow-blue-glow transition-all duration-200 active:scale-[0.98]"
              >
                <span>Get In — It's Free</span>
              </button>

              <button
                onClick={onOpenVideoDemo}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-base font-semibold text-[#0a192f] bg-white hover:bg-sky-50 border border-sky-200 shadow-2xs transition-all duration-150 group"
              >
                <div className="w-5 h-5 rounded-full border border-[#0a192f] flex items-center justify-center mr-2.5">
                  <Play className="w-2.5 h-2.5 fill-[#0a192f] text-[#0a192f] ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Bottom Proof Badges with cyan circle outline from screenshot */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-8 text-xs sm:text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border-[1.5px] border-[#0284c7] flex items-center justify-center text-[#0284c7]">
                  <span className="text-[9px] font-bold">✓</span>
                </div>
                <span>Al-verified skills</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border-[1.5px] border-[#0284c7] flex items-center justify-center text-[#0284c7]">
                  <span className="text-[9px] font-bold">✓</span>
                </div>
                <span>Zero bias hiring</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border-[1.5px] border-[#0284c7] flex items-center justify-center text-[#0284c7]">
                  <span className="text-[9px] font-bold">✓</span>
                </div>
                <span>Global talent pool</span>
              </div>
            </div>
          </div>

          {/* Right Column: Aisha Kapoor Card matching screenshot */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative pt-4">
            
            {/* Ambient Cyan Glow behind the card */}
            <div className="absolute -inset-4 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

            {/* Main Card */}
            <div className="w-full max-w-[440px] bg-white rounded-[2rem] border border-sky-100 p-7 sm:p-8 shadow-[0_20px_50px_rgba(2,132,199,0.14)] relative z-10">
              
              {/* Header: Avatar + Name + Fit Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-[#063970] text-white font-bold text-base flex items-center justify-center shadow-xs">
                    {activeProfile.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a192f] text-base leading-snug">
                      {activeProfile.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {activeProfile.role}
                    </p>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-full text-xs font-bold bg-fit-bg text-fit-text border border-fit-border shadow-2xs">
                  ★ {activeProfile.fitScore}
                </div>
              </div>

              {/* Verified Checklist Rows */}
              <div className="py-5 space-y-3.5 text-xs">
                <div className="flex items-center justify-between text-slate-700">
                  <div className="flex items-center gap-2.5 font-semibold text-[#0a192f]">
                    <div className="w-4 h-4 rounded-full border-[1.5px] border-[#0284c7] flex items-center justify-center text-[#0284c7]">
                      <span className="text-[9px] font-bold">✓</span>
                    </div>
                    <span>{activeProfile.interviewStatus}</span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">{activeProfile.interviewDuration}</span>
                </div>

                <div className="flex items-center justify-between text-slate-700">
                  <div className="flex items-center gap-2.5 font-semibold text-[#0a192f]">
                    <div className="w-4 h-4 rounded-full border-[1.5px] border-[#0284c7] flex items-center justify-center text-[#0284c7]">
                      <span className="text-[9px] font-bold">✓</span>
                    </div>
                    <span>{activeProfile.portfolioStatus}</span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">{activeProfile.portfolioRating}</span>
                </div>

                <div className="flex items-center justify-between text-slate-700">
                  <div className="flex items-center gap-2.5 font-semibold text-[#0a192f]">
                    <div className="w-4 h-4 rounded-full border-[1.5px] border-[#0284c7] flex items-center justify-center text-[#0284c7]">
                      <span className="text-[9px] font-bold">✓</span>
                    </div>
                    <span>{activeProfile.ranking}</span>
                  </div>
                  <span className="font-semibold text-[11px] text-slate-700">{activeProfile.tier}</span>
                </div>
              </div>

              {/* Bottom Deep Navy to Royal Blue Gradient Banner */}
              <div className="mt-2 rounded-2xl card-banner-gradient text-white px-4 py-3.5 text-xs flex items-center justify-between shadow-xs">
                <span className="font-medium text-white/95">{activeProfile.activeBids}</span>
                <span className="text-[11px] font-semibold text-sky-200">Active now</span>
              </div>

              {/* Floating Offer Pill at bottom-left */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white border border-sky-100 rounded-2xl py-2.5 px-4 shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex items-center gap-3 z-20">
                <div className="w-8 h-8 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7]">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0a192f]">{activeProfile.offerCompany}</div>
                  <div className="text-[11px] text-slate-500 font-mono">{activeProfile.offerDetails}</div>
                </div>
              </div>

            </div>

            {/* Profile Switcher Controls */}
            <div className="mt-10 flex items-center gap-2 z-10">
              <button
                onClick={() => setActiveProfileIndex(0)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                  activeProfileIndex === 0
                    ? 'btn-gradient-blue text-white shadow-xs'
                    : 'bg-white border border-sky-200 text-slate-600 hover:bg-sky-50'
                }`}
              >
                Aisha (Designer)
              </button>
              <button
                onClick={() => setActiveProfileIndex(1)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                  activeProfileIndex === 1
                    ? 'btn-gradient-blue text-white shadow-xs'
                    : 'bg-white border border-sky-200 text-slate-600 hover:bg-sky-50'
                }`}
              >
                Marcus (Staff ML)
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
