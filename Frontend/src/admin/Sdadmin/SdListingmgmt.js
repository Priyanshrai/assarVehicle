import './sd.css';
import Sidebar from './Sidebar';
import {__apiURLVehicle, __apiURLUser,__apiURLState,__apiURLCity,__apiURLCountry, __apiURLListing } from '../../apiURL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState , useEffect, React } from 'react';



function SdListingmgmt() {

 const [file, setFile] = useState()
 const [output , setOutput] = useState();
 const [Brand , setBrand ] = useState();
 const [ Category , setCategory ] = useState();
 const [ Country , setCountry ] = useState();
 const [ State , setState ] = useState();
 const [ City , setCity ] = useState();
 const [ RNo , setRno ] = useState();
 const [ Segment , setSegment ] = useState();
 const [ vmodel , setvmodel ] = useState();
 const [ RateHour , setRateHour ] = useState();
 const [ RateHourUL , setRateHourUL ] = useState();
 const [ RateDay , setRateDay ] = useState();
 const [ RateDayUL , setRateDayUL ] = useState();
 const [ GSTsd , setGSTsd ] = useState();
 const [ Seat , setSeat ] = useState();
 const [ Fuel , setFuel ] = useState();
 const [ Transmission , setTransmission ] = useState();
 const [ Luggage , setLuggage ] = useState();
 const [ Year , setYear ] = useState();



//data collection
 const [ vehicledetails , setVehicleDetails ] = useState([]);
 const [ states , setStates ] = useState([]);
 const [ citys , setCitys ] = useState([]);
 const [ country , setCountrys ] = useState([]);
 
 
  
useEffect(()=>{
  setInterval(()=>{
   
    axios.get(__apiURLCity+"fetch?").then((response)=>{
      setCitys(response.data);
    }).catch((err)=>{
      console.log(err);
    });
    axios.get(__apiURLCountry+"fetch?").then((response)=>{
      setCountrys(response.data);
    }).catch((err)=>{
      console.log(err);
    });
    axios.get(__apiURLState+"fetch?").then((response)=>{
      setStates(response.data);
    }).catch((err)=>{
      console.log(err);
    });
    axios.get(__apiURLVehicle+"fetch?").then((response)=>{
      setVehicleDetails(response.data);
    }).catch((err)=>{
      console.log(err);
    });


    },2000)
},[]);
          


const handleChange=(event)=>{
  setFile(event.target.files[0])
}
const handleSubmit=(event)=>{
  event.preventDefault();

  var formData = new FormData();
  formData.append('category', Category);
  formData.append('country', Country);
  formData.append('state_code', State);
  formData.append('city', City);
  formData.append('registration_no', RNo);
  formData.append('year', Year);
  formData.append('segment', Segment);
  formData.append('vehicle_model', vmodel);
  formData.append('fuel', Fuel);
  formData.append('seat', Seat);
  formData.append('lugguage', Luggage);
  formData.append('transmission', Transmission);
  formData.append('gst', GSTsd);
  formData.append('rate_hour_ul', RateHourUL);
  formData.append('rate_hour', RateHour);
  formData.append('rate_day_ul', RateDayUL);
  formData.append('rate_day', RateDay);
  formData.append('brand', Brand);
  formData.append('img', file);


  const config = {
      'content-type': 'multipart/form-data'
  };
  axios.post(__apiURLListing+"save", formData, config).then((response) => {
    setOutput("Listing Update Succesfully.");
    setLuggage("");
    setSeat("");
    setFuel("");
    setFile("");
    setCategory("");
    setTransmission("");
    setGSTsd("");
    setRateDay("");
    setRateDayUL("");
    setRateHour("");
    setRateHourUL("");
    setSegment("");
    setvmodel("");
    setYear("");
    setRno("");
    setCountry("");
    setCity("");
    setState("");
    setBrand("");
    
    
  
  });
}

//get data table
const navigate = useNavigate();
  const [ userDetails , setUserDetails ] = useState([]); 

        useEffect(()=>{
          setInterval(()=>{
            axios.get(__apiURLListing+"fetch?").then((response)=>{
              setUserDetails(response.data);
            }).catch((err)=>{
              console.log(err);
            });
          },100);
        },[]);

const manageUserStatus=(_id,s)=>{
          if(s=="block")
          {
           let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}}; 
           axios.patch(__apiURLListing+"update",updateDetails).then(()=>{
            navigate("/sdlistingmgmt");    
           }); 
          }
          else if(s=="verify")
          {
           let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}}; 
           axios.patch(__apiURLListing+"update",updateDetails).then(()=>{
            navigate("/sdlistingmgmt");   
           });
          }
           else
          {
           axios.delete(__apiURLListing+"delete/"+_id).then(()=>{
            navigate("/sdlistingmgmt");   
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
  <h1 id="vmd">Listing Management</h1></center>
  <div className='container-parcha' >
  <font color="black">{output}</font>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Add New Listing
  </button>
  <div class="collapse" id="collapseExample">
  <div class="card card-body">
     <form>
        <h1 className="mgmt">Vehicle Listing Form</h1>
        <div class="col-auto my-1">
        <label class="mr-sm-2 mgmt" >Choose Category</label>
        <select class="custom-select mr-sm-2" value={Category} onChange={e => setCategory(e.target.value)}>
          <option>Choose Category </option>
          {
            vehicledetails.map((row)=>(
              <option>{row.category}</option>
            ))
          }
        </select>
        </div>
        <div class="col-auto my-1">
        <label class="mr-sm-2 mgmt" >Choose Country</label>
        <select class="custom-select mr-sm-2" value={Country} onChange={e => setCountry(e.target.value)}>
          <option>Choose Country </option>
          {
            country.map((row)=>(
              <option>{row.countrycode}</option>
            ))
          }
        </select>
        </div>
        <div class="col-auto my-1">
        <label class="mr-sm-2 mgmt" >Choose State</label>
        <select class="custom-select mr-sm-2" value={State} onChange={e => setState(e.target.value)}>
          <option>Choose State </option>
          {
            states.map((row)=>(
              <option>{row.statecode}</option>
            ))
          }
        </select>
        </div>
        <div class="col-auto my-1">
        <label class="mr-sm-2 mgmt" >Choose City</label>
        <select class="custom-select mr-sm-2" value={City} onChange={e => setCity(e.target.value)}>
          <option>Choose City </option>
          {
            citys.map((row)=>(
              <option>{row.citycode}</option>
            ))
          }
        </select>
        </div>
        <div class="col-auto my-1">
        <label class="mr-sm-2 mgmt" >Registration No.</label>
        <select class="custom-select mr-sm-2" value={RNo} onChange={e => setRno(e.target.value)}>
          <option>Choose Vehicle No.</option>
          {
            vehicledetails.map((row)=>(
              <option>{row.registration_no}</option>
            ))
          }
        </select>
        </div>
        <div class="col-auto my-1">
        <label class="mr-sm-2 mgmt"> </label>
        <select class="custom-select mr-sm-2" value={Brand} onChange={e => setBrand(e.target.value)}>
          <option>Choose Brand</option>
          {
            vehicledetails.map((row)=>(
              <option>{row.manufacturer_name}</option>
            ))
          }
        </select>
        </div>
        <div class="col-auto my-1">
        <label class="mr-sm-2 mgmt" >Manufactring Year</label>
        <select class="custom-select mr-sm-2" value={Year} onChange={e => setYear(e.target.value)}>
          <option>Choose Year</option>
          {
            vehicledetails.map((row)=>(
              <option>{row.manufacturing_year}</option>
            ))
          }
        </select>
        </div>
        <div class="col-auto my-1">
        <label class="mr-sm-2 mgmt" >Segment</label>
        <select class="custom-select mr-sm-2" value={Segment} onChange={e => setSegment(e.target.value)}>
          <option>Choose Segment</option>
          {
            vehicledetails.map((row)=>(
              <option>{row.segment}</option>
            ))
          }
        </select>
        </div>
        <div class="col-auto my-1">
        <label class="mr-sm-2 mgmt" >Model</label>
        <select class="custom-select mr-sm-2" value={vmodel} onChange={e => setvmodel(e.target.value)}>
          <option>Choose Model</option>
          {
            vehicledetails.map((row)=>(
              <option>{row.vehicle_model}</option>
            ))
          }
        </select>
        </div>
        <div class="col-auto my-1">
        <label class="mr-sm-2 mgmt" >Fuel Type</label>
        <select class="custom-select mr-sm-2" value={Fuel} onChange={e => setFuel(e.target.value)}>
          <option>Choose Fuel</option>
          {
            vehicledetails.map((row)=>(
              <option>{row.fuel}</option>
            ))
          }
        </select>
        </div>
        <div class="col-auto my-1">
        <label class="mr-sm-2 mgmt" >Seat Capacity</label>
        <select class="custom-select mr-sm-2" value={Seat} onChange={e => setSeat(e.target.value)}>
          <option>Choose Seating Capacity</option>
          {
            vehicledetails.map((row)=>(
              <option>{row.seat}</option>
            ))
          }
        </select>
        </div>
        <div class="col-auto my-1">
        <label class="mr-sm-2 mgmt" >Luggage Capacity</label>
        <select class="custom-select mr-sm-2" value={Luggage} onChange={e => setLuggage(e.target.value)}>
          <option value="0">Choose Luggage Capacity</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          </select>
        </div>
        <div class="col-auto my-1">
        <label class="mr-sm-2 mgmt" >Transmission Type</label>
        <select class="custom-select mr-sm-2" value={Transmission} onChange={e => setTransmission(e.target.value)}>
        <option value="CT">Choose Transmission</option>
        <option value="Manual">Manual Transmission</option>
        <option value="Automatic">Automatic Transmission</option>
        <option value="AMT">Automatic Manual Transmission</option>
        </select>
        </div>
        <div className='form-groupone'>
          <label className='mgmt'>Rate Per Hour for 400 km</label>
          <input type='Number' className='form-control' value={RateHour} onChange={(e)=>setRateHour(e.target.value)} placeholder='EnterRate Per Hour 400 Km' />
        </div>
        <div className='form-groupone'>
          <label className='mgmt'>Rate Per Hour Unlimited Km</label>
          <input type='Number' className='form-control' value={RateHourUL} onChange={(e)=>setRateHourUL(e.target.value)} placeholder='Enter Rate Per Hour Unlimited Km' />
        </div>
        <div className='form-groupone'>
          <label className='mgmt'>Rate Per Day for 400 km</label>
          <input type='Number' className='form-control' value={RateDay} onChange={(e)=>setRateDay(e.target.value)} placeholder='Enter Rate Per Day 400 Km' />
        </div>
        <div className='form-groupone'>
          <label className='mgmt'>Rate Per Day Unlimited Km</label>
          <input type='Number' className='form-control' value={RateDayUL} onChange={(e)=>setRateDayUL(e.target.value)} placeholder='Enter Rate Per Day Unlimited Km' />
        </div>
        <div className='form-groupone'>
          <label className='mgmt'>GST Rate</label>
          <input type='Number' className='form-control' value={GSTsd} onChange={(e)=>setGSTsd(e.target.value)} placeholder='Enter GST Rate' />
        </div>
        <div className='form-groupone'>
        <label className='mgmt'>Vehicle Image</label>
        <input type='file' className='form-control' onChange={handleChange} />
        </div>
        
    
  

  <button id="b5" type="button" onClick={handleSubmit} class="btn btn-primary" >Submit</button>
 </form>
 </div>
  </div>
  <table id='tableuser' className="table table-bordered">
        <tr>
            <th>ID</th>
            <th>Co.Code</th>    
            <th>St.Code</th>
            <th>C.Code</th>
            <th>Listing Image</th>
            <th>Registration No.</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
        {
        userDetails.map((row)=>{
          const image='/assets/listing/img/'+row.img;


          return(

        <tr>
        <td>{row._id}</td>
        <td>{row.country}</td>
        <td>{row.state_code}</td>
        <td>{row.city}</td>
        <td><img src={image} height="120" width="150" /></td>
        <td>{row.registration_no}</td>
        <td>
        { 
        row.status ==0 &&
        <a style={{"color":"green"}} onClick={()=>{manageUserStatus(row._id,"verify")}} >Break Down</a>
        }
        {
        row.status ==1 &&
        <a style={{"color":"orange"}} onClick={()=>{manageUserStatus(row._id,"block")}} >Live</a>
        }    
        </td>
        <td>
        <a style={{"color":"red"}} onClick={()=>{manageUserStatus(row._id,"delete")}} >Delete</a>
        </td>
        </tr>
        )
      })

        }
  </table>
  </div>
  </div>
  </div>
  </div>
 
 </div>
  )
}

export default SdListingmgmt