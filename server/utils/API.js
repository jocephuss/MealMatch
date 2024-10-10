require("dotenv").config(); // Load environment variables
const axios = require("axios");

const API_URL = "https://api.edamam.com/api/recipes/v2?type=public";

// Fetch food data
const FoodSearch = async (diet, health, cuisineType, mealType, dishType) => {
  // ingredient,
  try {
    const response = await axios.get(API_URL, {
      params: {
        app_id: process.env.REACT_APP_EDAMAM_APP_ID,
        app_key: process.env.REACT_APP_EDAMAM_APP_KEY,
        // q: ingredient || undefined,  // // not functional until add search for ingredient
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

    ///////////////////////////////////////////////////////////////////////
    // console logging all exports I would like to use on discover page.
    const indexNum = response.data.hits.length;

    if (indexNum > 0) {
      console.log("length: ", indexNum);
      console.log(`Title 1: `, response.data.hits[0].recipe.label); // Log only the first result
      return [response.data.hits[0]]; // Return only the first result
    } else {
      console.log("No results found");
      return [];
    }
  } catch (error) {
    console.error("Error fetching food data:", error);
  }
};

module.exports = FoodSearch; //  to call const FoodSearch = require('./filepath');
