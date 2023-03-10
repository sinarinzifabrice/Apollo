import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';

const ajv = new Ajv({ allErrors: true, useDefaults: true });
ajvErrors(ajv);
const schema = {
  title: 'Contact',
  type: 'object',
  properties: {
    firstName: { 
        type: 'string',
        allOf: [
            {pattern: '^(?=\\s*\\S).*$', errorMessage: 'Le nom est obligatoire'},
            {pattern: '^[^0-9]*$', errorMessage: 'Le nom ne doit pas contenir de chiffre'}
        ]
    },
    lastName: { type: 'string' },
    age: {
      description: 'Age in years',
      type: 'integer',
      minimum: 10,
    },
  },
  required: ['firstName', 'lastName', 'age'],
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