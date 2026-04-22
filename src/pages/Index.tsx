import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { HoursVisit } from "@/components/HoursVisit";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <HoursVisit />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
