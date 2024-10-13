import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import Font Awesome
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"; // Import the trash can icon

const RecentRecipes = () => {
  // State to store recent recipes
  const [recentRecipes, setRecentRecipes] = useState([]);

  // useEffect to retrieve recipes from localStorage on component mount
  useEffect(() => {
    const storedRecipes =
      JSON.parse(localStorage.getItem("recentRecipes")) || [];
    setRecentRecipes(storedRecipes);
  }, []);

  // Function to handle removing a recipe
  const onRemove = (recipeToRemove) => {
    const updatedRecipes = recentRecipes.filter(
      (recipe) => recipe.label !== recipeToRemove.label
    );
    setRecentRecipes(updatedRecipes); // Update state
    localStorage.setItem("recentRecipes", JSON.stringify(updatedRecipes)); // Update localStorage
  };

  return (
    <div className="recent-recipes-container">
      {recentRecipes.length > 0 ? (
        recentRecipes.map((recipe, index) => (
          <div key={index} className="recent-recipe">
            <h3 className="recent-recipe-title">{recipe.label}</h3>
            <img
              src={recipe.image.url}
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
              onClick={() => onRemove(recipe)}
              className="remove-recipe-button"
              aria-label="Remove Recipe" // Accessibility improvement
            >
              <FontAwesomeIcon icon={faTrashAlt} /> {/* Trash can icon */}
            </button>
          </div>
        ))
      ) : (
        <p>No recent recipes found.</p>
      )}
    </div>
  );
};

export default RecentRecipes;
