import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./Domain/schema";

import { resolvers } from "./Application/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
