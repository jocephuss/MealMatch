import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// Create an HTTP link to your GraphQL server
const httpLink = createHttpLink({
  uri: "https://mealmatch.onrender.com/graphql",
});

// Initialize Apollo Client
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client; // Export the client for use in main.jsx
