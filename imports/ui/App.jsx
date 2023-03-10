import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Route, Routes } from 'react-router-dom';
import ButtonAddContact from './ButtonAddContact';
import Navbar from '../ui/Navbar'
import ContactList from "../ui/ContactList";


// here were introduce tags 
// to get data into our cache
export const App = () => {
    
    return (
        <div>
            <ButtonAddContact/>
            <ContactList/>
            
        </div>  
    ); 
};


