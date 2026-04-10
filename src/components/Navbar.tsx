import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/janotar_dol_logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white">
      <div className="container flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="জনতার দল logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-xl sm:text-2xl font-bold">জনতার দল</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm sm:text-base">
          <Link to="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link to="/news" className="hover:text-gray-200 transition">
            News
          </Link>
          <Link to="/leaders" className="hover:text-gray-200 transition">
            Leaders
          </Link>
          <Link to="/events" className="hover:text-gray-200 transition">
            Events
          </Link>
          <Link to="/contact" className="hover:text-gray-200 transition">
            Contact
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden rounded-lg border border-white/20 bg-red-700/90 p-2 text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle mobile menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-red-700/95 px-4 pb-4">
          <div className="flex flex-col gap-3 text-sm">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2 hover:bg-red-600 transition"
            >
              Home
            </Link>
            <Link
              to="/news"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2 hover:bg-red-600 transition"
            >
              News
            </Link>
            <Link
              to="/leaders"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2 hover:bg-red-600 transition"
            >
              Leaders
            </Link>
            <Link
              to="/events"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2 hover:bg-red-600 transition"
            >
              Events
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2 hover:bg-red-600 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

