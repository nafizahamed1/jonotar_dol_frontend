import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/janotar_dol_logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Vision", path: "/vision" },
    { name: "Mission", path: "/mission" },
    { name: "News", path: "/news" },
    { name: "Leaders", path: "/leaders" },
    { name: "Events", path: "/events" },
    { name: "Manifesto", path: "/manifesto" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-red-800 via-red-700 to-green-700 text-white sticky top-0 z-50 shadow-lg backdrop-blur-md">

      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">

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
        <div className="hidden md:flex items-center gap-6 text-sm sm:text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative transition ${
                location.pathname === link.path
                  ? "text-green-300"
                  : "hover:text-green-300"
              }`}
            >
              {link.name}

              {/* underline animation */}
              <span className={`absolute left-0 -bottom-1 h-[2px] bg-green-300 transition-all duration-300 ${
                location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">

          <button className="px-4 py-2 rounded-md font-semibold text-white 
          bg-gradient-to-r from-green-500 to-green-700 
          shadow-[0_0_20px_rgba(34,197,94,0.6)] 
          hover:shadow-[0_0_30px_rgba(34,197,94,0.9)] 
          hover:scale-105 active:scale-95 
          transition-all duration-300">
            Join Party
          </button>

          <button className="px-4 py-2 rounded-md font-semibold text-white 
          bg-gradient-to-r from-red-500 to-green-700 
          shadow-[0_0_20px_rgba(239,68,68,0.6)] 
          hover:shadow-[0_0_30px_rgba(239,68,68,0.9)] 
          hover:scale-105 active:scale-95 
          transition-all duration-300">
            Donate
          </button>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/20 hover:bg-white/30 transition"
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
        className={`md:hidden bg-gradient-to-b from-red-700 to-green-700 px-4 transition-all duration-300 ${
          menuOpen ? "max-h-[500px] py-4" : "max-h-0 overflow-hidden"
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
                  ? "bg-white/20 font-semibold"
                  : "hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex gap-2 mt-3">

            <button className="w-full px-4 py-2 rounded-md font-semibold text-white 
            bg-gradient-to-r from-green-500 to-green-700 
            shadow-lg hover:scale-105 transition">
              Join Party
            </button>

            <button className="w-full px-4 py-2 rounded-md font-semibold text-white 
            bg-gradient-to-r from-red-500 to-green-700 
            shadow-lg hover:scale-105 transition">
              Donate
            </button>

          </div>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;