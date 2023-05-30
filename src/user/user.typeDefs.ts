const typeDefs = `#graphql
  type User {
    id: ID!
    userId: String!
    password: String!
    confirmPassword: String
    createdAt: String
    updatedAt: String
  }
  type Query{
    users: [User]
  }
`;

export default typeDefs;
