import React, { useState } from "react";
import Header from "../components/Header";
import RecentRecipes from "../components/Recents/RecentRecipes";

const FavoritePage = () => {
  const [recentRecipes, setRecentRecipes] = useState([]);

  return (
    <div className="Main">
      <Header />
      <section className="discover-main">
        <div className="left-column2">
          <h2>Recents</h2>
          <RecentRecipes recentRecipes={recentRecipes} />{" "}
        </div>
        <div className="center-column2">
          <h2>Categories</h2>
        </div>
        {/* <div className="right-column">
          <h2>Friends/Shared</h2>
        </div> */}
      </section>
    </div>
  );
};

export default FavoritePage;
