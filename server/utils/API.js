
import axios from 'axios';

const API_URL = 'https://api.edamam.com/api/food-database/v2/parser';

// Fetch food data
const FoodSearch = async (ingredient) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        app_id: process.env.REACT_APP_EDAMAM_APP_ID,
        app_key: process.env.REACT_APP_EDAMAM_APP_KEY,
        ingr: ingredient, 
      },
    });

    console.log('Food search:', response.data);
  } catch (error) {
    console.error('Error fetching food data:', error);
  }
};

// Call the function with an ingredient (e.g., "apple")
FoodSearch('apple');
