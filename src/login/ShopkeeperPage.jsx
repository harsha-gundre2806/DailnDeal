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
    myBusiness: "My Business",
    customerService: "Customer Service",
    feedback: "Feedback",
    logout: "Logout",
    changeLanguage: "Change Language",
    shopName: "My Shop",
    shopDescription: "This is a sample shop description.",
    contactNumber: "Contact Number: +91 1234567890",
    contactEmail: "Email: shop@example.com",
  },
  Hindi: {
    welcome: "स्वागत है",
    editProfile: "प्रोफ़ाइल संपादित करें",
    myBusiness: "मेरा व्यवसाय",
    customerService: "ग्राहक सेवा",
    feedback: "प्रतिक्रिया",
    logout: "लॉग आउट",
    changeLanguage: "भाषा बदलें",
    shopName: "मेरा स्टोर",
    shopDescription: "यह एक नमूना स्टोर विवरण है।",
    contactNumber: "संपर्क नंबर: +91 1234567890",
    contactEmail: "ईमेल: shop@example.com",
  },
  // Add other languages here
};

function ShopkeeperPage() {
  const [name, setName] = useState("shop keeper");
  const [language, setLanguage] = useState("English");
  const [activeSection, setActiveSection] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [shopProducts] = useState([
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
  ]);

  // Profile fields
  const [email, setEmail] = useState("shopkeeper@example.com");
  const [originalEmail] = useState("shopkeeper@example.com");
  const [emailVerified, setEmailVerified] = useState(true); // initially verified

  const [mobile, setMobile] = useState("9876543210");
  const [originalMobile] = useState("9876543210");
  const [mobileVerified, setMobileVerified] = useState(true); // initially verified

  const [shopName, setShopName] = useState("My Shop");
  const [shopAddress, setShopAddress] = useState(
    "123 Market Street, Hyderabad"
  );

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
                Shopkeeper ID
              </label>
              <input
                type="text"
                value="SKP-2025-001"
                readOnly
                className="border p-2 rounded w-full bg-gray-100 cursor-not-allowed"
              />
            </div>

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

            {/* Email */}
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
                    setEmailVerified(e.target.value === originalEmail); // reset verification if changed
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
              {emailVerified && <p className="text-green-600 text-sm mt-1">Verified ✅</p>}
            </div>

            {/* Mobile */}
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
                    setMobileVerified(e.target.value === originalMobile); // reset verification if changed
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
              {mobileVerified && <p className="text-green-600 text-sm mt-1">Verified ✅</p>}
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Shop Name
              </label>
              <input
                type="text"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Shop Address
              </label>
              <textarea
                value={shopAddress}
                onChange={(e) => setShopAddress(e.target.value)}
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

        {/* My Business */}
        <button
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition w-full text-left"
          onClick={() => toggleSection("myBusiness")}
        >
          {t.myBusiness}
        </button>

        {activeSection === "myBusiness" && (
          <div className="p-4 border-l-4 border-green-600 bg-green-50 rounded-b mb-2">
            <h3 className="font-semibold">{t.shopName}</h3>
            <p>{t.shopDescription}</p>
            <ul className="mt-2">
              {shopProducts.map((p) => (
                <li key={p.id}>
                  {p.name} - ₹{p.price}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Customer Service */}
        <button
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition w-full text-left"
          onClick={() => toggleSection("customerService")}
        >
          {t.customerService}
        </button>

        {activeSection === "customerService" && (
          <div className="p-4 border-l-4 border-yellow-600 bg-yellow-50 rounded-b mb-2">
            <p>{t.contactNumber}</p>
            <p>{t.contactEmail}</p>
          </div>
        )}

        {/* Feedback */}
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition w-full text-left"
          onClick={() => toggleSection("feedback")}
        >
          {t.feedback}
        </button>

        {activeSection === "feedback" && (
          <div className="p-4 border-l-4 border-purple-600 bg-purple-50 rounded-b mb-2">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="border p-2 rounded w-full mb-2"
              placeholder="Enter your feedback..."
            />
            <button
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
              onClick={() => {
                alert(`Feedback received:\n${feedback}`);
                setFeedback("");
              }}
            >
              Submit Feedback
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopkeeperPage;
