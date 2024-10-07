require('dotenv').config(); // Load environment variables
const axios = require('axios');

const API_URL = 'https://api.edamam.com/api/recipes/v2?type=public';

// Fetch food data
const FoodSearch = async (diet, health, cuisineType, mealType, dishType) => { // ingredient,
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
                imageSize: 'REGULAR',
                random: true,
                beta: false,
            },
        });


        ///////////////////////////////////////////////////////////////////////
        // console logging all exports I would like to use on discover page. 

        // console.log('Food search:', response.data.hits[0]);
        // console.log('Title:', response.data.hits[0].recipe.label);

        const indexNum = response.data.hits.length;
        console.log('length: ', indexNum);
        for (let i = 0; i < (indexNum); i++) {
            console.log(`Title ${i+1}: `, response.data.hits[i].recipe.label);

        }
        // console.log('Food image url:', response.data.hits[0].recipe.image);
        // console.log('External URL:', response.data.hits[0].recipe.url);
        // console.log('Ingredients:', response.data.hits[0].recipe.ingredientLines);
        // console.log('Tags:', response.data.hits[0].recipe.tags);
        // console.log('DietLabels:', response.data.hits[0].recipe.dietLabels);
        // console.log('Serves', response.data.hits[0].recipe.yield);
        // console.log('Health lables', response.data.hits[0].recipe.healthLabels);
        /////////////////////////////////////////////////////////////////////////////////
        
        return (response.data.hits); 

    } catch (error) {
        console.error('Error fetching food data:', error);
    }
};
//       ( ingredient -removed until add search button, diet, health, cuisinetype, mealtype, dishtype  )
// FoodSearch( '', 'pork-free', '', '', '');

module.exports = FoodSearch;
//  to call const FoodSearch = require('./filepath');