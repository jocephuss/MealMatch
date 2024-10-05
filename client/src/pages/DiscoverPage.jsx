import React from "react";
import Header from "../components/Header";

const DiscoverPage = () => {
  const filters = [
    "All",
    "Vegetarian",
    "Vegan",
    "Gluten-Free",
    "Dairy-Free",
    "Paleo",
    "Ketogenic",
    "Low Carb",
    "High Protein",
    "Nut-Free",
    "Low Sodium",
    "Low Fat",
    "High Sugar",
    "Low Calories",
    "High Cholesterol",
    "Lunches",
    "Dinner",
    "Breakfast",
    "Snacks",
    "Sides",
    "Drinks",
  ];
  return (
    <div className="Main">
      <Header />
      <section className="discover-main">
        <div className=" left-column">
          <h2>Recents</h2>
        </div>
        <div className="center-column">
          <h2>Discover</h2>
        </div>
        <div className="right-column">
          <h2>Filters</h2>
          <div className="filter-buttons">
            {filters.map((filter, index) => (
              <button key={index} className="filter-button">
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscoverPage;
