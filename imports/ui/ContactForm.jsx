import React, { useRef} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Component } from 'react';

const createContact = gql`
    mutation createContact($firstname: String!) {
        createContact(firstname: $firstname ) {
            _id
        }
    }
`;

class ContactForm extends React.Component {

    // const firstnameRef = useRef(null);

    submitForm = () => {
        // const firstname = firstnameRef.current.value;
        console.log(this.firstname.value);
        this.props.createContact({
            variables: {
                firstname: this.firstname.value
            }
        })
        .then(({data}) =>{
            this.props.refetch();
        }).catch(error =>{
            console.log(error);
        });
    };

    render(){
        return (
            <div>
                <input type="text" ref={input =>(this.firstname = input)} />
                <button onClick={this.submitForm}>Ajouter</button>
            </div>
        );
    }
}

export default graphql(createContact, {
    name: "createContact"
})(ContactForm)