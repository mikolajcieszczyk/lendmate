const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    hello: String
    welcome(name: String): String
    users: [User]
    user(id: ID): User
    applicant(id: ID): Applicant
    applicants: [Applicant]
  }

  type User {
    id: ID
    email: String
    password: String
  }

  type Applicant {
    id: ID
    firstName: String
    lastName: String
    dob: String
    address: String
  }

  type Mutation {
    createUser(email: String, password: String): User
    updateUser(id: ID, email: String, password: String): User
    deleteUser(id: ID): User
    createApplicant(
      firstName: String
      lastName: String
      dob: String
      address: String
    ): Applicant
    updateApplicant(
      id: ID
      firstName: String
      lastName: String
      dob: String
      address: String
    ): Applicant
    deleteApplicant(id: ID): Applicant
  }
`;

module.exports = { typeDefs };
