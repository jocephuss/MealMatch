import React from "react";

const DiscoverPage = () => {
  return (
    <div className="discover-page">
      <h2>MealMatch</h2>
      <div className="discover-content">
        <h3>Recent Recipes</h3>
        <div className="recipe-list">
          <div className="recipe-card">Recipe 1</div>
          <div className="recipe-card">Recipe 2</div>
          <div className="recipe-card">Recipe 3</div>
        </div>
        <h3>Friends' Recipes</h3>
        <div className="friends-recipes">
          <div className="friend-recipe-card">Friend's Recipe 1</div>
          <div className="friend-recipe-card">Friend's Recipe 2</div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
