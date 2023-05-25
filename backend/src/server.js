const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const mongoose = require("mongoose");
const resolvers = require("./graphql/resolvers/index.js");
const typeDefs = require("./graphql/typeDefs/index.js");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Db Connected`);
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
  listen: { port: process.env.BACKEND_PORT },
}).then(({ url }) => {
  console.log(`Server ready at ${process.env.BACKEND_PORT}`);
});
