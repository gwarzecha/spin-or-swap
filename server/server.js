const express = require("express");
// import the ApolloServer
const { ApolloServer } = require("apollo-server-express");

// import typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

//create Apollo server and pass in the schema data
// Needed to incorporate the Apollo server into an async function due to a known bug
let server = null;
async function startServer() {
  server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });
}
startServer();

// integrates Apollo server with Express app as middleware
// creates graphql endpoints for Express server that servers as the main endpoint for
//accessing the entire API

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(
      `GraphQL found at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
});
