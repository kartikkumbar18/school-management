import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information (left) */}
        <div className="mb-6 md:mb-0 w-full md:w-1/3 text-left md:ml-4">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="text-sm mt-2">123 Main Street, City, Country</p>
          <p className="text-sm">Phone: +123 456 7890</p>
          <p className="text-sm">Email: info@school.com</p>
        </div>

        {/* Logo and Description (center) */}
        <div className="mb-6 md:mb-0 w-full md:w-1/3 text-center">
          <h1 className="text-2xl font-bold">Excellent School</h1>
          <p className="text-sm mt-2">
            Providing quality education to nurture the leaders of tomorrow.
          </p>
        </div>

        {/* Social Media Links (right) */}
        <div className="w-full md:w-1/3 text-right md:mr-4">
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex space-x-4 mt-2 justify-end">
            <a href="#" className="hover:text-orange-500">
              {/* YouTube Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 7.597a2.513 2.513 0 0 0-1.769-1.769C16.277 5.5 12 5.5 12 5.5s-4.277 0-5.846.328a2.513 2.513 0 0 0-1.769 1.769C4.057 9.168 4.057 12 4.057 12s0 2.832.328 4.403c.227.748.824 1.345 1.572 1.572C7.723 18.5 12 18.5 12 18.5s4.277 0 5.846-.328a2.513 2.513 0 0 0 1.769-1.769C19.943 14.832 19.943 12 19.943 12s0-2.832-.328-4.403zM10 15.25v-6.5L15.5 12 10 15.25z" />
              </svg>
            </a>
            <a href="#" className="hover:text-orange-500">
              {/* Facebook Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325A1.324 1.324 0 0 0 0 1.325v21.351A1.324 1.324 0 0 0 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.655-4.788 1.325 0 2.464.099 2.794.143v3.24l-1.917.001c-1.503 0-1.794.715-1.794 1.763v2.312h3.588l-.467 3.622h-3.12V24h6.116A1.324 1.324 0 0 0 24 22.675V1.325A1.324 1.324 0 0 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="hover:text-orange-500">
              {/* Instagram Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.013 7.052.07 5.771.126 4.629.339 3.574 1.395c-1.056 1.055-1.269 2.197-1.325 3.478C2.013 8.332 2 8.741 2 12s.013 3.668.07 4.948c.056 1.281.269 2.423 1.325 3.478 1.055 1.056 2.197 1.269 3.478 1.325C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.07c1.281-.056 2.423-.269 3.478-1.325 1.056-1.055 1.269-2.197 1.325-3.478.057-1.281.07-1.69.07-4.948s-.013-3.668-.07-4.948c-.056-1.281-.269-2.423-1.325-3.478-1.055-1.056-2.197-1.269-3.478-1.325C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 0 0-6.162 6.162A6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.161A3.999 3.999 0 1 1 12 8.001a3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="text-center mt-10 text-sm">
        Copyright © Excellent English Medium Primary & High School - Powered by
        eCampusStreet
      </p>
    </footer>
  );
};

export default Footer;
