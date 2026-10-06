import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../data/visaData';
import type { Destination } from '../data/visaData';

interface PopularDestinationsProps {
  onSelectDestination: (destination: Destination) => void;
}

export const PopularDestinations: React.FC<PopularDestinationsProps> = ({
  onSelectDestination,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Heritage', 'Nature', 'Beaches', 'Mountains', 'Cities'];

  const filteredDestinations =
    activeCategory === 'All'
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.category === activeCategory);

  return (
    <section id="destinations" className="py-24 bg-[#F7F5EF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header & Category Navigation Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9682C] block mb-2">
              Editorial Travel Showcase
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-medium text-[#111827]">
              Discover <span className="italic">India.</span>
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#111827] text-white shadow-xs'
                    : 'bg-white text-[#4B5563] hover:bg-[#FAF8F5] border border-[#E5E0D8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredDestinations.map((dest) => {
            let colSpan = 'md:col-span-6 lg:col-span-8';
            let heightClass = 'h-[440px]';

            if (dest.id === 'kerala') {
              colSpan = 'md:col-span-6 lg:col-span-4';
              heightClass = 'h-[440px]';
            } else if (dest.id === 'varanasi') {
              colSpan = 'md:col-span-6 lg:col-span-4';
              heightClass = 'h-[500px]';
            } else if (dest.id === 'goa') {
              colSpan = 'md:col-span-6 lg:col-span-4';
              heightClass = 'h-[500px]';
            } else if (dest.id === 'himalayas') {
              colSpan = 'md:col-span-6 lg:col-span-4';
              heightClass = 'h-[500px]';
            }

            return (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className={`${colSpan} group cursor-pointer relative rounded-3xl overflow-hidden shadow-lg border border-[#E5E0D8] ${heightClass} card-hover-effect flex flex-col justify-end p-8 text-white`}
              >
                {/* Background Image */}
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Content */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{dest.state} • {dest.category}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">
                    {dest.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 font-light max-w-xl line-clamp-2">
                    {dest.tagline}
                  </p>

                  <div className="pt-3 flex items-center gap-2 text-xs font-semibold text-white/90 group-hover:text-white">
                    <span>Explore Destination & Visa Info</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
