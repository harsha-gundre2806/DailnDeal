import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [showLoginRole, setShowLoginRole] = useState(false);
  const [showLoginMethod, setShowLoginMethod] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const navigate = useNavigate();
  const tooltipRef = useRef();

  // Restore user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  // Close tooltip if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Adjust padding for mobile dropdown
  useEffect(() => {
    const content = document.getElementById("page-content");
    if (content) {
      content.style.paddingTop = `${64 + dropdownHeight}px`;
    }
  }, [dropdownHeight]);

  const navLinkClass = ({ isActive }) =>
    `hover:underline ${isActive ? "font-bold underline" : ""}`;

  const handleSignIn = (method, role) => {
    const mockUser =
      method === "email"
        ? {
            name: `${role === "customer" ? "Customer" : "Shopkeeper"} User`,
            email: "user@example.com",
            role,
          }
        : {
            name: `${role === "customer" ? "Customer" : "Shopkeeper"} (OTP)`,
            email: "",
            role,
          };

    setUser(mockUser);
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify(mockUser));

    setShowLoginRole(false);
    setShowLoginMethod(null);

    navigate(role === "customer" ? "/customer" : "/shopkeeper");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
    setShowTooltip(false);
    navigate("/home");
  };

  const handleLogoClick = () => navigate("/home");

  const handleIconClick = () => {
    if (user?.role === "customer") navigate("/customer");
    else navigate("/shopkeeper");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-blue-600/90 backdrop-blur-md text-white px-6 py-4 flex flex-col z-50 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={handleLogoClick}
          >
            <img src="logo.jpg" alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold">DailnDeal</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/home" className={navLinkClass}>Home</NavLink>
            <NavLink to="/search" className={navLinkClass}>Search</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 relative">
            {!isLoggedIn ? (
              <>
                {/* Login/Signup Button */}
                <button
                  onClick={() => {
                    setShowLoginRole(!showLoginRole);
                    setShowLoginMethod(null);
                  }}
                  className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition"
                >
                  Login / Signup
                </button>

                {/* Step 1: Choose Role */}
                {showLoginRole && (
                  <div className="absolute right-0 top-12 bg-white text-blue-600 shadow-lg rounded-lg w-56 overflow-hidden border border-gray-200 z-50">
                    <button
                      onClick={() => setShowLoginMethod("customer")}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 border-b"
                    >
                      Login as Customer
                    </button>
                    <button
                      onClick={() => setShowLoginMethod("shopkeeper")}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50"
                    >
                      Login as Shopkeeper
                    </button>
                  </div>
                )}

                {/* Step 2: Choose Login Method */}
                {showLoginMethod && (
                  <div className="absolute right-0 top-12 bg-white text-blue-600 shadow-lg rounded-lg w-56 overflow-hidden border border-gray-200 z-50">
                    <button
                      onClick={() => handleSignIn("email", showLoginMethod)}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 border-b"
                    >
                      Sign in with Email
                    </button>
                    <button
                      onClick={() => handleSignIn("mobile", showLoginMethod)}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50"
                    >
                      Sign in with Mobile (OTP)
                    </button>
                    <button
                      onClick={() => setShowLoginMethod(null)}
                      className="w-full text-left px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 border-t"
                    >
                      ← Back
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div
                className="relative"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                ref={tooltipRef}
              >
                <button
                  className="rounded-full bg-white text-blue-600 p-1 hover:bg-gray-100 transition"
                  onClick={handleIconClick}
                >
                  <FaUserCircle className="w-10 h-10" />
                </button>

                {showTooltip && (
                  <div className="absolute right-0 mt-2 w-56 bg-white text-blue-600 p-3 rounded shadow-lg text-left z-50">
                    <p className="font-semibold">{user.name}</p>
                    {user.email && <p className="text-sm">{user.email}</p>}
                    <p className="text-xs text-gray-500 mt-1">Role: {user.role}</p>
                    <button
                      onClick={handleLogout}
                      className="mt-3 text-sm text-red-500 font-semibold hover:underline"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Hamburger Menu */}
            <button
              className="md:hidden ml-2 focus:outline-none"
              onClick={() => {
                setIsOpen(!isOpen);
                setDropdownHeight(isOpen ? 0 : 200);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
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
              to="/home"
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

      <div id="page-content" className="transition-padding duration-300"></div>
    </>
  );
}
