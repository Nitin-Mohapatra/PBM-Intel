import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import { injectGlobalStyles } from "../styles/globalStyles";

injectGlobalStyles();

export default function Home() {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
