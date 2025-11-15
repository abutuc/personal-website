import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Code,
  Server,
  Workflow,
  ClipboardList,
  Laptop,
  Users,
  Menu,
  X,
  Github,
  Linkedin,
  ExternalLink,
  Sparkles,
  Zap,
  Rocket,
} from "lucide-react";

// Types
type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

type Step = {
  title: string;
  subtitle: string;
  description: string;
  journey?: string;
};

type Tab = {
  label: string;
  icon: React.ReactNode;
  value: string;
};

// Data
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

const skills = [
  {
    title: "Software Development Lifecycle",
    icon: <Workflow size={32} />,
    color: "from-emerald-400 to-teal-600",
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
    icon: <Server size={32} />,
    color: "from-blue-400 to-indigo-600",
    points: [
      "Java (Quarkus), Python (FastAPI)",
      "RESTful APIs",
      "PostgreSQL",
      "CI/CD, Docker",
    ],
  },
  {
    title: "Frontend Development",
    icon: <Code size={32} />,
    color: "from-purple-400 to-pink-600",
    points: [
      "JavaScript (React, React Native), CSS (TailwindCSS)",
      "UI/UX design systems",
      "Responsive & accessible design",
    ],
  },
  {
    title: "Project Management",
    icon: <ClipboardList size={32} />,
    color: "from-orange-400 to-red-600",
    points: [
      "Agile / Scrum methodologies",
      "Team leadership & mentoring",
      "Jira, GitHub Projects",
      "Effective communication",
    ],
  },
];

const tabs: Tab[] = [
  {
    label: "Academic & Industry",
    icon: <Laptop size={18} />,
    value: "developer",
  },
  {
    label: "Organizational",
    icon: <Users size={18} />,
    value: "extra-curricular",
  },
];

// Animated Background Component
function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${0.3})`;
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
  );
}

// Components
function FloatingMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <>
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="relative bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg p-3 rounded-2xl text-white hover:shadow-2xl transition-all duration-300 hover:scale-110 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <Menu size={24} />
        </button>
      </div>

      <div
        className={`fixed top-6 z-50 transition-all duration-500 ease-out ${
          open ? "right-6" : "-right-80"
        }`}
        style={{ width: "18rem" }}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-700 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-white">Navigation</h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-gray-400 hover:text-red-400 transition-colors hover:rotate-90 transition-transform duration-300"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {[
                {
                  href: "#about",
                  label: "About",
                  icon: <Sparkles size={16} />,
                },
                {
                  href: "#journey-section",
                  label: "Journey",
                  icon: <Rocket size={16} />,
                },
                { href: "#skills", label: "Skills", icon: <Zap size={16} /> },
                {
                  href: "#projects",
                  label: "Projects",
                  icon: <Code size={16} />,
                },
                {
                  href: "#contact",
                  label: "Contact",
                  icon: <ExternalLink size={16} />,
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleLinkClick(e, href)}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-200 font-medium group"
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {icon}
                  </span>
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("journey-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="about"
      className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden"
    >
      <AnimatedBackground />

      {/* Spotlight effect */}
      <div
        className="absolute pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: "600px",
          height: "600px",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <div className="mb-8 animate-float">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 text-indigo-200 rounded-full text-sm font-semibold shadow-lg">
            <Sparkles size={16} className="animate-pulse" />
            Software Engineer & Innovator
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl font-black text-white tracking-tight mb-6 animate-slideUp">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient">
            André Butuc
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 animate-slideUp"
          style={{ animationDelay: "0.2s" }}
        >
          Crafting{" "}
          <span className="text-indigo-400 font-semibold">
            elegant solutions
          </span>{" "}
          through code. Passionate about pushing the boundaries of technology
          and creating experiences that inspire.
        </p>

        <div
          className="flex flex-wrap gap-4 justify-center animate-slideUp"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative flex items-center gap-2">
              View My Work
              <ExternalLink
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
        className="absolute bottom-12 text-white/50 hover:text-white transition-all duration-300 animate-bounce-slow z-10 bg-transparent border-none cursor-pointer p-2 outline-none focus:outline-none"
      >
        <ChevronDown size={48} strokeWidth={2} />
      </button>
    </div>
  );
}

function Tabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (value: string) => void;
}) {
  return (
    <div className="flex justify-center my-12">
      <div className="inline-flex rounded-2xl bg-gray-900/50 backdrop-blur-sm p-1.5 shadow-2xl border border-indigo-500/20">
        {tabs.map(({ label, icon, value }) => {
          const isActive = activeTab === value;
          return (
            <button
              key={value}
              onClick={() => setActiveTab(value)}
              className={`relative flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-xl transition-all duration-300 ${
                isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl animate-fadeIn"></div>
              )}
              <span className="relative z-10 flex items-center gap-2">
                {icon}
                <span className="hidden sm:inline">{label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CareerTimeline({ activeJourney }: { activeJourney: string }) {
  const filteredSteps = steps.filter((step) => step.journey === activeJourney);

  return (
    <section className="px-4 py-12 pb-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-indigo-500/50"></div>

          {filteredSteps.map((step, index) => (
            <div
              key={index}
              className="relative pl-24 mb-16 group animate-slideIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute left-5 top-3 w-7 h-7 bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-gray-900 rounded-full shadow-lg shadow-indigo-500/50 group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-indigo-500/70 transition-all duration-300 z-10"></div>

              <div className="absolute left-5 top-3 w-7 h-7 bg-indigo-500 rounded-full animate-ping opacity-20"></div>

              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="absolute top-8 right-8 text-indigo-500/30 group-hover:text-indigo-500/50 transition-colors">
                  {activeJourney === "developer" ? (
                    <Laptop size={28} />
                  ) : (
                    <Users size={28} />
                  )}
                </div>

                <h3 className="relative text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {step.title}
                </h3>
                <p className="relative text-sm text-indigo-400 font-semibold mb-4">
                  {step.subtitle}
                </p>
                <p className="relative text-gray-300 leading-relaxed whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg5OSwgMTAyLCAyNDEsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Full-stack expertise with a passion for building scalable,
            innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map(({ title, icon, points, color }, idx) => (
            <div
              key={title}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-indigo-500/20 hover:border-indigo-500/40 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 overflow-hidden"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-4 bg-gradient-to-br ${color} rounded-2xl shadow-lg text-white`}
                  >
                    {icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{title}</h3>
                </div>

                <ul className="space-y-4">
                  {points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <span
                        className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${color} mt-2 mr-4 flex-shrink-0`}
                      ></span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-purple-500/5"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Featured Work
          </h2>
          <p className="text-xl text-gray-400">
            Innovative solutions built with cutting-edge technology
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-slideIn"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative h-full flex flex-col">
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors relative z-10">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow relative z-10">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/30 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && project.link !== "-" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 flex items-center gap-2 text-purple-400 font-bold hover:text-purple-300 transition-colors group/link"
                  >
                    <span>Explore Project</span>
                    <ExternalLink
                      size={18}
                      className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                    />
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

function ContactSection() {
  return (
    <footer
      id="contact"
      className="relative py-32 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="mb-12 animate-float">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 text-indigo-300 rounded-full text-sm font-semibold shadow-lg">
            <Sparkles size={16} className="animate-pulse" />
            Let's Build Something Amazing
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl font-black text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
          Always open to discussing new projects, creative ideas, and
          opportunities to be part of your vision
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/abutuc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group relative p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl border border-indigo-500/20 hover:border-indigo-500/50 text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Github size={36} className="relative z-10" />
          </a>

          <a
            href="https://www.linkedin.com/in/andr%C3%A9-butuc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group relative p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl border border-blue-500/20 hover:border-blue-500/50 text-blue-400 hover:text-blue-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Linkedin size={36} className="relative z-10" />
          </a>
        </div>

        <a
          href="mailto:andre.butuc@gmail.com"
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="relative z-10">andre.butuc@gmail.com</span>
          <ExternalLink
            size={20}
            className="relative z-10 group-hover:translate-x-1 transition-transform"
          />
        </a>

        <div className="mt-20 pt-12 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © 2025 André Butuc. Designed with{" "}
            <span className="text-red-500">♥</span> and lots of caffeine.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Component
export default function Me() {
  const [activeTab, setActiveTab] = useState("developer");

  return (
    <div className="min-h-screen bg-black">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeIn { 
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideUp { 
          animation: slideUp 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideIn { 
          animation: slideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float { 
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <FloatingMenu />
      <Hero />

      <div
        id="journey-section"
        className="relative bg-gradient-to-b from-gray-900 to-black py-20"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg5OSwgMTAyLCAyNDEsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="relative text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            My Journey
          </h2>
          <p className="text-xl text-gray-400 mb-4">
            {activeTab === "developer"
              ? "From code enthusiast to software engineer"
              : "Building communities and leading teams"}
          </p>
        </div>

        <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
        <CareerTimeline activeJourney={activeTab} />
      </div>

      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
