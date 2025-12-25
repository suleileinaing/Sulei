import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const linkClass = ({ isActive }) =>
  `rounded-3xl px-3 py-2 rounded-lg text-sm font-medium transition ${
    isActive
      ? "bg-sky-600 text-white "
      : " text-sky-700 hover:bg-sky-600/50 hover:text-white"
  }`;

const pageTitles = {
  "/": "Home",
  "/about": "About",
  "/education": "Education",
  "/projects": "Projects",
  "/contact": "Contact",
};
 
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const currentTitle = pageTitles[location.pathname] || "";

  return (
    <header className="sticky top-0 z-50 bg-blue-100/80 backdrop-blur border-b border-blue-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="md:hidden absolute left-1/2 -translate-x-1/2
                text-sky-700 font-medium text-sm">
          {currentTitle}
        </div>


        <nav className="hidden md:flex justify-between w-full">
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

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-2xl p-2 text-sky-700 hover:bg-blue-200/50 transition"
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block w-5 h-0.5 bg-sky-700"></span>
            <span className="block w-5 h-0.5 bg-sky-700"></span>
            <span className="block w-5 h-0.5 bg-sky-700"></span>
          </div>
        </button>
      </div>

      {open && (
        <>
         
          <button
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40  md:hidden"
            aria-label="Close menu overlay"
          />

  
          <div
            className="absolute left-0 right-0 top-full z-50 md:hidden
                      border-b border-blue-200
                      bg-gradient-to-b from-blue-100 via-white to-blue-50
                      backdrop-blur shadow-sm"
          >
            <nav className="max-w-5xl mx-auto px-4 py-5 flex flex-col gap-2">
              <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
                About
              </NavLink>
              <NavLink to="/education" className={linkClass} onClick={() => setOpen(false)}>
                Education
              </NavLink>
              <NavLink to="/projects" className={linkClass} onClick={() => setOpen(false)}>
                Projects
              </NavLink>
              <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
                Contact
              </NavLink>
            </nav>
          </div>
        </>
      )}


    </header>
  );
}
