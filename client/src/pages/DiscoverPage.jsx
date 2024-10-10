import React, { useState } from "react";
import Header from "../components/Header";
import DiscoverTile from "../components/DiscoverTiles";
import axios from "axios"; // Ensure axios is imported

const DiscoverPage = () => {
  // State to store filter values
  const [filterValues, setFilterValues] = useState({
    diet: "",
    health: "",
    cuisineType: "",
    mealType: "",
    dishType: "",
  });

  const [recipes, setRecipes] = useState([]); // Store fetched recipes
  const [recentRecipes, setRecentRecipes] = useState([]); // Store liked recipes

  const filters = [
    {
      label: "Diet",
      options: [
        "N/A",
        "balanced",
        "high-fiber",
        "high-protein",
        "low-carb",
        "low-fat",
        "low-sodium",
      ],
    },
      {
      label: "Health",
      options: [
        "N/A",
        "alcohol-free",
        "celery-free",
        "dairy-free",
        "gluten-free",
        "vegan",
        "vegetarian",
        "crustacean-free",
        "DASH",
        "egg-free",
        "fish-free",
        "fodmap-free",
        "immuno-supportive",
        "keto-friendly",
        "kidney-friendly",
        "kosher",
        "low-Potassium",
        "low-sugar",
        "lupine-free",
        "Mediterranean",
        "mollusk-free",
        "mustard free",
        "no-oil-added",
        "paleo",
        "peanut-free",
        "pescatarian",
        "pork-free",
        "red-meat-free",
        "sesame-free",
        "shellfish-free",
        "soy-free",
        "sugar-conscious",
        "tree-nut-free",
        "vegan",
        "vegetarian",
        "wheat-free",
      ],
    },
    {
      label: "Cuisines",
      options: [
        "N/A",
        "American",
        "Asian",
        "British",
        "Caribbean",
        "Central Europe",
        "Chinese",
        "Eastern Europe",
        "French",
        "Greek",
        "Indian",
        "Italian",
        "Japanese",
        "Korean",
        "Kosher",
        "Mediterranean",
        "Mexican",
        "Middle eastern",
        "nordic",
        "South American",
        "South east Asian",
        "World",
      ],
    },
    {
      label: "Meal",
      options: [
        "N/A",
        "breakfast",
        "lunch",
        "dinner",
        "snack",
        "brunch",
        "teatime",
      ],
    },
    {
      label: "Dishes",
      options: [
        "N/A",
        "Alcohol cocktail",
        "Biscuits and cookies",
        "Bread",
        "Cereals",
        "Condiments and sauces",
        "Dessert",
        "Drink",
        "Egg",
        "Ice cream and custard",
        "Main course",
        "Pancakes",
        "Pastas",
        "Pastry",
        "Pies and tarts",
        "Pizza",
        "Preps",
        "Perserve",
        "Salad",
        "Sandwiches",
        "Seafood",
        "Side Dish",
        "Soup",
        "Starter",
        "Sweets",
      ],
    },
  ];

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterValues({
      ...filterValues,
      [name]: value !== "N/A" ? value : "",
    });
  };

  // Fetch recipes from the server API
  const fetchRecipes = async () => {
    try {
      const response = await axios.get("/api/recipes", {
        params: filterValues,
      });
      if (response.data.length > 0) {
        setRecipes([response.data[0]]); // Only store the first result
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  // Handle liking a recipe
  const handleLike = (recipe) => {
    setRecentRecipes([...recentRecipes, recipe]); // Add the liked recipe to recents
    fetchRecipes(); // Fetch a new recipe
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

  return (
    <div className="Main">
      <Header />
      <section className="discover-main">
        <div className="left-column">
          <h2>Recents</h2>
          {recentRecipes.map((recipe, index) => (
            <div key={index} className="recent-recipe">
              <h3>{recipe.recipe.label}</h3>
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            </div>
          ))}
        </div>
        <div className="center-column">
          <h2>Discover</h2>
          <DiscoverTile
            recipes={recipes}
            onLike={handleLike}
            onDislikeOrRefresh={handleDislikeOrRefresh}
          />
        </div>
        <div className="right-column">
          <h2>Filters</h2>
          <div className="filter-dropdowns">
            {filters.map((filter, index) => (
              <div key={index} className="filter-dropdown">
                <label htmlFor={filter.label}>{filter.label}</label>
                <select
                  id={filter.label}
                  name={filter.label.toLowerCase()}
                  onChange={handleFilterChange}
                >
                  {filter.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <button className="apply-filters-button" onClick={applyFilters}>
              Apply Filters
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscoverPage;
