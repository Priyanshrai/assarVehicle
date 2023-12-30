import '../model/connection.js';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//to link schema model
import VehicleSchemaModel from '../model/vehicle.model.js';

export var save=async (req,res,next)=>{
  var dDetails=req.body;
 
  var insurance=req.files.insurance;
  var registration=req.files.registration;
  var fitness=req.files.fitness;
  var puc=req.files.puc;
  var permit=req.files.permit;
  var Insurance=Date.now()+"-"+insurance.name;
  var Registration=Date.now()+"-"+registration.name;
  var Fitness =Date.now()+"-"+fitness.name;
  var Puc=Date.now()+"-"+puc.name;
  var Permit=Date.now()+"-"+permit.name;
  
  var uploadpath=path.join(__dirname,"../../../Frontend/assarapp/public/assets/vehicledoc/insurance",Insurance);
  insurance.mv(uploadpath);
  var uploadpath=path.join(__dirname,"../../../Frontend/assarapp/public/assets/vehicledoc/registration",Registration);
  registration.mv(uploadpath);
  var uploadpath=path.join(__dirname,"../../../Frontend/assarapp/public/assets/vehicledoc/fitness",Fitness);
  fitness.mv(uploadpath);
  var uploadpath=path.join(__dirname,"../../../Frontend/assarapp/public/assets/vehicledoc/puc",Puc);
  puc.mv(uploadpath);
  var uploadpath=path.join(__dirname,"../../../Frontend/assarapp/public/assets/vehicledoc/permit",Permit);
  permit.mv(uploadpath);
  //server end coppy
  {/*var uploadpath=path.join(__dirname,"../../../Backend/vehicledoc/insurance",aadharfrontname);
  insurance.mv(uploadpath);
  var uploadpath=path.join(__dirname,"../../../Backend/vehicledoc/registration",aadharbackname);
  registration.mv(uploadpath);
  var uploadpath=path.join(__dirname,"../../../Backend/vehicledoc/fitness",dlfrontname);
  fitness.mv(uploadpath);
  var uploadpath=path.join(__dirname,"../../../Backend/vehicledoc/puc",dlbackname);
  puc.mv(uploadpath);
  var uploadpath=path.join(__dirname,"../../../Backend/vehicledoc/permit",selfiename);
permit.mv(uploadpath);*/}
//nw start heare  
  dDetails.insurance=Insurance;
  dDetails.registration=Registration;
  dDetails.fitness=Fitness;
  dDetails.puc=Puc;
  dDetails.permit=Permit;
 
  var dList = await VehicleSchemaModel.find();
  var l=dList.length;
  var _id=l==0?1:dList[l-1]._id+1;
  dDetails={...dDetails,"_id":_id,"status":0,"info":Date()};
 
 console.log(dDetails);
  var e = await VehicleSchemaModel.create(dDetails);
  if(e)
    return res.status(201).json({"msg":"success"});
  else
return res.status(500).json({"error":"Server Error"});
}

export var fetch=async (req,res,next)=>{
  var condition_obj=url.parse(req.url,true).query;
  var dList = await VehicleSchemaModel.find(condition_obj);
  if(dList.length!=0)
    return res.status(201).json(dList);
  else
    return res.status(500).json(dList);
}

export var deleteDocument=async(req,res,next)=>{
  var vid = req.params.vid;
  var d = await VehicleSchemaModel.find({_vid: vid});
  if(d.length!=0){
    let result = await VehicleSchemaModel.deleteMany({_vid:vid}); 
    if(result)
     return res.status(201).json({"msg":"success"});
    else
     return res.status(500).json({error: "Server Error"});
  }
  else
    return res.status(404).json({error: "Resource not found"});             
}
  
export var updateDocument=async(req,res,next)=>{
  let dDetails = await VehicleSchemaModel.findOne((req.body.condition_obj));
  if(dDetails){
     let d=await VehicleSchemaModel.updateOne((req.body.condition_obj),{$set: (req.body.content_obj)});   
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
  var DocumentList = await VehicleSchemaModel.find(documentDetails);
  if(DocumentList.length!=0)
  {
    let payload={"subject":DocumentList[0].email};  
    let token=jwt.sign(payload,"qwdbqkbdkqwd");
    return res.status(201).json({"token":token,"userDetails":DocumentList[0]});
  }
  else
    return res.status(500).json({"token":"error"});
}
