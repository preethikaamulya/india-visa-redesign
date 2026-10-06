import React from 'react';
import { ShieldCheck, Lock, Globe2, Headphones } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: 'Official Government Portal',
      subtitle: 'Republic of India Auth',
    },
    {
      icon: Lock,
      title: 'Secure 256-Bit SSL',
      subtitle: 'Zero-Trust Data Protection',
    },
    {
      icon: Globe2,
      title: '180+ Eligible Countries',
      subtitle: 'Global Passport Access',
    },
    {
      icon: Headphones,
      title: 'Application Support',
      subtitle: '24/7 Multi-language Assistance',
    },
  ];

  return (
    <section className="bg-[#FAF8F5] border-b border-[#E5E0D8] py-8 pt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-white/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F7F5EF] border border-[#E5E0D8] flex items-center justify-center text-[#D9682C] flex-shrink-0 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#111827] uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#6B7280] font-normal mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
