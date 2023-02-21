import { ResolutionsCollection, ContactsCollection } from "./resolutions";

// ResolutionsCollection.insert({
//     name: "Test Res"
// })

const res = ResolutionsCollection.find({}).fetch();
const contact = ContactsCollection.find({}).fetch();

console.log(contact);
//it's where we put the query 
//like Meteor.method
export default {
    Query: {
        
        async resolutions(){

            try {
                const result = ContactsCollection.find({}).fetch();
                
                console.log("le resultat "+result);
              } catch (error) {
                
                console.error("Erreur lors de la récupération des données:", error);
              }
            console.log("hvliu");
            return ContactsCollection.find({}).fetch();
        },

        async contacts(){

            try {
                const resu = ResolutionsCollection.find({}).fetch();
                
                console.log("le resolver "+resu);
              } catch (error) {
                
                console.error("Erreur lors de la récupération des données:", error);
              }
            console.log("resolver contact");
            return ResolutionsCollection.find({}).fetch();
        },
        
    }
}