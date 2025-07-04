type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Growmate",
    description:
      "Mobile app to monitor the health and growth of plants in a domestic environment. It provides helpful tips and recommendations to ensure their well-being.",
    tech: ["React Native", "Spring (Java)", "PostgreSQL", "RabbitMQ"],
    link: "https://github.com/abutuc/archive-university-of-aveiro/tree/main/0Highlighted%20Projects/growmate/main",
  },
  {
    title: "HomeMaestro",
    description:
      "Platform to manage smart home devices and create activation rules between actuators and sensors. This project's emphasis was on using design patterns to obtain a clean code.",
    tech: ["React", "Spring (Java)", "Python", "PostgreSQL"],
    link: "https://github.com/abutuc/archive-university-of-porto/tree/main/0Highlighted%20Projects/software-architecture-project",
  },
  {
    title: "Tapa-Buracos!",
    description:
      "For citizens seeking an easy way to report infrastructure and public maintenance issues, and for municipalities aiming to optimize their response processes, 'Tapa-buracos!' is a web and mobile app that enables intuitive issue reporting and ensures structured communication.",
    tech: [".NET (C#)", "Flutter", "Firebase"],
    link: "https://github.com/abutuc/archive-university-of-porto/tree/main/0Highlighted%20Projects/software-engineering-lab-project",
  },
  {
    title: "kurz",
    description:
      "This project performs sentiment analysis on movie subtitles and provides a way to extract clips based on the analyzed sentiments. It uses a pre-trained sentiment analysis model to classify emotions in subtitles and visualizes the sentiment trends over time.",
    tech: ["Python", "Transformers", "React"],
    link: "https://github.com/abutuc/kurz",
  },
  {
    title: "SIGO",
    description:
      "Product from the NOSSIS One Altice Labs Suite for Management of Operational Tickets and SLAs.",
    tech: ["Quarkus (Java)", "PostgreSQL", "Kafka", "Kubernetes"],
    link: "https://www.alticelabs.com/products/assurance/",
  },
  {
    title: "SmartExpense+",
    description:
      "A platform for travel expense management integrated with AI-receipt scanning.",
    tech: ["FastAPI (Python)", "PostgreSQL", "React", "Docker", "OCR"],
    link: "-",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Projects I&apos;ve Worked On
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative border border-gray-200 bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition duration-300 ease-in-out hover:border-blue-300 hover:scale-[1.015]"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm text-blue-600 font-medium hover:underline transition"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
