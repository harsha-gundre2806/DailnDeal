import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // { name: '', email: '' }
  const [showTooltip, setShowTooltip] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const content = document.getElementById("page-content");
    if (content) {
      content.style.paddingTop = `${64 + dropdownHeight}px`;
    }
  }, [dropdownHeight]);

  const navLinkClass = ({ isActive }) =>
    `hover:underline ${isActive ? "font-bold underline" : ""}`;

  const handleSignIn = (method) => {
    if (method === "email") {
      // Mock login: in real app, replace with API/auth
      const mockUser = { name: "John Doe", email: "john@example.com" };
      setUser(mockUser);
      setIsLoggedIn(true);
    } else if (method === "mobile") {
      // Mock mobile login
      const mockUser = { name: "Mobile User", email: "" };
      setUser(mockUser);
      setIsLoggedIn(true);
    }
    setShowLoginOptions(false);
  };

  const handleLogoClick = () => {
    navigate("/home");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-blue-600/90 backdrop-blur-md text-white px-6 py-4 flex flex-col z-50 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo + Text */}
          <div
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={handleLogoClick}
          >
            <img src="/logo192.png" alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold">DailnDeal</span>
          </div>

          {/* Desktop Nav Links */}
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

          {/* Right section */}
          <div className="flex items-center gap-4 relative">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => setShowLoginOptions(!showLoginOptions)}
                  className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition"
                >
                  Login / Signup
                </button>

                {showLoginOptions && (
                  <div className="absolute right-0 top-12 bg-white text-blue-600 shadow-lg rounded-lg w-48 overflow-hidden border border-gray-200 z-50">
                    <button
                      onClick={() => handleSignIn("email")}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50"
                    >
                      Sign in with Email
                    </button>
                    <button
                      onClick={() => handleSignIn("mobile")}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 border-t border-gray-200"
                    >
                      Sign in with Mobile (OTP)
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div
                className="relative"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <button
                  onClick={() => navigate("/shopkeeper")}
                  className="rounded-full bg-white text-blue-600 p-1 hover:bg-gray-100 transition"
                >
                  <FaUserCircle className="w-10 h-10" />
                </button>

                {/* Tooltip */}
                {showTooltip && user && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-blue-600 p-2 rounded shadow-lg text-left z-50">
                    <p className="font-semibold">{user.name}</p>
                    {user.email && <p className="text-sm">{user.email}</p>}
                  </div>
                )}
              </div>
            )}

            {/* Hamburger menu */}
            <button
              className="md:hidden ml-2 focus:outline-none"
              onClick={() => {
                setIsOpen(!isOpen);
                setDropdownHeight(isOpen ? 0 : 200);
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

      <div id="page-content" className="transition-padding duration-300">
        {/* Your actual page content */}
      </div>
    </>
  );
}
