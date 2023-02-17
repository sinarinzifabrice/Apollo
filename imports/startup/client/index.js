import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ApolloProvider } from 'react-apollo';
import App from '../../ui/App';



//create instance to connect 
// apollo to GraphQL Server
const httpLink = new HttpLink({
    uri: "http://localhost:4000/"
});

//create cache
const cache = new InMemoryCache();

// create instance apollo client
const client = new ApolloClient({
    link: httpLink,
    cache: cache,
});

const ApolloApp = () => (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
)

Meteor.startup(() => {
    const container = document.getElementById('app');
    const root = createRoot(container); 
    root.render(<ApolloApp/>)
});
