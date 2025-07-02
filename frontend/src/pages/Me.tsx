import { Laptop, Users } from "lucide-react"; // example icons
import { useState } from "react";

function Me() {
  const steps = [
    {
      title: "Started Programming",
      subtitle: "At Home - Summer of 2019",
      journey: "developer",
      description:
        "I started programming in Python by following Youtube tutorials and reading Python's documentation. My first personal apps were a MacOS calculator, a turtle race game and a rock-paper-scissors game with a cool shop for special weapons.",
    },
    {
      title: "Bachelor's in Software Engineering",
      subtitle: "University of Aveiro - Oct 2020 - Jul 2023 - (17/20)",
      journey: "developer",
      description:
        "The bachelor taught me how to develop information systems by following best coding practices and working in small teams.",
    },
    {
      title: "Software Developer",
      subtitle: "Altice Labs - Aug 2023 - Jul 2024",
      journey: "developer",
      description:
        "Built strong foundations in data structures, algorithms, and software design.",
    },
    {
      title: "Master's in Software Engineering",
      subtitle: "University of Porto - Oct 2024 - Jul 2026 - (18/20)",
      journey: "developer",
      description:
        "The masters is teaching me the fundamentals to become an all-round Software Engineer, capable of providing value to each phase of the Software Development Lifecycle.",
    },
    {
      title: "Research Assistant",
      subtitle: "INESC TEC - Jan 2025 - Jul 2025",
      journey: "developer",
      description:
        "During my research grant I investigated and studied the capabilities of the open-source Keycloak Identity Access Management Tool and applied it to an unprotected application package registry platform. The grant taught me how to work and think like a researcher, where the goal is not only solving problems but also understanding everything that is behind the solution, in order to generate knowledge and not rely always on deduction.",
    },
    {
      title: "Board Member",
      subtitle: "AETTUA - Nov 2020 - Dec 2021",
      journey: "extra-curricular",
      description:
        "As Board Member I learned and applied marketing skills, with a focus on social media, to increase the content viewership as well as followers number of the Department of Electronics, Telecommunications and Informatics of the University of Aveiro's Instagram page.",
    },
    {
      title: "Board President",
      subtitle: "AETTUA - Dec 2021 - Nov 2022",
      journey: "extra-curricular",
      description:
        "As Board President I coordinated a group of 40+ students to produce activities and events for the students of the Department of Electronics, Telecommunications and Informatics of the University of Aveiro. \nDuring my mandate I produced three major academic events which gathered +250 students and were sponsored by 34 IT companies.",
    },
    {
      title: "Member",
      subtitle: "NIAEFEUP - Oct 2024 - Present",
      journey: "extra-curricular",
      description:
        "As Member, I contributed to the open-source project UNI, which consists of a mobile app written in Flutter designed to help the day-to-day life of University of Porto students, I also helped out by serving drinks at a student party. I am currently providing Business Relations support to the Informatics Week 2025 edition, a 3-day event comprising of a job fair, talks, workshops and many more activities.",
    },
    {
      title: "Member of Business Relations",
      subtitle: "ENEI - Dec 2024 - May 2025",
      journey: "extra-curricular",
      description:
        "As Member of Business Relations I contacted multiple IT companies with the intent of gathering event sponsors; in the end I was able to obtain a total of two sponsors. By being part of the event's organization, I also performed some tasks during the event such as providing support to the audience on talks, preparing welcoming kits, providing directions and controlling auditorium entrances.",
    },
  ];

  const [activeTab, setActiveTab] = useState("developer");

  return (
    <>
      <div className="flex h-96 flex-col align-center justify-center">
        <h1 className="text-center">André Butuc</h1>
        <h2 className="text-center">Software Engineer</h2>
      </div>
      <div className="flex flex-row items-center justify-center space-x-4">
        <div
          role="button"
          onClick={() => setActiveTab("developer")}
          className={`cursor-pointer rounded-xl p-3 shadow transition-colors border 
          ${
            activeTab === "developer"
              ? "bg-blue-500 text-white border-blue-600"
              : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
          }
        `}
        >
          <Laptop size={30} />
        </div>
        <div
          role="button"
          onClick={() => setActiveTab("extra-curricular")}
          className={`cursor-pointer rounded-xl p-3 shadow transition-colors border 
          ${
            activeTab === "extra-curricular"
              ? "bg-blue-500 text-white border-blue-600"
              : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
          }
        `}
        >
          <Users size={30} />
        </div>
      </div>
      {activeTab === "developer" && (
        <h2 className="text-center">Developer Journey</h2>
      )}
      {activeTab === "extra-curricular" && (
        <h2 className="text-center">Extra-curricular Journey</h2>
      )}

      <div className="flex flex-col items-start space-y-8 p-6 max-w-xl mx-auto">
        {steps
          .filter((step) => step.journey === activeTab)
          .map((step, index) => (
            <div className="flex items-start" key={index}>
              {/* Icon + Line */}
              <div className="flex flex-col items-center mr-4">
                {index < steps.length && (
                  <>
                    <div className="w-px bg-gray-300 h-20 mt-2" />
                    <img src="steps.png" />
                  </>
                )}
              </div>
              {/* Content */}
              <div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.subtitle}</p>
                <p className="text-sm mt-1">{step.description}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Me;
