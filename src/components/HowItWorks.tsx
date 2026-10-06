import React, { useState } from 'react';
import { CheckCircle2, FileEdit, UploadCloud, MailCheck, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onStartApplication: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartApplication }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Check Eligibility',
      icon: CheckCircle2,
      subtitle: 'Instant Automated Verification',
      description:
        'Verify your nationality against eligible 180+ passport holder nations. Select your visit purpose (Tourism, Business, Medical, or Student) to view exact requirements.',
      actionText: 'Test Eligibility Tool',
    },
    {
      num: '02',
      title: 'Complete Application',
      icon: FileEdit,
      subtitle: 'Simple 5-Minute Form',
      description:
        'Fill out the secure online e-Visa form with your personal details, passport information, and travel itinerary. Save your draft anytime with your reference code.',
      actionText: 'Begin Form',
    },
    {
      num: '03',
      title: 'Upload Documents',
      icon: UploadCloud,
      subtitle: 'Digital Document Scan',
      description:
        'Upload a clear scan of your passport bio page and a square passport-style photo. Our automated validator checks image dimensions and clarity instantly.',
      actionText: 'Review Guidelines',
    },
    {
      num: '04',
      title: 'Receive Your Visa',
      icon: MailCheck,
      subtitle: 'Electronic Authorization (ETA)',
      description:
        'Upon government review within 72 hours, your official Electronic Travel Authorization (ETA) is sent directly to your email. Print it out and fly to India!',
      actionText: 'Track Status',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#FAF8F5] border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9682C] block mb-2">
            Seamless Application Flow
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-medium text-[#111827] leading-tight">
            Your visa, in <span className="italic">four simple steps.</span>
          </h2>
          <p className="mt-4 text-base text-[#4B5563] font-light">
            Designed for digital simplicity with total government security at every stage.
          </p>
        </div>

        {/* Horizontal Process Steps Bar */}
        <div className="relative mb-12">
          {/* Active Progress Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#E5E0D8] -translate-y-1/2 z-0" />
          <div
            className="hidden md:block absolute top-1/2 left-0 h-0.5 bg-[#D9682C] -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? 'bg-white border-[#D9682C] shadow-lg ring-1 ring-[#D9682C]'
                      : 'bg-white/60 border-[#E5E0D8] hover:bg-white hover:border-[#D9682C]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-serif text-3xl font-bold ${
                        isActive || isPast ? 'text-[#D9682C]' : 'text-[#9CA3AF]'
                      }`}
                    >
                      {step.num}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#D9682C] text-white'
                          : isPast
                          ? 'bg-[#E8F5E9] text-[#2E7D32]'
                          : 'bg-[#F7F5EF] text-[#6B7280]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-[#111827] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] font-medium">{step.subtitle}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Expanded Details Card */}
        <div className="bg-white rounded-2xl border border-[#E5E0D8] p-8 sm:p-10 subtle-shadow max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold text-[#D9682C] uppercase tracking-wider">
              Step {steps[activeStep].num} Breakdown
            </span>
            <h4 className="text-2xl font-serif font-semibold text-[#111827]">
              {steps[activeStep].title} — {steps[activeStep].subtitle}
            </h4>
            <p className="text-sm text-[#4B5563] font-light leading-relaxed">
              {steps[activeStep].description}
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onStartApplication}
              className="px-6 py-3.5 rounded-full bg-[#111827] hover:bg-[#D9682C] text-white font-semibold text-xs transition-all duration-300 flex items-center gap-2 group shadow-md"
            >
              <span>Start Process Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
