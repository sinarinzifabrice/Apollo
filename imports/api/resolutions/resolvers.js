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
        },

        async getcontact(obj, {_id}){

          try {
              const resu = ContactsCollection.findOne(_id);
              console.log("l'id du contact  "+_id);
              console.log("le contact est "+resu);
            } catch (error) {
              
              console.error("Erreur lors de la récupération du contact:", error);
            }
          console.log("renvoie du contact");
          return ContactsCollection.findOne(_id);
      },


    },

    Mutation: {
        async createContact(obj, { 
          firstname, 
          lastname, 
          email,
          phone,
          city,
          province,
          zipcode,
          country,
          comment1, 
          comment2 } , context) {
            try {
                
                    console.log("insert contact "+ firstname);

                    // Checks if firstname is undefined and replaces it with an empty string
                    if (typeof firstname === 'undefined') {
                      firstname = '';
                    }

                    if (typeof lastname === 'undefined') {
                      lastname = '';
                    }
                    if (typeof city === 'undefined') {
                      city = '';
                    }
                    if (typeof province === 'undefined') {
                      province = '';
                    }
                    if (typeof zipcode === 'undefined') {
                      zipcode = '';
                    }

                    if (typeof country === 'undefined') {
                      country = '';
                    }
                    if (typeof comment1 === 'undefined') {
                      comment1 = '';
                    }
                    if (typeof comment2 === 'undefined') {
                      comment2 = '';
                    }

                    const contactId = ContactsCollection.insert({
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        phone: phone,
                        city: city,
                        province: province,
                        zipcode: zipcode,
                        country: country,
                        comment1: comment1,
                        comment2: comment2
                    });
                    return ContactsCollection.findOne(contactId);
            }
            catch (error) {
                
                    console.error("Erreur l'insertion des données:", error);
            }
            
        },

        async deleteContact(obj, {_id}) {
          try {
              
                  console.log("id contact "+ _id);

                  const contactId = ContactsCollection.remove(_id);
                  return await ContactsCollection.remove(_id);
          }
          catch (error) {
              
                  console.error("Erreur suppression du contact:", error);
          }
          
        },

        async updateContact(obj, {
          _id,
          firstname, 
          lastname, 
          email,
          phone,
          city,
          province,
          zipcode,
          country,
          comment1, 
          comment2
        }, context) {
          try {
              
                  console.log("id contact "+ _id);
                  console.log("firstname  contact "+ firstname);

                  // Checks if firstname is undefined and replaces it with an empty string
                  if (typeof firstname === 'undefined') {
                    firstname = '';
                  }

                  if (typeof lastname === 'undefined') {
                    lastname = '';
                  }
                  if (typeof city === 'undefined') {
                    city = '';
                  }
                  if (typeof province === 'undefined') {
                    province = '';
                  }
                  if (typeof zipcode === 'undefined') {
                    zipcode = '';
                  }

                  if (typeof country === 'undefined') {
                    country = '';
                  }
                  if (typeof comment1 === 'undefined') {
                    comment1 = '';
                  }
                  if (typeof comment2 === 'undefined') {
                    comment2 = '';
                  }


                  const contact = ContactsCollection.update(
                    { _id: _id },
                    { $set: 
                      { firstname: firstname,
                        lastname : lastname,
                        email: email,
                        phone: phone,
                        city: city,
                        province: province,
                        zipcode: zipcode,
                        country: country,
                        comment1: comment1, 
                        comment2: comment2
                       } } 
                  );
                  return await ContactsCollection.update(
                    { _id: _id },
                    { $set: 
                      { firstname: firstname,
                        lastname : lastname,
                        email: email,
                        phone: phone,
                        city: city,
                        province: province,
                        zipcode: zipcode,
                        country: country,
                        comment1: comment1, 
                        comment2: comment2
                       } } 
                  );
          }
          catch (error) {
              
                  console.error("Erreur de mise à jour du contact:", error);
          }
          
        }

    }
}