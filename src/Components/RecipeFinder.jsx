import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import italian from "../assets/italian.jpg";
import french from "../assets/french.jpg";
import keto from "../assets/keto diet.jpg";
import paleo from "../assets/paleo.jpg";
import mexican from "../assets/mexican.jpg";

function RecipeFinder() {
  const [query, setQuery] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "9ea6c520865b4d498cf2be10112484d7";

  const popularIngredients = [
    "chicken",
    "beef",
    "vegetarian",
    "pasta",
    "salad",
  ];
  const popularDiets = [
    { name: "Italian", image: italian },
    { name: "French", image: french },
    { name: "Keto", image: keto },
    { name: "Paleo", image: paleo },
    { name: "Mexican", image: mexican },
  ];

  // Fetch default recipes on component load
  useEffect(() => {
    const fetchDefaultRecipes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`
        );
        setRecipes(response.data.recipes);
      } catch (err) {
        setError("Error fetching default recipes. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchDefaultRecipes();
  }, []);

  const searchRecipes = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}${
          selectedIngredient ? `+${selectedIngredient}` : ""
        }&number=10`
      );
      setRecipes(response.data.results);
    } catch (err) {
      setError("Error fetching recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mt-20 text-4xl font-bold mb-6 text-center text-slate-300">
        Recipe Finder
      </h1>

      {/* Search Form */}
      <form
        onSubmit={searchRecipes}
        className="mb-4 flex flex-col md:flex-row justify-center"
      >
        <select
          value={selectedIngredient}
          onChange={(e) => setSelectedIngredient(e.target.value)}
          className="border p-2 rounded-lg mb-2 md:mb-0 md:mr-2 w-full md:w-1/4"
        >
          <option value="">Select an ingredient</option>
          {popularIngredients.map((ingredient) => (
            <option key={ingredient} value={ingredient}>
              {ingredient}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a recipe..."
          className="border p-2 rounded-lg mb-2 md:mb-0 w-full md:w-1/3"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 mx-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-blue-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Popular Diets Section */}
      <div className="text-slate-300 mb-6 mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Explore Popular Diets
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {popularDiets.map((diet) => (
            <motion.div
              key={diet.name}
              className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-center">{diet.name}</h3>
              <img
                src={diet.image}
                alt={diet.name}
                className="w-32 h-32 object-cover rounded-lg mt-2"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-slate-300 shadow-lg shadow-gray-600">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={
                  recipe.image
                    ? recipe.image
                    : `https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`
                }
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <h2 className="text-xl font-bold text-center">{recipe.title}</h2>

              <a
                href={`https://spoonacular.com/recipes/${recipe.title.replace(
                  / /g,
                  "-"
                )}-${recipe.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-blue-500 hover:underline mt-2"
              >
                View Recipe
              </a>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No recipes found. Try searching for something else!
          </p>
        )}
      </div>
    </div>
  );
}

export default RecipeFinder;
