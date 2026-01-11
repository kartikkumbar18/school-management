import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export const Contactus: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Wrapper (padding-top fixes navbar overlap) */}
      <div className="pt-27 text-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-black to-yellow-600 py-20 text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            We’d love to hear from you. Reach out for admissions, queries, or
            support.
          </p>
        </section>

        {/* Contact Info Cards */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "School Address",
                desc: "123, Knowledge Park Road, Bengaluru, Karnataka - 560001",
                icon: "📍",
              },
              {
                title: "Call Us",
                desc: "+91 234 567 8901\n+91 987 654 3210",
                icon: "📞",
              },
              {
                title: "Email Us",
                desc: "info@sunriseschool.edu\nsupport@sunriseschool.edu",
                icon: "📧",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 text-center shadow hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-yellow-600">
                  {item.title}
                </h3>
                <p className="whitespace-pre-line text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-indigo-50 py-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-center text-3xl font-bold text-yellow-600">
              Send Us a Message
            </h2>

            <form className="rounded-xl bg-white p-8 shadow">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:outline-none"
                />
              </div>

              <textarea
                placeholder="Your Message"
                rows={5}
                className="mt-6 w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:outline-none"
              ></textarea>

              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="rounded-full bg-yellow-400 px-10 py-3 text-sm font-bold text-indigo-900
                             transition-all duration-300
                             hover:bg-yellow-300 hover:shadow-lg hover:scale-105"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-6 text-center text-3xl font-bold text-yellow-600">
            Visit Our Campus
          </h2>

          <div className="overflow-hidden rounded-xl shadow">
            <iframe
              title="School Location"
              className="h-80 w-full border-0"
              src="https://www.google.com/maps?q=Bangalore&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};
