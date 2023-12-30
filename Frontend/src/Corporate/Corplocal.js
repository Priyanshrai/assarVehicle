import React from 'react';
import {Link} from 'react-router-dom';
import './corporate.css';

function Corplocal() {
  return (
    <div>
      <section id="corpmain" className="d-flex align-items-center">
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>  
          </div>
      </section>
      <div className='crm'>
      <div className='row'>
      <div className='col-lg-3 bg-light'></div>
      <div className='col-lg-6'>
      <div className="btn-group btn-group-lg">
      <button type="button" className="btn btn-primary"><Link to="/corpoutstation" style={{color: 'white'}}>OUT STATION</Link></button>
      <button type="button" className="btn btn-primary"><Link to="/corplocal" style={{color: 'white'}}>LOCAL</Link></button>
      <button type="button" className="btn btn-primary"><Link to="/corptransportation" style={{color: 'white'}}>TRANSPORTATION</Link></button>
      <button type="button" className="btn btn-primary"><Link to="/corptaxi" style={{color: 'white'}}>TAXI</Link></button>
       </div>
       <div className='col-lg-3 bg-light'></div>
       </div>
       </div>
       </div>
       <form>
       <div className='row'>
       <div className='col-lg-4 bg-light'></div>
       <div className='col-lg-4'>
                     <div className="form-group">
                     <label id='lbl'>Enter City</label>
                      <input type="text" className="form-control"  placeholder="Enter City Location" aria-describedby required />
                      <span className="icon_form_add"><i className="icofont-location-arrow" /></span>
                     </div>
       <div className='col-lg-4 bg-light'></div>
       </div>
       </div>
       <div className='row'>
       <div className='col-lg-1 bg-light'></div>
       <div className='col-lg-5'>
        <div className="form-group">
        <label id='lbl'>Pick up Location</label>
        <input type="text" className="form-control"  placeholder="Enter Pick up Location" aria-describedby required />
        <span className="icon_form_add"><i className="icofont-location-arrow" /></span>
        </div>
        </div>
        <div className='col-lg-5'>
        <div className="form-group">
        <label id='lbl'>Drop Location</label>
        <input type="text" className="form-control"  placeholder="Enter Drop Location" aria-describedby required />
        <span className="icon_form_add"><i className="icofont-location-arrow" /></span>
        </div>
        </div>
        <div className='col-lg-1 bg-light'></div>
        </div>

        <div className='row'>
       <div className='col-lg-1 bg-light'></div>
       <div className='col-lg-5'>
        <div className="form-group">
        <label id='lbl'>Journey type</label>
        <div className="btn-group btn-group-lg">
        <button type="button" className="btn btn-secondary" data-toggle="collapse1" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">One Way</button>
        <button type="button" className="btn btn-secondary" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Round Trip</button>
        </div>
        </div>
        </div>
        <div className='col-lg-5'>
        <div className="form-group">
        <div className="collapse" id="collapseExample">
                      <div className="row">
                      <div className="col-lg-2 bg-light"></div>
                     <div className="col-lg-5 m-2">
                     <label>Return Date</label>
                     <input type="date" className="form-control" />
                     </div>
                    <div className="col-lg-4 m-2">
                    <label>Return Time</label>
                    <input type="time" className="form-control" />
                    </div>
                   <div className="col-lg-1 bg-light"></div>
                   </div>
                      </div>
                      <div className="collapse1" id="collapseExample1">
                      <div className="row">
                      <div className="col-lg-2 bg-light"></div>
                     <div className="col-lg-5 m-2">
                     <label>Depart Date</label>
                     <input type="date" className="form-control" />
                     </div>
                    <div className="col-lg-4 m-2">
                    <label>Depart Time</label>
                    <input type="time" className="form-control" />
                    </div>
                   <div className="col-lg-1 bg-light"></div>
                   </div>
                    </div>
                    </div>
                    </div>
                    <div className='col-lg-1 bg-light'></div>
                    </div>
                    <div className='row'>
                    <div className='col-lg-1 bg-light'></div>
                    <div className='col-lg-5'>
                     <div className="form-group">
                     <label id='lbl'>Extra Location</label>
                     <div className="btn-group btn-group-lg">
                     <button type="button" className="btn btn-secondary" data-toggle="collapse2" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">Pick up Locations</button>
                     <button type="button" className="btn btn-secondary" data-toggle="collapse3" data-target="#collapseExampl3" aria-expanded="false" aria-controls="collapseExample3">Drop Locations</button>
                     </div>
                     </div>
                     </div>
                     <div className='col-lg-5'>
                     <div className="form-group">
                     <div className="collapse2" id="collapseExample2">
                                   <div className="row">
                                   <div className="col-lg-2 bg-light"></div>
                                  <div className="col-lg-8 m-2">
                                  <label>Pickup points</label>
                                  <input type="text" className="form-control" />
                                  </div>
                                <div className="col-lg-2 bg-light"></div>
                                </div>
                                   </div>
                                   <div className="collapse3" id="collapseExample3">
                                   <div className="row">
                                   <div className="col-lg-2 bg-light"></div>
                                  <div className="col-lg-8 m-2">
                                  <label>Drop Points</label>
                                  <input type="text" className="form-control" />
                                  </div>
                                <div className="col-lg-2 bg-light"></div>
                                </div>
                                 </div>
                                 </div>
                                 </div>
                                 <div className='col-lg-1 bg-light'></div>
                                 </div>           

                    
        <div className='row'>
        <div className='col-lg-4 bg-light'></div>
        <div className='col-lg-4'>
        <div className="form-group">
        <div className="btn-group btn-lg">
        <button type="button" className="btn btn-secondary">Search Vehicle</button>
        </div>
        </div>
        <div className='col-lg-4 bg-light'></div>
        </div>
        </div>
        </form>
        {/*Search bar*/}
        <div className='row'>
        <div className='col-lg-1 bg-light'></div>
        <div className='col-lg-5 mt-4'>
        <div id='card_corp'>
        <span class="ab" style={{color:'white'}}>Rate Rs.1800/Day</span>
        <img src="assets/img/Untitled (1).png" style={{width:'240px',height:'200px'}} className="img-fluid"/>
        <h3 style={{color:'white'}}>Sedan Car</h3>
        <div>
        <hr style={{background:'white',color:'white',borderColor:'white',height:'3px',width:'400px'}}/>
        </div>
        <h6 style={{color:'white'}}>Ideal for 4 - People</h6>
        <span>
        <Link to="/billpay"><button className="btn btn-primary form_btn book_now" type="submit">Book Now</button></Link>
        </span>
        </div>
        </div>
         <div className='col-lg-5 mt-4'>
         <div id='card_corp'>
         <span class="ab" style={{color:'white'}}>Rate Rs.1800/Day</span>
        <img src="assets/img/Untitled.png" style={{width:'200px',height:'200px',margin:'2px'}} className="img-fluid"/>
        <h3 style={{color:'white'}}>MUV Car</h3>
        <div>
        <hr style={{background:'white',color:'white',borderColor:'white',height:'3px',width:'400px'}}/>
        </div>
        <h6 style={{color:'white'}}>Ideal for 7 - People</h6>
        <span>
        <Link to="/billpay"><button className="btn btn-primary form_btn book_now" type="submit">Book Now</button></Link>
        </span>
        </div>
         </div>
         <div className='col-lg-1 bg-light'></div>
         </div>
         
         <div className='row'>
        <div className='col-lg-1 bg-light'></div>
        <div className='col-lg-5 mt-4'>
        <div id='card_corp'>
        <span class="ab" style={{color:'white'}}>Rate Rs.1800/Day</span>
        <img src="assets/img/tempo traveller.svg" style={{width:'520px',height:'160px'}} className="img-fluid"/>
        <h3 style={{color:'white'}}>Tempo traveller</h3>
        <h6 style={{color:'white'}}>Maximum No. of Person Select</h6>
        <div>
        <hr style={{background:'white',color:'white',borderColor:'white',height:'3px',width:'400px'}}/>
        </div>
        <span class="abc" style={{color:'Black'}}>9</span>
        <span class="abc" style={{color:'Black'}}>13</span>
        <span class="abc" style={{color:'Black'}}>17</span>
        <span class="abc" style={{color:'Black'}}>20</span>
        <span class="abc" style={{color:'Black'}}>26</span>
        <span>
        <Link to="/billpay"><button className="btn btn-primary form_btn book_now" type="submit">Book Now</button></Link>
        </span>
        </div>
        </div>
         <div className='col-lg-5 mt-4'>
         <div id='card_corp'>
         <span class="ab" style={{color:'white'}}>Rate Rs.1800/Day</span>
        <img src="assets/img/volvo bus.svg" style={{width:'520px',height:'160px'}} className="img-fluid"/>
        <h3 style={{color:'white'}}>Buses Mini-Buses</h3>
        <h6 style={{color:'white'}}>Maximum No. of Person Select</h6>
        <div>
        <hr style={{background:'white',color:'white',borderColor:'white',height:'3px',width:'400px'}}/>
        </div>
        <span class="abc" style={{color:'Black'}}>30</span>
        <span class="abc" style={{color:'Black'}}>36</span>
        <span class="abc" style={{color:'Black'}}>45</span>
        <span class="abc" style={{color:'Black'}}>53</span>
        <span class="abc" style={{color:'Black'}}>55</span>
        
        
        <span>
        <Link to="/billpay"><button className="btn btn-primary form_btn book_now" type="submit">Book Now</button></Link>
        </span>
        </div>
         </div>
         <div className='col-lg-1 bg-light'></div>
         </div>
        




    </div>
  )

}

export default Corplocal ;