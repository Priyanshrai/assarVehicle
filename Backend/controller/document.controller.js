import '../model/connection.js';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//to link schema model
import DocumentSchemaModel from '../model/document.model.js';

export var save=async (req,res,next)=>{
  var dDetails=req.body;
 
  var aadharfront=req.files.aadharfront;
  var aadharback=req.files.aadharback;
  var dlfront=req.files.dlfront;
  var dlback=req.files.dlback;
  var selfie=req.files.selfie;
  var aadharfrontname=Date.now()+"-"+aadharfront.name;
  var aadharbackname=Date.now()+"-"+aadharback.name;
  var dlfrontname=Date.now()+"-"+dlfront.name;
  var dlbackname=Date.now()+"-"+dlback.name;
  var selfiename=Date.now()+"-"+selfie.name;
  
  var uploadpath=path.join(__dirname,"../../../Frontend/assarapp/public/assets/uploads/aadharfront",aadharfrontname);
  aadharfront.mv(uploadpath);
  var uploadpath=path.join(__dirname,"../../../Frontend/assarapp/public/assets/uploads/aadharback",aadharbackname);
  aadharback.mv(uploadpath);
  var uploadpath=path.join(__dirname,"../../../Frontend/assarapp/public/assets/uploads/dlfront",dlfrontname);
  dlfront.mv(uploadpath);
  var uploadpath=path.join(__dirname,"../../../Frontend/assarapp/public/assets/uploads/dlback",dlbackname);
  dlback.mv(uploadpath);
  var uploadpath=path.join(__dirname,"../../../Frontend/assarapp/public/assets/uploads/selfie",selfiename);
  selfie.mv(uploadpath);
  //server end coppy
  var uploadpath=path.join(__dirname,"../../../Backend/uploads/aadharfront",aadharfrontname);
  aadharfront.mv(uploadpath);
  var uploadpath=path.join(__dirname,"../../../Backend/uploads/aadharback",aadharbackname);
  aadharback.mv(uploadpath);
  var uploadpath=path.join(__dirname,"../../../Backend/uploads/dlfront",dlfrontname);
  dlfront.mv(uploadpath);
  var uploadpath=path.join(__dirname,"../../../Backend/uploads/dlback",dlbackname);
  dlback.mv(uploadpath);
  var uploadpath=path.join(__dirname,"../../../Backend/uploads/selfie",selfiename);
  selfie.mv(uploadpath);
//nw start heare  
  dDetails.aadharfrontname=aadharfrontname;
  dDetails.aadharbackname=aadharbackname;
  dDetails.dlfrontname=dlfrontname;
  dDetails.dlbackname=dlbackname;
  dDetails.selfiename=selfiename;
 
  var dList = await DocumentSchemaModel.find();
  var l=dList.length;
  var _id=l==0?1:dList[l-1]._id+1;
  dDetails={...dDetails,"_id":_id,"status":0,"info":Date()};
  var d = await DocumentSchemaModel.create(dDetails);
  if(d)
    return res.status(201).json({"msg":"success"});
  else
    return res.status(500).json({"error":"Server Error"});
}

export var fetch=async (req,res,next)=>{
  var condition_obj=url.parse(req.url,true).query;
  var dList = await DocumentSchemaModel.find(condition_obj);
  if(dList.length!=0)
    return res.status(201).json(dList);
  else
    return res.status(500).json(dList);
}

export var deleteDocument=async(req,res,next)=>{
  var id = req.params.id;
  var d = await DocumentSchemaModel.find({_id: id});
  if(d.length!=0){
    let result = await DocumentSchemaModel.deleteMany({_id:id}); 
    if(result)
     return res.status(201).json({"msg":"success"});
    else
     return res.status(500).json({error: "Server Error"});
  }
  else
    return res.status(404).json({error: "Resource not found"});             
}

export var updateDocument=async(req,res,next)=>{
  let dDetails = await DocumentSchemaModel.findOne((req.body.condition_obj));
  if(dDetails){
     let d=await DocumentSchemaModel.updateOne((req.body.condition_obj),{$set: (req.body.content_obj)});   
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
  var DocumentList = await DocumentSchemaModel.find(documentDetails);
  if(DocumentList.length!=0)
  {
    let payload={"subject":DocumentList[0].email};  
    let token=jwt.sign(payload,"qwdbqkbdkqwd");
    return res.status(201).json({"token":token,"userDetails":DocumentList[0]});
  }
  else
    return res.status(500).json({"token":"error"});
}