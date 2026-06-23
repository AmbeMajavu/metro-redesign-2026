import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import About from "../components/About";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <Services />

      <Stats />

      <About />

      <CTA />

      <Footer />

    </main>
  );
}