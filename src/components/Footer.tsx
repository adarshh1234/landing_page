import React from 'react';
import { Github, Linkedin, Youtube, Instagram, Shield } from 'lucide-react';

const XIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

interface FooterProps {
  onOpenSignIn?: () => void;
  onOpenSignUp?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSignIn, onOpenSignUp }) => {
  const footerSections = [
    {
      title: 'PLATFORM',
      links: [
        { label: 'Sign In', onClick: onOpenSignIn },
        { label: 'Sign Up (Free)', onClick: onOpenSignUp },
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

  const socialLinks = [
    { label: 'X', href: 'https://x.com/i/flow/login', icon: XIcon },
    { label: 'Instagram', href: 'https://www.instagram.com/accounts/login/', icon: Instagram },
    { label: 'Facebook', href: 'https://www.facebook.com/login/', icon: FacebookIcon },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/login', icon: Linkedin },
    { label: 'YouTube', href: 'https://www.youtube.com', icon: Youtube },
    { label: 'GitHub', href: 'https://github.com/login', icon: Github },
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-mono text-sky-200 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verification Engine: Live (120k+ members)</span>
              </div>

              {/* Quick Sign In / Sign Up CTA Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenSignIn}
                  className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white transition-all cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={onOpenSignUp}
                  className="px-3.5 py-1.5 rounded-lg bg-[#38bdf8] hover:bg-[#0ea5e9] text-xs font-bold text-[#061a33] transition-all shadow-xs cursor-pointer"
                >
                  Sign Up Free
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-white/10 max-w-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300 font-mono block mb-3">
                CONNECT
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-white/[0.04] hover:bg-sky-500/15 border border-white/10 hover:border-sky-400/40 text-slate-300 hover:text-white transition-all text-xs group"
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0 text-slate-400 group-hover:text-sky-300 transition-colors" />
                      <span className="font-medium truncate">{item.label}</span>
                    </a>
                  );
                })}
              </div>
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
                    {link.onClick ? (
                      <button
                        onClick={link.onClick}
                        className="hover:text-white transition-colors duration-150 text-left block py-0.5 text-sky-300 hover:underline cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="hover:text-white transition-colors duration-150 block py-0.5"
                      >
                        {link.label}
                      </a>
                    )}
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
