import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onStartApplication: () => void;
  onTrackClick: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onStartApplication,
  onTrackClick,
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'larger'>('normal');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Visa Information', id: 'eligibility' },
    { label: 'Visa Categories', id: 'visa-types' },
    { label: 'Application Process', id: 'how-it-works' },
    { label: 'Check Status', action: onTrackClick },
    { label: 'Discover India', id: 'destinations' },
    { label: 'Help & FAQ', id: 'faq' },
  ];

  const languages = ['English', 'हिंदी (Hindi)', 'Español', 'Français', 'Deutsch', '日本語 (Japanese)'];

  const handleLinkClick = (link: { id?: string; action?: () => void }) => {
    setMobileMenuOpen(false);
    if (link.action) {
      link.action();
    } else if (link.id) {
      onNavigateSection(link.id);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Official Government of India Top Utility Bar */}
      <div className="bg-[#002147] text-white text-[11px] py-1.5 px-6 md:px-12 border-b border-white/10 flex items-center justify-between">
        {/* Left: Indian Flag & Government Title */}
        <div className="flex items-center gap-2.5 font-medium">
          <span className="text-base leading-none">🇮🇳</span>
          <span className="font-semibold text-white/95 tracking-wide">
            भारत सरकार | Government of India
          </span>
          <span className="hidden md:inline text-white/40">|</span>
          <span className="hidden md:inline text-white/70 font-light text-[10px]">
            Ministry of External Affairs
          </span>
        </div>

        {/* Right: Accessibility Controls & Language Selector */}
        <div className="flex items-center gap-4 text-white/80">
          <a
            href="#eligibility-panel-anchor"
            className="hidden sm:inline hover:text-white transition-colors"
          >
            Skip to content
          </a>
          <span className="hidden sm:inline text-white/30">|</span>

          {/* Font Size Adjusters */}
          <div className="hidden sm:flex items-center gap-1.5 font-semibold text-[10px]">
            <button
              onClick={() => setFontSize('large')}
              className={`px-1 rounded hover:bg-white/20 ${fontSize === 'large' ? 'text-[#D4AF37]' : ''}`}
              title="Increase font size"
            >
              A+
            </button>
            <button
              onClick={() => setFontSize('normal')}
              className={`px-1 rounded hover:bg-white/20 ${fontSize === 'normal' ? 'text-white' : ''}`}
              title="Normal font size"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('larger')}
              className={`px-1 rounded hover:bg-white/20 ${fontSize === 'larger' ? 'text-[#D4AF37]' : ''}`}
              title="Decrease font size"
            >
              A-
            </button>
          </div>
          <span className="hidden sm:inline text-white/30">|</span>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 hover:text-white transition-colors py-0.5 focus:outline-none"
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{selectedLanguage}</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white text-[#111827] rounded-lg shadow-xl border border-[#E5E0D8] py-1.5 z-50 min-w-[140px] text-xs">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLanguage(lang.split(' ')[0]);
                      setIsLangOpen(false);
                    }}
                    className="w-full text-left px-3 py-1.5 hover:bg-[#FAF8F5] transition-colors"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E0D8] shadow-sm py-3.5 text-[#111827]'
            : 'bg-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo & Authority Badge */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3.5 group text-left focus:outline-none"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#111827] text-[#D4AF37] border-[#D4AF37]/30'
                  : 'bg-white/10 backdrop-blur-md text-[#D4AF37] border-white/30 group-hover:bg-white/20'
              }`}
            >
              {/* Ashoka Emblem Silhouette SVG */}
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C11.45 2 11 2.45 11 3V4.07C8.16 4.54 6 7.02 6 10V14L4 16V17H20V16L18 14V10C18 7.02 15.84 4.54 13 4.07V3C13 2.45 12.55 2 12 2ZM12 6C14.21 6 16 7.79 16 10V15H8V10C8 7.79 9.79 6 12 6ZM10 18H14C14 19.1 13.1 20 12 20C10.9 20 10 19.1 10 18Z" />
              </svg>
            </div>
            <div>
              <span
                className={`block font-cinzel tracking-widest text-sm font-semibold leading-none ${
                  isScrolled ? 'text-[#111827]' : 'text-white'
                }`}
              >
                INDIA VISA ONLINE
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold mt-0.5 block text-[#D9682C]">
                Official Government Portal
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wide">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(link)}
                className={`transition-colors duration-200 hover:text-[#D9682C] relative py-1 ${
                  isScrolled ? 'text-[#374151]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onTrackClick}
              className={`text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-300 border ${
                isScrolled
                  ? 'border-[#111827]/20 text-[#111827] hover:bg-[#111827] hover:text-white'
                  : 'border-white/30 text-white hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              Track Status
            </button>
            <button
              onClick={onStartApplication}
              className="text-xs font-semibold px-5 py-2.5 rounded-full bg-[#D9682C] hover:bg-[#C85A1B] text-white transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group"
            >
              <span>Start Application</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-[#111827]' : 'text-white'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-[#E5E0D8] shadow-2xl p-6 transition-all">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link)}
                  className="text-left text-sm font-medium text-[#111827] py-2 border-b border-[#E5E0D8]/60 hover:text-[#D9682C]"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onTrackClick();
                  }}
                  className="w-full py-3 text-center text-xs font-semibold rounded-lg border border-[#111827] text-[#111827]"
                >
                  Track Existing Application
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onStartApplication();
                  }}
                  className="w-full py-3 text-center text-xs font-semibold rounded-lg bg-[#D9682C] text-white shadow-xs"
                >
                  Start New Application
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
