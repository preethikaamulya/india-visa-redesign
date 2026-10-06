import React from 'react';
import { X, CheckCircle2, ArrowRight, Clock, Calendar } from 'lucide-react';
import { VISA_CATEGORIES } from '../data/visaData';
import type { Country } from '../data/visaData';

interface EligibilityResultModalProps {
  country: Country;
  purpose: string;
  arrivalDate: string;
  onClose: () => void;
  onStartApplication: () => void;
}

export const EligibilityResultModal: React.FC<EligibilityResultModalProps> = ({
  country,
  purpose,
  arrivalDate,
  onClose,
  onStartApplication,
}) => {
  const matchingCategory =
    VISA_CATEGORIES.find((cat) => cat.title.toLowerCase().includes(purpose.toLowerCase())) ||
    VISA_CATEGORIES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl border border-[#E5E0D8] max-w-2xl w-full p-8 shadow-2xl relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#FAF8F5] hover:bg-[#E5E0D8] text-[#111827] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="space-y-6">
          {/* Header Result Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Eligible for Official Indian e-Visa</span>
          </div>

          <div>
            <h3 className="text-3xl font-serif font-bold text-[#111827]">
              Good news — {country.name} passport holders are eligible for the e-Visa.
            </h3>
            <p className="text-sm text-[#4B5563] font-light mt-2">
              Based on your selection for <strong className="font-semibold text-[#111827]">{purpose}</strong> travel starting around <strong className="font-semibold text-[#111827]">{arrivalDate}</strong>.
            </p>
          </div>

          {/* Visa Card Summary */}
          <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E5E0D8] space-y-4">
            <div className="flex items-center justify-between border-b border-[#E5E0D8] pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9682C]">
                  Recommended Visa Type
                </span>
                <h4 className="text-xl font-serif font-semibold text-[#111827]">
                  {matchingCategory.title} ({matchingCategory.validity})
                </h4>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#2E7D32] border border-[#2E7D32]/30">
                Official Authorization
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs text-[#374151]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D9682C]" />
                <span>Processing: <strong>{matchingCategory.processingTime}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#D9682C]" />
                <span>Stay Limit: <strong>{matchingCategory.stayDuration}</strong></span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-semibold text-[#111827] block mb-2">
                Included Features:
              </span>
              <ul className="space-y-1 text-xs text-[#6B7280]">
                {matchingCategory.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-[#E5E0D8] text-xs font-semibold text-[#4B5563] hover:bg-[#FAF8F5]"
            >
              Close Preview
            </button>
            <button
              onClick={() => {
                onClose();
                onStartApplication();
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#D9682C] hover:bg-[#C85A1B] text-white text-xs font-semibold shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Start Application Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
