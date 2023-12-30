import React, { useState, useEffect } from "react";
import "./Choosevehicle.css";
import axios from "axios";
import { __apiURLListing, __apiURLSegment } from "../../apiURL";
import {useJsApiLoader,Autocomplete} from "@react-google-maps/api"
import { Link, useParams } from "react-router-dom";

function Choosevehicle() {
  const {} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries:["places"]
  
  })
  
  const params = useParams();

  const [vehicle, Setvehicle] = useState([]);

  useEffect(() => {
    const handleTabClick = (event) => {
      const tabId = event.currentTarget.id;
      console.log("Tab clicked: " + tabId);
      if (tabId === "Hatchback-Car-tab") {
        // Fetch data conditionally based on the clicked tab ID
        axios
          .get(__apiURLListing + "fetch?category=Hatchback")
          .then((response) => {
            Setvehicle(response.data);
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (tabId === "Premium-Hatch-tab") {
        // Fetch data conditionally based on the clicked tab ID
        axios
          .get(__apiURLListing + "fetch?category=Premium Hatchback")
          .then((response) => {
            Setvehicle(response.data);
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (tabId === "Sedan-car-tab") {
        // Fetch data conditionally based on the clicked tab ID
        axios
          .get(__apiURLListing + "fetch?category=Sedan")
          .then((response) => {
            Setvehicle(response.data);
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (tabId === "Compact-SUV-tab") {
        // Fetch data conditionally based on the clicked tab ID
        axios
          .get(__apiURLListing + "fetch?category=Compact-SUV")
          .then((response) => {
            Setvehicle(response.data);
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (tabId === "SUV-tab") {
        // Fetch data conditionally based on the clicked tab ID
        axios
          .get(__apiURLListing + "fetch?category=SUV")
          .then((response) => {
            Setvehicle(response.data);
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    // Attach the click event listener to elements with the class "nav-link"
    document.querySelectorAll(".nav-link").forEach((tab) => {
      tab.addEventListener("click", handleTabClick);
    });
     // Cleanup event listener on component unmount
     return () => {
      document.querySelectorAll(".nav-link").forEach((tab) => {
        tab.removeEventListener("click", handleTabClick);
      });
    };
  }, []);

  const [pickupLoc, setPickupLoc] = useState();
  const [dropLoc, setDropLoc] = useState();
  const [pickupDate, setPickupDate] = useState();
  const [pickupTime, setPickupTime] = useState();
  const [dropDate, setDropDate] = useState();
  const [dropTime, setDropTime] = useState();
  const [Rate, setRate] = useState(true);
  const [Rateul, setRateul] = useState();

  {/*
    
 var date= Date();
 var tdate=date.get.Date()
 var month=date.get.Month()+1;
 if(tdate<10)
 {
  tdate='0'+tdate;
 }
 if(month<10)
 {
month='0'+month;
 }
 var year=date.getUTCFullYear()
 var mindate =year+"-"+month+"-"+tdate;

*/

  }

  const handleSubmit = (event) => {
    event.preventDefault();

    //Calculate the duration between pickup and drop
    const pickupDateTime = new Date(`${pickupDate}T${pickupTime}`);
    const dropDateTime = new Date(`${dropDate}T${dropTime}`);
    const durationInMs = dropDateTime - pickupDateTime;
    const durationInHours = durationInMs / (1000 * 60 * 60);

    // Validate the duration
    if (durationInHours < 8) {
      alert("Minimum rental duration is 8 hours");
      return;
    }
  };
 

  

<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

  return (
    <div>
      <section id="category-sec" className="category_sec"></section>
      <div className="container">
        <div className="book_title text-center">
          <h1>Car Category</h1>
          <h4>From a range of categories and prices</h4>
        </div>
        <div className="catergory_choose">
        <ul className="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
  <li className="nav-item border_right_b">
    <a
      className="nav-link active"
      id="Hatchback-Car-tab"
      data-toggle="pill"
      href="#pills-home"
      role="tab"
      aria-controls="pills-home"
      aria-selected="true"
    >
      <span>
        <img src="assets/img/choose_1.png" alt="" className="img-fluid" />
      </span>
      <br />
      <span>Hatchback-Car</span>
    </a>
  </li>
  <li className="nav-item border_right_b">
    <a
      className="nav-link"
      id="Premium-Hatch-tab"
      data-toggle="pill"
      href="#pills-profile"
      role="tab"
      aria-controls="pills-profile"
      aria-selected="false"
    >
      <span>
        <img src="assets/img/svg-image-i20.png" alt="" className="img-fluid" />
      </span>
      <br />
      <span>Premium-Hatch</span>
    </a>
  </li>
  <li className="nav-item border_right_b">
    <a
      className="nav-link"
      id="Sedan-car-tab"
      data-toggle="pill"
      href="#pills-contact"
      role="tab"
      aria-controls="pills-contact"
      aria-selected="false"
    >
      <span>
        <img src="assets/img/sedan-car.png" alt="" className="img-fluid" />
      </span>{" "}
      <br />
      <span>Sedan-car</span>
    </a>
  </li>
  <li className="nav-item border_right_b">
    <a
      className="nav-link"
      id="Compact-SUV-tab"
      data-toggle="pill"
      href="#pills-compact-suv"
      role="tab"
      aria-controls="pills-compact-suv"
      aria-selected="false"
    >
      <span>
        <img src="assets/img/compact-suv.png" alt="" className="img-fluid" />
      </span>
      <br />
      <span>Compact-SUV</span>
    </a>
  </li>
  <li className="nav-item border_right_b">
    <a
      className="nav-link"
      id="SUV-tab"
      data-toggle="pill"
      href="#pills-suv"
      role="tab"
      aria-controls="pills-suv"
      aria-selected="false"
    >
      <span>
        <img src="assets/img/suv-car.png" alt="" className="img-fluid" />
      </span>
      <br />
      <span>SUV</span>
    </a>
  </li>
  <li className="nav-item">
    <a
      className="nav-link"
      id="MUV-tab"
      data-toggle="pill"
      href="#pills-muv"
      role="tab"
      aria-controls="pills-muv"
      aria-selected="false"
    >
      <span>
        <img src="assets/img/marazzo.png" alt="" className="img-fluid" />
      </span>
      <br />
      <span>MUV</span>
    </a>
  </li>
</ul>

        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="select_car">
              <div className="hatchback_car mx-auto">
                <img
                  src="assets/img/choose_1.png"
                  alt=""
                  className="img-fluid"
                />
                <h6>Hatchback-Car</h6>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="select_car">
              <div className="hatchback_car mx-auto">
                <img
                  src="assets/img/svg-image-i20.png"
                  alt=""
                  className="img-fluid"
                />
                <h6>Premium Hatchback</h6>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="select_car">
              <div className="hatchback_car mx-auto">
                <img
                  src="assets/img/sedan-car.png"
                  alt=""
                  className="img-fluid"
                />
                <h6>Sedan Car</h6>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-compact-suv"
            role="tabpanel"
            aria-labelledby="pills-compact-suv-tab"
          >
            <div className="select_car">
              <div className="hatchback_car mx-auto">
                <img
                  src="assets/img/compact-suv.png"
                  alt=""
                  className="img-fluid"
                />
                <h6>Compact-Suv</h6>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-suv"
            role="tabpanel"
            aria-labelledby="pills-suv-tab"
          >
            <div className="select_car">
              <div className="hatchback_car mx-auto">
                <img
                  src="assets/img/suv-car.png"
                  alt=""
                  className="img-fluid"
                />
                <h6>SUV</h6>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-muv"
            role="tabpanel"
            aria-labelledby="pills-muv-tab"
          >
            <div className="select_car">
              <div className="hatchback_car mx-auto">
                <img
                  src="assets/img/marazzo.png"
                  alt=""
                  className="img-fluid"
                />
                <h6>MUV</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="form_all mt-5">
          <form onSubmit={handleSubmit}>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 mb-5">
              <Autocomplete><div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="ecl"
                    placeholder="Enter city location"
                    aria-describedby=""
                    required=""
                  />
                  <span className="icon_form_add">
                    <i className="bx bx-current-location bx-burst"></i>
                  </span>
                </div></Autocomplete>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-4"><Autocomplete>
                <div className="input-group">
                
                  <input
                    type="text"
                    className="form-control"
                    
                    value={pickupLoc}
                    onClick={(e) => {
                      setPickupLoc(e.target.value);
                    }}
                    placeholder="Pick-up Locations"
                    aria-describedby=""
                    required=""
                  />
                  
                  <span className="icon_form_add">
                    <i className="icofont-location-arrow"></i>
                  </span>
                   </div></Autocomplete>
              </div>
              <div className="col-lg-3 mb-4">
                <div className="input-group">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Pick-up Date"
                    value={pickupDate}
                    onChange={(e) => {
                      setPickupDate(e.target.value);
                    }}
                    required=""
                  />
                  {/*<!-- <span className="icon_form_add"><i className="bx bxs-lock-alt"></i></span> -->*/}
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <div className="input-group">
                  <input
                    type="time"
                    className="form-control"
                    placeholder="Pick-up Time"
                    id="pickup-time"
                    value={pickupTime}
                    onChange={(e) => {
                      setPickupTime(e.target.value);
                    }}
                    required=""
                  />
                  {/*<!-- <span className="icon_form_add"><i className="bx bxs-lock-alt"></i></span> -->*/}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-4">
              <Autocomplete><div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    value={dropLoc}
                    onClick={(e) => {
                      setDropLoc(e.target.value);
                    }}
                    placeholder="Drop-up Locations"
                    required=""
                  />
                  <span className="icon_form_add">
                    <i className="icofont-location-arrow"></i>
                  </span>
                </div></Autocomplete>
              </div>
              <div className="col-lg-3 mb-4">
                <div className="input-group">
                  <input
                    type="date"
                    className="form-control"
                    id="drop-date"
                    value={dropDate}
                    onChange={(e) => {
                      setDropDate(e.target.value);
                    }}
                    placeholder="Drop Date"
                    aria-describedby=""
                    required=""
                  />
                  {/*<!-- <span className="icon_form_add"><i className="bx bxs-lock-alt"></i></span> -->*/}
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <div className="input-group">
                  <input
                    type="time"
                    className="form-control"
                    id="drop-time"
                    value={dropTime}
                    onChange={(e) => {
                      setDropTime(e.target.value);
                    }}
                    placeholder="Drop Time"
                    required=""
                  />
                  {/*<!-- <span className="icon_form_add"><i className="bx bxs-lock-alt"></i></span> -->*/}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 check_signup d-flex align-items-center justify-content-start">
                <div className="form-group mb-0">
                  <input type="checkbox" id="html" />
                  <label for="html" className="mb-0">
                    I agree with the terms and conditions
                  </label>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-end align-items-center">
                <button className="btn btn-primary form_btn" type="submit">
                  Submit
                </button>
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
            <div
              id="custumor"
              className="customers-testimonials-choose owl-carousel owl-theme pump_carousel"
            >
              <div className="item">
                {vehicle.map((row) => {
                  const vf = "/assets/listing/img/" + row.img;
                  const handelRate = () => {
                    const rate = (row.rate_hour)
                    const day = (row.rate_day)
                    setRate(rate)
                    setRateul(day)
                  }
                  const handelRateUl = () => {
                    const rate = (row.rate_hour_ul)
                    const day = (row.rate_day_ul)
                    setRate(rate)
                    setRateul(day)
                  }

                  return (
                    <div className="shadow-effect">
                      <img className="img-circle img-fluid" src={vf} />
                      <div className="rate d-flex justify-content-between align-items-center">
                        <span className="text-left">
                          <span>
                            <h5>{row.brand}</h5>
                          </span>
                          <span>
                            <h5>
                              <b>{row.vehicle_model}</b>
                            </h5>
                          </span>
                        </span>
                        <span className="text-left">
                          <span>
                            <h5>
                              Rs.{Rate}/<b>Per Hour</b>
                            </h5>
                          </span>
                          <span>
                            <h5>
                              Rs.{Rateul}/<b>Per Day</b>
                            </h5>
                          </span>
                        </span>
                      </div>
                      <span className="pump d-flex align-items-center justify-content-between text-center">
                        <span>
                          <img
                            src="assets/img/transmition-m.svg"
                            className="img-fluid"
                          />
                          <h6>{row.transmission}</h6>
                        </span>
                        <span>
                          <img
                            src="assets/img/seat.svg"
                            className="img-fluid"
                          />
                          <h6>{row.seat} Seat</h6>
                        </span>
                        <span>
                          <img
                            src="assets/img/fuels.svg"
                            className="img-fluid"
                          />
                          <h6>{row.fuel}</h6>
                        </span>
                        <span>
                          <img
                            src="assets/img/luggage.svg"
                            className="img-fluid"
                          />
                          <h6>{row.lugguage} Luggage</h6>
                        </span>
                        <span>
                          <img
                            src="assets/img/fuel.svg"
                            className="img-fluid"
                          />
                          <h6>Full to Full</h6>
                        </span>
                      </span>
                      <span className="d-flex align-items-center justify-content-between">
                        <span className="metar">
                          <h5 onClick={(e) => handelRate(e.target.value)}>400/km</h5>
                          <h6 onClick={(e) => handelRateUl(e.target.value)}>Unlimited</h6>
                        </span>
                        <span>
                          <Link to={`/billpay/${row._id}`}>
                            <button
                              className="btn btn-primary form_btn book_now"
                              type="submit"
                            >
                              Book Now
                            </button>
                          </Link>
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Choosevehicle;
