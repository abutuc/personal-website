import { Laptop, Users } from "lucide-react";
import { motion } from "framer-motion";

type Step = {
  title: string;
  subtitle: string;
  description: string;
  journey?: string;
};

type CareerTimelineProps = {
  activeJourney: string;
};

export default function CareerTimeline({ activeJourney }: CareerTimelineProps) {
  const steps: Step[] = [
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
        "Contributed to backend development, REST API design, and infrastructure support using Kubernetes and IAM, while gaining hands-on experience with OSS systems in the telecommunications industry. This role sharpened my full-stack skills and deepened my understanding of performant, scalable systems.",
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

  const filteredSteps = steps.filter((step) => step.journey === activeJourney);

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="border-l-2 border-blue-200 relative">
          {filteredSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, translateY: 30 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10 mb-12 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-2 top-1 w-4 h-4 bg-blue-500 border-4 border-white rounded-full shadow-md"></div>

              {/* Card */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                {/* Icon in top-right */}
                <div className="absolute top-4 right-4 text-blue-400">
                  {activeJourney === "developer" ? (
                    <Laptop size={20} />
                  ) : (
                    <Users size={20} />
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 italic mb-2">
                  {step.subtitle}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
