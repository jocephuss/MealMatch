import React from "react";
import Header from "../components/Header";
import DiscoverTile from "../components/DiscoverTiles";
import axios from "axios";



const DiscoverPage = () => {
  const [filterValues, setFilterValues] = useState({
    // ingredient: '',
    diet: "",
    health: "",
    meal: "",
    dishes: "",
    cuisines: "",
  })

  const filters = [
    // search for sepecific ingredients can be later
    // {
    //   label: "Ingredient",
    //   type: "text",
    // },
    {
      label: "Diet",
      type: "select", 
      options: [
        "N/A",
        "Balanced",
        "High-Fiber",
        "High-Protein",
        "Low-Carb",
        "Low-Fat",
        "Low-Sodium",
      ],
    },
    {
      label: "Health",
      options: [
        "N/A",
        "Alcohol Free",
        "Celery Free",
        "Dairy Free",
        "Gluten Free",
        "Vegan",
        "Vegetarian",
        "Crustacean Free",
        "DASH",
        "Egg Free",
        "Fish Free",
        "FODMAP Free",
        "Immuno supportive",
        "Keto friendly",
        "Kidney friendly",
        "Kosher",
        "Low Potassium",
        "Low ugar",
        "Lupine free",
        "Mediterranean",
        "Mollusk free",
        "Mustard free",
        "No-oil added",
        "Paleo",
        "Peanut free",
        "Pescatarian",
        "Pork free",
        "Red-meat free",
        "Sesame free",
        "Shellfish free",
        "Soy free",
        "Sugar conscious",
        "Tree nut free",
        "Vegan friendly",
        "Wheat free",
        "Vegitarian friendly",
      ],
    },
    {
      label: "Meal",
      options: ["N/A", "Breakfast", "Lunch", "Dinner", "Snack", "Brunch"],
    },
    {
      label: "Dishes",
      options: [
        "N/A",
        "Salad",
        "Main Course",
        "Dessert",
        "Drink",
        "Alcohol-Cocktail",
        "Biscuits and Cookies",
        "Bread",
        "Cereals",
        "Condiments and Sauces",
        "Egg",
        "Ice cream and Custard",
        "Pancakes",
        "Pastas",
        "Pastry",
        "Pies and Tarts",
        "Pizza",
        "Preps",
        "Perserves",
        "Sanwiches",
        "Seafood",
        "Sides",
        "Soups",
        "Starters",
        "Sweets",
      ],
    },
    {
      label: "Cuisines",
      options: [
        "N/A",
        "American",
        "Italian",
        "Mexican",
        "Indian",
        "Chinese",
        "Asian",
        "British",
        "Caribbean",
        "Central Europe",
        "Eastern Europe",
        "French",
        "Greek",
        "Japanese",
        "Korean",
        "Kosher",
        "Mediterranean",
        "Middle Eastern",
        "Nordic",
        "South American",
        "Southeast Asian",
        "World",
      ],
    },
  ];

  const handleFilterChange = (event, label) => {
    const {value} = event.target;
    setFilterValues((prev) ({
      ...prev,
      [label.toLowerCase()]: value === "N/A" ? "": value,
    }))
  };

  // applyFilters = async () => {
  //   const apiUrl = 
  // }

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
          {/* Add content for discovering recipes here */}
          <DiscoverTile />
        </div>
        <div className="right-column">
          <h2>Filters</h2>
          <div className="filter-dropdowns">
            {filters.map((filter, index) => (
              <div key={index} className="filter-dropdown">
                <label htmlFor={filter.label}>{filter.label}</label>
                <select id={filter.label}>
                  {filter.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <button className="apply-filters-button">Apply Filters</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscoverPage;
