import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">Political Platform</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/leaders">Leaders</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;