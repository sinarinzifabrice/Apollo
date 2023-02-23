import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import  ContactForm  from './ContactForm';


// here were introduce tags 
// to get data into our cache
const App = ({loading, contacts, hi }) => {
    if(loading) return null;
    return (
        <div>
            <h1>{hi}</h1>
            <ContactForm />
            <ul>
                {contacts.map(contact =>(
                    <li key={contact._id}>{contact.firstname}</li>
                ))}
            </ul>
        </div>  
    ); 
};


const contactsQuery = gql`
    query Contacts {
        hi
        contacts {
            _id
            firstname
        }
        
    }
`;



export default graphql(contactsQuery,{
    props: ({ data }) => ( { ...data })
})(App);