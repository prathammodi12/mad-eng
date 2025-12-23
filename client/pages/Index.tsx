import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EnterpriseSolutions from "@/components/EnterpriseSolutions";
import WhyTrust from "@/components/WhyTrust";
import ClientLogos from "@/components/ClientLogos";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import ITExpertise from "@/components/ITExpertise";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import ReadyToTransform from "@/components/ReadyToTransform";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <EnterpriseSolutions />
        <WhyTrust />
        <ClientLogos />
        <CaseStudies />
        <About />
        <ITExpertise />
        <Services />
        <Stats />
        <ReadyToTransform />
      </main>
      <Footer />
    </div>
  );
}
