import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { FindYourVisa } from './components/FindYourVisa';
import { HowItWorks } from './components/HowItWorks';
import { DocumentChecklist } from './components/DocumentChecklist';
import { ApplicationStatus } from './components/ApplicationStatus';
import { DiscoverIndia } from './components/DiscoverIndia';
import { PopularDestinations } from './components/PopularDestinations';
import { GetInspired } from './components/GetInspired';
import { VisaAssistance } from './components/VisaAssistance';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

// Modals
import { EligibilityResultModal } from './components/EligibilityResultModal';
import { VisaDetailModal } from './components/VisaDetailModal';
import { DestinationModal } from './components/DestinationModal';
import { ItineraryModal } from './components/ItineraryModal';
import { PhotoSpecsModal } from './components/PhotoSpecsModal';
import { ApplicationWizardModal } from './components/ApplicationWizardModal';

// Data Types
import type { Country, VisaCategory, Destination, Itinerary } from './data/visaData';

export function App() {
  // Modal States
  const [eligibilityResult, setEligibilityResult] = useState<{
    country: Country;
    purpose: string;
    arrivalDate: string;
  } | null>(null);

  const [selectedVisaCategory, setSelectedVisaCategory] = useState<VisaCategory | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedItinerary, setSelectedItinerary] = useState<Itinerary | null>(null);
  const [showPhotoSpecs, setShowPhotoSpecs] = useState(false);
  const [showAppWizard, setShowAppWizard] = useState(false);
  const [wizardPreCategory, setWizardPreCategory] = useState<VisaCategory | null>(null);

  const handleNavigateSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTrackClick = () => {
    handleNavigateSection('check-status');
  };

  const handleStartApplication = (category?: VisaCategory) => {
    setWizardPreCategory(category || null);
    setShowAppWizard(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#111827] flex flex-col font-sans selection:bg-[#D9682C]/20 selection:text-[#D9682C]">
      {/* Navigation */}
      <Navbar
        onStartApplication={() => handleStartApplication()}
        onTrackClick={handleTrackClick}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 01. Hero & Eligibility Panel */}
        <div id="eligibility">
          <Hero
            onCheckEligibilityResult={(country, purpose, arrivalDate) =>
              setEligibilityResult({ country, purpose, arrivalDate })
            }
            onTrackClick={handleTrackClick}
          />
        </div>

        {/* Trust Strip */}
        <TrustStrip />

        {/* 02. Find Your Visa Categories */}
        <FindYourVisa
          onSelectCategory={(category) => setSelectedVisaCategory(category)}
          onApplyCategory={(category) => handleStartApplication(category)}
        />

        {/* 03. How It Works (Process Timeline) */}
        <HowItWorks onStartApplication={() => handleStartApplication()} />

        {/* 04. Document Checklist */}
        <DocumentChecklist onOpenSpecsModal={() => setShowPhotoSpecs(true)} />

        {/* 05. Application Status Lookup */}
        <ApplicationStatus />

        {/* 06. Emotional Transition - Discover India */}
        <DiscoverIndia />

        {/* 07. Popular Destinations Editorial Grid */}
        <PopularDestinations
          onSelectDestination={(dest) => setSelectedDestination(dest)}
        />

        {/* 08. Get Inspired Itineraries */}
        <GetInspired
          onSelectItinerary={(itinerary) => setSelectedItinerary(itinerary)}
        />

        {/* 09. Visa Assistance & FAQ Accordion */}
        <VisaAssistance />

        {/* 10. Final Call to Action */}
        <FinalCTA
          onStartApplication={() => handleStartApplication()}
          onCheckEligibility={() => handleNavigateSection('eligibility')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      {eligibilityResult && (
        <EligibilityResultModal
          country={eligibilityResult.country}
          purpose={eligibilityResult.purpose}
          arrivalDate={eligibilityResult.arrivalDate}
          onClose={() => setEligibilityResult(null)}
          onStartApplication={() => handleStartApplication()}
        />
      )}

      {selectedVisaCategory && (
        <VisaDetailModal
          category={selectedVisaCategory}
          onClose={() => setSelectedVisaCategory(null)}
          onApply={(cat) => handleStartApplication(cat)}
        />
      )}

      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
          onStartApplication={() => handleStartApplication()}
        />
      )}

      {selectedItinerary && (
        <ItineraryModal
          itinerary={selectedItinerary}
          onClose={() => setSelectedItinerary(null)}
          onStartApplication={() => handleStartApplication()}
        />
      )}

      {showPhotoSpecs && (
        <PhotoSpecsModal onClose={() => setShowPhotoSpecs(false)} />
      )}

      {showAppWizard && (
        <ApplicationWizardModal
          initialCategory={wizardPreCategory}
          onClose={() => setShowAppWizard(false)}
        />
      )}
    </div>
  );
}

export default App;
