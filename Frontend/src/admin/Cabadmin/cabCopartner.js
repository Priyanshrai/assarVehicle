import './Cab.css';
import Sidebar from './Sidebar';
import {__apiURLVehicle, __apiURLUser } from '../../apiURL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState , useEffect, React } from 'react';



function CabCopartner() {

//get data table
const navigate = useNavigate();
  const [ userDetails , setUserDetails ] = useState([]); 

        useEffect(()=>{
          setInterval(()=>{
            axios.get(__apiURLUser+"fetch?role=user").then((response)=>{
              setUserDetails(response.data);
            }).catch((err)=>{
              console.log(err);
            });
          },100);
        },[]);

const manageSelfdriveStatus=(_id,sd)=>{
              if(sd=="blocked")
          {
            let updatesdDetails={"condition_obj":{"_id":_id},"content_obj":{"selfdrivestatus":0}}; 
            axios.patch(__apiURLUser+"update",updatesdDetails).then(()=>{
             navigate("/sdusermgmt");    
            }); 
           }
           else
           {
            let updatesdDetails={"condition_obj":{"_id":_id},"content_obj":{"selfdrivestatus":1}}; 
            axios.patch(__apiURLUser+"update",updatesdDetails).then(()=>{
             navigate("/sdusermgmt");   
            });
           } 
          }
     

const manageUserStatus=(_id,s)=>{
          if(s=="block")
          {
           let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}}; 
           axios.patch(__apiURLUser+"update",updateDetails).then(()=>{
            navigate("/sdusermgmt");    
           }); 
          }
          else if(s=="verify")
          {
           let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}}; 
           axios.patch(__apiURLUser+"update",updateDetails).then(()=>{
            navigate("/sdusermgmt");   
           });
          }
           else
          {
           axios.delete(__apiURLUser+"delete/"+_id).then(()=>{
            navigate("/sdusermgmt");   
           });
          }
        }


  
  return (
    <div>
  <div id="home-collapse"> 
  <div className='row'>
  <div className='col-lg-3'>
  <Sidebar/>
  </div>
  <div className='col-lg-9'>
  <center>
  <h1 id="vmd">Co-Partner List</h1></center>
  <div className='container-parcha' >
  <table id='tableuser' className="table table-bordered">
        <tr>
            <th>ID</th>
            <th>Name</th>    
            <th>Email</th>
            <th>Mobile</th>
            <th>Selfdrive Status</th>
            <th>Info</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
        {
        userDetails.map((row)=>(
        <tr>
        <td>{row._id}</td>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td>{row.mobile}</td>
        <td>
        {
        row.selfdrivestatus==0 &&
        <a style={{"color":"green"}} onClick={()=>{manageSelfdriveStatus(row._id,"verified")}} >Approved</a>
        }
        {
        row.selfdrivestatus==1 &&
        <a style={{"color":"orange"}} onClick={()=>{manageSelfdriveStatus(row._id,"blocked")}} >NotApproved</a>
        } 
        </td>
        <td>{row.info}</td>
        <td>
        { 
        row.status ==0 &&
        <a style={{"color":"green"}} onClick={()=>{manageUserStatus(row._id,"verify")}} >Verify User</a>
        }
        {
        row.status ==1 &&
        <a style={{"color":"orange"}} onClick={()=>{manageUserStatus(row._id,"block")}} >Block User</a>
        }    
        </td>
        <td>
        <a style={{"color":"red"}} onClick={()=>{manageUserStatus(row._id,"delete")}} >Delete</a>
        </td>
        </tr>
        ))

        }
  </table>
  </div>
  </div>
  </div>
  </div>
 
 </div>
  )
}

export default CabCopartner