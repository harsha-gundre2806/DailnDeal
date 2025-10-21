import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "definitions", title: "Definitions" },
    { id: "access", title: "Access & Use of Service" },
    { id: "accounts", title: "Accounts & Registration" },
    { id: "orders-payments", title: "Orders, Payments & Fees" },
    { id: "content", title: "User Content & Conduct" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "privacy", title: "Privacy" },
    { id: "termination", title: "Termination" },
    { id: "changes", title: "Changes to These Terms" },
    { id: "governing-law", title: "Governing Law & Dispute Resolution" },
    { id: "contact", title: "Contact Us" },
  ];

  return (    
    <>
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
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-[80px] ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">
                Terms & Conditions
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Last updated: <strong>October 21, 2025</strong>
              </p>
              <p className="mt-3 text-gray-700 max-w-2xl leading-relaxed">
                These Terms & Conditions (“Terms”) govern your access to and use
                of the DailnDeal website and services. By using our platform, you
                agree to these Terms. Please read them carefully.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/home" className="text-sm text-blue-600 hover:underline">
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-sm text-gray-600">Terms & Conditions</span>
            </div>
          </div>

          {/* Table of contents + content */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Table of Contents */}
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
                  <strong>Disclaimer:</strong> This page provides general
                  information and does not constitute legal advice. For advice
                  tailored to your situation, please consult a qualified attorney.
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

/* SECTION CONTENT FUNCTION */
function getSectionContent(id) {
  switch (id) {
    case "intro":
      return (
        <p>
          Welcome to DailnDeal. These Terms define the rules for using our
          marketplace and related services. By accessing or using the platform,
          you agree to these Terms.
        </p>
      );
    case "definitions":
      return (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Service:</strong> The DailnDeal website, apps, and related
            offerings.
          </li>
          <li>
            <strong>User:</strong> Any individual who visits, browses, or uses
            the Service.
          </li>
          <li>
            <strong>Seller / Shop:</strong> Third-party vendors selling goods or
            services through DailnDeal.
          </li>
        </ul>
      );
    case "access":
      return (
        <>
          <p>
            You may use the Service only if you are legally capable of forming a
            binding contract. We may suspend or restrict access for violations.
          </p>
        </>
      );
    case "accounts":
      return (
        <p>
          You’re responsible for maintaining your account credentials. Any
          activity from your account is your responsibility.
        </p>
      );
    case "orders-payments":
      return (
        <p>
          All orders are subject to seller acceptance. Payment details, fees,
          and taxes will be shown at checkout.
        </p>
      );
    case "content":
      return (
        <p>
          You may post reviews and feedback. By submitting content, you grant us
          the right to use and display it for improving our services.
        </p>
      );
    case "intellectual-property":
      return (
        <p>
          All platform content including text, images, and software belong to
          DailnDeal or its licensors. Reproduction without permission is
          prohibited.
        </p>
      );
    case "privacy":
      return (
        <p>
          Our{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>{" "}
          explains how your personal data is collected and used.
        </p>
      );
    case "termination":
      return (
        <p>
          We may suspend or terminate your access at any time for violating
          these Terms or engaging in harmful conduct.
        </p>
      );
    case "changes":
      return (
        <p>
          Terms may be updated periodically. Continued use of the Service
          implies acceptance of new Terms.
        </p>
      );
    case "governing-law":
      return (
        <p>
          These Terms are governed by applicable laws in our jurisdiction.
          Unresolved disputes may be settled by arbitration.
        </p>
      );
    case "contact":
      return (
        <ul className="space-y-2">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@dailndeal.example"
              className="text-blue-600 hover:underline"
            >
              support@dailndeal.example
            </a>
          </li>
          <li>
            <strong>Address:</strong> 123 Marketplace Avenue, Suite 100
          </li>
        </ul>
      );
    default:
      return null;
  }
}
