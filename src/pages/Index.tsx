import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import ServicesSection from "@/components/landing/ServicesSection";
import StatsBar from "@/components/landing/StatsBar";
import ResultsSection from "@/components/landing/ResultsSection";
import PackagesSection from "@/components/landing/PackagesSection";
import ProcessSection from "@/components/landing/ProcessSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import FloatingCTAs from "@/components/landing/FloatingCTAs";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <StatsBar />
      <ResultsSection />
      <PackagesSection />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingCTAs />
    </main>
  );
};

export default Index;
