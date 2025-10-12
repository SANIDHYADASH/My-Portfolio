
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <div className="min-h-screen bg-background font-['Inter']">
      {showLoading && (
        <LoadingScreen onComplete={() => setShowLoading(false)} />
      )}
      {!showLoading && (
        <>
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
