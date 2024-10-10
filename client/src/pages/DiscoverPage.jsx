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
      setRecipes(response.data); // Store the fetched recipes
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
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
          {/* Add content for recents here */}
        </div>
        <div className="center-column">
          <h2>Discover</h2>
          {/* Pass recipes as props to DiscoverTile */}
          <DiscoverTile recipes={recipes} />
        </div>
        <div className="right-column">
          <h2>Filters</h2>
          {/* Form to select filters */}
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
