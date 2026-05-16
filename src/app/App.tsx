import React from 'react';
import { HeroSection } from './components/HeroSection';
import { VisionSection } from './components/VisionSection';
import { PlatformModules } from './components/PlatformModules';
import { ImpactSection } from './components/ImpactSection';
import { CallToAction } from './components/CallToAction';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <VisionSection />
      <PlatformModules />
      <ImpactSection />
      <CallToAction />
    </div>
  );
}