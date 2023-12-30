//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const DocumentSchema = mongoose.Schema({
  _id: Number,
   email: String,
    aadharfrontname: {
    type: String,
    required: [true,"Category icon is required"],
    trim: true
  },aadharbackname: {
    type: String,
    required: [true,"Category icon is required"],
    trim: true
  },dlbackname: {
    type: String,
    required: [true,"Category icon is required"],
    trim: true
  },dlfrontname: {
    type: String,
    required: [true,"Category icon is required"],
    trim: true
  },selfiename: {
    type: String,
    required: [true,"Category icon is required"],
    trim: true
  },
  status: Number,
  info: String

});

// Apply the uniqueValidator plugin to DocumentSchema.
DocumentSchema.plugin(uniqueValidator);

// compile schema to model
const DocumentSchemaModel = mongoose.model('document_collection', DocumentSchema);

export default DocumentSchemaModel