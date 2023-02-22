import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import  ContactForm  from './ContactForm';


// here were introduce tags 
// to get data into our cache
const App = ({data}) => {
    if(data.loading) return null;
    return (
        <div>
            <h1>{data.hi}</h1>
            <ContactForm refetch={data.refetch}/>
            <ul>
                {data.contacts.map(contact =>(
                    <li key={contact._id}>{contact.firstname}</li>
                ))}
            </ul>
        </div>  
    ); 
};


const hiQuery = gql`
    {
        hi
        contacts {
            _id
            firstname
        }
        
    }
`;



export default graphql(hiQuery)(App);