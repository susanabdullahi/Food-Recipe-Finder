import React from "react";
import { motion } from "framer-motion";
import back from "../assets/Hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-20 py-10 md:py-10" id="hero">
      {/* Left - Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left md:w-1/2 space-y-4 p-4 rounded-lg md:mt-20"
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-300 max-w-[800px] mt-10 md:mt-0"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover Delicious Recipes with Ease
        </motion.h1>
        <motion.p
          className="py-4 text-lg sm:text-xl md:text-2xl text-gray-500 max-w-[1000px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Find the perfect recipe by entering ingredients or names in the search
          bar. Explore a world of culinary delights tailored just for you.
        </motion.p>
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/RecipeFinder">Get Started</Link>                 
        </motion.button>
      </motion.div>

      {/* Right - Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <motion.img
          src={back}
          alt="Culinary Illustration"
          className="w-full h-auto opacity-80 mt-20 md:mt-32 rounded-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}

export default Hero;
