import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';





const contactsQuery = gql`
    query Contacts {
        hi
        contacts {
            _id
            firstname
            lastname
            email
            phone
        }
        
    }
`;




const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const ListContact = ({loading, contacts, hi }) => {
    if(loading) return null;
    return (
        <div>
            {contacts.map(contact =>(
                <Box margin={2} key={contact._id}>
                    <Card sx={{ minWidth: 275 }} elevation={2}>
                    <CardContent>
                        
                        <Typography variant="h5" component="div" fontWeight="bold">
                            {contact.firstname} {contact.lastname}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="primary">
                            {contact.email}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {contact.phone}
                        </Typography>
                        <Typography variant="body2">well meaning and kindly.</Typography>
                        <Typography variant="body2">"a benevolent smile"</Typography>
                    </CardContent>
                <CardActions>
                <Button startIcon={<ModeEditIcon />} color="primary" variant="outlined">
            changer
            </Button>
            <Button
            startIcon={<DeleteOutlineSharpIcon />}
            color="error"
            variant="outlined"
            >
            Supprimer
            </Button>
        </CardActions>
                </Card>
                </Box>
                
            ))}
            
        </div>
        
  );
}


export default graphql(contactsQuery,{
    props: ({ data }) => ( { ...data })
})(ListContact);