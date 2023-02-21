import { Mongo } from 'meteor/mongo';

export const ResolutionsCollection = new Mongo.Collection('resolutions');
export const ContactsCollection = new Mongo.Collection('contacts');