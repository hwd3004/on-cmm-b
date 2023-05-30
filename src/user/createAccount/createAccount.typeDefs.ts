const typeDefs = `#graphql
  type Mutation {
    createAccount(
        userId:String!
        password:String!
        confirmPassword:String!
    ): MutationResponse!
  }
`;

export default typeDefs;
