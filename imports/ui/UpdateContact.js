import { AutoForm, TextField, SubmitField } from "uniforms-mui"; 
import { bridge as schema} from "../api/resolutions/bridge";
import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ButtonContactList from "./ButtonContactListe";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from 'react-apollo';




const getcontactQuery = gql`
    query Getcontact($contactId: ID!) {
        getcontact(_id: $contactId) {
            firstname
            lastname
            email
            phone
            city
            province
            country
            zipcode
            comment1
            comment2

        }
    }
`;

const UPDATEContact = gql`
    mutation updateContact(
        $id: ID!
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
        updateContact(
            _id: $id,
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






export default UpdateContact = () => {
   
    const { contactId } = useParams();
    const { loading, error, data } = useQuery(getcontactQuery, {
    variables: { contactId },
    });



    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

   
    

    submitForm = (model) => {
      
        const { firstname, lastname, email, phone, city, province, zipcode, country, comment1, comment2 } = JSON.parse(model);  
        console.log(JSON.parse(model));
        console.log(contactId);
        console.log(firstname);
       
        // const [updateContact] = useMutation(UPDATEContact,
        //     {
        //         variables: { id: contactId,
        //             firstname,
        //             lastname,
        //             email,
        //             phone,
        //             city,
        //             country,
        //             province,
        //             zipcode,
        //             comment1,
        //             comment2 }});
        const [updateContact] = useMutation(UPDATEContact);
        updateContact(contactId, firstname, lastname, email, phone, city, country, zipcode, comment1, comment2);    
      
  };

  


      return (
        <div>
            
            <ButtonContactList/>
            <AutoForm
                schema={schema}
                model = {data.getcontact}
                onSubmit={(model) => this.submitForm(JSON.stringify(model))}
                showInlineError={true} // affiche les erreurs inline
            >
                <TextField name="firstname" />
                <TextField name="lastname" placeholder="Entrez votre prénom" />
                <TextField name="email"/>
                <TextField name="phone"/>
                <TextField name="city"/>
                <TextField name="province"/>
                <TextField name="zipcode"/>
                <TextField name="country"/>
                <TextField name="comment1"/>
                <TextField name="comment2"/>
                <SubmitField label="Modifier"/>
            </AutoForm>
        </div>
              
      );
      
}


