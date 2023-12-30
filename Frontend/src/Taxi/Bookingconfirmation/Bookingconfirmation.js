import React from 'react';
import {Link} from 'react-router-dom';
import './Bookingconfirmation.css';

function Bookingconfirmation() {
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  return (
    
<div>
 <main id="main">
  <div className="row">
    <div className="col-lg-6 bg-light">
      <div className="confirmation">
      <div className="row">
      <div className="col-lg-2 bg-light"></div>
        <div className="col-lg-8 align-self-center">
          <img src="assets/img/hatchback-car-i10.svg" className="img-fluid"/>
          <hr style={{background: 'white',color: 'white',borderColor: 'white',height: '3px'}}/>
          <p>Hatchback</p>
        </div>
        <div className="col-lg-2 bg-light"></div>
        </div>
      </div>
     <div className="tag">
     <h6 >Estimated time to reach 5 - Min </h6>
      <div className="row box">
      <div className="col-lg-5">
      <h3>City</h3>
      <h3>Pick-up Location</h3>
      <h3>Drop-Location</h3>
      </div>
      <div className="col-lg-1">
      <h3>&#8212;</h3>
      <h3>&#8212;</h3>
      <h3>&#8212;</h3>
      </div>
      <div className="col-lg-6">
      <h3>Indore</h3>
      <h3>Vijay Nagar</h3>
      <h3>Bangali Square</h3>
      </div>
      </div>
     </div>
     <div className="tagtwo">
      <div className="row boxtwo">
      <div className="col-lg-12 text-center">
      <h3>About 9.5 km and 30 Min </h3>
      <hr style={{background: '#000066',color: '#000066',borderColor: '#000066',height: '3px',width: '200px',borderRadius: '2px'}}/>
      <h2>&#8377; 90/- </h2>
      </div>
      <div className="col-lg-12 text-center">
      <h3>Estimated Fare</h3>
      <hr style={{background: 'black',color: 'black',borderColor: 'black',height: '1px'}}/>
    <h5>See fare Details</h5>

      </div>
      </div>
      </div>
      
  

     <div className="tagthree">
      <div className="row boxthree">
      <div className="col-md-12">
      <p>
      <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
      <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
      <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
      <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
      <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
      </p>
      <hr style={{background: 'black',color: 'black',borderColor: 'black',height: '1px'}}/>

  
      <h5>See fare Details</h5>
     
      </div>
      </div>
     
     </div>
     <div className="paymentmode">
     <h6>Payment by</h6>
     <div className="row">
     <div className="col-md-12 align-self-center">
     <select class="form-select form-select-lg mb-12" aria-label=".form-select-lg example">
     <option selected>PAYMENT MODE</option>
     <option value="1">Cash</option>
     <option value="2">UPI</option>
     <option value="3">OTHER</option>
   </select>
   <h6>COUPON CODE</h6>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" ENTER CODE " />
  </div>
   </div>
   </div>
   <div className="confirmbook">
   <div className="row">
   <div className="col-md-12 text-center">
   <button className="btn" type="button">Confirm and Book</button>
   
   
   <div className="maptwo">
   <div className="row">
   <div className="col-md-12 text-center">
   <h3>Pick-up Locations In map</h3>
   <div style={{width: '100%'}}>
     <iframe width="89.99%" height={400} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=indore%20+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed" /></div>
   
   
   </div>
   </div>
   </div>

  


   


   </div>
   </div> 
   </div>

      </div>  
  
      
 
      <div className="col-md-6 d-none d-md-flex bg-image" /> 
      
   </div>
   </main>    
</div>
      
    
    
  )
}

export default Bookingconfirmation;