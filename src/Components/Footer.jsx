import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; 
import logo from "../assets/Designer.jpeg"; 

function Footer() {
  return (
    <footer className=" bottom-0 left-0 right-0 bg-zinc-900 text-gray-300 py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo and About Section */}
        <div className="text-center md:text-left space-y-2">
          <img src={logo} alt="Logo" className="w-24 mx-auto md:mx-0" />
          <p className="text-gray-400 text-sm">
            Curated recipes from around the world. Indulge in culinary delights crafted with care.
          </p>
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Your Website. All rights reserved.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-2 text-white">Contact Us</h3>
          <form className="space-y-3">
            <div>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              />
            </div>
            <div>
              <textarea
                id="message"
                rows="2"
                placeholder="Your message"
                className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full transition duration-300 text-sm"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-3">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaFacebookF size={20} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
