import React from 'react';
import { X, MapPin, Calendar, Compass, ArrowRight } from 'lucide-react';
import type { Destination } from '../data/visaData';

interface DestinationModalProps {
  destination: Destination;
  onClose: () => void;
  onStartApplication: () => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onStartApplication,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5E0D8] max-w-3xl w-full p-8 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/80 hover:bg-white text-[#111827] shadow-md transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Background Header */}
        <div className="relative h-64 -mx-8 -mt-8 mb-8 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{destination.state} • {destination.category}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white">
              {destination.name}
            </h2>
            <p className="text-sm text-white/90 font-light mt-1">
              {destination.tagline}
            </p>
          </div>
        </div>

        {/* Story & Highlights */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9682C] block mb-1">
              Editorial Overview
            </span>
            <p className="text-base text-[#4B5563] font-light leading-relaxed">
              {destination.description}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-between text-xs text-[#374151]">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#D9682C]" />
              <span>Best Time to Visit:</span>
            </span>
            <span className="font-semibold text-sm text-[#111827]">
              {destination.bestTimeToVisit}
            </span>
          </div>

          <div>
            <h4 className="text-base font-serif font-bold text-[#111827] mb-3">
              Must-Experience Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destination.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-[#E5E0D8] subtle-shadow flex items-center gap-3 text-xs text-[#111827] font-medium"
                >
                  <Compass className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="pt-6 border-t border-[#F3F4F6] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#6B7280]">
              e-Visa allows entry at 31 international airports & 5 seaports.
            </span>
            <button
              onClick={() => {
                onClose();
                onStartApplication();
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#D9682C] hover:bg-[#C85A1B] text-white text-xs font-semibold shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Apply Visa for {destination.name} Visit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
