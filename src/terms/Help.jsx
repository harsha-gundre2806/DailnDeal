import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaQuestionCircle } from "react-icons/fa";

export default function Help() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate: at least email or phone must be filled
    if (!email && !phone) {
      alert("Please enter either your Email or Mobile Number.");
      return;
    }

    // Optional: further validation
    const emailValid = email ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) : true;
    const phoneValid = phone ? /^(\+?\d{1,3}[- ]?)?\d{10}$/.test(phone) : true;

    if (!emailValid) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!phoneValid) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Submit or process form
    console.log({ name, email, phone, subject, message });
    alert("Your query has been submitted successfully!");
    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-[90px] pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="bg-white shadow-md rounded-xl p-8 border border-gray-100 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">
                Help & Support
              </h1>
              <p className="mt-2 text-gray-600">
                We’re here to assist you. Find answers, get in touch, or explore helpful resources below.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/home" className="text-sm text-blue-600 hover:underline">
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-sm text-gray-600">Help & Support</span>
            </div>
          </div>
        </div>

        {/* CONTACT DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <FaEnvelope className="text-blue-600 text-3xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm">support@dailndeal.example</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <FaPhoneAlt className="text-blue-600 text-3xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm">+91 98765 43210</p>
            <p className="text-gray-500 text-xs mt-1">Mon - Sat, 9 AM - 6 PM</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-blue-600 text-3xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm">
              123 Marketplace Avenue, Suite 100<br />
              Mumbai, Maharashtra - 400001
            </p>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
            <FaQuestionCircle /> Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800">How can I track my order?</h3>
              <p className="text-gray-600 text-sm mt-1">
                You can track your order by visiting your profile &gt; My Orders section.
                Tracking updates will also be sent to your registered email or phone number.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">What if I receive a defective product?</h3>
              <p className="text-gray-600 text-sm mt-1">
                Please contact our support within 48 hours of delivery. Our team will assist
                you in returning or replacing the product.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">How do I save my favorite shops or products?</h3>
              <p className="text-gray-600 text-sm mt-1">
                Simply click on the heart icon next to a product or shop to add it to your favorites.
                You can view them under “Saved” or “Favourites”.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">How can I delete my account?</h3>
              <p className="text-gray-600 text-sm mt-1">
                Send an account deletion request to
                <span className="text-blue-600"> support@dailndeal.example</span>.
                It will be processed within 7 working days.
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Still Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Fill out the form below and our support team will get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Your Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              placeholder="Describe your issue..."
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
