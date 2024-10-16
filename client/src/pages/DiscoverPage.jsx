import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import DiscoverTile from "../components/DiscoverTiles";
import RecentRecipes from "../components/Recents/RecentRecipes";
import axios from "axios";

const DiscoverPage = () => {
  // State to store filter values
  const [filterValues, setFilterValues] = useState({
    diet: "",
    health: "",
    cuisineType: "",
    mealType: "",
    dishType: "",
  });
  const [ingredient, setIngredient] = useState(""); // For ingredient search
  const [recipes, setRecipes] = useState([]); // Store fetched recipes
  const [recentRecipes, setRecentRecipes] = useState([]); // Store liked recipes
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch recent recipes from localStorage when component mounts
  useEffect(() => {
    const storedRecipes =
      JSON.parse(localStorage.getItem("recentRecipes")) || [];
    setRecentRecipes(storedRecipes);
  }, []);

  // Handle ingredient change
  const handleIngredientChange = (e) => {
    setIngredient(e.target.value);
  };

  // Fetch recipes from the server API
  const fetchRecipes = async () => {
    setLoading(true); // Show loading indicator
    try {
      const queryParams = {
        ...filterValues,
        q: ingredient || undefined, // Add ingredient to the query
      };

      const response = await axios.get(
        "https://mealmatch.onrender.com/api/recipes",
        {
          // Updated URL
          params: queryParams,
        }
      );

      if (response.data.length > 0) {
        setRecipes([response.data[0]]); // Only store the first result
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  // Handle liking a recipe
  const handleLike = (recipe) => {
    const recipeToStore = {
      label: recipe.recipe.label,
      image: recipe.recipe.image,
      url: recipe.recipe.url,
    };

    // Update state for recent recipes
    setRecentRecipes((prevRecipes) => {
      const recipeExists = prevRecipes.some(
        (storedRecipe) => storedRecipe.label === recipeToStore.label
      );

      if (!recipeExists) {
        const updatedRecipes = [...prevRecipes, recipeToStore];
        localStorage.setItem("recentRecipes", JSON.stringify(updatedRecipes));
        return updatedRecipes; // Return updated state
      }

      return prevRecipes; // Return the previous state if the recipe already exists
    });

    fetchRecipes(); // Fetch a new recipe
  };

  // Handle removing a liked recipe
  const handleRemove = (recipeToRemove) => {
    setRecentRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.label !== recipeToRemove.label)
    );
    removeLocalStorage(recipeToRemove); // Remove recipe from localStorage
  };

  // Handle disliking or refreshing a recipe
  const handleDislikeOrRefresh = () => {
    setRecipes([]); // Clear current recipes
    fetchRecipes(); // Fetch a new recipe
  };

  // Apply filters and fetch recipes
  const applyFilters = () => {
    fetchRecipes();
  };

  const removeLocalStorage = (recipeToRemove) => {
    const storedRecipes =
      JSON.parse(localStorage.getItem("recentRecipes")) || [];

    const updatedRecipes = storedRecipes.filter(
      (recipe) => recipe.label !== recipeToRemove.label
    );

    localStorage.setItem("recentRecipes", JSON.stringify(updatedRecipes));
  };

  return (
    <div className="Main">
      <Header />
      <section className="discover-main">
        <div className="left-column">
          <h2>Recents</h2>
          <RecentRecipes
            recentRecipes={recentRecipes}
            onRemove={handleRemove}
          />
        </div>
        <div className="center-column">
          <h2>Discover</h2>
          <div className="filter-search">
            <label htmlFor="ingredient"></label>
            <input
              id="ingredient"
              type="text"
              value={ingredient}
              onChange={handleIngredientChange}
              placeholder="e.g., chicken"
            />
            <button className="apply-filters-button" onClick={applyFilters}>
              Search Keyword
            </button>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <DiscoverTile
              recipes={recipes}
              onLike={handleLike}
              onDislikeOrRefresh={handleDislikeOrRefresh}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default DiscoverPage;
