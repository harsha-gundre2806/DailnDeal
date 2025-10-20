import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("email");
  const [inputValue, setInputValue] = useState("");

  const handleLogin = () => {
    if (!inputValue) {
      alert("Please enter your email or mobile number");
      return;
    }
    if (loginType === "email") {
      alert(`Login link sent to ${inputValue}`);
    } else {
      alert(`OTP sent to ${inputValue}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Login</h1>

        {/* Toggle login type */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setLoginType("email")}
            className={`px-4 py-2 rounded-l ${loginType === "email" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            Login via Email
          </button>
          <button
            onClick={() => setLoginType("mobile")}
            className={`px-4 py-2 rounded-r ${loginType === "mobile" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            Login via Mobile
          </button>
        </div>

        {/* Input Field */}
        <input
          type={loginType === "email" ? "email" : "tel"}
          placeholder={loginType === "email" ? "Enter your email" : "Enter your mobile number"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 rounded w-full p-2 mb-4"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full mb-6"
        >
          Send {loginType === "email" ? "Login Link" : "OTP"}
        </button>

        {/* Choose user type */}
        <h2 className="text-gray-600 font-semibold mb-2">Continue as:</h2>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => navigate("/customer")}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
          >
            Login as Customer
          </button>
          <button
            onClick={() => navigate("/shopkeeper")}
            className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded"
          >
            Login as Shopkeeper
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
