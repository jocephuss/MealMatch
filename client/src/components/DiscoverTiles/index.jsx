import React, { useState } from "react";
import FavouritesModal from "../Favourites"; // Updated import

const DiscoverTile = ({ recipes, onLike, onDislikeOrRefresh }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleAddToFavorites = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <div key={index} className="recipe-tile">
            <h3>{recipe.recipe.label}</h3>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>Servings: {recipe.recipe.yield}</p>
            <a
              href={recipe.recipe.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Recipe
            </a>
            <div className="recipe-actions">
              <button type="button" onClick={() => onDislikeOrRefresh()}>
                Dislike
              </button>
              <button type="button" onClick={() => onLike(recipe)}>
                Like
              </button>
              <button type="button" onClick={() => handleAddToFavorites(recipe)}>
                Add to Favorites
              </button>
              <button type="button" onClick={onDislikeOrRefresh}>
                Refresh
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No recipes found. Please apply filters.</p>
      )}
      {showModal && selectedRecipe && (
        <FavouritesModal
          recipe={selectedRecipe}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default DiscoverTile;
