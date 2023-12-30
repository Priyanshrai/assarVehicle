//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const VehicleSchema = mongoose.Schema({
  _id: Number,
  registration_no:{
  type:String,
  unique: true,
  required: [true,"Registration No. required "],
  trim: true
},
manufacturing_year:{
  type: Date,
  required: [true,"Enter Manufacturing year of vehicle"],
},
engine_no:{
  type: String,
  unique: true,
  required:[true,"Engine No. is required"],
lowercase: true,
trim: true
},
chassis_no:{type:String,
required: [true,"Chassis No. is required"],
unique: true,
lowercase: true,
trim: true
},
colour:{type: String,required:[true,"enter"],lowercase: true,
trim: true
},
category:{type: String,required:[true,"enter"],lowercase: true,
trim: true
},
segment:{type: String,required:[true,"enter"],lowercase: true,
trim: true
},
manufacturer_name: {type:String,required:[true,"enter"],lowercase: true,
trim: true
},
vehicle_model:{type:String,required:[true,"enter"],lowercase: true,
trim: true
},
varient:{type:String,required:[true,"enter"],lowercase: true,
trim: true
},
seat:{type:Number,required:[true,"enter"],lowercase: true,
trim: true
},
fuel:{type:String,required:[true,"enter"],lowercase: true,
trim: true
},
runnig_km:{type: String,required:[true,"enter"],
trim: true
},
city:{type:String,required:[true,"enter"],lowercase: true,
trim: true
},
attachment_date:{type:Date,required:[true,"enter"],lowercase: true,
trim: true
},
    insurance: {
    type: String,
    required: [true,"Category icon is required"],
    trim: true
  },registration: {
    type: String,
    required: [true,"Category icon is required"],
    trim: true
  },fitness: {
    type: String,
    required: [true,"Category icon is required"],
    trim: true
  },puc: {
    type: String,
    required: [true,"Category icon is required"],
    trim: true
  },permit: {
    type: String,
    required: [true,"Category icon is required"],
    trim: true
  },
  status: Number,
  info: String
  
});

// Apply the uniqueValidator plugin to VehicleSchema.
VehicleSchema.plugin(uniqueValidator);

// compile schema to model
const VehicleSchemaModel = mongoose.model('vehicle_data', VehicleSchema);

export default VehicleSchemaModel;