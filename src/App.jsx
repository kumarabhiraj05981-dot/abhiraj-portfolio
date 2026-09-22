import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./components/Admin";

import { getPortfolio } from "./data";

function Portfolio() {
  const [data, setData] = useState(getPortfolio());

  useEffect(() => {
    const refresh = () => setData(getPortfolio());

    window.addEventListener("portfolio-updated", refresh);
    window.addEventListener("storage", refresh);

    return () => {
      window.removeEventListener("portfolio-updated", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [data]);

  return (
    <div className="site-shell">
      <div className="noise" />

      <Navbar profile={data.profile} />

      <main>
        <Hero profile={data.profile} />

        <About
          profile={data.profile}
          stats={data.stats}
          tags={data.aboutTags}
        />

        <Skills
          skills={data.skills}
          currentlyLearning={data.currentlyLearning}
        />

        <Projects projects={data.projects} />

        <Education education={data.education} />

        <Contact profile={data.profile} />
      </main>

      <Footer profile={data.profile} />

      {/* Floating Admin Button */}
      <a
        className="admin-fab"
        href="#/admin"
        title="Open Admin Panel"
      >
        ⚙
      </a>
    </div>
  );
}

export default function App() {
  const [admin, setAdmin] = useState(
    window.location.hash === "#/admin"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setAdmin(window.location.hash === "#/admin");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };
  }, []);

  return admin ? <Admin /> : <Portfolio />;
}