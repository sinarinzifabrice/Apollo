import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


// here were introduce tags 
// to get data into our cache
const App = ({data}) => {
    if(data.loading) return null;
    return (
        <div>
            <h1>{data.hi}</h1>
            <ul>
                {data.resolutions.map(resolution =>(
                    <li key={resolution._id}>{resolution.firstname}</li>
                ))}
            </ul>
        </div>  
    ); 
};


const hiQuery = gql`
    {
        hi
        resolutions {
            _id
            firstname
        }
        contacts {
            name
        }
    }
`;



export default graphql(hiQuery)(App);