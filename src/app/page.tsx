// src/app/page.tsx
import React from "react";
import Layout from "/src/app/layout";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import ProcessSection from "./components/ProcessSection";
import FeaturedWorks from "./components/FeaturedWorks";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Layout>
      <div className="max-w-screen min-h-screen relative bg-[#101111] mx-auto overflow-x-hidden">
        <Header />
        <Hero />
        <SkillsSection />
        <ProcessSection />
        <FeaturedWorks />
        <ContactSection />
        <Footer />
        {/* Add other page content here */}
      </div>
    </Layout>
  );
}