import Navigation from "@/components/navigation";
import ProgramsSection from "@/components/programs-section";
import Footer from "@/components/footer";

export default function Programs() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <ProgramsSection />
      </div>
      <Footer />
    </div>
  );
}