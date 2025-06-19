import Navigation from "@/components/navigation";
import CommunitySection from "@/components/community-section";
import Footer from "@/components/footer";

export default function Community() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <CommunitySection />
      </div>
      <Footer />
    </div>
  );
}