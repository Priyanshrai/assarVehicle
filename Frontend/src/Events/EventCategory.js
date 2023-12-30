import React from 'react';
import '../Selfdrive/Choosevehicle/Choosevehicle.css';

import { Link } from 'react-router-dom';

function EventCategory() {
  return (
    <div>


      <section id="category-sec" className="category_evnt">
      </section>
      <section className="testimonials_choose">
        <div className="container-fluid">
          <div className="book_title text-center">
            <h1>Choose Your Vehicle</h1>
            <h4>From a range of categories and prices</h4>
          </div>
          <div className="row">
            <div id="custumor" className="customers-testimonials-choose owl-carousel pump_carousel">
              <div className="item">
                <div className="shadow-effect">
                  <img className="img-circle img-fluid" src="assets/img/kisspng-suzuki.png" alt="" />
                  <div className="rate d-flex justify-content-between align-items-center">
                    <span className="text-left">
                      <span><h5>Maruti Suzuki</h5></span>
                      <span><h5><b>Alto K10</b></h5></span>
                    </span>
                    <span className="text-left">
                      <span><h5>Rate: Rs.68/<b>Hr</b></h5></span>
                      <span><h5>Rate: Rs.1500/<b>Day</b></h5></span>
                    </span>
                  </div>
                  <span className="pump d-flex align-items-center justify-content-between text-center">
                    <span>
                      <img src="assets/img/transmition-m.svg" className="img-fluid" />
                      <h6>5-Speed MT</h6>
                    </span>
                    <span>
                      <img src="assets/img/seat.svg" className="img-fluid" />
                      <h6>5 Seat</h6>
                    </span>

                    <span>
                      <img src="assets/img/luggage.svg" className="img-fluid" />
                      <h6>Luggage</h6>
                    </span>
                    <span>
                      <img src="assets/img/fuel.svg" className="img-fluid" />
                      <h6>Petrol</h6>
                    </span>
                  </span>
                  <span className="d-flex align-items-center justify-content-between">
                    <span className="metar">
                      <Link to="/"><h5>400/km</h5></Link>
                      <h6>Unlimited</h6>
                    </span>
                    <span>
                      <Link to="/billpay"><button className="btn btn-primary form_btn book_now" type="submit">Book Now</button></Link>
                    </span>
                  </span>
                </div>
              </div>

              <div className="item">
                <div className="shadow-effect">
                  <img className="img-circle img-fluid" src="assets/img/kisspng-suzuki.png" alt="" />
                  <div className="rate d-flex justify-content-between align-items-center">
                    <span className="text-left">
                      <span><h5>Maruti Suzuki</h5></span>
                      <span><h5><b>Alto K10</b></h5></span>
                    </span>
                    <span className="text-left">
                      <span><h5>Rate: Rs.68/<b>Hr</b></h5></span>
                      <span><h5>Rate: Rs.1500/<b>Day</b></h5></span>
                    </span>
                  </div>
                  <span className="pump d-flex align-items-center justify-content-between text-center">
                    <span>
                      <img src="assets/img/transmition-m.svg" className="img-fluid" />
                      <h6>5 Transmission</h6>
                    </span>
                    <span>
                      <img src="assets/img/seat.svg" className="img-fluid" />
                      <h6>4 Seat</h6>
                    </span>
                    <span>
                      <img src="assets/img/fuels.svg" className="img-fluid" />
                      <h6>Petrol</h6>
                    </span>
                    <span>
                      <img src="assets/img/luggage.svg" className="img-fluid" />
                      <h6>Luggage</h6>
                    </span>
                    <span>
                      <img src="assets/img/fuel.svg" className="img-fluid" />
                      <h6>5 Transmission</h6>
                    </span>
                  </span>
                  <span className="d-flex align-items-center justify-content-between">
                    <span className="metar">
                      <h5>400/km</h5>
                      <h6>Unlimited</h6>
                    </span>
                    <span>
                      <Link to="/billpay"><button className="btn btn-primary form_btn book_now" type="submit">Book Now</button></Link>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>



    </div>

  )
}

export default EventCategory;