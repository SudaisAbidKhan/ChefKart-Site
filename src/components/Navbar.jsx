import { useState, useEffect } from "react";
import logo from "../assets/ChefKartfrontlogo.png";

const DRIVE_APK_LINK =
  "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#howitworks" },
    { label: "For Chefs", href: "#usertypes" },
    { label: "Gallery", href: "#screenshots" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md py-3 rounded-b-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          {/* <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
              <rect x="4" y="12" width="26" height="18" rx="3" fill="white" opacity="0.2"/>
              <path d="M4 15 Q5 12 8 12 H30 Q33 12 34 15 L36 28 Q37 32 34 32 H6 Q3 32 4 28 Z" fill="white" opacity="0.9"/>
              <circle cx="10" cy="35" r="2.5" fill="white"/>
              <circle cx="28" cy="35" r="2.5" fill="white"/>
              <path d="M34 12 L36 8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="16" cy="22" r="5" stroke="white" strokeWidth="1.5"/>
              <path d="M13 22 L15 24 L20 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div> */}
          <img
            src={logo}
            alt="ChefKart Logo"
            className="w-10 h-10 object-contain"
          />
          <div>
            <span className="text-xl font-black tracking-tight text-gray-900">
              CHEF <span className="text-orange-500">KART</span>
            </span>
            <p className="text-[10px] font-medium tracking-widest uppercase leading-none text-gray-400">
              Cooking Company
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold tracking-wide transition-colors hover:text-orange-500 text-gray-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/uc?export=download&id=1qZVSBlNSGihSghpFF2ZZq4FQwBmQNEr1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-orange-200 transition-all hover:scale-105 active:scale-95"
          >
            Download App
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 bg-gray-800 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 bg-gray-800 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 bg-gray-800 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-semibold text-sm hover:text-orange-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/uc?export=download&id=1qZVSBlNSGihSghpFF2ZZq4FQwBmQNEr1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white text-sm font-bold px-5 py-2.5 rounded-full text-center shadow-md"
          >
            Download App
          </a>
        </div>
      </div>
    </header>
  );
}
