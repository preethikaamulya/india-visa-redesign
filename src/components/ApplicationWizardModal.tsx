import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, FileText, Upload, Sparkles, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COUNTRIES, VISA_CATEGORIES } from '../data/visaData';
import type { VisaCategory } from '../data/visaData';

interface ApplicationWizardModalProps {
  initialCategory?: VisaCategory | null;
  onClose: () => void;
}

export const ApplicationWizardModal: React.FC<ApplicationWizardModalProps> = ({
  initialCategory,
  onClose,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [selectedCategory, setSelectedCategory] = useState<VisaCategory>(
    initialCategory || VISA_CATEGORIES[0]
  );
  const [nationality, setNationality] = useState('United States');
  const [givenName, setGivenName] = useState('Alexander');
  const [surname, setSurname] = useState('Sterling');
  const [email, setEmail] = useState('a.sterling@example.com');
  const [passportNumber, setPassportNumber] = useState('A9823412');
  const [portOfEntry, setPortOfEntry] = useState('Delhi (DEL) - Indira Gandhi Intl');
  const [arrivalDate, setArrivalDate] = useState('2026-09-18');
  
  // File Upload Preview Mock
  const [photoUploaded, setPhotoUploaded] = useState(true);
  const [passportUploaded, setPassportUploaded] = useState(true);

  // Result state
  const [refId, setRefId] = useState('');
  const [etaId, setEtaId] = useState('');

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) {
      // Complete & Generate ETA
      const generatedRef = `IND-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      const generatedEta = `ETA-IND-${Math.floor(10000000 + Math.random() * 90000000)}`;
      setRefId(generatedRef);
      setEtaId(generatedEta);
      setStep(4);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D9682C', '#D4AF37', '#2E7D32', '#111827'],
        });
      } catch (err) {
        // confetti fallback
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5E0D8] max-w-3xl w-full p-8 shadow-2xl relative overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#FAF8F5] hover:bg-[#E5E0D8] text-[#111827] transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Wizard Header Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-[#D9682C]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9682C]">
              Official e-Visa Online Application
            </span>
          </div>

          <h2 className="text-3xl font-serif font-bold text-[#111827]">
            {step === 4 ? 'Application Approved & Issued!' : 'Submit e-Visa Application'}
          </h2>

          {/* Steps Indicator */}
          {step < 4 && (
            <div className="grid grid-cols-3 gap-3 mt-4 text-xs font-semibold">
              <div
                className={`py-2 px-3 rounded-lg border text-center ${
                  step === 1
                    ? 'bg-[#111827] text-white border-[#111827]'
                    : 'bg-[#FAF8F5] text-[#6B7280] border-[#E5E0D8]'
                }`}
              >
                1. Personal Details
              </div>
              <div
                className={`py-2 px-3 rounded-lg border text-center ${
                  step === 2
                    ? 'bg-[#111827] text-white border-[#111827]'
                    : 'bg-[#FAF8F5] text-[#6B7280] border-[#E5E0D8]'
                }`}
              >
                2. Passport & Travel
              </div>
              <div
                className={`py-2 px-3 rounded-lg border text-center ${
                  step === 3
                    ? 'bg-[#111827] text-white border-[#111827]'
                    : 'bg-[#FAF8F5] text-[#6B7280] border-[#E5E0D8]'
                }`}
              >
                3. Document Upload
              </div>
            </div>
          )}
        </div>

        {/* STEP 1: Personal Details */}
        {step === 1 && (
          <form onSubmit={handleNextStep} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-[#374151] uppercase mb-1.5">
                Visa Category
              </label>
              <select
                value={selectedCategory.id}
                onChange={(e) => {
                  const cat = VISA_CATEGORIES.find((c) => c.id === e.target.value);
                  if (cat) setSelectedCategory(cat);
                }}
                className="w-full bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl px-4 py-3 text-sm text-[#111827] font-medium"
              >
                {VISA_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.title} — {cat.validity}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#374151] uppercase mb-1.5">
                  Given Name(s)
                </label>
                <input
                  type="text"
                  required
                  value={givenName}
                  onChange={(e) => setGivenName(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl px-4 py-3 text-sm text-[#111827]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#374151] uppercase mb-1.5">
                  Surname / Family Name
                </label>
                <input
                  type="text"
                  required
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl px-4 py-3 text-sm text-[#111827]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#374151] uppercase mb-1.5">
                  Nationality / Passport Country
                </label>
                <select
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl px-4 py-3 text-sm text-[#111827]"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.name}>
                      {c.flag} {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#374151] uppercase mb-1.5">
                  Email Address (For ETA Receipt)
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl px-4 py-3 text-sm text-[#111827]"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="px-6 py-3.5 rounded-full bg-[#D9682C] text-white text-xs font-semibold flex items-center gap-2"
              >
                <span>Continue to Passport Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Passport & Travel */}
        {step === 2 && (
          <form onSubmit={handleNextStep} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-[#374151] uppercase mb-1.5">
                Passport Number
              </label>
              <input
                type="text"
                required
                value={passportNumber}
                onChange={(e) => setPassportNumber(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl px-4 py-3 text-sm text-[#111827] font-mono"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#374151] uppercase mb-1.5">
                  Port of Arrival in India
                </label>
                <select
                  value={portOfEntry}
                  onChange={(e) => setPortOfEntry(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl px-4 py-3 text-sm text-[#111827]"
                >
                  <option>Delhi (DEL) - Indira Gandhi Intl</option>
                  <option>Mumbai (BOM) - Chhatrapati Shivaji Intl</option>
                  <option>Bengaluru (BLR) - Kempegowda Intl</option>
                  <option>Chennai (MAA) - Chennai Intl</option>
                  <option>Kolkata (CCU) - Netaji Subhash Intl</option>
                  <option>Cochin (COK) - Cochin Intl Seaport/Airport</option>
                  <option>Goa (GOI) - Dabolim / Mopa Intl</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#374151] uppercase mb-1.5">
                  Intended Arrival Date
                </label>
                <input
                  type="date"
                  required
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl px-4 py-3 text-sm text-[#111827]"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-5 py-3 text-xs font-semibold text-[#6B7280]"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="px-6 py-3.5 rounded-full bg-[#D9682C] text-white text-xs font-semibold flex items-center gap-2"
              >
                <span>Continue to Document Upload</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Document Upload Preview */}
        {step === 3 && (
          <form onSubmit={handleNextStep} className="space-y-6">
            <div className="space-y-4">
              {/* Photo Upload Box */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E0D8] flex items-center justify-center text-[#D9682C]">
                    <Upload className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#111827]">
                      Digital Passport Photo (JPEG)
                    </h4>
                    <p className="text-xs text-[#6B7280]">
                      Status: {photoUploaded ? 'Valid Photo Verified' : 'Upload File'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setPhotoUploaded(!photoUploaded)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border ${
                    photoUploaded
                      ? 'bg-[#E8F5E9] text-[#2E7D32] border-[#2E7D32]/30'
                      : 'bg-white text-[#111827] border-[#E5E0D8]'
                  }`}
                >
                  {photoUploaded ? '✓ Verified' : 'Select Photo'}
                </button>
              </div>

              {/* Passport Scan Upload Box */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E0D8] flex items-center justify-center text-[#D9682C]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#111827]">
                      Passport Bio Page Scan (PDF)
                    </h4>
                    <p className="text-xs text-[#6B7280]">
                      Status: {passportUploaded ? 'Valid PDF Verified' : 'Upload File'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setPassportUploaded(!passportUploaded)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border ${
                    passportUploaded
                      ? 'bg-[#E8F5E9] text-[#2E7D32] border-[#2E7D32]/30'
                      : 'bg-white text-[#111827] border-[#E5E0D8]'
                  }`}
                >
                  {passportUploaded ? '✓ Verified' : 'Select PDF'}
                </button>
              </div>
            </div>

            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E5E0D8] flex items-center justify-between text-xs">
              <span className="text-[#6B7280]">Processing Type:</span>
              <span className="font-semibold text-sm text-[#111827]">
                Official Government Automated Verification
              </span>
            </div>

            <div className="pt-2 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-5 py-3 text-xs font-semibold text-[#6B7280]"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-[#2E7D32] hover:bg-[#1b5e20] text-white text-xs font-semibold shadow-lg flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit Application for Official Verification</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: Success Pass Card Preview */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#0B132B] to-[#1E293B] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#D4AF37]/30 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C11.45 2 11 2.45 11 3V4.07C8.16 4.54 6 7.02 6 10V14L4 16V17H20V16L18 14V10C18 7.02 15.84 4.54 13 4.07V3C13 2.45 12.55 2 12 2ZM12 6C14.21 6 16 7.79 16 10V15H8V10C8 7.79 9.79 6 12 6ZM10 18H14C14 19.1 13.1 20 12 20C10.9 20 10 19.1 10 18Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-cinzel text-sm font-semibold tracking-wider block">
                      ELECTRONIC TRAVEL AUTHORIZATION
                    </span>
                    <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest block">
                      Republic of India • e-Visa Pass
                    </span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-bold">
                  APPROVED
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs mb-6">
                <div>
                  <span className="text-white/60 uppercase tracking-wider block text-[10px]">
                    Traveler Name
                  </span>
                  <span className="font-semibold text-sm">
                    {givenName} {surname}
                  </span>
                </div>
                <div>
                  <span className="text-white/60 uppercase tracking-wider block text-[10px]">
                    Nationality
                  </span>
                  <span className="font-semibold text-sm">{nationality}</span>
                </div>
                <div>
                  <span className="text-white/60 uppercase tracking-wider block text-[10px]">
                    Passport No.
                  </span>
                  <span className="font-mono text-sm">{passportNumber}</span>
                </div>
                <div>
                  <span className="text-white/60 uppercase tracking-wider block text-[10px]">
                    Visa Type
                  </span>
                  <span className="font-semibold">{selectedCategory.title}</span>
                </div>
                <div>
                  <span className="text-white/60 uppercase tracking-wider block text-[10px]">
                    Reference ID
                  </span>
                  <span className="font-mono text-[#D4AF37] font-bold">{refId}</span>
                </div>
                <div>
                  <span className="text-white/60 uppercase tracking-wider block text-[10px]">
                    ETA Number
                  </span>
                  <span className="font-mono text-[#D4AF37] font-bold">{etaId}</span>
                </div>
              </div>

              {/* Mock Barcode / Security Seal */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="font-mono text-[10px] tracking-widest text-white/40">
                  ||||| ||||||| |||| |||||||| ||||| |||||| |||||
                </div>
                <span className="text-[10px] text-white/60 font-light">
                  Entry Port: {portOfEntry}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-[#6B7280]">
                A copy of this official ETA has been sent to {email}.
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-full border border-[#E5E0D8] text-xs font-semibold text-[#4B5563]"
                >
                  Done
                </button>
                <button
                  onClick={() => alert(`Downloading Official e-Visa Pass PDF (${refId})...`)}
                  className="px-6 py-3 rounded-full bg-[#2E7D32] hover:bg-[#1b5e20] text-white text-xs font-semibold flex items-center gap-2 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Pass PDF</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
