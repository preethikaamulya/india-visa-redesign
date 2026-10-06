import React from 'react';
import { X, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Itinerary } from '../data/visaData';

interface ItineraryModalProps {
  itinerary: Itinerary;
  onClose: () => void;
  onStartApplication: () => void;
}

export const ItineraryModal: React.FC<ItineraryModalProps> = ({
  itinerary,
  onClose,
  onStartApplication,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl border border-[#E5E0D8] max-w-2xl w-full p-8 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#FAF8F5] hover:bg-[#E5E0D8] text-[#111827] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E5E0D8] text-xs font-semibold text-[#D9682C]">
            <Clock className="w-3.5 h-3.5" />
            <span>{itinerary.duration} Circuit</span>
          </div>

          <div>
            <h3 className="text-3xl font-serif font-bold text-[#111827]">
              {itinerary.title}
            </h3>
            <p className="text-sm text-[#4B5563] font-light mt-2 leading-relaxed">
              {itinerary.summary}
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden h-48">
            <img src={itinerary.image} alt={itinerary.title} className="w-full h-full object-cover" />
          </div>

          <div>
            <h4 className="text-base font-serif font-bold text-[#111827] mb-3">
              Journey Highlights
            </h4>
            <div className="space-y-2 text-xs text-[#374151]">
              {itinerary.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8]">
                  <CheckCircle2 className="w-4 h-4 text-[#D9682C] flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#F3F4F6] flex items-center justify-between">
            <button onClick={onClose} className="text-xs font-semibold text-[#6B7280]">
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onStartApplication();
              }}
              className="px-6 py-3 rounded-full bg-[#D9682C] text-white text-xs font-semibold shadow-md flex items-center gap-2"
            >
              <span>Get e-Visa for this Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
