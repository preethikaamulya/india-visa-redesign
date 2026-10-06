import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, Download, ShieldCheck } from 'lucide-react';
import { SAMPLE_STATUS_RECORDS } from '../data/visaData';

export const ApplicationStatus: React.FC = () => {
  const [refNumber, setRefNumber] = useState('IND-2026-88942');
  const [passportNum, setPassportNum] = useState('A9823412');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<typeof SAMPLE_STATUS_RECORDS[string] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!refNumber) return;

    setIsLoading(true);
    setHasSearched(false);

    setTimeout(() => {
      setIsLoading(false);
      setHasSearched(true);
      const match = SAMPLE_STATUS_RECORDS[refNumber.trim()];
      if (match) {
        setSearchResult(match);
      } else {
        setSearchResult({
          ref: refNumber.toUpperCase(),
          name: 'Traveler Applicant',
          country: 'Verified Applicant',
          passport: passportNum ? passportNum.toUpperCase() : 'PASS-88124',
          visaType: '30-Day e-Tourist Visa',
          status: 'APPROVED',
          issueDate: '16 August 2026',
          expiryDate: '15 September 2026',
          etaNumber: `ETA-IND-${Math.floor(10000000 + Math.random() * 90000000)}`,
        });
      }
    }, 900);
  };

  return (
    <section id="check-status" className="py-24 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Background Subtle Emblem Silhouette Overlay */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <svg className="w-[600px] h-[600px] fill-current" viewBox="0 0 24 24">
          <path d="M12 2C11.45 2 11 2.45 11 3V4.07C8.16 4.54 6 7.02 6 10V14L4 16V17H20V16L18 14V10C18 7.02 15.84 4.54 13 4.07V3C13 2.45 12.55 2 12 2ZM12 6C14.21 6 16 7.79 16 10V15H8V10C8 7.79 9.79 6 12 6ZM10 18H14C14 19.1 13.1 20 12 20C10.9 20 10 19.1 10 18Z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block mb-2">
            Status Inquiry & Retrieval
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-medium text-white">
            Already applied? <br />
            <span className="italic text-[#FAF8F5]">Track your visa application.</span>
          </h2>
          <p className="mt-3 text-sm text-white/80 font-light">
            Check the real-time processing status of your electronic travel authorization.
          </p>
        </div>

        {/* Status Lookup Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl mb-8">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
            <div className="sm:col-span-5">
              <label className="block text-[11px] font-semibold tracking-wider text-white/80 uppercase mb-2">
                Application Reference No.
              </label>
              <input
                type="text"
                placeholder="e.g. IND-2026-88942"
                value={refNumber}
                onChange={(e) => setRefNumber(e.target.value)}
                className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all font-mono"
              />
            </div>

            <div className="sm:col-span-4">
              <label className="block text-[11px] font-semibold tracking-wider text-white/80 uppercase mb-2">
                Passport Number
              </label>
              <input
                type="text"
                placeholder="e.g. A9823412"
                value={passportNum}
                onChange={(e) => setPassportNum(e.target.value)}
                className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all font-mono"
              />
            </div>

            <div className="sm:col-span-3">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#D9682C] hover:bg-[#C85A1B] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Searching...</span>
                  </span>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Check Status</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Quick Preset Hints */}
          <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-white/60 pt-3 border-t border-white/10">
            <div className="flex items-center gap-2">
              <span>Try sample reference:</span>
              <button
                type="button"
                onClick={() => {
                  setRefNumber('IND-2026-88942');
                  setPassportNum('A9823412');
                }}
                className="text-[#D4AF37] underline hover:text-white font-mono"
              >
                IND-2026-88942
              </button>
            </div>
            <a href="#faq" className="hover:text-white transition-colors">
              Need help finding your reference number?
            </a>
          </div>
        </div>

        {/* Display Search Results Card */}
        {hasSearched && searchResult && (
          <div className="bg-white text-[#111827] rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#E5E0D8]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E0D8] pb-6 mb-6">
              <div>
                <span className="text-[10px] font-bold text-[#D9682C] tracking-widest uppercase block">
                  Official Verification Status
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#111827] mt-1">
                  Reference: {searchResult.ref}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                {searchResult.status === 'APPROVED' ? (
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>e-Visa Approved (ETA Issued)</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFF8E1] text-[#B45309] text-xs font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>Under Government Review</span>
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs mb-6">
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E5E0D8]">
                <span className="text-[#6B7280] uppercase tracking-wider block mb-1">
                  Applicant Name
                </span>
                <span className="font-semibold text-sm text-[#111827]">
                  {searchResult.name}
                </span>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E5E0D8]">
                <span className="text-[#6B7280] uppercase tracking-wider block mb-1">
                  Visa Category
                </span>
                <span className="font-semibold text-sm text-[#111827]">
                  {searchResult.visaType}
                </span>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E5E0D8]">
                <span className="text-[#6B7280] uppercase tracking-wider block mb-1">
                  ETA Number
                </span>
                <span className="font-semibold text-sm font-mono text-[#D9682C]">
                  {searchResult.etaNumber || 'Pending'}
                </span>
              </div>
            </div>

            {searchResult.status === 'APPROVED' && (
              <div className="bg-[#FAF8F5] border border-[#2E7D32]/30 rounded-xl p-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-[#2E7D32]" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#111827]">
                      Electronic Travel Authorization (ETA) Document Ready
                    </h4>
                    <p className="text-xs text-[#6B7280]">
                      Issued on {searchResult.issueDate} • Valid until {searchResult.expiryDate}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => alert(`Downloading official ETA Pass PDF for ${searchResult.ref}...`)}
                  className="px-5 py-2.5 rounded-full bg-[#2E7D32] hover:bg-[#1b5e20] text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download e-Visa Pass (PDF)</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
