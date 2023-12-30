import './Cab.css';
import { useNavigate } from 'react-router-dom';
import { useState , useEffect, React } from 'react';
import { __apiURLCountry } from '../../apiURL';
import axios from 'axios';
import Sidebar from './Sidebar';



function Cabcountrymgmt() {
  const navigate = useNavigate();
  const [ output , setOutput ] = useState();
  const [ userDetails , setUserDetails ] = useState([]);
  const [country , SetCountry] =useState();
  const [code,SetCode] =useState();
  const [number, SetNumber]=useState();
  const [moffice, SetMoffice]=useState();
  const [date, SetDate]=useState();



  
          useEffect(()=>{
            setInterval(()=>{
              axios.get(__apiURLCountry+"fetch").then((response)=>{
                setUserDetails(response.data);
              }).catch((err)=>{
                console.log(err);
              });
            },10);
          },[]);
  
      
  const manageUserStatus=(_id,s)=>{
            if(s=="block")
            {
             let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}}; 
             axios.patch(__apiURLCountry+"update",updateDetails).then(()=>{
              navigate("/sdcountrymgmt");    
             }); 
            }
            else if(s=="verify")
            {
             let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}}; 
             axios.patch(__apiURLCountry+"update",updateDetails).then(()=>{
              navigate("/sdcountrymgmt");   
             });
            }
             else
            {
             axios.delete(__apiURLCountry+"delete/"+_id).then(()=>{
              navigate("/sdcountrymgmt");   
             });
            }
          }

          const handleSubmit =(evt)=> {
          evt.preventDefault();
          let countryDetails ={"countryname":country,"countrycode":code,"number":number,"moaddress":moffice,"date":date};
          axios.post(__apiURLCountry+"save",countryDetails).then((response)=>{
            setOutput(response.data.result);
            SetDate('');
            SetCode('');
            SetNumber('');
            SetCountry('');
            SetMoffice('');
            }).catch((err)=>{
            console.log(err);
          });

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
  <h1 id="vmd">Country Management</h1></center>
  <div className='container-parcha'>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Add New Country
  </button>
  <div class="collapse" id="collapseExample">
  <div class="card card-body">
  <font id="sucmsg" style={{"color":"#000066"}}>{output}</font>
  <form>
 <div class="form-groupone">
  <label className='mgmt' for="exampleInputEmail1">Country Name</label>
  <input type="text" class="form-control" value={country} onChange={(e)=>SetCountry(e.target.value)} placeholder="Enter Country Name" />
</div>
<div class="form-groupone">
  <label className='mgmt' for="exampleInputPassword1">Country Code</label>
  <input type="string" class="form-control" value={code} onChange={(e)=>SetCode(e.target.value)} placeholder="Enter Country Code" />
</div>
<div class="form-groupone">
  <label className='mgmt' for="exampleInputPassword2">Contact Number</label>
  <input type="string" class="form-control" value={number} onChange={(e)=>SetNumber(e.target.value)} placeholder="Enter Country Dial Code" />
</div>
<div class="form-groupone">
  <label className='mgmt' for="exampleInputPassword3">Main Office Address</label>
  <input type="string" class="form-control" value={moffice} onChange={(e)=>SetMoffice(e.target.value)} placeholder="Enter Country Status" />
</div>
<div class="form-groupone">
  <label className='mgmt' for="exampleInputPassword3">Start Date</label>
  <input type="Date" class="form-control" value={date} onChange={(e)=>SetDate(e.target.value)} placeholder="Ente working Start date " />
</div>
<button id="b5" type="button" onClick={handleSubmit} class="btn btn-primary">Submit</button>
</form>
</div>
</div>
<table id='tableuser' className="table table-bordered">
        <tr>
            <th>ID</th>
            <th>Country Name</th>    
            <th>Country Code</th>
            <th>Number</th>
            <th>Main office Address</th>
            <th>Start Date</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
        {
        userDetails.map((row)=>(
        <tr>
        <td>{row._id}</td>
        <td>{row.countryname}</td>
        <td>{row.countrycode}</td>
        <td>{row.number}</td>
        <td>{row.moaddress}</td>
        <td>{row.date}</td>
        <td>
        { 
        row.status ==0 &&
        <a style={{"color":"green"}} onClick={()=>{manageUserStatus(row._id,"verify")}} >Working</a>
        }
        {
        row.status ==1 &&
        <a style={{"color":"orange"}} onClick={()=>{manageUserStatus(row._id,"block")}} >Closed</a>
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

export default Cabcountrymgmt