import React from 'react';
import './Choosevehicle.css';

import { Link } from 'react-router-dom';

function Choosetw() {
  return (
    <div>
      <main id="main">
        {/*<!-- ======= Hero Section ======= -->*/}
        <section id="category-sec" className="category_sec">
        </section>

        <div className="container">
          <div className="book_title text-center">
            <h1>Car Category</h1>
            <h4>From a range of categories and prices</h4>
          </div>
          <div className="catergorytw_choose">
            <ul className="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                  <span><img src="assets/img/bulat-bike.svg" alt="" className="img-fluid" /></span><br />
                  <span>Crusier</span></a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                  <span><img src="assets/img/splendor.png" alt="" className="img-fluid" /></span><br />
                  <span>Commuter</span></a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
                  <span><img src="assets/img/yamaha-r15.png" alt="" className="img-fluid" /></span> <br />
                  <span>Sports</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="pills-compact-suv-tab" data-toggle="pill" href="#pills-compact-suv" role="tab" aria-controls="pills-compact-suv" aria-selected="false">
                  <span><img src="assets/img/Sports-Bike.png" alt="" className="img-fluid" /></span><br />
                  <span>Super</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="pills-suv-tab" data-toggle="pill" href="#pills-suv" role="tab" aria-controls="pills-suv" aria-selected="false">
                  <span><img src="assets/img/Feature.png" alt="" className="img-fluid" /></span><br />
                  <span>Adventure</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="pills-muv-tab" data-toggle="pill" href="#pills-muv" role="tab" aria-controls="pills-muv" aria-selected="false">
                  <span><img src="assets/img/scooter-vespa.png" alt="" className="img-fluid" /></span><br />
                  <span>Scooter</span></a>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="select_tw">
                <div className="hatchback_car mx-auto">
                  <img src="assets/img/bulat-bike.svg" alt="" className="img-fluid" />
                  <h6>Crusier</h6>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div className="select_tw">
                <div className="hatchback_car mx-auto">
                  <img src="assets/img/splendor.png" alt="" className="img-fluid" />
                  <h6>Commuter</h6>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
              <div className="select_tw">
                <div className="hatchback_car mx-auto">
                  <img src="assets/img/yamaha-r15.png" alt="" className="img-fluid" />
                  <h6>Sports</h6>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-compact-suv" role="tabpanel" aria-labelledby="pills-compact-suv-tab">
              <div className="select_tw">
                <div className="hatchback_car mx-auto">
                  <img src="assets/img/Sports-Bike.png" alt="" className="img-fluid" />
                  <h6>Super</h6>
                </div></div></div>
            <div className="tab-pane fade" id="pills-suv" role="tabpanel" aria-labelledby="pills-suv-tab">
              <div className="select_tw">
                <div className="hatchback_car mx-auto">
                  <img src="assets/img/Feature.png" alt="" className="img-fluid" />
                  <h6>Adventure</h6>
                </div></div></div>
            <div className="tab-pane fade" id="pills-muv" role="tabpanel" aria-labelledby="pills-muv-tab">
              <div className="select_tw">
                <div className="hatchback_car mx-auto">
                  <img src="assets/img/scooter-vespa.png" alt="" className="img-fluid" />
                  <h6>Scooter</h6>
                </div></div></div>
          </div>
          <div className="form_all mt-5">
            <form className="">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 mb-5">
                  <div className="input-group">
                    <input type="search" className="form-control" id="ecl" placeholder="Enter city location" aria-describedby="" required="" />
                    <span className="icon_form_add"><i className='bx bx-current-location bx-burst' ></i></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="input-group">
                    <input type="text" className="form-control" id="pul" placeholder="Pick-up Locations" aria-describedby="" required="" />
                    <span className="icon_form_add"><i className="icofont-location-arrow"></i></span>
                  </div>
                </div>
                <div className="col-lg-3 mb-4">
                  <div className="input-group">
                    <input type="date" className="form-control" id="date" placeholder="Pick-up Date" aria-describedby="" required="" />
                    {/*<!-- <span className="icon_form_add"><i className="bx bxs-lock-alt"></i></span> -->*/}
                  </div>
                </div>
                <div className="col-lg-3 mb-4">
                  <div className="input-group">
                    <input type="date" className="form-control" id="date" placeholder="Drop-up Date" aria-describedby="" required="" />
                    {/*<!-- <span className="icon_form_add"><i className="bx bxs-lock-alt"></i></span> -->*/}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="input-group">
                    <input type="text" className="form-control" id="dl" placeholder="Drop-up Locations" aria-describedby="" required="" />
                    <span className="icon_form_add"><i className="icofont-location-arrow"></i></span>
                  </div>
                </div>
                <div className="col-lg-3 mb-4">
                  <div className="input-group">
                    <input type="time" className="form-control" id="time" placeholder="Pick-up Time" aria-describedby="" required="" />
                    {/*<!-- <span className="icon_form_add"><i className="bx bxs-lock-alt"></i></span> -->*/}
                  </div>
                </div>
                <div className="col-lg-3 mb-4">
                  <div className="input-group">
                    <input type="time" className="form-control" id="time" placeholder="Drop-up Time" aria-describedby="" required="" />
                    {/*<!-- <span className="icon_form_add"><i className="bx bxs-lock-alt"></i></span> -->*/}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 check_signup d-flex align-items-center justify-content-start">
                  <div className="form-group mb-0">
                    <input type="checkbox" id="html" />
                    <label for="html" className="mb-0">I agree with the terms and conditions</label>
                  </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-end align-items-center">
                  <button className="btn btn-primary form_btn" type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>

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
      </main>


    </div>

  )
}

export default Choosetw;