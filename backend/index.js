const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const mongoose = require("mongoose");
const { resolvers } = require("./resolvers.js");
const { typeDefs } = require("./models/typeDefs.js");
require("dotenv").config();

const MONGO_URI = `mongodb+srv://lendmate:${process.env.MONGO_ATLAS_PASSWORD}@lendmate-db.qrqb1uu.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(MONGO_URI, {
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
  console.log(process.env.BACKEND_PORT);
  console.log(`Server ready at ${url}`);
});
