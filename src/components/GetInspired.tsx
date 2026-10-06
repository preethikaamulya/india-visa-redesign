import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { ITINERARIES } from '../data/visaData';
import type { Itinerary } from '../data/visaData';

interface GetInspiredProps {
  onSelectItinerary: (itinerary: Itinerary) => void;
}

export const GetInspired: React.FC<GetInspiredProps> = ({ onSelectItinerary }) => {
  return (
    <section className="py-24 bg-[#FAF8F5] border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9682C] block mb-2">
              Curated Journey Ideas
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-medium text-[#111827]">
              Get <span className="italic">inspired.</span>
            </h2>
            <p className="mt-3 text-base text-[#4B5563] font-light">
              Craft your travel plans with curated itinerary circuits designed for e-Visa travelers.
            </p>
          </div>
        </div>

        {/* Magazine Vertical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ITINERARIES.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItinerary(item)}
              className="group cursor-pointer bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden card-hover-effect flex flex-col justify-between"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>{item.duration}</span>
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#D9682C] uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#111827] group-hover:text-[#D9682C] transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] font-light leading-relaxed line-clamp-3 mb-4">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F3F4F6] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#111827] group-hover:text-[#D9682C] flex items-center gap-1 transition-colors">
                    <span>View Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
