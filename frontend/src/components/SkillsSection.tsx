import { Code, Server, Workflow, ClipboardList } from "lucide-react"; // Icons for frontend, backend, PM

const skills = [
  {
    title: "Software Development Lifecycle",
    icon: <Workflow size={28} className="text-green-500" />,
    points: [
      "Requirements Elicitation",
      "Design and Architectural Patterns",
      "Testing and Validation",
      "Product Quality Assurance",
      "Software Evolution and Maintenance",
    ],
  },
  {
    title: "Backend Development",
    icon: <Server size={28} className="text-blue-500" />,
    points: [
      "Java (Quarkus), Python (FastAPI)",
      "RESTful APIs",
      "PostgreSQL",
      "CI/CD, Docker",
    ],
  },
  {
    title: "Frontend Development",
    icon: <Code size={28} className="text-pink-500" />,
    points: [
      "JavaScript (React, React Native), CSS (TailwindCSS)",
      "UI/UX design systems",
      "Responsive & accessible design",
    ],
  },
  {
    title: "Project Management",
    icon: <ClipboardList size={28} className="text-green-500" />,
    points: [
      "Agile / Scrum methodologies",
      "Team leadership & mentoring",
      "Jira, GitHub Projects",
      "Effective communication",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">My Skills</h2>
        <p className="text-gray-600 mb-12">
          A combination of technical expertise and leadership skills that bring
          ideas to life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map(({ title, icon, points }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                {icon}
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              </div>
              <ul className="text-left text-gray-600 text-sm space-y-2">
                {points.map((point, idx) => (
                  <li
                    key={idx}
                    className="before:content-['•'] before:mr-2 before:text-blue-400"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
