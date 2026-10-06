import React from 'react';
import { ArrowRight } from 'lucide-react';
import { VISA_CATEGORIES } from '../data/visaData';
import type { VisaCategory } from '../data/visaData';

interface FindYourVisaProps {
  onSelectCategory: (category: VisaCategory) => void;
  onApplyCategory: (category: VisaCategory) => void;
}

export const FindYourVisa: React.FC<FindYourVisaProps> = ({
  onSelectCategory,
  onApplyCategory,
}) => {
  return (
    <section id="visa-types" className="py-24 bg-[#F7F5EF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9682C] block mb-2">
            Visa Categories
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-medium text-[#111827] leading-tight">
            Find the right visa <br />
            <span className="italic">for your journey.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
            Select the official visa classification that matches the purpose of your travel to the Republic of India.
          </p>
        </div>

        {/* 5 Uniform Visual Visa Category Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VISA_CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category)}
              className="group cursor-pointer bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden card-hover-effect flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-semibold text-[#111827] shadow-xs">
                    {category.processingTime} Standard Review
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-[#111827] group-hover:text-[#D9682C] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#D9682C] font-semibold uppercase tracking-wider mt-1 mb-3">
                    {category.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed line-clamp-3 mb-6">
                    {category.description}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-[#F3F4F6] pt-4 text-xs text-[#374151]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#6B7280]">Validity:</span>
                      <span className="font-semibold">{category.validity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#6B7280]">Entries:</span>
                      <span className="font-semibold">{category.entries}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#111827] group-hover:text-[#D9682C] flex items-center gap-1.5 transition-colors">
                    <span>Explore Requirements</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onApplyCategory(category);
                    }}
                    className="px-4 py-2 text-xs font-semibold rounded-full bg-[#FAF8F5] hover:bg-[#D9682C] text-[#111827] hover:text-white border border-[#E5E0D8] transition-all"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
