import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div><section id="app-mobile" className="mobile_app_book">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
          <span>
            <h3>Book an assar from the App</h3>
            <h6>Download the app for exclusive deals and ease of booking</h6>
            <a href="#"><img src="assets/img/play-store.png" className="pt-4 pb-3" /></a>
            <a href="#"><img src="assets/img/apple-ply-store.png" className="pt-4 pb-3" /></a>
          </span>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-end">
          <span><img src="assets/img/app_mobile.png" className="img-fluid" /></span>
        </div>
      </div>
    </div>
  </section>
  <section className>
    <div className="container">
      <div className="avilable_title">
        <h1>As seen on/Media centre</h1>
      </div>
      <div className="press">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-items-center">
            <span><img src="assets/img/free-press-icon.png" className="img-fluid" /></span>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-items-center">
            <span><img src="assets/img/bhaskar-logo.png" className="img-fluid" /></span>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-items-center">
            <span><img src="assets/img/agniban.png" className="img-fluid" /></span>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Banner