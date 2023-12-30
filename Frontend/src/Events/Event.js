import React from 'react';
import { Link } from 'react-router-dom';
import './Event.css';

function Events() {
  return (
    <div>
      <section id="eventmain" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay={100}>
          <div className="blue-box">
            <h1>Events and wedding occassion</h1>
            <Link to="/eventmain"><button className="button" style={{ color: "white", fontWeight: "bold" }}>Book Now</button></Link>
          </div>
        </div>
      </section>
      <div className="fleet" >
        <h1>Premium Vehicles </h1>
        <h3>The widest variety of Premium vehicle to choose</h3>
      </div>
      <div className='row'>
        <div className='col-lg-6'>
          <div className="row corp mt-4">
            <div className="col-md-2 bg-light" ></div>
            <div className="col-md-4 m-4">
              <img src="assets/img/sedan-car.png" className="img-fluid" />
            </div>
            <div className="col-md-4 p-3">
              <h3 className='corporate_heading' style={{ color: 'white' }}>Premium Sedan Car</h3>
              <h6 className='corporate_heading' style={{ color: 'white' }} >Ideal for 4 - People</h6>
            </div>
            <div className="col-md-2 bg-light" ></div>
          </div>
          <div className="row corp mt-4">
            <div className="col-md-2 bg-light" ></div>
            <div className="col-md-4 m-4">
              <img src="assets/img/tempo traveller.svg" className="img-fluid" />
            </div>
            <div className="col-md-4 p-3">
              <h3 className='corporate_heading' style={{ color: 'white', padding: "8px" }}>Caravan</h3>
              <h6 className='corporate_heading' style={{ color: 'white', padding: "8px" }} >Ideal for 2 - People</h6>
            </div>
            <div className="col-md-2 bg-light" ></div>
          </div>
          <div className="row corp mt-4">
            <div className="col-md-2 bg-light" ></div>
            <div className="col-md-4 m-4">
              <img src="assets/img/volvo bus.svg" className="img-fluid" />
            </div>
            <div className="col-md-4 p-3">
              <h3 className='corporate_heading' style={{ color: 'white', padding: "8px" }}>Volvo Bus</h3>
              <h6 className='corporate_heading' style={{ color: 'white', padding: "8px" }} >Ideal for 54 -People</h6>
            </div>
            <div className="col-md-2 bg-light" ></div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='row'>
            <div className='col-lg-12'>
              <img id="evnt_p" src="assets/img/event1.jpg" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <section className="taxmimain_app_book">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
              <span className="taxihome">
                <h3>A car for every need</h3>
                <h6>We have range of cars, so some thing will perfectly fit your trip</h6>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="fleet_occassion" >
        <h1>A car for every occassion </h1>
        <h3>We provides intercity local vehilce to provide you, the best way to travel your destinanation</h3>
        <section className="testimonials-one">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div id="customers-testimonials" className="owl-carousel">
                  <div className="item">
                    <div className="shadow-effect">
                      <img className="img-responsive" src="assets/img/slide_one.png" alt />
                      <div className="item-details">
                        <h5>Vehicle for Every Pocket</h5>
                        <p>We have you covered for all your needs to Choose
                          from our range of Two Wheelers, Hatchbacks, Sedans,
                          SUVs, MUVs and even Luxury cars, we have Vehicle to
                          suit every pocket</p>
                        <a href="#">Read More <i className="icofont-simple-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="shadow-effect">
                      <img className="img-responsive" src="assets/img/slide_two.png" alt />
                      <div className="item-details">
                        <h5>Secure and Safe Rides</h5>
                        <p>We have you covered for all your needs to Choose
                          from our range of Two Wheelers, Hatchbacks, Sedans,
                          SUVs, MUVs and even Luxury cars, we have Vehicle to
                          suit every pocket</p>
                        <a href="#">Read More <i className="icofont-simple-right" /> </a>
                      </div>
                    </div>
                  </div>
                  {/*END OF TESTIMONIAL 2 */}
                  {/*TESTIMONIAL 3 */}
                  <div className="item">
                    <div className="shadow-effect">
                      <img className="img-responsive" src="assets/img/slide_three.png" alt />
                      <div className="item-details">
                        <h5>Car Rental For Self Driven</h5>
                        <p>We have you covered for all your needs to Choose
                          from our range of Two Wheelers, Hatchbacks, Sedans,
                          SUVs, MUVs and even Luxury cars, we have Vehicle to
                          suit every pocket</p>
                        <a href="#">Read More <i className="icofont-simple-right" /> </a>
                      </div>
                    </div>
                  </div>
                  {/*END OF TESTIMONIAL 3 */}
                  {/*TESTIMONIAL 4 */}
                  <div className="item">
                    <div className="shadow-effect">
                      <img className="img-responsive" src="assets/img/slide_one.png" alt />
                      <div className="item-details">
                        <h5>Car Rental For Self Driven</h5>
                        <p>We have you covered for all your needs to Choose
                          from our range of Two Wheelers, Hatchbacks, Sedans,
                          SUVs, MUVs and even Luxury cars, we have Vehicle to
                          suit every pocket</p>
                        <a href="#">Read More <i className="icofont-simple-right" /> </a>
                      </div>
                    </div>
                  </div>
                  {/*END OF TESTIMONIAL 4 */}
                  {/*TESTIMONIAL 5 */}
                  <div className="item">
                    <div className="shadow-effect">
                      <img className="img-responsive" src="assets/img/slide_two.png" alt />
                      <div className="item-details">
                        <h5>Secure and Safe Rides</h5>
                        <p>We have you covered for all your needs to Choose
                          from our range of Two Wheelers, Hatchbacks, Sedans,
                          SUVs, MUVs and even Luxury cars, we have Vehicle to
                          suit every pocket</p>
                        <a href="#">Read More <i className="icofont-simple-right" /> </a>
                      </div>
                    </div>
                  </div>
                  {/*END OF TESTIMONIAL 5 */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="app-mobile" className="mobile_app_book">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                <span>
                  <h3>Book an assar from the App</h3>
                  <h6>Download the app for exclusive deals and ease of booking</h6>
                  <a href="#"><img src="assets/img/play-store.png" className="pt-4 pb-3" /> </a>
                  <a href="#"><img src="assets/img/apple-ply-store.png" className="pt-4 pb-3" /> </a>
                </span>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-end">
                <span><img src="assets/img/app_mobile.png" className="img-fluid" /></span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )

}

export default Events;