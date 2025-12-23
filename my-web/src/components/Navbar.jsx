import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `rounded-3xl px-3 py-2 rounded-lg text-sm font-medium transition ${
    isActive
      ? "bg-sky-600 text-white "
      : " text-sky-700 hover:bg-sky-600/50 hover:text-white"
  }`;
 
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-blue-100/80 backdrop-blur border-b border-blue-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">

        <nav className="flex justify-between w-full">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/education" className={linkClass}>
            Education
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
