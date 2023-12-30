import React from "react";
import "./Billpay.css";
import { __apiURLListing } from "../../apiURL";
import { useState, useEffect } from 'react';
import './Billpay.css';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Billpay()
  {
    const { vehicleId } = useParams();
    const [vehicleDetails, setVehicleDetails] = useState(null);
  
    useEffect(() => {
      // Fetch vehicle details based on vehicleId using Axios
      const fetchVehicleDetails = async () => {
        try {
          const response = await axios.get(`__apiURLVehicle + "fetch?"/${vehicleId}`);
          setVehicleDetails(response.data); // Update the state with fetched vehicle details
        } catch (error) {
          console.error('Error fetching vehicle details:', error);
        }
      };
  
      fetchVehicleDetails();
    }, [vehicleId]);
  

  return (
    <div>
      <section className="bill_invoice_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto pb-5">
              <div className="item bg_back_bill">
                <div className="shadow-effect">
                  <img
                    className="img-circle img-fluid d-flex justify-content-center mx-auto"
                    src="assets/img/kisspng-suzuki.png"
                    alt
                  />
                  <div className="rate d-flex justify-content-between align-items-center">
                    <span className="text-left">
                      <span>
                        <h5>Maruti Suzuki</h5>
                      </span>
                      <span>
                        <h5>
                          <b>Alto K10</b>
                        </h5>
                      </span>
                    </span>
                    <span className="text-left">
                      <span>
                        <h5>
                          Rate: Rs.68/<b>Hr</b>
                        </h5>
                      </span>
                      <span>
                        <h5>
                          Rate: Rs.1500/<b>Day</b>
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
                  <span className="avilable_tag">
                    <span className="avilable_top_right">
                      <img src="assets/img/bill-pay.svg" />
                      <h6>Available</h6>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="total_invoice_bill">
            <div className="hatchback_car vicle_detail_side">
              <img src="assets/img/choose_1.png" className="img-fluid" />
              <h6>Hatchback-Car</h6>
              <h5 className="text_verti">Segment</h5>
            </div>
            <div className="row">
              <div className="col-lg-9 mx-auto pt-4 pb-4">
                <div className="invoice_total">
                  <span className="text-center bill_top_h">
                    <h4>Car Name</h4>
                    <h6>Maruti Suzuki Alto K10</h6>
                  </span>
                  <span className="text-center indore_h">
                    <h3>Indore</h3>
                  </span>
                  <span className="indore_bopal d-flex align-items-center justify-content-between">
                    <h5>Jail road indore</h5>
                    <h6 />
                    <h5>Bhopal railway</h5>
                  </span>
                  <span className="time_date d-flex align-items-center justify-content-between">
                    <h5>12/10/2020 at 6 :30 pm</h5>
                    <h6 />
                    <h5>15/10/2020 at 7 :30 pm</h5>
                  </span>
                  <span className="detail_customer d-flex justify-content-between align-items-center text-center">
                    <span>
                      <h4>Name</h4>
                      <h6>Manish Chohan</h6>
                    </span>
                    <span>
                      <h4>Email ID</h4>
                      <h6>Manishchohan@100</h6>
                    </span>
                    <span>
                      <h4>Mobile No.</h4>
                      <h6>9595959595</h6>
                    </span>
                  </span>
                  <div className="pay_total">
                    <span className="d-flex align-items-center justify-content-between">
                      <span>
                        <h4>Pay</h4>
                        <h5>Amount</h5>
                        <h5>G S T</h5>
                        <h5>Delivery</h5>
                        <h5>Discount</h5>
                      </span>
                      <span>
                        <h5>0.00</h5>
                        <h5>0.00</h5>
                        <h5>0.00</h5>
                        <h5>0.00</h5>
                      </span>
                    </span>
                    <span className="total_a d-flex justify-content-end align-items-center">
                      <h5>Total Amount</h5>
                      <h6 />
                      <h5>0.00</h5>
                    </span>
                    <span className="check_signup payment_process d-flex justify-content-between align-items-center">
                      <span>
                        <div className="form-group mb-0">
                          <input type="checkbox" id="html" />
                          <label htmlFor="html" className="mb-0">
                            I agree with the terms and conditions
                          </label>
                        </div>
                      </span>
                      <span>
                        <Link to="/Payment">
                          <button
                            className="btn btn-primary payment_pro"
                            type="submit"
                          >
                            Proceed to Payment
                          </button>
                        </Link>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Billpay;
