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
    <nav className="bg-green-100 text-gray-800 sticky top-0 z-50 shadow-sm">
      
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">

       
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={logo}
            alt="জনতার দল logo"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
          />
          <span className="text-lg sm:text-xl font-bold text-green-700">
            জনতার দল
          </span>
        </div>


        <div className="hidden md:flex items-center gap-6 text-sm sm:text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition ${
                location.pathname === link.path
                  ? "text-green-700 font-semibold"
                  : "hover:text-green-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

   
        <div className="hidden md:flex items-center gap-3">

          <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition">
            Join Party
          </button>

          <button className="border border-green-600 text-green-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-200 transition">
            Donate
          </button>

        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-green-200 hover:bg-green-300 transition"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-green-800"></span>
            <span className="block w-6 h-0.5 bg-green-800"></span>
            <span className="block w-6 h-0.5 bg-green-800"></span>
          </div>
        </button>
      </div>

      
      <div
        className={`md:hidden bg-green-100 px-4 transition-all duration-300 ${
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
                  ? "bg-green-200 font-semibold"
                  : "hover:bg-green-200"
              }`}
            >
              {link.name}
            </Link>
          ))}

         
          <div className="flex gap-2 mt-3">

            <button className="bg-green-600 text-white px-4 py-2 rounded-md w-full">
              Join Party
            </button>

            <button className="border border-green-600 text-green-700 px-4 py-2 rounded-md w-full">
              Donate
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;