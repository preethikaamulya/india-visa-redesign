import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import type { VisaCategory } from '../data/visaData';

interface VisaDetailModalProps {
  category: VisaCategory;
  onClose: () => void;
  onApply: (category: VisaCategory) => void;
}

export const VisaDetailModal: React.FC<VisaDetailModalProps> = ({
  category,
  onClose,
  onApply,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl border border-[#E5E0D8] max-w-3xl w-full p-8 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#FAF8F5] hover:bg-[#E5E0D8] text-[#111827] transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Image Banner */}
        <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
          <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-8 text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block">
              Official Visa Classification
            </span>
            <h3 className="text-3xl font-serif font-bold">{category.title}</h3>
          </div>
        </div>

        {/* Details Content */}
        <div className="space-y-6">
          <p className="text-sm text-[#4B5563] font-light leading-relaxed">
            {category.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] text-xs">
            <div>
              <span className="text-[#6B7280] uppercase tracking-wider block mb-1">Processing Time</span>
              <span className="text-sm font-semibold text-[#111827]">{category.processingTime}</span>
            </div>
            <div>
              <span className="text-[#6B7280] uppercase tracking-wider block mb-1">Validity</span>
              <span className="text-sm font-semibold text-[#111827]">{category.validity}</span>
            </div>
            <div>
              <span className="text-[#6B7280] uppercase tracking-wider block mb-1">Entries</span>
              <span className="text-sm font-semibold text-[#111827]">{category.entries}</span>
            </div>
          </div>

          {/* Required Documents */}
          <div>
            <h4 className="text-base font-serif font-bold text-[#111827] mb-3">
              Required Documents
            </h4>
            <ul className="space-y-2.5 text-xs text-[#374151]">
              {category.requiredDocs.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E5E0D8]">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 className="text-base font-serif font-bold text-[#111827] mb-3">
              Key Visa Privileges
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4B5563]">
              {category.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9682C]" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-[#F3F4F6] flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-[#6B7280] hover:text-[#111827]"
            >
              Back to Overview
            </button>
            <button
              onClick={() => {
                onClose();
                onApply(category);
              }}
              className="px-6 py-3 rounded-full bg-[#D9682C] hover:bg-[#C85A1B] text-white text-xs font-semibold shadow-md flex items-center gap-2 group"
            >
              <span>Apply for {category.title}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
