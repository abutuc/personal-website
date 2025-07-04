import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

function FloatingMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
      {/* Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="bg-white shadow-md p-2 rounded-full text-gray-700 hover:text-blue-600 transition"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar Panel (Floating Card Style) */}
      <div
        className={`fixed top-6 z-50 transition-all duration-300 ease-in-out`}
        style={{
          right: open ? "1.5rem" : "-18rem", // moves offscreen when closed
          width: "16rem",
        }}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-gray-500 hover:text-red-500 transition"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-gray-700">
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "#about")}
              className="hover:text-blue-600 transition"
            >
              About
            </a>
            <a
              href="#journey-section"
              onClick={(e) => handleLinkClick(e, "#journey-section")}
              className="hover:text-blue-600 transition"
            >
              Journey
            </a>
            <a
              href="#skills"
              onClick={(e) => handleLinkClick(e, "#skills")}
              className="hover:text-blue-600 transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleLinkClick(e, "#projects")}
              className="hover:text-blue-600 transition"
            >
              Projects
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default FloatingMenu;
