import React from "react";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food x.jpg"; 
import food3 from "../assets/food3.jpg"; 
import { Link } from "react-router-dom";

function Features() {
  return (
    <div className="py-10 " id="features">
      {/* Header Section */}
      <div className="flex text-center justify-center mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-300 max-w-[1000px]">
          Explore Delicious Recipes with Our Easy-to-Navigate Categories
        </h1>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {/* Feature 1 */}
        <div className="p-5 bg-zinc-950 rounded-2xl transition-transform transform hover:scale-105 shadow-lg shadow-slate-500">
          <div className="relative">
            <img
              src={food1}
              className="object-cover w-full h-48 sm:h-56 lg:h-64 rounded-2xl mb-4"
              alt="Delicious Food 1"
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
          </div>
          <div className="px-4">
            <h2 className="text-2xl font-bold mb-2 text-white">Find Your Next Meal Inspiration</h2>
            <p className="text-gray-300 mb-4">
              Browse through a variety of categories to discover the perfect recipe.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full">
              <Link to="/RecipeFinder">Get Started</Link>
            </button>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="p-5 bg-zinc-950 rounded-2xl transition-transform transform hover:scale-105 shadow-lg shadow-slate-500">
          <div className="relative">
            <img
              src={food2}
              className="object-cover w-full h-48 sm:h-56 lg:h-64 rounded-2xl mb-4"
              alt="Delicious Food 2"
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
          </div>
          <div className="px-4">
            <h2 className="text-2xl font-bold mb-2 text-white">Discover New Flavors</h2>
            <p className="text-gray-300 mb-4">
              Explore our collection of delicious recipes that will amaze your taste buds.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full">
              <Link to="/RecipeFinder">Get Started</Link>
            </button>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="p-5 bg-zinc-950 rounded-2xl transition-transform transform hover:scale-105 shadow-lg shadow-slate-500">
          <div className="relative">
            <img
              src={food3}
              className="object-cover w-full h-48 sm:h-56 lg:h-64 rounded-2xl mb-4"
              alt="Delicious Food 3"
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
          </div>
          <div className="px-4">
            <h2 className="text-2xl font-bold mb-2 text-white">Quick and Easy Recipes</h2>
            <p className="text-gray-300 mb-4">
              Find recipes that can be made in under 30 minutes for busy days.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full">
              <Link to="/RecipeFinder">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
