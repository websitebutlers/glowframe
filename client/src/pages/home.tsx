import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProgramsSection from "@/components/programs-section";
import CommunitySection from "@/components/community-section";
import ApplicationSection from "@/components/application-section";
import DonationSection from "@/components/donation-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <CommunitySection />
      <ApplicationSection />
      <DonationSection />
      <Footer />
    </div>
  );
}
