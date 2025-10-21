import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "information", title: "Information We Collect" },
    { id: "usage", title: "How We Use Your Information" },
    { id: "sharing", title: "Information Sharing & Disclosure" },
    { id: "cookies", title: "Cookies & Tracking Technologies" },
    { id: "security", title: "Data Security" },
    { id: "your-rights", title: "Your Rights & Choices" },
    { id: "children", title: "Children’s Privacy" },
    { id: "changes", title: "Changes to This Policy" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <>
      {/* Smooth scroll + offset for fixed navbar */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          [id] {
            scroll-margin-top: 100px;
          }
        `}
      </style>

      <div className="min-h-screen bg-gray-50 text-gray-800 pt-[80px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">
                  Privacy Policy
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                  Last updated: <strong>October 21, 2025</strong>
                </p>
                <p className="mt-3 text-gray-700 max-w-2xl leading-relaxed">
                  Your privacy is important to us. This Privacy Policy explains how
                  DailnDeal collects, uses, discloses, and protects your information
                  when you use our website and services.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link to="/home" className="text-sm text-blue-600 hover:underline">
                  Home
                </Link>
                <span className="text-gray-300">/</span>
                <span className="text-sm text-gray-600">Privacy Policy</span>
              </div>
            </div>

            {/* Layout */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 bg-gray-50 border rounded-lg p-5 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
                    Contents
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="block text-sm text-gray-700 hover:text-blue-600 hover:underline"
                      >
                        {s.title}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-6">
                    <button
                      onClick={() => window.print()}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
                    >
                      Print this page
                    </button>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <article className="lg:col-span-3 space-y-10">
                {sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <h2 className="text-2xl font-semibold text-blue-700 underline underline-offset-4 mb-4">
                      {section.title}
                    </h2>
                    <div className="text-gray-700 leading-relaxed space-y-3">
                      {getSectionContent(section.id)}
                    </div>
                  </section>
                ))}

                {/* Footer Note */}
                <section className="bg-gray-100 p-5 rounded-lg border mt-10 text-sm text-gray-700">
                  <p>
                    <strong>Disclaimer:</strong> This Privacy Policy is provided for
                    general informational purposes. For any clarifications, contact
                    our support team.
                  </p>
                </section>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* --------------------------
   Section Content Function
--------------------------- */
function getSectionContent(id) {
  switch (id) {
    case "intro":
      return (
        <p>
          This Privacy Policy describes how DailnDeal collects and uses
          information from visitors, users, and merchants who interact with our
          platform. By using our website or app, you consent to the terms of
          this policy.
        </p>
      );

    case "information":
      return (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, address, and other contact details.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you interact with
            our services (pages visited, time spent, clicks, etc.).
          </li>
          <li>
            <strong>Device Information:</strong> Browser type, IP address,
            operating system, and device identifiers.
          </li>
        </ul>
      );

    case "usage":
      return (
        <ul className="list-disc pl-5 space-y-2">
          <li>To provide, improve, and personalize our services.</li>
          <li>To communicate updates, offers, or respond to inquiries.</li>
          <li>To ensure legal compliance and prevent fraud.</li>
          <li>To analyze usage patterns and enhance user experience.</li>
        </ul>
      );

    case "sharing":
      return (
        <p>
          We do not sell your personal data. We may share it with trusted
          partners for service delivery (e.g., logistics, payment gateways),
          legal compliance, or in the event of a merger or acquisition.
        </p>
      );

    case "cookies":
      return (
        <p>
          We use cookies and similar technologies to enhance your experience.
          Cookies help us remember preferences, measure traffic, and improve
          functionality. You can manage or disable cookies in your browser
          settings.
        </p>
      );

    case "security":
      return (
        <p>
          We use industry-standard security measures to protect your data.
          However, no system is 100% secure, and we cannot guarantee absolute
          protection.
        </p>
      );

    case "your-rights":
      return (
        <ul className="list-disc pl-5 space-y-2">
          <li>Access or update your personal information.</li>
          <li>Request deletion of your data (subject to legal limits).</li>
          <li>Opt-out of promotional communications at any time.</li>
        </ul>
      );

    case "children":
      return (
        <p>
          Our services are not intended for children under 13. We do not
          knowingly collect personal information from minors. If you believe a
          child has provided us information, please contact us immediately.
        </p>
      );

    case "changes":
      return (
        <p>
          We may update this Privacy Policy periodically. Changes will be posted
          on this page with an updated “Last Updated” date. Continued use
          implies acceptance of the revised policy.
        </p>
      );

    case "contact":
      return (
        <ul className="space-y-2">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:privacy@dailndeal.example"
              className="text-blue-600 hover:underline"
            >
              privacy@dailndeal.example
            </a>
          </li>
          <li>
            <strong>Address:</strong> 123 Marketplace Avenue, Suite 200, New
            Delhi, India
          </li>
          <li>
            <strong>Phone:</strong> +91-9876543210
          </li>
        </ul>
      );

    default:
      return null;
  }
}
