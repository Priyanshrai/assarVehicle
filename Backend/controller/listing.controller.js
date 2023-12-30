import '../model/connection.js';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//to link schema model
import ListingSchemaModel from '../model/listing.model.js';
import VehicleSchemaModel from '../model/vehicle.model.js';

export var save=async (req,res,next)=>{
  

  const { id } = req.params;
 
  var img=req.files.img;
  var Img=Date.now()+"-"+img.name;
  
  var uploadpath=path.join(__dirname,"../../../Frontend/assarapp/public/assets/listing/img",Img);
  img.mv(uploadpath);
  dDetails.img=Img;
 
  var dList = await ListingSchemaModel.find();
  var l=dList.length;
  var _id=l==0?1:dList[l-1]._id+1;
  dDetails={...dDetails,"_id":_id,"status":0,"info":Date()};
 
  var e = await ListingSchemaModel.create(dDetails);
  if(e)
    return res.status(201).json({"msg":"success"});
  else
return res.status(500).json({"error":"Server Error"});
}

export const fetch = async (req, res) => { 
  try {
    // Extract the ID parameter from the request
    const { id } = req.params;
    console.error(req.params);
    // Fetch data from the VehicleSchemaModel based on the ID
    const vehicleData = await VehicleSchemaModel.findById(id);

    // Check if data is found
    if (vehicleData) {
      return res.status(200).json(vehicleData);
    } else {
      return res.status(404).json({ error: 'Resource not found' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};


  
  
// export var fetch=async (req,res,next)=>{
 
//   var condition_obj=url.parse(req.url,true).query;
//   var dList = await ListingSchemaModel.find(condition_obj);
//   if(dList.length!=0)
//     return res.status(201).json(dList);
//   else
//     return res.status(500).json(dList);
// }

export var deleteDocument=async(req,res,next)=>{
  var vid = req.params.vid;
  var d = await ListingSchemaModel.find({_vid: vid});
  if(d.length!=0){
    let result = await ListingSchemaModel.deleteMany({_vid:vid}); 
    if(result)
     return res.status(201).json({"msg":"success"});
    else
     return res.status(500).json({error: "Server Error"});
  }
  else
    return res.status(404).json({error: "Resource not found"});             
}
  
export var updateDocument=async(req,res,next)=>{
  let dDetails = await ListingSchemaModel.findOne((req.body.condition_obj));
  if(dDetails){
     let d=await ListingSchemaModel.updateOne((req.body.condition_obj),{$set: (req.body.content_obj)});   
     if(d)
      return res.status(201).json({"msg":"success"});
     else
      return res.status(500).json({error: "Server Error"});
  }
  else
   return res.status(404).json({error: "Requested resource not available"});
}

export var login=async (req,res,next)=>{
  var documentDetails=req.body;
  documentDetails={...documentDetails,"status":1};
  var DocumentList = await ListingSchemaModel.find(documentDetails);
  if(DocumentList.length!=0)
  {
    let payload={"subject":DocumentList[0].email};  
    let token=jwt.sign(payload,"qwdbqkbdkqwd");
    return res.status(201).json({"token":token,"userDetails":DocumentList[0]});
  }
  else
    return res.status(500).json({"token":"error"});
}