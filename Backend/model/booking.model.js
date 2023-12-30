//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const BookingSchema = mongoose.Schema({
_id: Number,
booking_id:{type:String,unique: true,lowercase: true,
    trim: true
    },
tansaction_id: {type:String,
lowercase: true,
trim: true
},
state_code:{type:String,
required: [true,],
lowercase: true,
trim: true
},
manufacturer:{type:String,
required: [true,"Manufacturer Name is required"],
titlecase: true,
trim: true
},
vehicle_model:{type:String,
required: [true,"Vehicle Model Name is required"],
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
contact_no:{type:Number,
required: [true,"Contact Number is required"],
trim: true
},
Emergency_contact_no:{type:Number,
    required: [true,"Contact Number is required"],
    trim: true
    },
email_id:{type:String,
required: [true,"Email Id Required"],
titlecase: true,
trim: true
},
Driving_licencse_expiry_date:{type:Date,
required: [true,"Expiry Date is Required"],
trim: true
},
schedule_pick_up_time:{type:String,required:[true,"schedule  Pickup time"],lowercase: true,
trim: true
},
schedule_pick_up_date:{type:Date,required:[true,"schedule  Pickup Date"],lowercase: true,
trim: true
},
schedule_drop_time:{type:String,required:[true,"schedule  Drop time"],lowercase: true,
trim: true
},
schedule_drop_date:{type:Date,required:[true,"schedule  Drop Date"],lowercase: true,
trim: true
},
Actual_pick_up_time:{type:String,lowercase: true,
trim: true
},
Actual_pick_up_date:{type:Date,lowercase: true,
trim: true
},
Actual_drop_time:{type:String,lowercase: true,
trim: true
},
Actual_drop_date:{type:Date,lowercase: true,
trim: true
},
Plan:{type:String,required:[true,"Unlimite or 400 km"],lowercase: true,
trim: true
},
rate:{type:Number,required:[true,"Rate is Required"],lowercase: true,
trim: true
},
gst:{type:Number,required:[true,"enter"],lowercase: true,
trim: true
},
Booking_status: {
type: String,
trim: true
},
Invoice: {
type: String,
trim: true
},
payment_mode:{
    type:String,
    trim:true,
    required:true,
},
current_bookings:[],
status: Number,
info: String
  
});

// Apply the uniqueValidator plugin to VehicleSchema.
BookingSchema.plugin(uniqueValidator);

// compile schema to model
const BookingSchemaModel = mongoose.model('Listing_Sd', BookingSchema);

export default BookingSchemaModel;