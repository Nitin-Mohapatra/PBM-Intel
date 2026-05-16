import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import { injectGlobalStyles } from "../styles/globalStyles";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

injectGlobalStyles();

export default function Home() {

  useEffect(() => {
  (async function () {
    const cal = await getCalApi();

    cal("ui", {
      theme: "dark",
    });
  })();
}, []);

  const openCalendar = async () => {
  const cal = await getCalApi();

  cal("modal", {
    calLink: "https://cal.com/teampaperball-v3hchw",
  });
};

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      <Navbar openCalendar={openCalendar} />
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <CTASection openCalendar={openCalendar} />
      <Footer />
    </div>
  );
}
