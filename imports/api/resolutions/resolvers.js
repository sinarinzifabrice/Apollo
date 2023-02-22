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
                const result = ResolutionsCollection.find({}).fetch();
                
                console.log("le resultat "+result);
              } catch (error) {
                
                console.error("Erreur lors de la récupération des données:", error);
              }
            console.log("hvliu");
            return ResolutionsCollection.find({}).fetch();
        },

        async contacts(){

            try {
                const resu = ContactsCollection.find({}).fetch();
                
                console.log("le resolver "+resu);
              } catch (error) {
                
                console.error("Erreur lors de la récupération des données:", error);
              }
            console.log("resolver contact");
            return ContactsCollection.find({}).fetch();
        }

    },

    Mutation: {
        async createContact(obj, { firstname} , context) {
            try {
                
                    console.log("insert contact "+ firstname);

                    const contactId = ContactsCollection.insert({
                        firstname: firstname
                    });
                    return ContactsCollection.findOne(contactId);
            }
            catch (error) {
                
                    console.error("Erreur l'insertion des données:", error);
            }
            
        }
    }
}