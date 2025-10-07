import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LoginModal from "../login/LoginModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0);

  // Update page padding dynamically
  useEffect(() => {
    const content = document.getElementById("page-content");
    if (content) {
      content.style.paddingTop = `${64 + dropdownHeight}px`; // navbar height + dropdown
    }
  }, [dropdownHeight]);

  const navLinkClass = ({ isActive }) =>
    `hover:underline ${isActive ? "font-bold underline" : ""}`;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-blue-600/90 backdrop-blur-md text-white px-6 py-4 flex flex-col z-50 transition-all duration-300">
        {/* Top row: logo + nav + login */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo192.png" alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold">DailnDeal</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/search" className={navLinkClass}>
              Search
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </div>

          {/* Login + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowLogin(true)}
              className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition"
            >
              Login / Signup
            </button>

            {/* Render LoginModal */}
            {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

            <button
              className="md:hidden ml-2 focus:outline-none"
              onClick={() => {
                setIsOpen(!isOpen);
                setDropdownHeight(isOpen ? 0 : 200); // approximate dropdown height
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300`}
          style={{ maxHeight: isOpen ? "200px" : "0px" }}
        >
          <div className="flex flex-col bg-white/20 backdrop-blur-md text-white shadow-lg border border-white/20 rounded-b-xl">
            <NavLink
              to="/"
              className="py-2 w-full text-center border-b border-white/20 hover:bg-white/10 transition"
              onClick={() => {
                setIsOpen(false);
                setDropdownHeight(0);
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/search"
              className="py-2 w-full text-center border-b border-white/20 hover:bg-white/10 transition"
              onClick={() => {
                setIsOpen(false);
                setDropdownHeight(0);
              }}
            >
              Search
            </NavLink>
            <NavLink
              to="/shops"
              className="py-2 w-full text-center border-b border-white/20 hover:bg-white/10 transition"
              onClick={() => {
                setIsOpen(false);
                setDropdownHeight(0);
              }}
            >
              Shops
            </NavLink>
            <NavLink
              to="/about"
              className="py-2 w-full text-center hover:bg-white/10 transition"
              onClick={() => {
                setIsOpen(false);
                setDropdownHeight(0);
              }}
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Dummy wrapper for page content */}
      <div id="page-content" className="transition-padding duration-300">
        {/* Your actual page content goes here */}
      </div>
    </>
  );
}
