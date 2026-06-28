import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import About from "./components/About";
import BeforeAfter from "./components/BeforeAfter";
import Team from "./components/Team";
import Stats from "./components/Stats";
import Technology from "./components/Technology";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <BeforeAfter />
        <Team />
        <Stats />
        <Technology />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
    </div>
  );
}
