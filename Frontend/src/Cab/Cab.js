import React from 'react'
import './cab.css';
import { Link } from 'react-router-dom';

function Cab() {
  return (
    <div>
    <section id="cabmain" className="d-flex align-items-center">
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>  
              <div className="blue-box">
                  <h1>Inter - City Cab for you Destination</h1>
                      <Link to="/cabmain" ><button style={{color:'white',fontWeight:'bold'}} className="button">Book Now</button></Link>
              </div>
          </div>
      </section>
<div>
  <div className="features-sec py-5">
    <div className="container">
      <h2 className="font-weight-bold text-center">Features</h2>
      <div className="row mt-5">
        <div className="col-md-5 col-12 mb-5 mb-md-0">
          <div className="why-image">
            <img src="assets/img/Door-Cab.jpg" className="img-fluid" width="100%" />
          </div>
        </div>
        <div className="col-md-7 col-12">
          <div className="why-content home-features px-5 py-4 text-center d-flex flex-column justify-content-center">
            <h4 className="font-weight-bold">Lorem Ipsum is simply dummy</h4>
            <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and </p>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-7 col-12 mb-5 mb-md-0">
          <div className="why-content home-features px-5 py-4 text-center d-flex flex-column justify-content-center">
            <h4 className="font-weight-bold">Lorem Ipsum is simply dummy</h4>
            <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and </p>
          </div>
        </div>
        <div className="col-md-5 col-12">
          <div className="why-image">
            <img src="assets/img/marazzo-car-comfort.jpg" width="100%" className="h-100" />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-5 col-12 mb-5 mb-md-0">
          <div className="why-image">
            <img src="assets/img/Safety-first-always.jpg" width="100%" className="h-100" />
          </div>
        </div>
        <div className="col-md-7 col-12">
          <div className="why-content home-features px-5 py-4 text-center d-flex flex-column justify-content-center">
            <h4 className="font-weight-bold">Lorem Ipsum is simply dummy</h4>
            <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and </p>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-7 col-12 mb-5 mb-md-0">
          <div className="why-content home-features px-5 py-4 text-center d-flex flex-column justify-content-center">
            <h4 className="font-weight-bold">Lorem Ipsum is simply dummy</h4>
            <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and </p>
          </div>
        </div>
        <div className="col-md-5 col-12">
          <div className="why-image">
            <img src="assets/img/Emergency-SOS.jpg" width="100%" className="h-100" />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-5 col-12 mb-5 mb-md-0">
          <div className="why-image">
            <img src="assets/img/Door-Cab.jpg" width="100%" className="h-100" />
          </div>
        </div>
        <div className="col-md-7 col-12">
          <div className="why-content home-features px-5 py-4 text-center d-flex flex-column justify-content-center">
            <h4 className="font-weight-bold">Lorem Ipsum is simply dummy</h4>
            <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and </p>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-7 col-12 mb-5 mb-md-0">
          <div className="why-content home-features px-5 py-4 text-center d-flex flex-column justify-content-center">
            <h4 className="font-weight-bold">Lorem Ipsum is simply dummy</h4>
            <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and </p>
          </div>
        </div>
        <div className="col-md-5 col-12">
          <div className="why-image">
            <img src="assets/img/driver.jpg" width="100%" className="h-100" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="home-testimonial py-5">
    <div className="container">
      <h2 className="text-center font-weight-bold mb-3">Our Testimonial</h2>
      <div className="row">
        <div className="col-md-4 col-12 mb-5 mb-md-0">
          <div className="card border-0">
            <div className="rounded-circle mx-auto user-img mt-3 mb-2">
              <img src="assets/img/Door-Cab.jpg" className="card-img-top rounded-circle w-100 h-100" alt="image" />
            </div>
            <div className="card-body text-center position-relative mt-5 pt-2">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mb-5 mb-md-0">
          <div className="card border-0">
            <div className="rounded-circle mx-auto user-img mt-3 mb-2">
              <img src="assets/img/Door-Cab.jpg" className="card-img-top rounded-circle w-100 h-100" alt="image" />
            </div>
            <div className="card-body text-center position-relative mt-5 pt-2">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mb-5 mb-md-0">
          <div className="card border-0">
            <div className="rounded-circle mx-auto user-img mt-3 mb-2">
              <img src="assets/img/Door-Cab.jpg" className="card-img-top rounded-circle w-100 h-100" alt="image" />
            </div>
            <div className="card-body text-center position-relative mt-5 pt-2">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </div>
  )
}

export default Cab