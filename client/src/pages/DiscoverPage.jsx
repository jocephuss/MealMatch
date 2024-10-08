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
      type: "select",
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
