import React from "react";

const DiscoverTile = ({ recipes }) => {
  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <div key={index} className="recipe-tile">
            <h3>{recipe.recipe.label}</h3>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>Servings: {recipe.recipe.yield}</p>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
              View Recipe
            </a>
            <div className="recipe-actions">
              <button type="button">Dislike</button>
              <button type="button">Like</button>
              <button type="button">Refresh</button>
            </div>
          </div>
        ))
      ) : (
        <p>No recipes found. Please apply filters.</p>
      )}
    </div>
  );
};

export default DiscoverTile;
