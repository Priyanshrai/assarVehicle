import '../model/connection.js';
import url from 'url';

//to link schema model
import CategorySchemaModel from '../model/category.model.js';

export var save=async (req,res,next)=>{
  var cDetails=req.body;
  var cList = await CategorySchemaModel.find();
  var l=cList.length;
  var _id=l==0?1:cList[l-1]._id+1;
  cDetails={...cDetails,"_id":_id};
  var c = await CategorySchemaModel.create(cDetails);
  if(c)
    return res.status(201).json({"msg":"success"});
  else
    return res.status(500).json({"error":"Server Error"});
}

export var fetch=async (req,res,next)=>{
  var condition_obj=url.parse(req.url,true).query;
  var cList = await CategorySchemaModel.find(condition_obj);
  if(cList.length!=0)
    return res.status(201).json(cList);
  else
    return res.status(500).json(cList);
}

export var deleteUser=async(req,res,next)=>{
  var id = req.params.id;
  var c = await CategorySchemaModel.find({_id: id});
  if(c.length!=0){
    let result = await CategorySchemaModel.deleteMany({_id:id}); 
    if(result)
     return res.status(201).json({"msg":"success"});
    else
     return res.status(500).json({error: "Server Error"});
  }
  else
    return res.status(404).json({error: "Resource not found"});             
}

export var updateUser=async(req,res,next)=>{
  let cDetails = await CategorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
  if(cDetails){
     let c=await CategorySchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
     if(c)
      return res.status(201).json({"msg":"success"});
     else
      return res.status(500).json({error: "Server Error"});
  }
  else
   return res.status(404).json({error: "Requested resource not available"});
}

export var login=async (req,res,next)=>{
  var userDetails=req.body;
  userDetails={...userDetails,"status":1};
  var userList = await UserSchemaModel.find(userDetails);
  if(userList.length!=0)
  {
    let payload={"subject":userList[0].email};  
    let token=jwt.sign(payload,"qwdbqkbdkqwd");
    return res.status(201).json({"token":token,"userDetails":userList[0]});
  }
  else
    return res.status(500).json({"token":"error"});
}