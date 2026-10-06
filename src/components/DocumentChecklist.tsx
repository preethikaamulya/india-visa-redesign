import React, { useState } from 'react';
import { CheckCircle2, FileCheck, Info, Camera, Calendar, Building2 } from 'lucide-react';

interface DocumentChecklistProps {
  onOpenSpecsModal: () => void;
}

export const DocumentChecklist: React.FC<DocumentChecklistProps> = ({ onOpenSpecsModal }) => {
  const [activeTab, setActiveTab] = useState<'Tourist' | 'Business' | 'Medical'>('Tourist');

  const docLists = {
    Tourist: [
      {
        title: 'Valid International Passport',
        icon: FileCheck,
        desc: 'Scan of bio page with at least 6 months remaining validity from arrival date & 2 blank pages.',
        status: 'Mandatory',
      },
      {
        title: 'Recent Digital Photograph',
        icon: Camera,
        desc: 'Square photograph in JPEG format, plain white background, clear face without glasses or headwear.',
        status: 'Mandatory',
      },
      {
        title: 'Onward / Return Travel Ticket',
        icon: Calendar,
        desc: 'Confirmed flight reservation or onward travel itinerary showing exit from India.',
        status: 'Recommended',
      },
      {
        title: 'Proof of Accommodation',
        icon: Building2,
        desc: 'Hotel booking confirmation or contact details of family/friends hosting in India.',
        status: 'Recommended',
      },
    ],
    Business: [
      {
        title: 'Valid Passport & Business Card',
        icon: FileCheck,
        desc: 'Passport bio page scan plus a clear image of applicant’s official business card.',
        status: 'Mandatory',
      },
      {
        title: 'Indian Host Company Invitation',
        icon: FileCheck,
        desc: 'Formal letter of invitation on official letterhead from the host company registered in India.',
        status: 'Mandatory',
      },
      {
        title: 'Recent Digital Photo (White BG)',
        icon: Camera,
        desc: 'Official 2x2 inch digital photograph meeting passport photo standards.',
        status: 'Mandatory',
      },
    ],
    Medical: [
      {
        title: 'Valid Passport Bio Page',
        icon: FileCheck,
        desc: 'Minimum 6 months validity with clear biometric page details.',
        status: 'Mandatory',
      },
      {
        title: 'Hospital Invitation Letter in India',
        icon: FileCheck,
        desc: 'Official written recommendation from accredited Indian hospital on hospital letterhead.',
        status: 'Mandatory',
      },
      {
        title: 'Local Doctor Referral Letter',
        icon: Info,
        desc: 'Diagnostic report and referral note from physician in home country.',
        status: 'Mandatory',
      },
    ],
  };

  return (
    <section className="py-24 bg-[#F7F5EF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Indian Heritage & Travel Preparation Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5E0D8] group">
              <img
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=85"
                alt="Indian Heritage Travel Preparation"
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37]">
                  Preparation Guide
                </span>
                <h3 className="text-3xl font-serif font-medium mt-3 leading-tight">
                  Clear documents ensure fast processing.
                </h3>
                <p className="text-xs text-white/80 mt-2 font-light">
                  All e-Visa documents are verified electronically. No physical submission required.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Document Checklist */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D9682C] block mb-2">
                Requirements Checklist
              </span>
              <h2 className="text-4xl font-serif font-medium text-[#111827]">
                Prepare before <span className="italic">you apply.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#4B5563] font-light">
                Gather your digital copies in PDF or JPEG format before starting the online application form.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-2 border-b border-[#E5E0D8] pb-3">
              {(['Tourist', 'Business', 'Medical'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-[#111827] text-white shadow-xs'
                      : 'bg-white text-[#4B5563] hover:bg-[#FAF8F5] border border-[#E5E0D8]'
                  }`}
                >
                  {tab} Visa Docs
                </button>
              ))}
            </div>

            {/* Document List */}
            <div className="space-y-4">
              {docLists[activeTab].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-[#E5E0D8] subtle-shadow hover:border-[#D9682C]/40 transition-colors flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-center text-[#D9682C] flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#2E7D32]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-serif font-semibold text-[#111827]">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF8F5] text-[#374151] border border-[#E5E0D8]">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280] font-light mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Specs Modal Trigger */}
            <div className="pt-2">
              <button
                onClick={onOpenSpecsModal}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#D9682C] hover:text-[#C85A1B] transition-colors"
              >
                <Info className="w-4 h-4" />
                <span>View Photo Specifications & Sample Scan Requirements →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
