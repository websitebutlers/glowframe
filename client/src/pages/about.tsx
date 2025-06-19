import Navigation from "@/components/navigation";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}