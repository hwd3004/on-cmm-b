import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan, { token } from "morgan";
import compression from "compression";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";

const startServer = async () => {
  const NODE_ENV = process.env.NODE_ENV || "dev";

  const port = 4000;

  const app = express();

  // The GraphQL schema
  const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

  // A map of functions which return data for the schema.
  const resolvers = {
    Query: {
      hello: () => "world",
    },
  };

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(compression());
  app.use(morgan("dev"));
  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }: { req: any }) => {
        return {
          token: req.headers.token,
        };
      },
    })
  );

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}/`);
};

startServer();
