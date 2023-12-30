import React from 'react';
import {Link} from 'react-router-dom';
import './corporate.css';

function Corporate() {
  return (
    <div>
      <section id="corporatemain" className="d-flex align-items-center">
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>  
              <div className="blue-box">
                  <h1>Corporate services for you Destination</h1>
                      <Link to="/corpoutstation"><button style={{color:'white',fontWeight:'bold'}} className="button">Book Now</button></Link>
              </div>
          </div>
      </section>
      <div className="fleet" >
    <h1>Choose Vehicle </h1>
    <h3>The widest variety of vehicle to choose</h3>
    </div>
    <div className="containercorp">
    <div className="row corp">
    <div className="col-md-1 bg-light" ></div>
    <div className="col-md-2">
    <img src="assets/img/sedan-car.png" className="img-fluid"/>
    </div>
    <div className="col-md-2 p-4">
    <h3 className='corporate_heading' style={{color: 'white'}}>Sedan Car</h3>
    <h6 className='corporate_heading' style={{color: 'white'}} >Ideal for 4 - People</h6>  
    </div>
    <div className="col-md-2 bg-light" ></div>
    <div className="col-md-2">
    <img src="assets/img/marazzo.png" className="img-fluid"/>
    </div>
    <div className="col-md-2 p-4">
    <h3 className='corporate_heading' style={{color: 'white'}}>MUV Car</h3>
    <h6 className='corporate_heading' style={{color: 'white'}} >Ideal for 7 - People</h6>  
    </div>
    <div className="col-md-1 bg-light" ></div>
    </div>
    </div>
    <div className="containercorp">
    <div className="row corp">
    <div className="col-md-1 bg-light" ></div>
    <div className="col-md-2">
    <img src="assets/img/tempo-traveller.png" className="img-fluid"/>
    </div>
    <div className="col-md-2 p-4">
    <h3 className='corporate_heading' style={{color: 'white'}}>Tempo traveller</h3>
    <h6 className='corporate_heading' style={{color: 'white'}} >Ideal for 20 - People</h6>  
    </div>
    <div className="col-md-2 bg-light" ></div>
    <div className="col-md-2">
    <img src="assets/img/volvo bus.svg" className="img-fluid"/>
    </div>
    <div className="col-md-2 p-4">
    <h3 className='corporate_heading' style={{color: 'white'}}>Bus and Mini-Bus</h3>
    <h6 className='corporate_heading' style={{color: 'white'}} >Ideal for upto 60 - People</h6>  
    </div>
    <div className="col-md-1 bg-light" ></div>
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
<section>
      <div className="container">
        <div className="book_title text-center">
          <h1>The Assar Advantage </h1>
          <h6>We simplified car rentals, so you can focus on what's important to you.</h6>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-lg-4">
            <div className="assar_car text-center">
              <span><img src="assets/img/i-20-car.svg" alt className="img-fluid" /></span>
              <span>
                <h5>Damage Insurance</h5>
                <h6>Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!</h6>
              </span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="assar_car text-center">
                  <span><img src="assets/img/i-20-car.svg" alt className="img-fluid" /></span>
                  <span>
                    <h5>24x7 Roadside Assistance</h5>
                    <h6>Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!</h6>
                  </span>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="assar_car text-center">
                  <span><img src="assets/img/i-20-car.svg" alt className="img-fluid" /></span>
                  <span>
                    <h5>Go Anywhere</h5>
                    <h6>Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!</h6>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="assar_car text-center">
                  <span><img src="assets/img/i-20-car.svg" alt className="img-fluid" /></span>
                  <span>
                    <h5>Without Branding Car</h5>
                    <h6>Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!</h6>
                  </span>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="assar_car text-center">
                  <span><img src="assets/img/i-20-car.svg" alt className="img-fluid" /></span>
                  <span>
                    <h5>No Hidden Charges</h5>
                    <h6>Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!</h6>
                  </span>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="assar_car text-center">
                  <span><img src="assets/img/i-20-car.svg" alt className="img-fluid" /></span>
                  <span>
                    <h5>Flexi Pricing Packages</h5>
                    <h6>Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!</h6>
                  </span>
                </div>
              </div>
            </div>
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

export default Corporate ;