import React from 'react';
import {Link} from 'react-router-dom';
import './Thankyou.css';

function Thankyou() {
  return (
    <div><main id="main">
    {/* ======= Hero Section ======= */}
   
    <section className="bill_invoice_sec">
      <div className="container">
        <div className="total_invoice_bill">
          <div className="hatchback_car vicle_detail_side">
            <img src="assets/img/choose_1.png" alt className="img-fluid" />
            <h6>Hatchback-Car</h6>
            <h5 className="text_verti">Segment</h5>
          </div>
          <div className="row">
            <div className="col-lg-9 mx-auto pt-4 pb-4">
              <div className="invoice_total">
                <span className="text-center bill_top_h">
                  <h4>Maruti Suzuki Alto K10</h4>
                  <h6>Vehicle No. - MP 09 CP 3186</h6>
                </span>
                <div className="mx-auto text-center"><img src="assets/img/kisspng-suzuki.png" /></div>
                <span className="text-center indore_h thanku_b">
                  <h3>Thank You For The Booking Vehicle</h3>
                </span>
                <div className="city_indore">
                  <h3>City</h3>
                  <h5>Indore</h5>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="pick_up">
                      <span>
                        <h3>Pick-up Locations</h3>
                        <h6>Lorem Ipsum is simply dummy text of the</h6>
                      </span>
                      <span className="pt-4 d-block dateatime">
                        <h5>Date and Time</h5>
                        <h6>12:30 PM</h6>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6"> 
                    <div className="pick_up">
                      <span>
                        <h3>Drop-up Locations</h3>
                        <h6>Lorem Ipsum is simply dummy text of the</h6>
                      </span>
                      <span className="pt-4 d-block dateatime">
                        <h5>Date and Time</h5>
                        <h6>12:30 PM</h6>
                      </span>
                    </div>
                  </div>
                </div>
                <span className="detail_customer thanku_heading_map d-flex justify-content-between align-items-center text-center">
                  <span>
                    <h4>Name</h4>
                    <h6>Lorem Ipsum is</h6>
                  </span>
                  <span>
                    <h4>Booking ID</h4>
                    <h6>Lorem Ipsum is</h6>
                  </span>
                  <span>
                    <h4>Order ID</h4>
                    <h6>Lorem Ipsum is</h6>
                  </span>
                </span>
                <div className="map">
                  <h3>Pick-up Locations In Map</h3>
                  <div style={{width: '100%'}}>
                    <iframe width="99.99%" height={400} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=indore%20+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed" /></div>
                  <span className="d-flex align-items-center justify-content-between map_resistance">
                    <h6>For The Resistance With Any Query <span><i className="icofont-long-arrow-right" /> </span> </h6>
                    <h6><span> <i className="icofont-phone-circle" /> </span> +91 910-910-1851 -0731-3564526</h6>  
                  </span>
                  <span className="d-flex align-items-center justify-content-end">
                   <Link to="/"><button className="btn btn-primary map_btn ml-auto" type="submit">Back to home</button></Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    
  </main>
</div>

  )
}

export default Thankyou