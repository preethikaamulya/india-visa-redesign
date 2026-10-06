import React, { useState } from 'react';
import { ChevronDown, Search, Headphones, FileQuestion, MessageSquareText } from 'lucide-react';
import { FAQS } from '../data/visaData';

export const VisaAssistance: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [faqSearch, setFaqSearch] = useState('');

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-[#F7F5EF]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9682C] block mb-2">
            Support & Clarity
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-medium text-[#111827]">
            Need help with <span className="italic">your application?</span>
          </h2>
          <p className="mt-3 text-base text-[#4B5563] font-light">
            Clear answers to common e-Visa questions. 24/7 official support officers available.
          </p>
        </div>

        {/* 3 Calm Support Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 border border-[#E5E0D8] subtle-shadow hover:border-[#D9682C]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-center text-[#D9682C] mb-4">
              <FileQuestion className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#111827]">Visa Information</h3>
            <p className="text-xs text-[#6B7280] font-light mt-1 mb-4">
              Detailed guidelines on rules, validity, ports of entry, and fee structures.
            </p>
            <a href="#visa-types" className="text-xs font-semibold text-[#D9682C] hover:underline">
              Browse Categories →
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E5E0D8] subtle-shadow hover:border-[#D9682C]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-center text-[#D9682C] mb-4">
              <Headphones className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#111827]">Application Support</h3>
            <p className="text-xs text-[#6B7280] font-light mt-1 mb-4">
              Contact our 24/7 immigration helpdesk for urgent technical assistance.
            </p>
            <button
              onClick={() => alert('Official Helpdesk Hotline: +91 11 24300666 | Email: indiamission@gov.in')}
              className="text-xs font-semibold text-[#D9682C] hover:underline text-left"
            >
              Contact Officer →
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E5E0D8] subtle-shadow hover:border-[#D9682C]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-center text-[#D9682C] mb-4">
              <MessageSquareText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#111827]">Instant Verification</h3>
            <p className="text-xs text-[#6B7280] font-light mt-1 mb-4">
              Check passport eligibility against automated government database.
            </p>
            <a href="#eligibility-panel-anchor" className="text-xs font-semibold text-[#D9682C] hover:underline">
              Test Eligibility →
            </a>
          </div>
        </div>

        {/* Search Input for FAQs */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="w-4 h-4 absolute left-4 top-3.5 text-[#9CA3AF]" />
          <input
            type="text"
            placeholder="Search questions (e.g. photo rules, processing time, ports)..."
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
            className="w-full bg-white border border-[#E5E0D8] rounded-full pl-11 pr-4 py-3 text-xs text-[#111827] focus:outline-none focus:border-[#D9682C] subtle-shadow"
          />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden subtle-shadow transition-all"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-serif text-lg font-semibold text-[#111827] hover:text-[#D9682C] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6B7280] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#D9682C]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#4B5563] font-light leading-relaxed border-t border-[#F3F4F6]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
