import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Languages } from "@/components/portfolio/Languages";
import { ThankYou } from "@/components/portfolio/ThankYou";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Monis Portfolio" },
      { name: "description", content: "Portfolio of Muhammad Monis — Data Analyst and Business Intelligence Analyst. Business-focused analytics case studies, dashboards, and reporting." },
      { property: "og:title", content: "Muhammad Monis Portfolio" },
      { property: "og:description", content: "Business-focused Data Analytics and Business Intelligence case studies by Muhammad Monis." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Languages />
        <ThankYou />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
