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
  Telugu: {
    welcome: "స్వాగతం",
    editProfile: "ప్రొఫైల్ ఎడిట్ చేయి",
    myBusiness: "నా వ్యాపారం",
    customerService: "కస్టమర్ సర్వీస్",
    feedback: "ప్రతిస్పందన",
    logout: "లాగ్ అవుట్",
    changeLanguage: "భాష మార్చు",
    shopName: "నా షాప్",
    shopDescription: "ఇది ఒక నమూనా షాప్ వివరణ.",
    contactNumber: "కాంటాక్ట్ నంబర్: +91 1234567890",
    contactEmail: "ఇమెయిల్: shop@example.com",
  },
  Tamil: {
    welcome: "வரவேற்கிறோம்",
    editProfile: "சுயவிவரத்தை திருத்து",
    myBusiness: "என் வியாபாரம்",
    customerService: "வாடிக்கையாளர் சேவை",
    feedback: "பின்னூட்டம்",
    logout: "வெளியேறு",
    changeLanguage: "மொழியை மாற்று",
    shopName: "என் கடை",
    shopDescription: "இது ஒரு மாதிரி கடை விவரணம்.",
    contactNumber: "தொடர்பு எண்: +91 1234567890",
    contactEmail: "மின்னஞ்சல்: shop@example.com",
  },
  Kannada: {
    welcome: "ಸ್ವಾಗತ",
    editProfile: "ಪ್ರೊಫೈಲ್ ಸಂಪಾದಿಸಿ",
    myBusiness: "ನನ್ನ ವ್ಯವಹಾರ",
    customerService: "ಗ್ರಾಹಕ ಸೇವೆ",
    feedback: "ಪ್ರತಿಕ್ರಿಯೆ",
    logout: "ಲಾಗ್ ಔಟ್",
    changeLanguage: "ಭಾಷೆ ಬದಲಾಯಿಸಿ",
    shopName: "ನನ್ನ ಅಂಗಡಿ",
    shopDescription: "ಇದು ಒಂದು ಮಾದರಿ ಅಂಗಡಿ ವಿವರವಾಗಿದೆ.",
    contactNumber: "ಸಂಪರ್ಕ ಸಂಖ್ಯೆ: +91 1234567890",
    contactEmail: "ಇಮೇಲ್: shop@example.com",
  },
  Malayalam: {
    welcome: "സ്വാഗതം",
    editProfile: "പ്രൊഫൈൽ എഡിറ്റ് ചെയ്യുക",
    myBusiness: "എന്റെ ബിസിനസ്",
    customerService: "ഉപഭോക്തൃ സേവനം",
    feedback: "പ്രതികരണം",
    logout: "ലോഗൗട്ട്",
    changeLanguage: "ഭാഷ മാറ്റുക",
    shopName: "എന്റെ ഷോപ്പ്",
    shopDescription: "ഇത് ഒരു സാമ്പിൾ ഷോപ്പ് വിവരണം ആണ്.",
    contactNumber: "ഫോൺ നമ്പർ: +91 1234567890",
    contactEmail: "ഇമെയിൽ: shop@example.com",
  },
  Marathi: {
    welcome: "स्वागत आहे",
    editProfile: "प्रोफाइल संपादित करा",
    myBusiness: "माझा व्यवसाय",
    customerService: "कस्टमर सर्व्हिस",
    feedback: "अभिप्राय",
    logout: "लॉग आउट",
    changeLanguage: "भाषा बदला",
    shopName: "माझी दुकान",
    shopDescription: "हे एक नमुना दुकान वर्णन आहे.",
    contactNumber: "संपर्क क्रमांक: +91 1234567890",
    contactEmail: "ईमेल: shop@example.com",
  },
  Gujarati: {
    welcome: "સ્વાગત છે",
    editProfile: "પ્રોફાઇલ સંપાદિત કરો",
    myBusiness: "મારો વ્યવસાય",
    customerService: "ગ્રાહક સેવા",
    feedback: "પ્રતિસાદ",
    logout: "લૉગ આઉટ",
    changeLanguage: "ભાષા બદલો",
    shopName: "મારી દુકાન",
    shopDescription: "આ એક નમૂનાકાર દુકાનનું વર્ણન છે.",
    contactNumber: "સંપર્ક નંબર: +91 1234567890",
    contactEmail: "ઈમેલ: shop@example.com",
  },
  Bengali: {
    welcome: "স্বাগতম",
    editProfile: "প্রোফাইল সম্পাদনা করুন",
    myBusiness: "আমার ব্যবসা",
    customerService: "কাস্টমার সার্ভিস",
    feedback: "প্রতিক্রিয়া",
    logout: "লগ আউট",
    changeLanguage: "ভাষা পরিবর্তন করুন",
    shopName: "আমার দোকান",
    shopDescription: "এটি একটি নমুনা দোকানের বিবরণ।",
    contactNumber: "যোগাযোগ নম্বর: +91 1234567890",
    contactEmail: "ইমেল: shop@example.com",
  },
};

function ShopkeeperPage() {
  const [name, setName] = useState("John Doe");
  const [language, setLanguage] = useState("English");
  const [activeSection, setActiveSection] = useState(null);
  const [shopProducts] = useState([
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
  ]);
  const [feedback, setFeedback] = useState("");

  const t = translations[language];

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleFeedbackSubmit = () => {
    alert(`Feedback received:\n${feedback}`);
    setFeedback("");
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px", padding: "20px" }}>
      <h1 style={{ marginBottom: "30px" }}>
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
          <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded-b mb-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded w-full mb-2"
            />
            <p className="text-sm text-gray-600">
              Enter your new display name
            </p>
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
                  {p.name} - ${p.price}
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
              onClick={handleFeedbackSubmit}
            >
              Submit Feedback
            </button>
          </div>
        )}

        {/* Logout */}
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition w-full text-left"
          onClick={() => { toggleSection("logout"); handleLogout(); }}
        >
          {t.logout}
        </button>
      </div>
    </div>
  );
}

export default ShopkeeperPage;
