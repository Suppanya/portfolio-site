import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';

import LandingPage from './components/LandingPage';
import HomeScreen from './components/HomeScreen';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CreditsPage from './pages/CreditsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import CustomCursor from './components/CustomCursor';
import PageWrapper from './components/PageWrapper';

function AnimatedContent({ showLanding, onLandingComplete, onReplayLanding }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            showLanding ? (
              <LandingPage onComplete={onLandingComplete} />
            ) : (
              <PageWrapper>
                <HomeScreen onReplayLanding={onReplayLanding} />
              </PageWrapper>
            )
          }
        />
        <Route
          path="/work"
          element={
            <PageWrapper>
              <WorkPage onReplayLanding={onReplayLanding} />
            </PageWrapper>
          }
        />
        <Route
          path="/work/:projectId"
          element={
            <PageWrapper>
              <ProjectDetailPage />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <AboutPage onReplayLanding={onReplayLanding} />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <ContactPage onReplayLanding={onReplayLanding} />
            </PageWrapper>
          }
        />
        <Route
          path="/credits"
          element={
            <PageWrapper>
              <CreditsPage onReplayLanding={onReplayLanding} />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const hasSeenLanding = sessionStorage.getItem('toprak_landing_completed');
    if (hasSeenLanding) setShowLanding(false);
  }, []);

  const handleLandingComplete = () => {
    sessionStorage.setItem('toprak_landing_completed', 'true');
    setShowLanding(false);
  };

  const handleReplayLanding = () => {
    sessionStorage.removeItem('toprak_landing_completed');
    setShowLanding(true);
  };

  return (
    <Router>
      <div className="w-full h-full min-h-screen bg-[#0a0a0a] text-[#0a0a0a] selection:bg-[#25e267] selection:text-black">
        {/* Custom cursor only active outside the splash landing screen */}
        {!showLanding && <CustomCursor />}

        <AnimatedContent
          showLanding={showLanding}
          onLandingComplete={handleLandingComplete}
          onReplayLanding={handleReplayLanding}
        />
        <SpeedInsights />
      </div>
    </Router>
  );
}
