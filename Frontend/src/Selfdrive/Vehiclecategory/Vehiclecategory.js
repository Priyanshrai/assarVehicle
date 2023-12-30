import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Vehiclecategory.css';



function Vehiclecategory() {
const[ gvDetails , setgvDetails ] = useState([]);



  return (
 <div> 
 <main id="main">
    {/* ======= Hero Section ======= */}
    <section id="category-sec" className="category_sec">
    </section>
    <div className="container">
      <div className="book_title text-center">
        <h1>Vehicle Category</h1>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-center text-center bg_hover_select">
          <div className="car_select">
            <Link to="/car"><span>
              <img src="assets/img/hatchback-car-i10.svg" className="img-fluid" />
            </span></Link>
            <h3>Car</h3>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-center text-center bg_hover_select">
          <div className="car_select">
          <Link to="/twowheeler"><span>
              <img src="assets/img/bulat-bike.svg" className="img-fluid" />
            </span></Link>
            <h3>Two-Wheeler</h3>
          </div>
        </div>
      </div>
    </div>
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
    <section id="app-mobile" className="mobile_app_book need_banner">
      <div className="container">
        <span>
          <h3>A CAR FOR EVERY NEED</h3>
          <h6>We have a range of cars, so something will perfectly fit your trip</h6>
        </span>
      </div>
    </section>
    <div className="container">
      <div className="book_title text-center">
        <h1>How Assar Works</h1>
        <h6>Drive yourself to an adventure and back in 5 simple steps</h6>
      </div>
    </div>
    <section id="ready-car-drive" className="ready_drive_car book_car">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="ready_car text-center">
              <span><img src="assets/img/category-car.svg" className="py-3 pr-0" alt /></span>
              <span>
                <h5>BOOK</h5>
                <h6>Search for and book a car <br /> on our site!</h6>
              </span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ready_car text-center">
              <span><img src="assets/img/category-car.svg" className="py-3 pr-0" alt /></span>
              <span>
                <h5>UPLOAD DOCUMENTS</h5>
                <h6>Search for and book a car <br /> on our site!</h6>
              </span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ready_car text-center">
              <span><img src="assets/img/category-car.svg" className="py-3 pr-0" alt /></span>
              <span>
                <h5>UNLOCK</h5>
                <h6>Search for and book a car <br /> on our site!</h6>
              </span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ready_car text-center">
              <span><img src="assets/img/category-car.svg" className="py-3 pr-0" alt /></span>
              <span>
                <h5>Go to Run</h5>
                <h6>Search for and book a car <br /> on our site!</h6>
              </span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ready_car text-center">
              <span><img src="assets/img/category-car.svg" className="py-3 pr-0" alt /></span>
              <span>
                <h5>RETURN</h5>
                <h6>Search for and book a car <br /> on our site!</h6>
              </span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ready_car text-center">
              <span><img src="assets/img/category-car.svg" className="py-3 pr-0" alt /></span>
              <span>
                <h5>REFUND</h5>
                <h6>Search for and book a car <br /> on our site!</h6>
              </span>
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
  </main>
</div>

  )
}

export default Vehiclecategory