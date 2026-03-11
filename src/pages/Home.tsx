import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import HighlightsSection from '@/components/home/HighlightsSection';
import ServicesGrid from '@/components/home/ServicesGrid';
import ClientSegments from '@/components/home/ClientSegments';
import MissionBanner from '@/components/home/MissionBanner';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <HeroSection />
        <HighlightsSection />
        <ServicesGrid />
        <ClientSegments />
        <MissionBanner />
      </main>
      <Footer />
    </div>
  );
}