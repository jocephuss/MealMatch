import React, { useState } from "react";
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

  // // Handle filter changes
  // const handleFilterChange = (e) => {
  //   const { name, value } = e.target;
  //   setFilterValues({
  //     ...filterValues,
  //     [name]: value !== "N/A" ? value : "",
  //   });
  // };

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

      const response = await axios.get("/api/recipes", {
        params: queryParams,
      });
      // potential later on to save 20 hits and call api less.
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
    setRecentRecipes([...recentRecipes, recipe]); // Add the liked recipe to recents
    addLocalStorage(recipe); // Adding recipe to localstorage
    // window.location.reload();
    fetchRecipes(); // Fetch a new recipe
  };

  // Handle removing a liked recipe
  const handleRemove = (recipeToRemove) => {
    setRecentRecipes(
      recentRecipes.filter((recipe) => recipe !== recipeToRemove)
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

  const addLocalStorage = (recipe) => {
    // Retrieve existing recipes from localStorage, or initialize as an empty array if null
    const storedRecipes =
      JSON.parse(localStorage.getItem("recentRecipes")) || [];

    // Extract only the desired fields from the recipe
    const recipeToStore = {
      label: recipe.recipe.label,
      image: recipe.recipe.images.REGULAR,
      url: recipe.recipe.url,
    };

    // Check if the recipe already exists in the stored recipes to avoid duplicates
    const recipeExists = storedRecipes.some(
      (storedRecipe) => storedRecipe.label === recipeToStore.label
    );

    if (!recipeExists) {
      // Append the new recipe if it doesn't already exist
      const updatedRecipes = [...storedRecipes, recipeToStore];
      localStorage.setItem("recentRecipes", JSON.stringify(updatedRecipes));
    }
    // window.location.reload();

    fetchRecipes(); // Fetch a new recipe
  };

  const removeLocalStorage = (recipeToRemove) => {
    const storedRecipes =
      JSON.parse(localStorage.getItem("recentRecipes")) || [];

    // Filter out the recipe to remove based on the label
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
          />{" "}
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
