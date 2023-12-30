import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import url from 'url';
import cors from 'cors';
import fileupload from 'express-fileupload';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

var app = express();

//to link routes
import userRouter from './routes/user.router.js';
import documentRouter from './routes/document.router.js';
import categoryRouter from './routes/category.router.js';
import vehicleRouter from './routes/vehicle.router.js';
import stateRouter from './routes/state.router.js';
import cityRouter from './routes/city.router.js';
import countryRouter from './routes/country.router.js';
import listingRouter from './routes/listing.router.js';
import segmentRouter from './routes/segment.router.js';



//configuration to extract post request file content
app.use(fileupload());

//configuration to manage cors issue
app.use(cors());


//configuration to extract request body content
app.use(bodyParser());

//middleware configuration to load api routes
app.use("/user",userRouter);
app.use("/document",documentRouter);
app.use("/category",categoryRouter);
app.use("/vehicle",vehicleRouter);
app.use("/state",stateRouter);
app.use("/city",cityRouter);
app.use("/country",countryRouter);
app.use("/listing",listingRouter);

app.listen(3003);
console.log("Server invoked at link http://localhost:3003");