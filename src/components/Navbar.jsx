import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaRegEdit,
  FaRegHeart,
  FaRegBell,
  FaRegBuilding,
  FaHeadset,
  FaFileAlt,
  FaCommentDots,
  FaQuestionCircle,
  FaSignOutAlt,
  FaRegBookmark,
} from "react-icons/fa";
import { X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showUserPanel, setShowUserPanel] = useState(false);

  // Popup states
  const [mobileNumber, setMobileNumber] = useState("");
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();
  const userPanelRef = useRef();

  // Restore user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  // Close user panel if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userPanelRef.current && !userPanelRef.current.contains(event.target)) {
        setShowUserPanel(false);
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

  const handleSignIn = (method) => {
    const mockUser = {
      name: method === "email" ? "Email User" : "Mobile User",
      email: method === "email" ? "user@example.com" : "",
      role: "profile",
      avatar: "https://i.pravatar.cc/100?img=3", // demo avatar
    };
    setUser(mockUser);
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify(mockUser));
    setShowLoginPopup(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
    setShowUserPanel(false);
    navigate("/home");
  };

  const handleLogoClick = () => navigate("/home");

  const isValidMobile = /^(\+91)?[6-9]\d{9}$/.test(mobileNumber);

  const handleNavigation = (path) => {
    navigate(path);
    setShowUserPanel(false);
  };

  return (
    <>
      {/* NAVBAR */}
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
            <NavLink to="/home" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/search" className={navLinkClass}>
              Search
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 relative">
            {!isLoggedIn ? (
              <button
                onClick={() => setShowLoginPopup(true)}
                className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition"
              >
                Login / Signup
              </button>
            ) : (
              <button
                aria-label="User Menu"
                className="rounded-full bg-white text-blue-600 p-1 hover:bg-gray-100 transition"
                onClick={() => setShowUserPanel(true)}
              >
                <FaUserCircle className="w-10 h-10" />
              </button>
            )}

            {/* Hamburger Menu */}
            <button
              className="md:hidden ml-2 focus:outline-none"
              onClick={() => {
                setIsOpen(!isOpen);
                setDropdownHeight(isOpen ? 0 : 200);
              }}
              aria-label="Toggle Menu"
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
            {["home", "search", "about"].map((page) => (
              <NavLink
                key={page}
                to={`/${page}`}
                className="py-2 w-full text-center border-b border-white/20 hover:bg-white/10 transition"
                onClick={() => {
                  setIsOpen(false);
                  setDropdownHeight(0);
                }}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* LOGIN POPUP */}
      {showLoginPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="bg-white w-11/12 md:w-1/2 rounded-2xl shadow-xl p-10 relative flex flex-col gap-4">
            {/* Top section */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src="logo.jpg" alt="Logo" className="w-10 h-10" />
                <span className="text-xl font-bold text-blue-600">
                  DailnDeal
                </span>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">Welcome!</p>
                <p className="text-sm text-gray-500">Login here</p>
              </div>
            </div>

            {/* Terms */}
            <span className="text-sm text-gray-600">
              I agree to{" "}
              <span
                onClick={() => {
                  navigate("/t&c");
                  setShowLoginPopup(false);
                }}
                className="text-blue-600 underline cursor-pointer"
              >
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span
                onClick={() => {
                  navigate("/privacy");
                  setShowLoginPopup(false);
                }}
                className="text-blue-600 underline cursor-pointer"
              >
                Privacy Policy
              </span>
            </span>

            {/* Checkbox */}
            <label className="flex items-center gap-2 text-sm text-gray-700 mt-1">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="w-4 h-4 accent-blue-600"
              />
              I agree to the above terms.
            </label>

            {/* Mobile Login */}
            <div className="flex flex-col gap-2 mt-2">
              <label className="text-sm text-gray-700">Mobile Number</label>
              <div className="flex items-center border rounded-md overflow-hidden">
                <span className="px-3 py-2 bg-gray-100 text-gray-700">+91</span>
                <input
                  type="text"
                  placeholder="Enter 10-digit number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="flex-1 px-3 py-2 outline-none"
                />
              </div>
              <button
                disabled={!isValidMobile || !agree}
                onClick={() => handleSignIn("mobile")}
                className={`mt-2 py-2 rounded-md text-white font-semibold transition ${
                  isValidMobile && agree
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Login with OTP
              </button>
            </div>

            {/* Or Login Using */}
            <div className="text-center text-sm text-gray-500 mt-2">
              Or Login Using
            </div>
            <button
              onClick={() => handleSignIn("email")}
              className="py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
            >
              Login with Email
            </button>

            {/* Skip button */}
            <button
              onClick={() => setShowLoginPopup(false)}
              className="absolute bottom-4 right-6 text-sm text-gray-500 hover:underline"
            >
              Skip
            </button>
          </div>
        </div>
      )}

      {/* USER PANEL */}
      {showUserPanel && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end z-[999]">
          <div
            ref={userPanelRef}
            className="bg-white w-72 h-full shadow-xl p-5 flex flex-col animate-slide-left relative"
          >
            <button
              onClick={() => setShowUserPanel(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-blue-600"
            >
              <X size={22} />
            </button>

            {/* Profile Card */}
            <div
              onClick={() => handleNavigation("/profile")}
              className="flex items-center gap-4 bg-blue-50 p-3 rounded-xl cursor-pointer hover:bg-blue-100 transition mt-8"
            >
              <img
                src={user?.avatar || "https://i.pravatar.cc/100"}
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-blue-700">{user?.name}</p>
                <p className="text-sm text-gray-500">View Profile</p>
              </div>
            </div>

            <hr className="my-4" />

            {/* Menu Items */}
            <ul className="flex flex-col gap-3 text-gray-700 text-sm">
              <li
                onClick={() => handleNavigation("/edit-profile")}
                className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
              >
                <FaRegEdit /> Edit Profile
              </li>
              <li
                onClick={() => handleNavigation("/saved")}
                className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
              >
                <FaRegBookmark /> Saved
              </li>
              <li
                onClick={() => handleNavigation("/favourites")}
                className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
              >
                <FaRegHeart /> Favourites
              </li>
            </ul>

            <hr className="my-4" />

            <ul className="flex flex-col gap-3 text-gray-700 text-sm">
              <li
                onClick={() => handleNavigation("/notifications")}
                className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
              >
                <FaRegBell /> Notifications
              </li>
              <li
                onClick={() => handleNavigation("/my-business")}
                className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
              >
                <FaRegBuilding /> My Business
              </li>

            </ul>

            <hr className="my-4" />

            <ul className="flex flex-col gap-3 text-gray-700 text-sm">
              <li
                onClick={() => handleNavigation("/privacy")}
                className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
              >
                <FaFileAlt /> Privacy Policy
              </li>
              <li
                onClick={() => handleNavigation("/t&c")}
                className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
              >
                <FaFileAlt /> terms & conditions
              </li>
              <li
                onClick={() => handleNavigation("/feedback")}
                className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
              >
                <FaCommentDots /> Feedback
              </li>
              <li
                onClick={() => handleNavigation("/help")}
                className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
              >
                <FaQuestionCircle /> Help
              </li>
              <li
                onClick={handleLogout}
                className="flex items-center gap-3 text-red-500 font-semibold cursor-pointer hover:underline mt-2"
              >
                <FaSignOutAlt /> Logout
              </li>
            </ul>
          </div>
        </div>
      )}

      <div id="page-content" className="transition-padding duration-300"></div>
    </>
  );
}
