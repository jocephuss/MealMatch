import React from "react";
import Header from "../components/Header";

const DiscoverPage = () => {
  const filters = [
    {
      label: "Diet",
      options: [
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
      options: ["Breakfast", "Lunch", "Dinner", "Snack", "Brunch"],
    },
    {
      label: "Dishes",
      options: [
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscoverPage;
