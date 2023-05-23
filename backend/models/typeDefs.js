const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    hello: String
    welcome(name: String): String
    users: [User] #return array of users
    user(id: ID): User #return user by id
  }

  # User object
  type User {
    id: ID
    email: String
    password: String
  }

  # Mutation
  type Mutation {
    create(email: String, password: String): User
    update(id: ID, email: String, password: String): User
    delete(id: ID): User
  }
`;

module.exports = { typeDefs };
