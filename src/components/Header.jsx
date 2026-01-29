import { NavLink } from "react-router-dom";
import Logo from "./Logo";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg transition ${
      isActive ? "bg-white text-purple-600" : "text-white hover:bg-white/20"
    }`;

  return (
    <header className="bg-gradient-to-r from-[#ee9c9cee] to-[#b6751a] shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/expenses" className={linkClass}>
              Expenses
            </NavLink>
            <NavLink to="/income" className={linkClass}>
              Income
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <nav className="md:hidden mt-4 flex flex-col gap-2 bg-white/10 backdrop-blur rounded-xl p-4">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/expenses"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Expenses
            </NavLink>
            <NavLink
              to="/income"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Income
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}
