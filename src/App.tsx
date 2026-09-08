import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsAndShift } from './components/StatsAndShift';
import { CorePlatformOS } from './components/CorePlatformOS';
import { DimensionsOfTalent } from './components/DimensionsOfTalent';
import { CinematicVideoShowcase } from './components/CinematicVideoShowcase';
import { BlogMatrix } from './components/BlogMatrix';
import { VideoContentSection } from './components/VideoContentSection';
import { NewsUpdatesSection } from './components/NewsUpdatesSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { ExploreRolesPage } from './components/ExploreRolesPage';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'roles'>('landing');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'signup' | 'video' | 'enterprise' | 'signin'>('signup');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleOpenRoles = () => {
    setCurrentView('roles');
  };

  const handleBackToHome = () => {
    setCurrentView('landing');
  };

  const handleOpenDemo = () => {
    setModalMode('signup');
    setModalOpen(true);
  };

  const handleOpenVideoDemo = () => {
    setModalMode('video');
    setModalOpen(true);
  };

  const handleOpenEnterprise = () => {
    setModalMode('enterprise');
    setModalOpen(true);
  };

  const handleOpenSignIn = () => {
    setModalMode('signin');
    setModalOpen(true);
  };

  if (currentView === 'roles') {
    return (
      <div className="min-h-screen bg-[#f8fafc]">
        <ExploreRolesPage 
          onBackToHome={handleBackToHome}
          onOpenDemo={handleOpenDemo}
        />

        {/* Interactive Modal Dialog */}
        <DemoModal 
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          mode={modalMode}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fbfe] text-slate-800 selection:bg-[#0066cc] selection:text-white flex flex-col font-sans">
      {/* 1. Header / Navigation */}
      <Navbar 
        onOpenDemo={handleOpenDemo}
        onOpenSignIn={handleOpenSignIn}
      />

      {/* Main Flow Matching Requested Structure */}
      <main className="flex-1">
        {/* 2. Hero Section (with Aisha Kapoor verified card) */}
        <HeroSection 
          onOpenDemo={handleOpenDemo}
          onOpenVideoDemo={handleOpenVideoDemo}
        />

        {/* 3. Large Cinematic Video Showcase Section (Immediately after Hero) */}
        <CinematicVideoShowcase 
          onOpenDemo={handleOpenDemo}
          onViewRoles={handleOpenRoles}
        />

        {/* 4. Stats & The Shift (The Old Way vs The LetGetIn Way) */}
        <StatsAndShift />

        {/* 5. Core Features OS & APEX Benchmarks */}
        <CorePlatformOS 
          onOpenDemo={handleOpenDemo}
        />

        {/* 6. The 6 Dimensions of Talent */}
        <DimensionsOfTalent />

        {/* 7. Blog & Research Matrix */}
        <BlogMatrix />

        {/* 8. Video Walkthrough Hub */}
        <VideoContentSection 
          onOpenVideoDemo={handleOpenVideoDemo}
        />

        {/* 9. News, Updates & Testimonials */}
        <NewsUpdatesSection />

        {/* 10. Final CTA Banner */}
        <FinalCTA 
          onOpenDemo={handleOpenDemo}
          onOpenEnterprise={handleOpenEnterprise}
        />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Interactive Modal Dialog */}
      <DemoModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
      />
    </div>
  );
};

export default App;
