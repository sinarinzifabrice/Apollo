
import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { startStandaloneServer } from '@apollo/server/standalone';
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
import merge from "lodash/merge";


// up

const testSchema =  `
type Query {
    hi: String
    resolutions: [Resolution]
    contacts:[Contact]
    getcontact(_id: ID!): Contact
}
`;


// it points to the query "hi" 
// and wants a string as answer
const typeDefs = [testSchema, ResolutionsSchema];

//it's where we put the query 
//like Meteor.method
const testResolver = {
    Query: {
        hi() {
            return "Hello Fabrice";
        }
    }
};


const resolvers = merge(testResolver, ResolutionsResolvers);

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers : resolvers
})

const server = new ApolloServer({ schema });


const { url } = await startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);