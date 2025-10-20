import React, { useState } from "react";

const languages = [
  { code: "English", label: "English" },
  { code: "Hindi", label: "हिंदी" },
  { code: "Telugu", label: "తెలుగు" },
  { code: "Tamil", label: "தமிழ்" },
  { code: "Kannada", label: "ಕನ್ನಡ" },
  { code: "Malayalam", label: "മലയാളം" },
  { code: "Marathi", label: "मराठी" },
  { code: "Gujarati", label: "ગુજરાતી" },
  { code: "Bengali", label: "বাংলা" },
];

const translations = {
  English: {
    welcome: "Welcome",
    editProfile: "Edit Profile",
    logout: "Logout",
    changeLanguage: "Change Language",
  },
  Hindi: {
    welcome: "स्वागत है",
    editProfile: "प्रोफ़ाइल संपादित करें",
    logout: "लॉग आउट",
    changeLanguage: "भाषा बदलें",
  },
  // Add other languages as needed
};

function CustomerPage() {
  const [name, setName] = useState("customer");
  const [language, setLanguage] = useState("English");

  // Profile fields
  const [email, setEmail] = useState("customer@example.com");
  const [originalEmail] = useState("customer@example.com");
  const [emailVerified, setEmailVerified] = useState(true);

  const [mobile, setMobile] = useState("9876543210");
  const [originalMobile] = useState("9876543210");
  const [mobileVerified, setMobileVerified] = useState(true);

  const [address, setAddress] = useState("456 Main Street, Hyderabad");

  const [activeSection, setActiveSection] = useState(null);

  const t = translations[language];

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleEmailOTP = () => {
    const otp = prompt("Enter the OTP sent to your email:");
    if (otp === "1234") setEmailVerified(true);
    else alert("Invalid OTP!");
  };

  const handleMobileOTP = () => {
    const otp = prompt("Enter the OTP sent to your mobile number:");
    if (otp === "1234") setMobileVerified(true);
    else alert("Invalid OTP!");
  };

  const handleSaveProfile = () => {
    if (!emailVerified || !mobileVerified) {
      alert("Please verify changed email and/or mobile before saving.");
      return;
    }
    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    window.location.href = "/";
  };

  return (
    <div className="text-center mt-10 p-4">
      <h1 className="text-2xl font-semibold mb-6">
        {t.welcome}, {name}
      </h1>

      <div className="flex flex-col gap-4 max-w-xl mx-auto text-left">
        {/* Edit Profile */}
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full text-left"
          onClick={() => toggleSection("editProfile")}
        >
          {t.editProfile}
        </button>

        {activeSection === "editProfile" && (
          <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded-b mb-2 space-y-3">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Email
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailVerified(e.target.value === originalEmail);
                  }}
                  className="border p-2 rounded w-full"
                />
                {email !== originalEmail && (
                  <button
                    onClick={handleEmailOTP}
                    className="px-3 py-2 bg-blue-600 text-white rounded"
                  >
                    Verify
                  </button>
                )}
              </div>
              {emailVerified && (
                <p className="text-green-600 text-sm mt-1">Verified ✅</p>
              )}
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Mobile
              </label>
              <div className="flex gap-2">
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                    setMobileVerified(e.target.value === originalMobile);
                  }}
                  className="border p-2 rounded w-full"
                />
                {mobile !== originalMobile && (
                  <button
                    onClick={handleMobileOTP}
                    className="px-3 py-2 bg-blue-600 text-white rounded"
                  >
                    Verify
                  </button>
                )}
              </div>
              {mobileVerified && (
                <p className="text-green-600 text-sm mt-1">Verified ✅</p>
              )}
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Address
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>

            <button
              onClick={handleSaveProfile}
              className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Save Changes
            </button>
          </div>
        )}

        {/* Language Selector */}
        <div className="mb-2">
          <label className="block mb-1 font-semibold">{t.changeLanguage}:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-4 py-2 border rounded w-full"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default CustomerPage;
