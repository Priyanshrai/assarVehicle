//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: [true,"Name is required"],
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true,"Username is required"],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true,"Password is required"],
    maxlength: 10,
    minlength:5,
    trim: true
  },
  mobile: {
    type: String,
    required: [true,"Mobile is required"],
    unique: true,
    maxlength: 10,
    minlength:10,
    trim: true
  }, 
  city:String,
  gender:String,
  role:String,
  status:Number,
  selfdrivestatus: Number,
  info: String
});

// Apply the uniqueValidator plugin to UserSchema.
UserSchema.plugin(uniqueValidator);

// compile schema to model
const UserSchemaModel = mongoose.model('user_collection',UserSchema);

export default UserSchemaModel