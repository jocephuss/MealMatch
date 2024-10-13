import React, { useState, useEffect } from "react";

const RecentRecipes = () => {
  // State to store recent recipes
  const [recentRecipes, setRecentRecipes] = useState([]);

  // useEffect to retrieve recipes from localStorage on component mount
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recentRecipes")) || [];
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
            >
              Remove
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


// import React from "react";



// // Retrieve recent recipes from localStorage
// const recipeEl = JSON.parse(localStorage.getItem("recentRecipes")) || [];


// const RecentRecipes = () => {
//   // Function to handle removing a recipe
//   const onRemove = (recipeToRemove) => {
//     const updatedRecipes = recipeEl.filter(
//       (recipe) => recipe.label !== recipeToRemove.label
//     );
//     localStorage.setItem("recentRecipes", JSON.stringify(updatedRecipes));
//     window.location.reload(); // Rerender component after removing
//   };

//   return (
//     <div className="recent-recipes-container">
//       {recipeEl.length > 0 ? (
//         recipeEl.map((recipe, index) => (
//           <div key={index} className="recent-recipe">
//             <h3 className="recent-recipe-title">{recipe.label}</h3>
//             <img
//               src={recipe.image.url}
//               alt={recipe.label}
//               className="recent-recipe-image"
//             />
//             <a
//               href={recipe.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="view-recipe-link"
//             >
//               View Recipe
//             </a>
//             <button
//               onClick={() => onRemove(recipe)}
//               className="remove-recipe-button"
//             >
//               Remove
//             </button>
//           </div>
//         ))
//       ) : (
//         <p>No recent recipes found.</p>
//       )}
//     </div>
//   );
// };

// export default RecentRecipes;
