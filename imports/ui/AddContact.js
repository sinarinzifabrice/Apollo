import { AutoForm, TextField, SubmitField } from "uniforms-mui"; 
import { bridge as schema} from "../api/resolutions/bridge";
import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ButtonContactList from "./ButtonContactListe";



const createContact = gql`
    mutation createContact(
        $firstname: String, 
        $lastname: String,
        $email: String!,
        $phone: String!,
        $city: String,
        $province: String,
        $country: String,
        $zipcode: String!,
        $comment1: String,
        $comment2: String
    ) {
        createContact(
            firstname: $firstname, 
            lastname: $lastname, 
            email: $email,
            phone: $phone,
            city: $city,
            province: $province,
            country: $country,
            zipcode: $zipcode,
            comment1: $comment1,
            comment2: $comment2
        ) {
            _id
            firstname
            lastname
            email
            phone
            city
            country
            zipcode
            comment1
            comment2
        }
    }
`;



class ContactForm extends React.Component {

    
  submitForm = (model) => {
      
    const { firstname, lastname, email, phone, city, province, zipcode, country, comment1, comment2 } = JSON.parse(model);  
    console.log(JSON.parse(model));
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(phone);
    console.log(city);
    console.log(province);
    console.log(zipcode);
    console.log(country);
    console.log(comment1);
    console.log(comment2);

    this.props.createContact({
        variables: {
            firstname:firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            city: city,
            province: province,
            zipcode: zipcode,
            country: country,
            comment1: comment1,
            comment2: comment2
        }
    }).catch(error =>{
        console.log(error);
    });
  };

  render(){

      return (
        <div>
            <ButtonContactList/>
            <AutoForm
                schema={schema}
                onSubmit={(model) => this.submitForm(JSON.stringify(model))}
                showInlineError={true} // affiche les erreurs inline
            >
                <TextField name="firstname"/>
                <TextField name="lastname" placeholder="Entrez votre prénom" />
                <TextField name="email"/>
                <TextField name="phone"/>
                <TextField name="city"/>
                <TextField name="province"/>
                <TextField name="zipcode"/>
                <TextField name="country"/>
                <TextField name="comment1"/>
                <TextField name="comment2"/>
                <SubmitField label="Enregister"/>
            </AutoForm>
        </div>
              
      );
  }
}


export default graphql(createContact, {
    name: "createContact",
    options: {
        refetchQueries: ["Contacts"]
    }
})(ContactForm)
