import React from "react";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-yellow-600 text-white">
      {/* Top Footer Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-8 py-14 md:grid-cols-4">
        
        {/* School Info */}
        <div>
          <h2 className="mb-4 text-xl font-bold tracking-wide">
            Sunrise International School
          </h2>
          <p className="text-sm leading-relaxed text-gray-200">
            Empowering students with knowledge, discipline, and values to build
            a brighter future through academic excellence and holistic
            development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Facilities", path: "/facilities" },
              { name: "Results", path: "/results" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="transition hover:text-yellow-300"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>📍 Bengaluru, Karnataka, India</li>
            <li>📞 +91 234 567 8901</li>
            <li>✉️ info@sunriseschool.edu</li>
          </ul>
        </div>

        {/* School Timings */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">School Hours</h3>
          <p className="text-sm text-gray-200">
            Monday – Friday: <br />
            <span className="font-medium">8:30 AM – 4:30 PM</span>
          </p>
          <p className="mt-2 text-sm text-gray-200">
            Saturday: <br />
            <span className="font-medium">9:00 AM – 1:00 PM</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-400/40 bg-black/20 px-6 py-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Sunrise International School. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
