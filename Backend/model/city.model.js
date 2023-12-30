//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const CitySchema = mongoose.Schema({
  _id: Number,
  cityname: {
    type: String,
    unique: true,
    required: [true,"City Name is required"],
    trim: true,
  },
  citycode: {
    type: String,
    required: [true,"City Code is required"],
    unique: true,
    trim: true
  },
  number:{
    type: Number,
    required: [true,"City Code is required"],
    unique: true,
    trim: true
  },
  coaddress: {
    type: String,
    required: [true,"City Office Address Requires is required"],
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

// Apply the uniqueValidator plugin to CitySchema.
CitySchema.plugin(uniqueValidator);

// compile schema to model
const CitySchemaModel = mongoose.model('sd_city_collections',CitySchema);

export default CitySchemaModel