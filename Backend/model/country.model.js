//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const CountrySchema = mongoose.Schema({
  _id: Number,
  countryname: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true,"Country Name is required"],
    trim: true,
  },
  countrycode: {
    type: String,
    required: [true,"Country Code is required"],
    lowercase: true,
    unique: true,
    trim: true
  },
  number:{
    type: Number,
    required: [true,"Main office Contact is required"],
    lowercase: true,
    unique: true,
    trim: true
  },
  moaddress: {
    type: String,
    required: [true,"Main office Address is required"],
    unique: true,
    lowercase: true,
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
CountrySchema.plugin(uniqueValidator);

// compile schema to model
const CountrySchemaModel = mongoose.model('sd_country_collections',CountrySchema);

export default CountrySchemaModel