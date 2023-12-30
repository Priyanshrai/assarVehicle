import React from 'react';
import './Choosetaxi.css';
import {Link} from 'react-router-dom';

function Choosetaxi() {
  return (
    
<div>
 <main id="main">
  <section id="login" className="login_sec">
   <div className="container-fluid">
    <div className="row no-gutter">
     <div className="col-md-6 bg-light">
      <div className="login d-flex align-items-center py-2">
        <div className="container">
          <div className='row'>
          <div className="col-lg-1 bg-light"></div>
          <div className="col-lg-10">
           <div className="btn-group btn-group-lg">
           <button type="button" className="btn btn-primary"><Link to="/choosetaxi" style={{color: 'black'}}>CITY TAXI</Link></button>
           <button type="button" className="btn btn-primary"><Link to="/outstation" style={{color: 'black'}}>OUT STATION</Link></button>
           <button type="button" className="btn btn-primary"><Link to="/rentals" style={{color: 'black'}}>RENTALS</Link></button>
            </div>
            <div className="col-lg-1 bg-light"></div>          
           <div className="col-lg-12 d-flex text-center">
            <span className="choosehome text-center">
              <h2>Your everday travel partner</h2>
              <h6>AC cabs for point to point travel</h6>
              <hr style={{background: '#000066',color: '#000066',borderColor: '#000066',height: '5px',borderRadius:'8px'}}/>
            </span>
            </div>  
            </div>  
            <div className="col-lg-12">
             <div className="city">
               <h4>City</h4>
               <div className="form_all">
                 <form className="city">
                 <div className="row">
                   <div className="col-lg-12 mb-4">
                     <div className="form-group">
                      <input type="text" className="form-control"  placeholder="Enter City Location" aria-describedby required />
                      <span className="icon_form_add"><i className="icofont-location-arrow" /></span>
                     </div>
                     </div>
                     <h4>Locations</h4>       
                     <div className="col-lg-12 mb-4">
                       <div className="form-group">
                       <input type="text" className="form-control"  placeholder="Pick up Location" aria-describedby required />
                       <span className="icon_form_add"><i className="icofont-location-arrow" /></span>
                       </div>
                     </div>
                     <div className="col-lg-12 mb-4">
                       <div className="form-group">
                       <input type="text" className="form-control"  placeholder="DropLocation" aria-describedby required />
                       <span className="icon_form_add"><i className="icofont-location-arrow" /></span>
                       </div>
                     </div>
                     <div className='row'>
                     <div className="col-lg-2 bg-light"></div>   
                     <div className="col-lg-8 align-centre">
                     <div className="btn-group btn-group-lg">
                      <button type="button" className="btn btn-secondary">NOW</button>
                      <button type="button" className="btn btn-secondary" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">SCHEDULE FOR LATER</button>
                      </div>
                      <div className="col-lg-2 bg-light"></div>
                      </div> 
                      </div> 
                      <div className="collapse" id="collapseExample">
                      <div className="row">
                      <div className="col-lg-2 bg-light"></div>
                     <div className="col-lg-5 m-2">
                     <label>Date</label>
                     <input type="date" className="form-control" />
                     </div>
                    <div className="col-lg-4 m-2">
                    <label>Time</label>
                    <input type="time" className="form-control" />
                    </div>
                   <div className="col-lg-1 bg-light"></div>
                   </div>
                      
                      </div>
                      
                     <div className='row'>
                     <div className="col-lg-3 bg-light"></div>  
                     
                     <div className="col-lg-8">
                       <div className="btn-group btn-group-lg">
                        <button type="button" className="btn btn-terniary" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Search Cab</button>
                       </div>
                       <div className="col-lg-1 bg-light"></div>  
                       </div>
                     </div>
                     </div>
                   </form>
                 </div>
               </div>
             </div>
           </div>
           <div className="accordion" id="accordionExample">
               </div>
               <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
               <div className="card-body">
                 <h4>Available Vehicles</h4>
                    <div className="tabular mt-2">
                    <div className="row">
                    <div className="col-md-4">
                     <img src="assets/img/hatchback-car-i10.svg" className="img-fluid"/>
                     <p>Hatchback</p>
                    </div>
                    <div className="col-md-5">
                    <h6>Hatchback with pocket friendly fares</h6>
                    <div>
                    <hr style={{background: 'white',color: 'white',borderColor: 'white',height: '3px'}}/>
                    </div>
                    <h6>Estimated time to reach 5-Min </h6>
                    </div>
                    <div className="col-md-3">
                    <div>
                    <h4>Rs.390</h4>
                    </div>
                    </div>
                    </div>
                    </div> 
                    <div className="tabular mt-2">
                    <div className="row">
                    <div className="col-md-4">
                     <img src="assets/img/svg-image-i20.png" className="img-fluid"/>
                     <p>Premium Hatchback</p>
                    </div>
                    <div className="col-md-5">
                    <h6>Hatchback with pocket friendly fares</h6>
                    <div>
                    <hr style={{background: 'white',color: 'white',borderColor: 'white',height: '3px'}}/>
                    </div>
                    <h6>Estimated time to reach 5-Min </h6>
                    </div>
                    <div className="col-md-3">
                    <div>
                    <h4>Rs.390</h4>
                    </div>
                    </div>
                    </div>
                    </div> 
                    <div className="tabular mt-2">
                    <div className="row">
                    <div className="col-md-4">
                     <img src="assets/img/sedan-car.png" className="img-fluid"/>
                     <p>Sedan</p>
                    </div>
                    <div className="col-md-5">
                    <h6>Sedan suits your personality</h6>
                    <div>
                    <hr style={{background: 'white',color: 'white',borderColor: 'white',height: '3px'}}/>
                    </div>
                    <h6>Estimated time to reach 5-Min </h6>
                    </div>
                    <div className="col-md-3">
                    <div>
                    <h4>Rs.390</h4>
                    </div>
                    </div>
                    </div>
                    </div> 
                    <div className="tabular mt-2">
                    <div className="row">
                    <div className="col-md-4">
                     <img src="assets/img/marazzo.png" className="img-fluid"/>
                     <p>MUV</p>
                    </div>
                    <div className="col-md-5">
                    <h6>MUV for your family occassion</h6>
                    <div>
                    <hr style={{background: 'white',color: 'white',borderColor: 'white',height: '3px'}}/>
                    </div>
                    <h6>Estimated time to reach 5-Min </h6>
                    </div>
                    <div className="col-md-3">
                    <div>
                    <h4>Rs.390</h4>
                    </div>
                    </div>
                    </div>
                    </div> 
                    </div>
                    </div>
           
          </div>
        </div>
      </div>
      <div className="col-md-6 d-none d-md-flex bg-image" />
    </div>
   </div>
  </section>
 </main>    
</div>
  )
}

export default Choosetaxi