import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Designer.jpeg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle navigation and smooth scroll to sections
  const handleScrollToSection = (sectionId) => {
    navigate("/"); // First, navigate to the home page
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); 
  };

    const handleScrollToTop = () => {
    navigate("/"); // Navigate to home page
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <div className="opacity-80 shadow-md fixed w-full z-10">
      <div className="flex items-center justify-between p-4 mx-10 md:mx-40">
        <div className="flex items-center space-x-10">
          <div className="flex flex-shrink-0">
            <img className="w-16 h-16 rounded-full" src={logo} alt="Logo" />
          </div>
          <div className="hidden md:block">
            <ul className="flex flex-row space-x-5 text-white text-xl cursor-pointer font-extrabold">
              <li className="hover:text-blue-600 transition-colors duration-200">
                <span onClick={handleScrollToTop}>Home</span> {/* Scrolls to the top */}
              </li>
              <li className="hover:text-blue-600 transition-colors duration-200">
                <Link to="/RecipeFinder">Recipe Finder</Link>
              </li>
              <li
                className="hover:text-blue-600 transition-colors duration-200"
                onClick={() => handleScrollToSection("features")} 
              >
                Features
              </li>
              <li
                className="hover:text-blue-600 transition-colors duration-200"
                onClick={() => handleScrollToSection("recipes")} 
              >
                Recipes
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 bg-transparent text-white border border-black rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
            Help
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-green-600 transition-colors duration-300">
            Join
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden w-full px-6 pb-4 text-center shadow-lg bg-zinc-950">
          <ul className="flex flex-col space-y-4 text-white text-lg cursor-pointer font-extrabold">
            <li className="hover:text-yellow-300 transition-colors duration-200">
              <span
                onClick={() => {
                  toggleMenu();
                  handleScrollToTop();
                }}
              >
                Home
              </span>
            </li>
            <li className="hover:text-yellow-300 transition-colors duration-200">
              <Link to="/RecipeFinder" onClick={toggleMenu}>
                Recipe Finder
              </Link>
            </li>
            <li
              className="hover:text-yellow-300 transition-colors duration-200"
              onClick={() => {
                toggleMenu();
                handleScrollToSection("features");
              }}
            >
              Features
            </li>
            <li
              className="hover:text-yellow-300 transition-colors duration-200"
              onClick={() => {
                toggleMenu();
                handleScrollToSection("recipes");
              }}
            >
              Recipes
            </li>
            <li>
              <button className="text-left px-10 py-2 bg-green-700 text-white border border-transparent rounded-full hover:bg-green-600 transition-colors duration-300">
                Help
              </button>
            </li>
            <li>
              <button className="text-left px-10 py-2 bg-blue-700 text-white border border-transparent rounded-full hover:bg-blue-500 transition-colors duration-300">
                Join
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
