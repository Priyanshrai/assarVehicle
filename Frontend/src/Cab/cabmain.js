import React from 'react'
import './cab.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cabmain() {
  
  return (
    <div>
   
      <div class="slider">
      
      <h1 style={{color:'white',padding:'10px',marginTop:'10px',marginLeft:'20%',fontWeight:'bold',}}>Choose Routes for your destination. </h1>
      
     <div class="container">
      <div className='row'>
	   <div class="col-md-6 col-md-offset-2">
	     <div class="vehicle_box"> 
		   <img src="assets/img/TIGOR_EVGREEN.png" class="img-responsive" style={{height:'200px',width:'400px'}}/>
		   <h2> Tata Tigor EV</h2>
		   <h1> Indore <img src="assets/img/arrow-pointing-to-right.png" width="28px"/>Bhopal Route</h1>
		   <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1"> Book Now </button>
		 </div>
	   </div>
	   
	    <div class="col-md-6">
	     <div class="vehicle_box"> 
		   <img src="assets/img/TIGOR_EVMAROON.png" class="img-responsive" style={{height:'200px',width:'400px'}}/>
		   <h2> Tata Tigor EV</h2>
		   <h1> Bhopal <img src="assets/img/arrow-pointing-to-right.png" width="28px"/> Indore Route</h1>
		  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1"> Book Now </button>
		 </div>
	   </div> 
     </div>
	   </div>
     </div>	
     <div class="row">
    <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
    <div class="card card-body">
    <div class="Inner_line">
    <div class="container">
    <div class="result_heading">
    <h4> Indore 
    <img src="assets/img/arrow-pointing-to-right_white.png" alt="" width="16px"/>
     Bhopal  | Tata Tigor EV ( AC Cab ) </h4>
     </div>
    </div>
    </div>
    <div class="serch_resultarea">
    <div class="container">
    <div class="date_object current_date">
     <h4>Today</h4>
     <h5>3 Aug</h5>	 
    </div>
    <div class="date_object ">     
     <h4>Mon</h4>
     <h5>4 Aug</h5>      
    </div>
    <div class="date_object ">     
     <h4>Tue</h4>
     <h5>5 Aug</h5>	 
    </div>
    <div class="date_object ">  
      <h4>Wed</h4>   
      <h5>6 Aug</h5>	 
    </div>
    
     <div class="date_object ">  
          <h4>Thu</h4>   
      <h5>7 Aug</h5>	 
    </div>
    
     <div class="date_object ">  
          <h4>Fri</h4>   
      <h5>8 Aug</h5>	 
    </div>
    
     <div class="date_object ">  
          <h4>Sat</h4>   
      <h5>9 Aug</h5>	 
    </div>
   </div>
 </div>  
 <div class="timing_backgroub">
    <div class="container">
      <div class="row">
    <div class="col-md-8"> 
     <h4> Available timings Of Cab</h4>
      <div class="timings time_disable">
       <button>  9:00 AM </button>
     </div>
     
     <div class="timings">
     <Link to="/seat"><button> 10:30 AM </button></Link>
       <div class="hide_price">
          <p>Regular Seat - Rs.425/-</p>
         <p>Window Seat - Rs.440/-</p>
         <img src="assets/img/sort-down.png"/>
       </div>
     </div>
     
     <div class="timings">
       <button > 11:30 AM </button>
             <div class="hide_price">
         <p>Regular Seat - Rs.425/-</p>
         <p>Window Seat - Rs.440/-</p>
         <img src="assets/img/sort-down.png"/>
       </div>
     </div>
     
     <div class="timings">
       <button > 1:00 PM </button>
        <div class="hide_price">
          <p>Regular Seat - Rs.425/-</p>
         <p>Window Seat - Rs.440/-</p>
         <img src="assets/img/sort-down.png"/>
       </div>
     </div>
     
     <div class="timings">
       <button data-toggle="modal" data-target="#myModal" > 2:30 PM </button>
        <div class="hide_price">
         <p>Regular Seat - Rs.425/-</p>
         <p>Window Seat - Rs.440/-</p>
         <img src="assets/img/sort-down.png"/>
       </div>
     </div>
     
     <div class="timings time_disable">
       <button > 3:45 PM </button>
     </div>
     
     <div class="timings">
       <button data-toggle="modal" data-target="#myModal" > 5:00 PM </button>
        <div class="hide_price">
         <p>Regular Seat - Rs.425/-</p>
         <p>Window Seat - Rs.440/-</p>
         <img src="assets/img/sort-down.png"/>
       </div>
     </div>
     
     <div class="timings">
       <button data-toggle="modal" data-target="#myModal" > 6:15 PM </button>
        <div class="hide_price">
          <p>Regular Seat - Rs.425/-</p>
         <p>Window Seat - Rs.440/-</p>
         <img src="assets/img/sort-down.png"/>
       </div>
     </div>
     
     <div class="timings">
       <button data-toggle="modal" data-target="#myModal" > 7:00 PM </button>
        <div class="hide_price">
         <p>Regular Seat - Rs.425/-</p>
         <p>Window Seat - Rs.440/-</p>
         <img src="assets/img/sort-down.png"/>
       </div>
     </div>
     
     <div class="timings">
       <button data-toggle="modal" data-target="#myModal" > 8:30 PM </button>
        <div class="hide_price">
          <p>Regular Seat - Rs.425/-</p>
         <p>Window Seat - Rs.440/-</p>
         <img src="assets/img/sort-down.png"/>
       </div>
     </div>
     
     <div class="timings">
       <button data-toggle="modal" data-target="#myModal" > 9:10 PM </button>
        <div class="hide_price">
         <p>Regular Seat - Rs.425/-</p>
         <p>Window Seat - Rs.440/-</p>
         <img src="assets/img/sort-down.png"/>
       </div>
     </div>
     
     <div class="timings">
       <button data-toggle="modal" data-target="#myModal" > 10:30 PM </button>
        <div class="hide_price">
         <p>Regular Seat - Rs.425/-</p>
         <p>Window Seat - Rs.440/-</p>
         <img src="assets/img/sort-down.png"/>
       </div>
     </div>
     
     <div class="timings">
       <button data-toggle="modal" data-target="#myModal" > 11:15 PM </button>
        <div class="hide_price">
         <p>Regular Seat - Rs.425/-</p>
         <p>Window Seat - Rs.440/-</p>
         <img src="assets/img/sort-down.png"/>
       </div>
     </div>
     </div>
    
    
    <div class="col-md-3 col-md-offset-1 mar_tp">
   
       <img src="assets/img/TIGOR_EVGREEN.png" class="img-responsive" style={{height:'180px',width:'360px'}}/>
      </div>
      <div class="col-md-12 mar_tp">
        <div class="detail_vehicle">
      <h4> Features of Safe Journey</h4>
       <ul>
      <li>Sedan A/C Seater (4+D)</li>
       <li> <img src="assets/img/i-ac.png" alt=""/> AC</li>
        <li> <img src="assets/img/battery-charge.png" alt=""/> Mobile Charger </li>
         <li> <img src="assets/img/water-bottle.png" alt=""/> Water Bottle</li>
        <li> <img src="assets/img/musical-note.png" alt=""/> Music </li>
         <li> <img src="assets/img/burguer.png" alt=""/> Snacks</li>
          <li>Comfortable Seats</li>
          <li>Journey timing - 3H 10M</li>
     </ul>
      
      </div>
     </div>
    
    
    
   </div> 
    </div>
  </div>
 
      </div>
    </div>
  </div>
  </div>
  <section id="cab_main" className="d-flex align-items-center">
  </section>


    



 




    
    </div>
  )
}

export default Cabmain