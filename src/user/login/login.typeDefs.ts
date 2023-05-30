const typeDefs = `#graphql
  type Query {
    login(
        userId:String!
        password:String!
    ): MutationResponse!
  }
`;

export default typeDefs;
