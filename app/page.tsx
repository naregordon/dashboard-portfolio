"use client";

import { useState } from "react";
import DashboardGrid from "@/components/layout/DashboardGrid/DashboardGrid";
import Footer from "@/components/layout/Footer/Footer";
import PagePanel from "@/components/layout/PagePanel/PagePanel";
import AboutPage from "@/components/pages/AboutPage/AboutPage";
import ExperiencesPage from "@/components/pages/ExperiencesPage/ExperiencesPage";
import ContactPage from "@/components/pages/ContactPage/ContactPage";
import SkillsPage from "@/components/pages/SkillsPage/SkillsPage";

type Page = "about" | "experiences" | "contact" | "skills";

export default function Home() {
  const [activePage, setActivePage] = useState<Page | null>(null);

  const handleNavigate = (page: string) => {
    setActivePage(page as Page);
    window.history.pushState(null, "", `/${page}`);
  };

  const handleBack = () => {
    setActivePage(null);
    window.history.replaceState(null, "", "/");
  };

  return (
    <>
      <DashboardGrid isPageOpen={!!activePage} onNavigate={handleNavigate} />
      <Footer />
      <PagePanel page="about" isOpen={activePage === "about"} onBack={handleBack}>
        <AboutPage />
      </PagePanel>
      <PagePanel page="experiences" isOpen={activePage === "experiences"} onBack={handleBack}>
        <ExperiencesPage isOpen={activePage === "experiences"} />
      </PagePanel>
      <PagePanel page="contact" isOpen={activePage === "contact"} onBack={handleBack}>
        <ContactPage isOpen={activePage === "contact"} />
      </PagePanel>
      <PagePanel page="skills" isOpen={activePage === "skills"} onBack={handleBack}>
        <SkillsPage isOpen={activePage === "skills"} />
      </PagePanel>
    </>
  );
}
