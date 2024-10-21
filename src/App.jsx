import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Recipes from "./Components/Recipes";
import RecipeFinder from "./Components/RecipeFinder";
import Footer from "./Components/Footer";
import background from "./assets/Hero.jpg";

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-90"></div>
      </div>

      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div id="home">
                  <Hero />
                </div>
                <div id="features">
                  <Features />
                </div>
                <div id="recipes">
                  <Recipes />
                </div>
              </div>
            }
          />
          <Route path="/RecipeFinder" element={<RecipeFinder />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
