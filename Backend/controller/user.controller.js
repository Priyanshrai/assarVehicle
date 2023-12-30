import '../model/connection.js';
import url from 'url';
import jwt from 'jsonwebtoken';
import sendMail from './emailapi.controller.js';

//to link schema model
import UserSchemaModel from '../model/user.model.js';

export var save=async (req,res,next)=>{
  var userDetails=req.body;
  var userList = await UserSchemaModel.find();
  var l=userList.length;
  var _id=l==0?1:userList[l-1]._id+1;
  userDetails={...userDetails,"_id":_id,"status":0,"role":"user","selfdrivestatus":0,"gender":"male","city":"indore","info":Date()};
  var user = await UserSchemaModel.create(userDetails);
  if(user)
{   sendMail(userDetails.email,userDetails.password)
    return res.status(201).json({"result":"User Registration Succesfully"});
}
   
  else
    return res.status(500).json({"error":"Server Error"});
}

export var fetch=async (req,res,next)=>{
  var condition_obj=url.parse(req.url,true).query;
  var userList = await UserSchemaModel.find(condition_obj);
  if(userList.length!=0)
    return res.status(201).json(userList);
  else
    return res.status(500).json(userList);
}

export var deleteUser=async(req,res,next)=>{
  var id = req.params.id;
  var user = await UserSchemaModel.find({_id: id});
  if(user.length!=0){
    let result = await UserSchemaModel.deleteMany({_id:id}); 
    if(result)
     return res.status(201).json({"msg":"success"});
    else
     return res.status(500).json({error: "Server Error"});
  }
  else
    return res.status(404).json({error: "Resource not found"});             
}

export var updateUser=async(req,res,next)=>{
  let userDetails = await UserSchemaModel.findOne((req.body.condition_obj));
  //console.log(userDetails);
  if(userDetails){
     let user=await UserSchemaModel.updateOne((req.body.condition_obj),{$set:(req.body.content_obj)});   
     if(user)
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