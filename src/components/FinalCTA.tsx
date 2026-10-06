import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onStartApplication: () => void;
  onCheckEligibility: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onStartApplication,
  onCheckEligibility,
}) => {
  return (
    <section className="relative py-28 overflow-hidden bg-[#111827] text-white">
      {/* Background Image: Vibrant Hawa Mahal Jaipur Palace Facade */}
      <img
        src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=2000&q=95"
        alt="Hawa Mahal Jaipur Palace Facade Rajasthan Journey"
        className="absolute inset-0 w-full h-full object-cover opacity-85 saturate-125 contrast-105 brightness-105 transition-all duration-700"
      />
      {/* Delicate Vignette Overlay for Text Readability without Dullness */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 via-black/25 to-black/35" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-xs font-semibold text-[#D4AF37] uppercase tracking-widest shadow-md">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Official Visa Service Portal</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-serif font-medium leading-tight drop-shadow-lg">
          Ready to begin <br />
          <span className="italic text-[#FAF8F5]">your journey?</span>
        </h2>

        <p className="text-base sm:text-lg text-white/95 font-light max-w-xl mx-auto leading-relaxed drop-shadow-sm">
          Verify your eligibility in seconds and submit your application with official government protection.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onStartApplication}
            className="px-8 py-4 rounded-full bg-[#D9682C] hover:bg-[#C85A1B] text-white font-semibold text-sm transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 group"
          >
            <span>Start Visa Application</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onCheckEligibility}
            className="px-7 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-semibold text-sm transition-all duration-300"
          >
            Check Eligibility First
          </button>
        </div>
      </div>
    </section>
  );
};
