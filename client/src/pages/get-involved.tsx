import Navigation from "@/components/navigation";
import ApplicationSection from "@/components/application-section";
import DonationSection from "@/components/donation-section";
import Footer from "@/components/footer";

export default function GetInvolved() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <ApplicationSection />
        <DonationSection />
      </div>
      <Footer />
    </div>
  );
}