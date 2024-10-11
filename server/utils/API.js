require("dotenv").config(); // Load environment variables
const axios = require("axios");

const API_URL = "https://api.edamam.com/api/recipes/v2?type=public";

// Fetch food data
const FoodSearch = async (diet, health, cuisineType, mealType, dishType, q) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        app_id: process.env.REACT_APP_EDAMAM_APP_ID,
        app_key: process.env.REACT_APP_EDAMAM_APP_KEY,
        diet: diet || undefined, // Only include if a value is provided
        health: health || undefined,
        cuisineType: cuisineType || undefined,
        mealType: mealType || undefined,
        dishType: dishType || undefined,
        q: q || undefined, // Add ingredient search if provided
        imageSize: "REGULAR",
        random: true,
        beta: false,
      },
    });

    return response.data.hits; // Return the fetched recipes
  } catch (error) {
    console.error("Error fetching food data:", error);
  }
};

module.exports = FoodSearch;
