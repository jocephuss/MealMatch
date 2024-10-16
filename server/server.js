require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const FoodSearch = require("./utils/API");
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  app.use(
    cors({
      origin: "https://mealmatch.onrender.com/",
    })
  );
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.get("/api/recipes", async (req, res) => {
    try {
      const { q } = req.query;
      const recipes = await FoodSearch(q);
      res.json(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      res.status(500).json({ error: "Failed to fetch recipes" });
    }
  });

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req }) => authMiddleware({ req }),
    })
  );

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`GraphQL available at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
