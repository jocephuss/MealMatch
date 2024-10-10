import React from "react";

const DiscoverTile = ({ recipes, onLike, onDislikeOrRefresh }) => {
  return (
    <div>
      {recipes.length > 0 ? (
        <div className="recipe-tile">
          <h3>{recipes[0].recipe.label}</h3>
          <img src={recipes[0].recipe.image} alt={recipes[0].recipe.label} />
          <p>Servings: {recipes[0].recipe.yield}</p>
          <a
            href={recipes[0].recipe.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Recipe
          </a>
          <div className="recipe-actions">
            <button type="button" onClick={() => onDislikeOrRefresh()}>
              Dislike
            </button>
            <button type="button" onClick={() => onLike(recipes[0].recipe)}>
              Like
            </button>
            <button type="button" onClick={() => onDislikeOrRefresh()}>
              Refresh
            </button>
          </div>
        </div>
      ) : (
        <p>No recipes found. Please apply filters.</p>
      )}
    </div>
  );
};

export default DiscoverTile;
