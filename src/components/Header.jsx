import { useEffect, useState } from "react";
import SmartCallingAgent from "../assets/logo/header/smart-calling-agent.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (link) =>
    `font-manrope font-medium text-[16px] leading-[24px] align-middle transition relative 
     ${
       activeLink === link
         ? "text-[#6600FF]"
         : "text-[#000000] hover:text-[#6600FF]"
     }`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-8 py-3 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md border-transparent shadow-sm"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="flex items-center space-x-2">
        <img
          src={SmartCallingAgent}
          alt="Smart Calling Agent"
          className="w-28 sm:w-36 md:w-40 lg:w-48"
        />
      </div>

      <nav className="hidden lg:flex space-x-6">
        <a
          href="#"
          onClick={() => setActiveLink("home")}
          className={linkClasses("home")}
        >
          Home
          {activeLink === "home" && (
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#6600FF] rounded-full"></span>
          )}
        </a>
        <a
          href="#"
          onClick={() => setActiveLink("about")}
          className={linkClasses("about")}
        >
          About Us
          {activeLink === "about" && (
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#6600FF] rounded-full"></span>
          )}
        </a>
        <a
          href="#"
          onClick={() => setActiveLink("contact")}
          className={linkClasses("contact")}
        >
          Contact Us
          {activeLink === "contact" && (
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#6600FF] rounded-full"></span>
          )}
        </a>
      </nav>

      <div className="hidden lg:flex gap-3">
        <button class="text-sm font-semibold border border-gray-400/50 py-2 px-4 rounded-lg hover:bg-gray-50 transition duration-150">
          CONTACT SALES
        </button>
        <button
          type="button"
          class="text-sm font-semibold text-white bg-gray-900 py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-150"
        >
          JOIN / LOGIN
        </button>
      </div>

      <button
        className="lg:hidden text-[#000000] focus:outline-none"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <>
              <path
                d="M4 5h16"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12h16"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 19h16"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          )}
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md lg:hidden">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <a
              href="#"
              onClick={() => {
                setActiveLink("home");
                setIsMenuOpen(false);
              }}
              className={linkClasses("home")}
            >
              Home
              {activeLink === "home" && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#6600FF] rounded-full"></span>
              )}
            </a>
            <a
              href="#"
              onClick={() => {
                setActiveLink("about");
                setIsMenuOpen(false);
              }}
              className={linkClasses("about")}
            >
              About Us
              {activeLink === "about" && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#6600FF] rounded-full"></span>
              )}
            </a>
            <a
              href="#"
              onClick={() => {
                setActiveLink("contact");
                setIsMenuOpen(false);
              }}
              className={linkClasses("contact")}
            >
              Contact Us
              {activeLink === "contact" && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#6600FF] rounded-full"></span>
              )}
            </a>
            <button class="sm:w-96 w-72 text-sm font-semibold border border-gray-400/50 py-2 px-4 rounded-lg hover:bg-gray-50 transition duration-150">
              CONTACT SALES
            </button>
            <button
              type="button"
              class="sm:w-96 w-72 text-sm font-semibold text-white bg-gray-900 py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-150"
            >
              JOIN / LOGIN
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
