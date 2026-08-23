import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SpecializationsGrid from "./components/SpecializationsGrid";
import FeaturedConstruction from "./components/FeaturedConstruction";
import EngineeringDashboard from "./components/EngineeringDashboard";
import OffshoreSection from "./components/OffshoreSection";
import Capabilities from "./components/Capabilities";
import ProcessTimeline from "./components/ProcessTimeline";
import Training from "./components/Training";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <SpecializationsGrid />
        <FeaturedConstruction />
        <EngineeringDashboard />
        <OffshoreSection />
        <Capabilities />
        <ProcessTimeline />
        <Training />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
