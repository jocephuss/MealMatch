import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import RecentRecipes from "../components/Recents/RecentRecipes";

const FavoritePage = () => {
  const [collections, setCollections] = useState([]);
  const [recentRecipes, setRecentRecipes] = useState([]);

  useEffect(() => {
    const savedCollections = JSON.parse(localStorage.getItem("collections")) || [];
    setCollections(savedCollections);

    const savedRecents = JSON.parse(localStorage.getItem("recentRecipes")) || [];
    setRecentRecipes(savedRecents);
  }, []);

  const deleteCollection = (index) => {
    const updatedCollections = collections.filter((_, i) => i !== index);
    setCollections(updatedCollections);
    localStorage.setItem("collections", JSON.stringify(updatedCollections));
  };

  return (
    <div className="Main">
      <Header />
      <section className="favorite-main">
        <div className="left-column">
          <h2>Recents</h2>
          <RecentRecipes recentRecipes={recentRecipes} /> {/* Keep recents box */}
        </div>
        <div className="center-column collection-recipes-container ">
          <h2>Collections</h2>
          {collections.length > 0 ? (
            collections.map((collection, index) => (
              <div key={index}>
                <h3 >{collection.name}</h3>
                <button
                  className="delete-collection-button"
                  onClick={() => deleteCollection(index)}
                >
                  Delete Collection
                </button>
                <ul className="collections-list">
                  {collection.recipes.map((recipe, i) => (
                    <li className="collection-recipe" key={i}>
                      <h4 >{recipe.recipe.label}</h4>
                      <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                      <a
                        href={recipe.recipe.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Recipe
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No collections created yet.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default FavoritePage;
