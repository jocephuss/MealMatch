import React, { useState, useEffect } from "react";

const FavouritesModal = ({ recipe, closeModal }) => {
  const [collections, setCollections] = useState([]);
  const [newCollection, setNewCollection] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("");

  useEffect(() => {
    const savedCollections =
      JSON.parse(localStorage.getItem("collections")) || [];
    setCollections(savedCollections);
  }, []);

  const handleCreateCollection = () => {
    if (newCollection.trim() !== "") {
      const updatedCollections = [
        ...collections,
        { name: newCollection, recipes: [recipe] },
      ];
      localStorage.setItem("collections", JSON.stringify(updatedCollections));
      setCollections(updatedCollections);
      setNewCollection("");
      closeModal();
    }
  };

  const handleAddToExistingCollection = () => {
    if (selectedCollection) {
      const updatedCollections = collections.map((col) =>
        col.name === selectedCollection
          ? { ...col, recipes: [...col.recipes, recipe] }
          : col
      );
      localStorage.setItem("collections", JSON.stringify(updatedCollections));
      setCollections(updatedCollections);
      closeModal();
    }
  };

  return (
    <div className="favourites-modal">
      <h2>Add to Favorites</h2>
      <div className="New">
        <label className="Fav-label">
          New Collection Name:
          <input
            type="text"
            value={newCollection}
            onChange={(e) => setNewCollection(e.target.value)}
          />
        </label>
        <button className="Fav-btn" onClick={handleCreateCollection}>
          Create Collection
        </button>
      </div>
      {collections.length > 0 && (
        <div className="Existing">
          <label className="Fav-label">
            Select Existing Collection:
            <select
              className="choose"
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
            >
              <option value="">Choose...</option>
              {collections.map((col, index) => (
                <option key={index} value={col.name}>
                  {col.name}
                </option>
              ))}
            </select>
          </label>
          <button className="Fav-btn" onClick={handleAddToExistingCollection}>
            Add to Collection
          </button>
        </div>
      )}
      <button className="Close-btn" onClick={closeModal}>
        Close
      </button>
    </div>
  );
};

export default FavouritesModal;
