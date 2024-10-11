import React, { useState } from "react";
import Header from "../components/Header";
import DiscoverTile from "../components/DiscoverTiles";
import RecentRecipes from "../components/Recents/RecentRecipes";
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

  // Define the filters available for selection
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
      label: "Cuisines",
      options: [
        "N/A",
        "american",
        "asian",
        "british",
        "caribbean",
        "central europe",
        "chinese",
        "eastern europe",
        "french",
        "greek",
        "indian",
        "italian",
        "japanese",
        "korean",
        "kosher",
        "mediterranean",
        "mexican",
        "middle eastern",
        "nordic",
        "south american",
        "southeast asian",
        "world",
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
        "Mustard free",
        "No-oil-added",
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
        "alcohol cocktail",
        "biscuits and cookies",
        "bread",
        "cereals",
        "condiments and sauces",
        "dessert",
        "drink",
        "egg",
        "ice cream and custard",
        "main course",
        "pancakes",
        "pastas",
        "pastry",
        "pies and tarts",
        "pizza",
        "preps",
        "perserve",
        "salad",
        "sandwiches",
        "seafood",
        "side dish",
        "soups",
        "starter",
        "sweets",
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
          <RecentRecipes recentRecipes={recentRecipes} />{" "}
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
