import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import BeautySection from "@/components/BeautySection";
import DashboardShowcase from "@/components/DashboardShowcase";
import OrdersSection from "@/components/OrdersSection";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Problem />

        <Features />

        <BeautySection />

        <DashboardShowcase />

        <OrdersSection />

        <Integrations />

        <Pricing />

        <HowItWorks />

        <FAQ />

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}