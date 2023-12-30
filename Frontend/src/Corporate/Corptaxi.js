import React from 'react';
import {Link} from 'react-router-dom';
import './corporate.css';

function Corptaxi() {
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
        <label id='lbl'>Select Packages</label>
        <select type="text" className="form-control" aria-describedby required >
        <option value='0'>Select Packages</option>
        <option value='1'>Daily</option>
        <option value='2'>Weekly</option>
        <option value='3'>Monthly</option>
        </select>
        </div>
        </div>
        <div className='col-lg-5'>
        <div className="form-group">
        <label id='lbl'>Start Date and time </label>
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
        <div className='col-lg-1 bg-light'></div>
        </div>
        <div className='row'>
       <div className='col-lg-1 bg-light'></div>
       <div className='col-lg-5'>
        <div className="form-group">
        <label id='lbl'>Employee Identity No.</label>
        <input type="text" className="form-control"  placeholder="Enter Employee ID No." aria-describedby required />
        </div>
        </div>
        <div className='col-lg-5'>
        <div className="form-group">
        <label id='lbl'>Company Name</label>
        <input type="text" className="form-control"  placeholder="Enter Company Name" aria-describedby required />
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
         
        




    </div>
  )

}

export default Corptaxi ;