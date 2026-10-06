import React from 'react';
import { Compass } from 'lucide-react';

export const DiscoverIndia: React.FC = () => {
  return (
    <section className="relative h-[480px] sm:h-[560px] flex items-center justify-center overflow-hidden bg-[#111827]">
      {/* Background Cinematic Photograph */}
      <img
        src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=2000&q=90"
        alt="Varanasi Ganges Dawn India Journey"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
      />
      
      {/* Soft Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-widest uppercase text-[#D4AF37]">
          <Compass className="w-3.5 h-3.5" />
          <span>Inspiration & Discovery</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium leading-tight">
          Your visa is only <br />
          <span className="italic text-[#FAF8F5]">the beginning.</span>
        </h2>

        <p className="text-lg sm:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
          Discover the places, people, sacred traditions, and timeless stories that make India an unforgettable journey of a lifetime.
        </p>
      </div>
    </section>
  );
};
