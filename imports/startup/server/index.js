import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { startStandaloneServer } from '@apollo/server/standalone';

import '../server/register-api';

const typeDefs = `
type Query {
    hi: String
}
`;

const resolver = {
    Query: {
        hi() {
            return "Hello Fabrice";
        }
    }
}

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers : resolver
});

const { url } = await startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);