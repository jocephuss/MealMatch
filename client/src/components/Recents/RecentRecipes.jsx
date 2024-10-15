import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import Font Awesome
import { faTrashAlt, faStar } from "@fortawesome/free-solid-svg-icons"; // Import the trash can and star icons
import FavouritesModal from "../Favourites"; // Import FavouritesModal component

const RecentRecipes = ({ recentRecipes, onRemove }) => {
  // Accept onRemove as prop
  // State to store recent recipes
  const [localRecentRecipes, setLocalRecentRecipes] = useState(recentRecipes);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State for the selected recipe

  // useEffect to update local state when recentRecipes prop changes
  useEffect(() => {
    setLocalRecentRecipes(recentRecipes);
  }, [recentRecipes]);

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedRecipe(null); // Clear selected recipe when closing
  };

  const handleAddToFavorites = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true); // Show the modal when adding to favorites
  };

  return (
    <div className="recent-recipes-container">
      {localRecentRecipes.length > 0 ? (
        localRecentRecipes.map((recipe, index) => (
          <div key={index} className="recent-recipe">
            <h3 className="recent-recipe-title">{recipe.label}</h3>
            <img
              src={recipe.image} // Ensure this matches the structure of your recipe object
              alt={recipe.label}
              className="recent-recipe-image"
            />
            <a
              href={recipe.url}
              target="_blank"
              rel="noopener noreferrer"
              className="view-recipe-link"
            >
              View Recipe
            </a>
            <button
              onClick={() => onRemove(recipe)} // Call onRemove prop
              className="remove-recipe-button"
              aria-label="Remove Recipe" // Accessibility improvement
            >
              <FontAwesomeIcon icon={faTrashAlt} /> {/* Trash can icon */}
            </button>
            <button
              onClick={() => handleAddToFavorites(recipe)} // Call function to add to favorites
              className="favorite-button"
            >
              <FontAwesomeIcon icon={faStar} /> {/* Star icon */}
            </button>
          </div>
        ))
      ) : (
        <p>No recent recipes found.</p>
      )}

      {showModal && selectedRecipe && (
        <FavouritesModal recipe={selectedRecipe} closeModal={closeModal} />
      )}
    </div>
  );
};

export default RecentRecipes;
