import React from 'react';
import {Link} from 'react-router-dom';
import './Taximain.css';

function Taximain() {
  return (
    <div>
      <section id="taximain" className="d-flex align-items-center">
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>  
              <div className="blue-box">
                  <h1>Book A City Taxi To Your Destination</h1>
                      <Link to="/choosetaxi"><button className="button" style={{color:'white',fontWeight:'bold'}}>Book Now</button></Link>
              </div>
          </div>
      </section>
    <div className="containertaxi">
      <div className="card-deck">
        <div className="card text-center">
          <div className="card-block">
            <img src="assets/img/247.png" />
                    <br/>
              <h4 className="card-title">24/7 Customer Support</h4>
                        <p className="card-text">
                          We available in your city for 24/7. A dedicated 24x7 Customer support team always at your service to help solve any problem.
                        </p>
            </div>
            <div className="card-footer text-right">
                  Read more<i className="icofont-simple-right" />
            </div>
          </div>
      <div className="card text-center">
        <div className="card-block">
          <img src="assets/img/rated-drivers.png" />
           <h4 className="card-title">Top Rated Drive-Partners</h4>
                      <p className="card-text">
                        All over drive-partners are background verified and trained to deliver only the best experience.
                      </p>
        </div>
            <div className="card-footer text-right">
                  Read more<i className="icofont-simple-right" />
          </div>
       </div> 
      <div className="card text-center">
        <div className="card-block">
          <img src="assets/img/safety-first.png" />
            <h4 className="card-title">Saftey First</h4>
                      <p className="card-text">
                        Keep your loved ones informed about your travel routes or call emergency services when in need.
                      </p>
          </div>
            <div className="card-footer text-right">
                  Read more <i className="icofont-simple-right" />
            </div>
          </div>
        </div>
      </div>
    <div className="fleet" >
    <h1>Meet our awesome Fleet</h1>
    <h3>The widest variety of cars to choose from</h3>
    <br/><br/>
    <div class="catergory_choose">
    <ul class="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
            <span><img src="assets/img/choose_1.png" alt="" class="img-fluid" /></span><br/>
       <span>Hatchback-Car</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="true">
        <span><img src="assets/img/svg-image-i20.png" alt="" class="img-fluid" /></span><br/>
        <span>Premium-Hatch</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
        <span><img src="assets/img/sedan-car.png" alt="" class="img-fluid" /></span> <br/>
        <span>Sedan-car</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-compact-suv-tab" data-toggle="pill" href="#pills-compact-suv" role="tab" aria-controls="pills-compact-suv" aria-selected="false">
        <span><img src="assets/img/compact-suv.png" alt="" class="img-fluid" /></span><br/>
        <span>Compact-SUV</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-suv-tab" data-toggle="pill" href="#pills-suv" role="tab" aria-controls="pills-suv" aria-selected="false">
        <span><img src="assets/img/suv-car.png" alt="" class="img-fluid" /></span><br/>
        <span>SUV</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-muv-tab" data-toggle="pill" href="#pills-muv" role="tab" aria-controls="pills-muv" aria-selected="false">
        <span><img src="assets/img/marazzo.png" alt="" class="img-fluid" /></span><br/>
        <span>MUV</span></a>
      </li>
    </ul>
</div>
</div>
  

      <div className="testimonials-two tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">    
      <div className="select_car">
      <div className="bannerh_car mx-auto">
      <img src="assets/img/Hatchback.png" alt="" class="img-fluid" />
      <h2>A car for every ocassion</h2>
      <h4>If you are looking for something roomier for the entire family, Know more about this car here.</h4>
      </div>
      </div>
      </div>     
      <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">   
      <div className="select_car">
      <div className="bannerh_car mx-auto">
      <img src="assets/img/Pre_hatchback.png" alt="" class="img-fluid" />
      <h2>A car for every ocassion</h2>
      <h4>If you are looking for something roomier for the entire family, Know more about this car here.</h4>      
      </div>
      </div>
      </div>
      <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">          
      <div className="select_car">
      <div className="bannerh_car mx-auto">
      <img src="assets/img/Sedan_banner.png" alt="" class="img-fluid" />
      <h2>A car for every ocassion</h2>
      <h4>If you are looking for something roomier for the entire family, Know more about this car here.</h4>     
      </div>
      </div>
      </div>
      <div className="tab-pane fade" id="pills-compact-suv" role="tabpanel" aria-labelledby="pills-compact-suv-tab">          
      <div className="select_car">
      <div className="bannerh_car mx-auto">
      <img src="assets/img/C_suv.png" alt="" class="img-fluid" />
      <h2>A car for every ocassion</h2>
      <h4>If you are looking for something roomier for the entire family, Know more about this car here.</h4>     
      </div>
      </div>
      </div>
      <div className="tab-pane fade" id="pills-suv" role="tabpanel" aria-labelledby="pills-suv-tab">          
      <div className="select_car">
      <div className="bannerh_car mx-auto">
      <img src="assets/img/SUV_Banner.png" alt="" class="img-fluid" />
      <h2>A car for every ocassion</h2>
      <h4>If you are looking for something roomier for the entire family, Know more about this car here.</h4>     
      </div>
      </div>
      </div>
      <div className="tab-pane fade" id="pills-muv" role="tabpanel" aria-labelledby="pills-muv-tab">          
      <div className="select_car">
      <div className="bannerh_car mx-auto">
      <img src="assets/img/muv_b.png" alt="" class="img-fluid" />
      <h2>A car for every ocassion</h2>
      <h4>If you are looking for something roomier for the entire family, Know more about this car here.</h4>
      </div>
      </div>     
      </div>
      </div>
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
    </div>
    </div>
  )

}

export default Taximain ;