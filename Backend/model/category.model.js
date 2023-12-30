//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const CategorySchema = mongoose.Schema({
  _id: Number,
  catname: {
    type: String,
    unique: true,
    required: [true,"Category is required"],
    lowercase: true,
    trim: true,
  },
  caticonname: {
    type: String,
    required: [true,"Category icon is required"],
    trim: true
  }
});

// Apply the uniqueValidator plugin to UserSchema.
CategorySchema.plugin(uniqueValidator);

// compile schema to model
const CategorySchemaModel = mongoose.model('category_collection',CategorySchema);

export default CategorySchemaModel