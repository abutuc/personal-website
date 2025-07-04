import { Github, Linkedin } from "lucide-react";

function ContactSection() {
  return (
    <footer className="mt-20 pb-10 flex flex-col items-center gap-8 text-gray-700 max-w-xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-gray-900">Reach out!</h2>

      <div className="flex gap-12">
        <a
          href="https://github.com/abutuc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-700 hover:text-gray-900 transition"
        >
          <Github size={36} />
        </a>
        <a
          href="https://www.linkedin.com/in/andr%C3%A9-butuc/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <Linkedin size={36} />
        </a>
      </div>

      <a
        href="mailto:andre.butuc@gmail.com"
        className="text-gray-700 hover:text-blue-600 transition text-lg font-semibold"
      >
        andre.butuc@gmail.com
      </a>
    </footer>
  );
}

export default ContactSection;
