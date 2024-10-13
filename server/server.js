const express = require("express");
const path = require("path");
require("dotenv").config();
const FoodSearch = require("./utils/API"); // Import the FoodSearch function

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/build")));

// API endpoint for fetching recipes
app.get("/api/recipes", async (req, res) => {
  try {
    const {q } = req.query;
    const recipes = await FoodSearch(
      q
    );
    res.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

// Fallback for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
