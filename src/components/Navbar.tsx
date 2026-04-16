import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/janotar_dol_logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Leaders", path: "/leaders" },
    { name: "Events", path: "/events" },
    { name: "Manifesto", path: "/manifesto" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-red-600 text-white sticky top-0 z-50 shadow-md">
      
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={logo}
            alt="জনতার দল logo"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
          />
          <span className="text-lg sm:text-xl font-bold">
            জনতার দল
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm sm:text-base">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition ${
                location.pathname === link.path
                  ? "text-green-300 font-semibold"
                  : "hover:text-gray-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-red-700/90 hover:bg-red-700 transition"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-red-700/95 px-4 transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-2 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg transition ${
                location.pathname === link.path
                  ? "bg-red-500 font-semibold"
                  : "hover:bg-red-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;