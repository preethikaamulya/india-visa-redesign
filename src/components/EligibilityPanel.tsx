import React, { useState } from 'react';
import { Search, ChevronDown, ShieldCheck, ArrowRight } from 'lucide-react';
import { COUNTRIES } from '../data/visaData';
import type { Country } from '../data/visaData';

interface EligibilityPanelProps {
  onCheckEligibilityResult: (nationality: Country, purpose: string, arrivalDate: string) => void;
}

export const EligibilityPanel: React.FC<EligibilityPanelProps> = ({
  onCheckEligibilityResult,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const [purpose, setPurpose] = useState<string>('Tourism');
  const [arrivalDate, setArrivalDate] = useState<string>('2026-09-18');
  
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');

  const filteredCountries = COUNTRIES.filter((c) =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckEligibilityResult(selectedCountry, purpose, arrivalDate);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-[#FFFFFF] rounded-2xl border border-[#E5E0D8] subtle-shadow p-5 sm:p-7 relative z-20">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        {/* Field 1: Nationality */}
        <div className="relative">
          <label className="block text-[11px] font-semibold tracking-wider text-[#4B5563] uppercase mb-1.5">
            Nationality / Passport
          </label>
          <button
            type="button"
            onClick={() => setIsCountryOpen(!isCountryOpen)}
            className="w-full bg-[#FAF8F5] border border-[#E5E0D8] hover:border-[#D9682C] rounded-xl px-4 py-3 text-left flex items-center justify-between text-sm font-medium text-[#111827] transition-all focus:outline-none focus:ring-2 focus:ring-[#D9682C]/20"
          >
            <span className="flex items-center gap-2.5 truncate">
              <span className="text-lg leading-none">{selectedCountry.flag}</span>
              <span className="truncate">{selectedCountry.name}</span>
            </span>
            <ChevronDown className="w-4 h-4 text-[#6B7280] flex-shrink-0" />
          </button>

          {/* Searchable Dropdown Modal */}
          {isCountryOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#E5E0D8] rounded-xl shadow-2xl z-50 p-3 max-h-64 overflow-y-auto">
              <div className="relative mb-2">
                <Search className="w-4 h-4 absolute left-3 top-3 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Search 180+ countries..."
                  value={countrySearch}
                  onChange={(e) => setCountrySearch(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#E5E0D8] rounded-lg pl-9 pr-3 py-2 text-xs text-[#111827] focus:outline-none focus:border-[#D9682C]"
                  autoFocus
                />
              </div>
              <div className="divide-y divide-[#F3F4F6]">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => {
                        setSelectedCountry(c);
                        setIsCountryOpen(false);
                        setCountrySearch('');
                      }}
                      className="w-full text-left px-3 py-2 text-xs hover:bg-[#F7F5EF] flex items-center justify-between rounded-md transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-base">{c.flag}</span>
                        <span className="font-medium text-[#111827]">{c.name}</span>
                      </span>
                      {c.eligibleEVisa && (
                        <span className="text-[10px] text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-full font-medium">
                          e-Visa Eligible
                        </span>
                      )}
                    </button>
                  ))
                ) : (
                  <div className="p-3 text-center text-xs text-[#6B7280]">
                    No matching country found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Field 2: Purpose of Visit */}
        <div>
          <label className="block text-[11px] font-semibold tracking-wider text-[#4B5563] uppercase mb-1.5">
            Purpose of Visit
          </label>
          <div className="relative">
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#E5E0D8] hover:border-[#D9682C] rounded-xl px-4 py-3 text-sm font-medium text-[#111827] appearance-none focus:outline-none focus:ring-2 focus:ring-[#D9682C]/20 transition-all"
            >
              <option value="Tourism">Tourism & Sightseeing</option>
              <option value="Business">Business & Trade Meetings</option>
              <option value="Medical">Medical Treatment</option>
              <option value="Student">Academic Study / Fellowship</option>
              <option value="Conference">Conference & Seminar</option>
              <option value="Employment">Employment (Regular Visa)</option>
            </select>
            <ChevronDown className="w-4 h-4 text-[#6B7280] absolute right-4 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Field 3: Intended Arrival Date */}
        <div>
          <label className="block text-[11px] font-semibold tracking-wider text-[#4B5563] uppercase mb-1.5">
            Intended Arrival
          </label>
          <div className="relative">
            <input
              type="date"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#E5E0D8] hover:border-[#D9682C] rounded-xl px-4 py-3 text-sm font-medium text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#D9682C]/20 transition-all"
            />
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#D9682C] hover:bg-[#C85A1B] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
          >
            <span>Check Eligibility</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </form>

      {/* Trust Subcaption */}
      <div className="mt-4 pt-3 border-t border-[#F3F4F6] flex flex-wrap items-center justify-between text-xs text-[#6B7280]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
          <span>Official Government Service • Instant Automated Eligibility Verification</span>
        </div>
        <div className="flex items-center gap-3 font-medium text-[#374151]">
          <span>• 180+ Countries Eligible</span>
          <span>• 72h Standard Approval</span>
        </div>
      </div>
    </div>
  );
};
