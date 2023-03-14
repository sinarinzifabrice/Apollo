import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';
import addFormats from "ajv-formats"


const ajv = new Ajv({ allErrors: true, useDefaults: true });
ajvErrors(ajv);
addFormats(ajv);
const schema = {
  title: 'Contact',
  type: 'object',
  properties: {
    firstname: { 
        type: 'string',
        title: 'Prénom'
    },
    lastname: { 
        type: 'string',
        title: 'Nom'
    },
    email: { 
        type: 'string',
        format: "email",
        title: 'Courriel',
        allOf: [
            {pattern: '^(?=\\s*\\S).*$', errorMessage: 'Le champ courriel est obligatoire'},
            {errorMessage: 'Mettre le bon format email'}
        ]
    },
    phone: { 
        type: 'string',
        title: 'Téléphone',
        allOf: [
            {pattern: '^(?=\\s*\\S).*$', errorMessage: 'Le champ téléphone est obligatoire'},
            {pattern: '^\\(\\d{3}\\) \\d{3}-\\d{4}$', errorMessage: 'Respectez ce format (000) 000-0000'}
        ]
    },
    city: { 
        type: 'string',
        title: 'Ville' 
    },
    province: { 
        type: 'string',
        title: 'Province',
    },
    zipcode: { 
        type: 'string',
        title: 'Code Postale',
        allOf: [
            {pattern: '^(?=\\s*\\S).*$', errorMessage: 'Le champ Code Postale est obligatoire'},
            {pattern: '[ABCEGHJKLMNPRSTVXY]{1}\\d{1}[A-Z]{1}[ ]\\d{1}[A-Z]{1}\\d{1}$', errorMessage: 'Mettre un code postale Canadien valide dans ce format ex:A9A 9A9'}
        ]
    },
    country: { 
        type: 'string',
        title: 'Pays' 
    },
    comment1: { 
        type: 'string',
        title: 'commmentaires 1'
    },
    comment2: { 
        type: 'string',
        title: 'commmentaires 2'
    },
    
  },
  required: ['email', 'phone','zipcode'],
  errorMessage: {
    required:{
        email: "Le champ courriel est obligatoire",
        phone: "Le champ téléphone est obligatoire",
        zipcode: "Le champ Code Postale est obligatoire"
    }
    
  }
};

function createValidator(schema) {
  const validator = ajv.compile(schema);

  return (model) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge(schema, schemaValidator);