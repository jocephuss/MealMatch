require('dotenv').config(); // Load environment variables
const axios = require('axios');

const API_URL = 'https://api.edamam.com/api/recipes/v2?type=public';

// Fetch food data
const FoodSearch = async (ingredient, cuisineType, mealType, dishType ) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        app_id: process.env.REACT_APP_EDAMAM_APP_ID,
        app_key: process.env.REACT_APP_EDAMAM_APP_KEY,
        q: ingredient, 
        cuisineType: cuisineType,
        mealType: mealType,
        dishType: dishType,
        imageSize: 'REGULAR',
        random: true,


      },
    });

    console.log('Food search:', response.data);
  } catch (error) {
    console.error('Error fetching food data:', error);
  }
};

// Call the function with an ingredient 

// ingredient: anything
// cuisineType:
//mealType:
// dishType: 
// ingredient, cuisineType,  mealType, dishType
FoodSearch('chicken', 'American', 'Dinner', 'Main course');
