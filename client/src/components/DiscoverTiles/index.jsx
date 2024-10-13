import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import FavouritesModal from "../Favourites";

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
                <FontAwesomeIcon icon={faThumbsDown} />
              </button>
              <button type="button" onClick={() => onLike(recipe)}>
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
              <button
                type="button"
                onClick={() => handleAddToFavorites(recipe)}
              >
                <FontAwesomeIcon icon={faStar} />
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
