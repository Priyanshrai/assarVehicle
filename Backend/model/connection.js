import mongoose from 'mongoose';
var url="mongodb://127.0.0.1:27017/assarvehicle";
mongoose.connect(url);
console.log("Successfully connected to mongodb database");
