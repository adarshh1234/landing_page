import React from 'react';
import { Github, Twitter, Linkedin, Youtube, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'PLATFORM',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'The 6 Dimensions', href: '#dimensions' },
        { label: 'Why LetGetIn', href: '#shift' },
        { label: 'Video Showcase', href: '#video-showcase' },
        { label: 'Changelog', href: '#updates' },
      ],
    },
    {
      title: 'FIND WORK',
      links: [
        { label: 'AI & Engineering', href: '#video-showcase' },
        { label: 'Product & Design', href: '#video-showcase' },
        { label: 'Quant & Finance', href: '#video-showcase' },
        { label: 'Direct Company Bids', href: '#shift' },
        { label: 'All 8.2k Roles', href: '#video-showcase' },
      ],
    },
    {
      title: 'EXPLORE',
      links: [
        { label: 'The 6 Dimensions', href: '#dimensions' },
        { label: 'APEX Benchmarks', href: '#features' },
        { label: 'Live Sandbox Eval', href: '#video-showcase' },
        { label: 'Blog & Research', href: '#blog-matrix' },
        { label: 'Community Guilds', href: '#updates' },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { label: 'About', href: '#shift' },
        { label: 'Careers', href: '#blog-matrix' },
        { label: 'Research Lab', href: '#blog-matrix' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'LEGAL',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Policies', href: '#' },
        { label: 'GDPR', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-[#061a33] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid from PDF Page 6 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Column (2 cols wide) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              {/* Logo matching screenshot */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#063970] border border-white/20 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  <span className="font-display">L</span>
                </div>
                <span className="font-display text-2xl font-bold tracking-tight text-white">
                  Let<span className="text-[#38bdf8]">Get</span>In
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-sm mb-6 font-normal">
                The professional identity layer where verified skills, not CVs, get you hired.
              </p>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-mono text-sky-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verification Engine: Live (120k+ members)</span>
              </div>
            </div>

            {/* Social Links from PDF Page 6 */}
            <div className="flex items-center space-x-6 text-slate-300 mt-8 text-xs font-medium">
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Youtube className="w-4 h-4" />
                <span>YouTube</span>
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((sec, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-sky-300 font-mono">
                {sec.title}
              </h5>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {sec.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors duration-150 block py-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © 2026 LetGetIn, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-brand-400" />
              <span>SOC2 Certified · Zero Bias Verified</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
