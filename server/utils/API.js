require("dotenv").config(); // Load environment variables
const axios = require("axios");

const API_URL = "https://api.edamam.com/api/recipes/v2?type=public";

// Fetch food data
const FoodSearch = async (diet, health, cuisineType, mealType, dishType) => {
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
        imageSize: "REGULAR",
        random: true,
        beta: false,
      },
    });

    // Console logging all exports I would like to use on discover page.
    const indexNum = response.data.hits.length;
    console.log("length: ", indexNum);
    for (let i = 0; i < indexNum; i++) {
      console.log(`Title ${i + 1}: `, response.data.hits[i].recipe.label);
    }

    return response.data.hits; // Return the fetched recipes
  } catch (error) {
    console.error("Error fetching food data:", error);
  }
};

module.exports = FoodSearch; // Export the FoodSearch function
