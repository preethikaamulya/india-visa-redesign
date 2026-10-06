import React from 'react';
import { Shield, ArrowRight, FileCheck } from 'lucide-react';
import { EligibilityPanel } from './EligibilityPanel';
import type { Country } from '../data/visaData';

interface HeroProps {
  onCheckEligibilityResult: (country: Country, purpose: string, arrivalDate: string) => void;
  onTrackClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onCheckEligibilityResult,
  onTrackClick,
}) => {
  return (
    <section className="relative min-h-[840px] lg:min-h-[900px] flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#111827]">
      {/* Background Image with Cinematic Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2000&q=90"
          alt="Taj Mahal Taj Golden Hour India Journey"
          className="w-full h-full object-cover object-center animate-hero-zoom scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Subtle Dark Gradient Overlay for Typography Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-black/40 to-black/30" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-8 text-center text-white flex-1 flex flex-col justify-center items-center">
        {/* Subtle Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium tracking-widest uppercase text-[#D4AF37] mb-6">
          <Shield className="w-3.5 h-3.5" />
          <span>Official Visa Service • Ministry of External Affairs</span>
        </div>

        {/* Primary Headline in Editorial Serif */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-serif tracking-tight font-medium leading-[1.08] max-w-4xl text-white drop-shadow-sm mb-6">
          Your journey to India <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#FAF8F5]">starts here.</span>
        </h1>

        {/* Supporting Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed mb-8">
          Apply for your official Indian e-Visa with complete confidence, clarity, and government-backed security.
        </p>

        {/* Quick Hero Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => {
              const el = document.getElementById('eligibility-panel-anchor');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full bg-[#D9682C] hover:bg-[#C85A1B] text-white font-semibold text-sm transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2.5 group"
          >
            <span>Check Visa Eligibility</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onTrackClick}
            className="px-7 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-semibold text-sm transition-all duration-300 flex items-center gap-2"
          >
            <FileCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Track Existing Application</span>
          </button>
        </div>
      </div>

      {/* Floating Eligibility Panel at Bottom of Hero */}
      <div id="eligibility-panel-anchor" className="relative z-20 px-6 md:px-12 -mb-8">
        <EligibilityPanel onCheckEligibilityResult={onCheckEligibilityResult} />
      </div>
    </section>
  );
};
