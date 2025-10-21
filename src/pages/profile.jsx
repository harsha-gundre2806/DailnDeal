import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Profile() {
  const [userData, setUserData] = useState({
    name: "",
    dob: "",
    email: "",
    number1: "",
    number2: "",
    city: "",
    area: "",
    pincode: "",
    occupation: "",
    profileImage: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedUser =
      localStorage.getItem("userProfile") || localStorage.getItem("user");

    if (savedUser) {
      setUserData(JSON.parse(savedUser));
    } else {
      // Default example data (Virat Kohli)
      setUserData({
        name: "Virat Kohli",
        dob: "5 November 1988",
        email: "virat.kohli@example.com",
        number1: "+91 9876543210",
        number2: "+91 9123456789",
        city: "Mumbai",
        area: "Worli",
        pincode: "400018",
        occupation: "Cricketer",
        profileImage:
          "https://upload.wikimedia.org/wikipedia/commons/1/16/Virat_Kohli_2024.jpg",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(userData));
    setIsEditing(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prev) => ({ ...prev, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 flex justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-5xl p-8 flex flex-col md:flex-row gap-8">
        {/* LEFT: Profile Details */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between border-b pb-2">
            <h2 className="text-2xl font-bold text-blue-600">My Profile</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ["name", "Full Name"],
              ["dob", "Date of Birth"],
              ["email", "Email"],
              ["number1", "Primary Number"],
              ["number2", "Secondary Number"],
              ["city", "City"],
              ["area", "Area"],
              ["pincode", "Pincode"],
              ["occupation", "Occupation"],
            ].map(([key, label]) => (
              <div key={key}>
                <label className="text-sm text-gray-500">{label}</label>
                {isEditing ? (
                  <input
                    type="text"
                    name={key}
                    value={userData[key]}
                    onChange={handleChange}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-lg font-medium text-gray-800">
                    {userData[key] || "—"}
                  </p>
                )}
              </div>
            ))}
          </div>

          {isEditing && (
            <button
              onClick={handleSave}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Save Changes
            </button>
          )}
        </div>

        {/* RIGHT: Profile Picture */}
        <div className="flex flex-col items-center justify-center md:w-1/3">
          <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-md border-4 border-blue-100">
            {userData.profileImage ? (
              <img
                src={userData.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <FaUserCircle className="w-full h-full text-gray-400" />
            )}
          </div>
          <p className="mt-3 text-gray-600 font-medium">Profile Picture</p>

          {isEditing && (
            <label className="mt-2 text-sm text-blue-600 cursor-pointer hover:underline">
              Upload New Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          )}
        </div>
      </div>
    </div>
  );
}
