import React from "react";
import Header from "../components/Header";
// import DiscoverTile from "../components/DiscoverTiles";
import {useState } from "react";

// import FoodSearch from "../../../server/utils/API";
// const FoodSearch = require("../../../server/utils/API");


const DiscoverPage = () => {
  // // State to store filter values
  const [filterValues, setFilterValues] = useState({
    // ingredient: "",
    diet: "",
    health: "",
    cuisineType: "",
    mealType: "",
    dishType: "",
  });

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
        "sanwiches",
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

  // Apply filters by calling the FoodSearch API
  const applyFilters = () => {
    const { ingredient, diet, health, cuisineType, mealType, dishType } =
      filterValues;
    FoodSearch(ingredient, diet, health, cuisineType, mealType, dishType);
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
          {/* Add content for discovering recipes here */}
          <div>
      <p>Title Placeholder</p>
      <p>image placeholder</p>
      {/* make the buttons similar sizes */}
      <button type="button">Dislike</button>
      <button type="button">Like</button>
    </div>
        </div>
        <div className="right-column">
          <h2>Filters</h2>
          {/* should we make this a form so we can accept the dropdowns as inputs -Bryan */}
          <div className="filter-dropdowns">
            {filters.map((filter, index) => (
              <div key={index} className="filter-dropdown">
                <label htmlFor={filter.label}>{filter.label}</label>
                <select id={filter.label} onChange={handleFilterChange}>
                  {filter.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <button className="apply-filters-button" onClick={applyFilters}>Apply Filters</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscoverPage;

// {/* <div className="Main">
// <Header />
// <section className="discover-main">
//   <div className="left-column">
//     <h2>Recents</h2>
//     {/* Add content for recents here */}
//   </div>
//   <div className="center-column">
//     <h2>Discover</h2>
//     {/* Add content for discovering recipes here */}
//     <DiscoverTile />
//   </div>
//   <div className="right-column">
//     <h2>Filters</h2>
//     <div className="filter-dropdowns">
//       {filters.map((filter, index) => (
//         <div key={index} className="filter-dropdown">
//           <label htmlFor={filter.label}>{filter.label}</label>
//           {/* Check if it's a text input or a select dropdown */}
//           {filter.type === "text" ? (
//             <input
//               type="text"
//               id={filter.label}
//               name="ingredient" // Make sure name matches the state key
//               value={filterValues.ingredient}
//               onChange={handleFilterChange}
//             />
//           ) : (
//             <select
//               id={filter.label}
//               name={filter.label.toLowerCase()} // Ensure the name matches the state key
//               value={filterValues[filter.label.toLowerCase()]}
//               onChange={handleFilterChange}
//             >
//               {filter.options.map((option, optionIndex) => (
//                 <option key={optionIndex} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           )}
//         </div>
//       ))}
//       <button className="apply-filters-button" onClick={applyFilters}>
//         Apply Filters
//       </button>
//     </div>
//   </div>
// </section>
// </div> */}
