import React from 'react';
import { X, Camera, CheckCircle2 } from 'lucide-react';

interface PhotoSpecsModalProps {
  onClose: () => void;
}

export const PhotoSpecsModal: React.FC<PhotoSpecsModalProps> = ({ onClose }) => {
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
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-center text-[#D9682C]">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D9682C] block">
                Official Guidelines
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#111827]">
                Photo & Document Specifications
              </h3>
            </div>
          </div>

          {/* Photo Rules */}
          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E5E0D8] space-y-3">
            <h4 className="text-sm font-semibold text-[#111827]">
              1. Digital Photograph Requirements
            </h4>
            <ul className="space-y-2 text-xs text-[#4B5563]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>Format: JPEG / JPG format, minimum 10 KB to maximum 1 MB file size.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>Dimensions: Equal width and height (square aspect ratio, min 350x350 px).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>Background: Plain light-colored or white background without shadows.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>Full face, front view, eyes open, natural expression without eyeglasses.</span>
              </li>
            </ul>
          </div>

          {/* Passport Rules */}
          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E5E0D8] space-y-3">
            <h4 className="text-sm font-semibold text-[#111827]">
              2. Passport Bio Page Scan Requirements
            </h4>
            <ul className="space-y-2 text-xs text-[#4B5563]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>Format: PDF file format, file size between 10 KB and 300 KB.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>Must clearly show personal details, passport number, photo, and MRZ lines.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>Passport must have minimum 6 months validity from arrival date.</span>
              </li>
            </ul>
          </div>

          <div className="pt-2 text-right">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#111827] text-white text-xs font-semibold"
            >
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
