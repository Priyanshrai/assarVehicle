//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const SegmentSchema = mongoose.Schema({
_id: Number,
segment:{type:String,
required: [true,"Chassis No. is required"],
trim: true
},
img: {
type: String,
required: [true,"Image is required"],
trim: true
}

});

// Apply the uniqueValidator plugin to VehicleSchema.
SegmentSchema.plugin(uniqueValidator);

// compile schema to model
const SegmentSchemaModel = mongoose.model('image_data', SegmentSchema);

export default SegmentSchemaModel;