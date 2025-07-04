import { useState } from "react";
import { ChevronDown } from "lucide-react"; // or react-icons/fa FaChevronDown
import CareerTimeline from "../components/CareerTimeline";
import Tabs from "../components/Tabs";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import FloatingMenu from "../components/FloatingMenu";
import ContactSection from "../components/ContactSection";

function Me() {
  const [activeTab, setActiveTab] = useState("developer");

  // Scroll handler to scroll smoothly to the next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("journey-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <FloatingMenu />
      <div
        id="about"
        className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-blue-50"
      >
        <h1 className="text-5xl font-semibold text-gray-900 tracking-tight">
          André Butuc
        </h1>
        <h2 className="text-xl text-gray-600">Software Engineer</h2>
        <p className="text-sm text-gray-500 mt-5 italic text-center max-w-md">
          “Interested in perfecting my Software Engineering craftsmanship as
          well as diving into the world of innovation and entrepreneurship.”
        </p>
        {/* Scroll down arrow */}
        <button
          onClick={scrollToNextSection}
          aria-label="Scroll to next section"
          className="absolute bottom-8 text-black hover:text-blue-700 bg-transparent border-none p-0 outline-none focus:outline-none active:outline-none"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      <div
        id="journey-section"
        className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white"
      >
        <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />

        <h2 className="text-2xl font-semibold text-center text-black mt-4 mb-8">
          {activeTab === "developer"
            ? "Academic & Industry Journey"
            : "Organizational Journey"}
        </h2>

        <CareerTimeline activeJourney={activeTab} />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <ContactSection />
    </>
  );
}

export default Me;
