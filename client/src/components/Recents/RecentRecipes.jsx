import React from "react";

const RecentRecipes = ({ recentRecipes, onRemove }) => {
  return (
    <div className="recent-recipes-container">
      {recentRecipes.map((recipe, index) => (
        <div key={index} className="recent-recipe">
          <h3 className="recent-recipe-title">{recipe.recipe.label}</h3>
          <img
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
            className="recent-recipe-image"
          />
          <a
            href={recipe.recipe.url}
            target="_blank"
            rel="noopener noreferrer"
            className="view-recipe-link"
          >
            View Recipe
          </a>
          <button
            onClick={() => onRemove(recipe)}
            className="remove-recipe-button"
          >
            Remove
          </button>{" "}
          {/* Remove button */}
        </div>
      ))}
    </div>
  );
};

export default RecentRecipes;
