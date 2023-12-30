import '../model/connection.js';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//to link schema model
import SegmentSchemaModel from '../model/segment.model.js';

export var save=async (req,res,next)=>{
  var dDetails=req.body;
 
  var img=req.files.img;
  var Img=Date.now()+"-"+img.name;
  
  var uploadpath=path.join(__dirname,"../../../Frontend/assarapp/public/assets/images",Img);
  img.mv(uploadpath);
  dDetails.img=Img;
 
  var dList = await SegmentSchemaModel.find();
  var l=dList.length;    
  var _id=l==0?1:dList[l-1]._id+1;
  dDetails={...dDetails,"_id":_id,"status":0,"info":Date()};
 
  var e = await SegmentSchemaModel.create(dDetails);
  if(e)
    return res.status(201).json({"msg":"success"}); 
  else
return res.status(500).json({"error":"Server Error"});
}

export var fetch=async (req,res,next)=>{
  var condition_obj=url.parse(req.url,true).query;
  var dList = await SegmentSchemaModel.find(condition_obj);
  if(dList.length!=0)
    return res.status(201).json(dList);
  else
    return res.status(500).json(dList);
}

export var deleteDocument=async(req,res,next)=>{
  var vid = req.params.vid;
  var d = await SegmentSchemaModel.find({_vid: vid});
  if(d.length!=0){
    let result = await SegmentSchemaModel.deleteMany({_vid:vid}); 
    if(result)
     return res.status(201).json({"msg":"success"});
    else
     return res.status(500).json({error: "Server Error"});
  }
  else
    return res.status(404).json({error: "Resource not found"});             
}
  
export var updateDocument=async(req,res,next)=>{
  let dDetails = await SegmentSchemaModel.findOne((req.body.condition_obj));
  if(dDetails){
     let d=await SegmentSchemaModel.updateOne((req.body.condition_obj),{$set: (req.body.content_obj)});   
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
  var DocumentList = await SegmentSchemaModel.find(documentDetails);
  if(DocumentList.length!=0)
  {
    let payload={"subject":DocumentList[0].email};  
    let token=jwt.sign(payload,"qwdbqkbdkqwd");
    return res.status(201).json({"token":token,"userDetails":DocumentList[0]});
  }
  else
    return res.status(500).json({"token":"error"});
}