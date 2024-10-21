import React from "react";
import food1 from "../assets/food4.jpg";
import food2 from "../assets/food x.jpg";    

function Recipes() {
  return (
    <div className="py-16 " id="recipes" >
      {/* Header Section */}
      <div className="text-center text-white mb-12 px-4">
        <p className="text-lg text-gray-400">RECIPES</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          Discover Your Next Meal
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Explore a variety of delicious recipes for every occasion.
        </p>
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recipe 1 */}
        <div className="rounded-2xl shadow-lg overflow-hidden shadow-gray-600 bg-zinc-950 transform transition-transform hover:scale-105">
          <img src={food1} className="object-cover w-full h-64 sm:h-72 lg:h-80" alt="Italian Pasta Delight" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-white">Italian Pasta Delight</h2>
            <p className="text-gray-400 mb-4">
              A classic dish that brings the taste of Italy to your table.
            </p>
          
          </div>
        </div>

        {/* Recipe 2 */}
        <div className="rounded-2xl shadow-lg overflow-hidden shadow-gray-600 bg-zinc-950 transform transition-transform hover:scale-105">
          <img src={food2} className="object-cover w-full h-64 sm:h-72 lg:h-80" alt="Healthy Salad Bowl" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-white">Healthy Salad Bowl</h2>
            <p className="text-gray-400 mb-4">
              A refreshing mix of greens and proteins for a healthy lifestyle.
            </p>
           
          </div>
        </div>

        {/* View All Recipes Button */}
        <div className="flex justify-center items-center col-span-full">
         
        </div>
      </div>
    </div>
  );
}

export default Recipes;
