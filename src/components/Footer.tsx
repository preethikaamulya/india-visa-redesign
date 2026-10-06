import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B132B] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Authority Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C11.45 2 11 2.45 11 3V4.07C8.16 4.54 6 7.02 6 10V14L4 16V17H20V16L18 14V10C18 7.02 15.84 4.54 13 4.07V3C13 2.45 12.55 2 12 2ZM12 6C14.21 6 16 7.79 16 10V15H8V10C8 7.79 9.79 6 12 6ZM10 18H14C14 19.1 13.1 20 12 20C10.9 20 10 19.1 10 18Z" />
                </svg>
              </div>
              <div>
                <span className="block font-cinzel tracking-widest text-base font-semibold">
                  INDIA VISA ONLINE
                </span>
                <span className="text-[11px] text-[#D9682C] font-semibold tracking-wider uppercase block">
                  Ministry of External Affairs • Government of India
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 font-light leading-relaxed max-w-md">
              The official Electronic Visa (e-Visa) portal of the Government of India. Providing secure, agentless digital authorization for international visitors under the Bureau of Immigration standards.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-[#D4AF37]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero-Trust Infrastructure</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4" />
                <span>256-Bit SSL Encrypted</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Visa Services
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-light">
              <li>
                <a href="#eligibility" className="hover:text-white transition-colors">
                  Check Visa Eligibility
                </a>
              </li>
              <li>
                <a href="#visa-types" className="hover:text-white transition-colors">
                  Tourist & Business Visas
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  Application Step-by-Step
                </a>
              </li>
              <li>
                <a href="#check-status" className="hover:text-white transition-colors">
                  Track Application Status
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Photo & Passport Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Government Policy Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Official Notices & Policy
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy & Data Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Use & Portal Governance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Accessibility Compliance (WCAG 2.1 AA)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Bureau of Immigration Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Designated Ports of Entry List (31 Airports)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
          <p>© {new Date().getFullYear()} Government of India. All Rights Reserved. National Informatics Centre (NIC).</p>
          <div className="flex items-center gap-6">
            <span>Language: English (US)</span>
            <span>Security ID: IND-GOV-SEC-2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
