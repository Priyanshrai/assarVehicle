//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ListingSchema = mongoose.Schema({
_id: Number,
country:{type:String,
required: [true,"Chassis No. is required"],
lowercase: true,
trim: true
},
state_code:{type:String,
required: [true,"Chassis No. is required"],
lowercase: true,
trim: true
},
brand:{type:String,
required: [true,"Chassis No. is required"],
titlecase: true,
trim: true
},
vehicle_model:{type:String,
required: [true,"Chassis No. is required"],
titlecase: true,
trim: true
},
year:{type:Date,
required: [true,"Chassis No. is required"],
lowercase: true,
trim: true
},
city:{type:String,
required: [true,"Chassis No. is required"],
titlecase: true,
trim: true
},
registration_no:{
type:String,
unique: true,
required: [true,"Registration No. required "],
trim: true
},
category:{type:String,
required: [true,"Chassis No. is required"],
titlecase: true,
trim: true
},
segment:{type:String,
required: [true,"Chassis No. is required"],
titlecase: true,
trim: true
},
transmission:{type:String,
required: [true,"Chassis No. is required"],
titlecase: true,
trim: true
},
fuel:{type:String,
required: [true,"Chassis No. is required"],
titlecase: true,
trim: true
},
lugguage:{type:Number,
required: [true,"Chassis No. is required"],
trim: true
},
seat:{type:String,
required: [true,"Chassis No. is required"],
titlecase: true,
trim: true
},
rate_day_ul:{type:Number,required:[true,"Rate is Required"],lowercase: true,
trim: true
},
rate_day:{type:Number,required:[true,"Rate is Required"],lowercase: true,
trim: true
},
rate_hour_ul:{type:Number,required:[true,"Rate is Required"],lowercase: true,
trim: true
},
rate_hour:{type:Number,required:[true,"Rate is Required"],lowercase: true,
trim: true
},
gst:{type:Number,required:[true,"enter"],lowercase: true,
trim: true
},
img: {
type: String,
required: [true,"Image is required"],
trim: true
},
status: Number,
info: String
  
});

// Apply the uniqueValidator plugin to VehicleSchema.
ListingSchema.plugin(uniqueValidator);

// compile schema to model
const ListingSchemaModel = mongoose.model('Listing_Sd', ListingSchema);

export default ListingSchemaModel;