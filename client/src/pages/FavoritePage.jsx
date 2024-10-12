import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const FavoritePage = () => {
  const [recents, setRecents] = useState([]);
  const [collections, setCollections] = useState([]);
  const [newCollectionName, setNewCollectionName] = useState("");

  // Fetch recents from localStorage on page load
  useEffect(() => {
    const storedRecents = JSON.parse(localStorage.getItem("recents")) || [];
    setRecents(storedRecents);
  }, []);

  // Handle collection name change
  const handleCollectionNameChange = (e) => {
    setNewCollectionName(e.target.value);
  };

  // Handle adding a new collection
  const handleAddCollection = () => {
    if (newCollectionName.trim() === "") return;
    setCollections([...collections, newCollectionName]);
    setNewCollectionName("");
  };

  return (
    <div className="Main">
      <Header />
      <section className="discover-main">
        <div className="left-column">
          <h2>Recents</h2>
          {recents.map((recipe, index) => (
            <div key={index} className="recent-recipe">
              <h3>{recipe.label}</h3>
              <img src={recipe.image} alt={recipe.label} />
              <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                View Recipe
              </a>
            </div>
          ))}
        </div>
        <div className="center-column">
          <h2>Collections</h2>
          <div>
            <input
              type="text"
              placeholder="New Collection Name"
              value={newCollectionName}
              onChange={handleCollectionNameChange}
            />
            <button onClick={handleAddCollection}>Add Collection</button>
          </div>
          <div>
            {collections.length > 0 ? (
              collections.map((collection, index) => (
                <div key={index} className="collection-item">
                  <h3>{collection}</h3>
                  {/* c'est en cours mes amis :) */}
                </div>
              ))
            ) : (
              <p>No collections created yet.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FavoritePage;
