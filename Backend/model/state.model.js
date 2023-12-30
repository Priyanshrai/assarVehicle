//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const StateSchema = mongoose.Schema({
  _id: Number,
  statename: {
    type: String,
    unique: true,
    required: [true,"State Name is required"],
    trim: true,
  },
  statecode: {
    type: String,
    required: [true,"State Code is required"],
    unique: true,
    trim: true
  },
  hoaddress: {
    type: String,
    required: [true,"Head Office Address Requires is required"],
    unique: true,
    trim: true
  },
  date: {
    type: Date,
    required: [true,"Start Date is required"],
  }, 
  status:Number,
  info: String
});

// Apply the uniqueValidator plugin to StateSchema.
StateSchema.plugin(uniqueValidator);

// compile schema to model
const StateSchemaModel = mongoose.model('sd_state_collections',StateSchema);

export default StateSchemaModel