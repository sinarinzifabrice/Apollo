import { ApolloServer } from "@apollo/server";

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

