import React from "react";

export default function About() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          About Us
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-lg text-center mb-8">
          Welcome to <span className="font-semibold">Gadget Valley</span> —
          your one-stop destination for the latest gadgets, electronics, and
          lifestyle products. We are committed to delivering innovative products
          and top-notch customer experiences.
        </p>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Our Story */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-3">📖 Our Story</h2>
            <p className="text-gray-600">
              Founded with a passion for technology, Gadget Valley started as a
              small idea to make cutting-edge gadgets accessible to everyone.
              Today, we are proud to serve customers with a wide range of
              products that inspire and empower.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-green-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-3">🎯 Our Mission</h2>
            <p className="text-gray-600">
              To provide high-quality, affordable, and reliable gadgets that
              make everyday life smarter and more enjoyable. We aim to bridge
              the gap between technology and people by simplifying access to
              innovations.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-purple-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-3">🌍 Our Vision</h2>
            <p className="text-gray-600">
              To be the most trusted and customer-friendly gadget store where
              innovation meets affordability, making us the go-to destination
              for tech enthusiasts worldwide.
            </p>
          </div>

          {/* Values */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-3">💡 Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Customer Satisfaction</li>
              <li>Innovation & Creativity</li>
              <li>Transparency & Integrity</li>
              <li>Quality Products</li>
              <li>Community Growth</li>
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-10">
          <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Have questions or suggestions? We’d love to hear from you.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
