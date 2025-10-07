import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginModal({ onClose }) {
  const [role, setRole] = useState("shopkeeper");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true); // fade-in when modal mounts
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem(role) || "{}");
    if (users[email] && users[email] === password) {
      navigate(`/${role}`);
      handleClose();
    } else {
      setMessage(`❌ Invalid ${role} credentials`);
    }
  };

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem(role) || "{}");
    users[email] = password;
    localStorage.setItem(role, JSON.stringify(users));
    setMessage(`✅ ${role} registered successfully`);
  };

  return (
    <div
      className={`fixed inset-x-0 top-[100px] z-50 flex justify-center`}
      onClick={handleClose} // close modal when clicking outside
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-sm sm:max-w-md p-6 relative transform transition-transform duration-300 ease-out scale-100"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
          {role.charAt(0).toUpperCase() + role.slice(1)} Login
        </h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border text-black rounded-md p-2 mb-3"
        >
          <option value="customer">Customer</option>
          
          <option value="shopkeeper">Shopkeeper</option>
        </select>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border text-black rounded-md p-2 mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border text-black rounded-md p-2 mb-3"
        />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mb-3">
          {/* Login button always visible */}
          <button
            onClick={handleLogin}
            className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Login
          </button>

          {/* Conditional second button */}
          {role === "shopkeeper" && (
            <button
              onClick={handleRegister}
              className="w-full sm:w-auto px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition"
            >
              Register
            </button>
          )}
          {role === "customer" && (
            <button
              onClick={handleRegister} // You can rename to "Sign In" if needed
              className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          )}

          <button
            onClick={handleClose}
            className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Close
          </button>
        </div>

        {message && (
          <p
            className={`text-sm text-center mt-2 ${
              message.includes("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginModal;
