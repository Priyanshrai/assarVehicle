import React from 'react';
import {Link} from 'react-router-dom';

function Tripdetail() {
  return (
   <div>
  <main id="main">
    {/* ======= Hero Section ======= */}
    <section className="profile_bg_sec ">
    </section>
    <section className="profile">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="profile_amanda">
              <div className="avatar-upload">
                <div className="avatar-edit">
                  <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
                  <label htmlFor="imageUpload" />
                </div>
                <div className="avatar-preview">
                  <div className="imagePreview">
                  </div>
                </div>
              </div>
              <div className="detail_name text-center">
                <h4>Amanda</h4>
                <h6>amanda4455@gmail.com</h6>
                <h6>+91 889 889 8899</h6>
                <div className="logout_btn">
                  <Link to ="/login"><a>Logout</a></Link>
                </div>
              </div>
            </div>
            <div className="list_help">
              <ul>
                <li><a href="#"><img src="assets/img/headphones.svg" className="img-fluid" /> Support </a></li>
                <li><a href="#"><img src="assets/img/headphones.svg" className="img-fluid" /> Assar Pass </a></li>
                <li><a href="#"><img src="assets/img/headphones.svg" className="img-fluid" /> About </a></li>
                <li><a href="#"><img src="assets/img/headphones.svg" className="img-fluid" /> Refer &amp; Earn </a></li>
                <li><a href="#"><img src="assets/img/headphones.svg" className="img-fluid" /> Emergency Contact </a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="sub_contain">
              <div className="h-ride">
                <h1>Trip details</h1>
              </div>
              <div className="invoice_total invoice_trip">
                <span className="text-center bill_top_h">
                  <h5>Ride details</h5>
                </span>
                <span className="indore_bopal d-flex align-items-center justify-content-between pt-4 ">
                  <h5 className="mb-0">Boarding point</h5>
                  <h5 className="mb-0">12:30 Thu, 2 jun</h5>
                </span>
                <div className="time_ride trip_detail_bill pb-4">
                  <h6 className="indore_bullet">Indraprastha Tower, Mahatma Gandhi Rd, Near Apollo Tower, South ...</h6>
                </div>
                <span className="text-right">
                  <h5>03h 30m</h5>
                </span>
                <span className="time_date d-flex align-items-center justify-content-between pt-4">
                  <h5 className="mb-0">Dropping point</h5>
                  <h5 className="mb-0">04:30 Thu, 2 jun</h5>
                </span>
                <div className="time_ride trip_detail_bill pb-4">
                  <h6 className="ujjain_bullet">Indraprastha Tower, Mahatma Gandhi Rd, Near Apollo Tower, South ...</h6>
                </div>
                <span className="detail_customer d-flex justify-content-between align-items-center text-center">
                  <span>
                    <h6> <img src="assets/img/driver.svg" className="img-fluid" /> You rated <img src="assets/img/rate_star.png" className="img-fluid" /></h6>
                  </span>
                  <span>
                    <h6> <img src="assets/img/speedometer.svg" className="img-fluid" /><i className="bx bx-rupee" /> 410</h6>
                  </span>
                  <span>
                    <h6><img src="assets/img/Hatchback-Car-i10.png" className="img-fluid" /> Marzzo</h6>
                  </span>
                </span>
                <div className="billl pt-4">
                  <span className="d-flex align-items-center justify-content-between">
                    <span>
                      <h4>Bill Details</h4>
                      <h5>Base Fare</h5>
                      <h5>Insurance</h5>
                      <h5>GST</h5>
                    </span>
                    <span>
                      <h5><i className="bx bx-rupee" /> 382</h5>
                      <h5><i className="bx bx-rupee" /> 05</h5>
                      <h5><i className="bx bx-rupee" /> 23</h5>
                    </span>
                  </span>
                  <span className="total_a d-flex justify-content-between align-items-center">
                    <h5>Total Payable</h5>
                    <h5><i className="bx bx-rupee" /> 410</h5>
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

export default Tripdetail