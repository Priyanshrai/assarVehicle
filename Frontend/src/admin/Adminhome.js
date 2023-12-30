import React from 'react'
import { Link } from 'react-router-dom'
import './adminhome.css';


function Adminhome() {



  return (
    <div>
      <main id="main">
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>
            <div className="col-lg-7">
              <h1>Admin Home</h1>
            </div>
          </div>
        </section>
        <section id="choose-car" className="choose_car">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2">
                <Link to="/sdadmin"><div className="choose_car_icon">
                  <span className="icon"><img src="assets/img/self-drive.svg" className="img-fluid" /></span>
                  <h5>Selfdrive</h5>
                </div></Link>
              </div>
              <div className="col-lg-2">
                <Link to="/taxiadmin"><div className="choose_car_icon">
                  <span className="icon"><img src="assets/img/taxi-white.svg" className="img-fluid" /></span>
                  <h5>Taxi</h5>
                </div></Link>
              </div>
              <div className="col-lg-2">
                <Link to="/cabadmin"> <div className="choose_car_icon">
                  <span className="icon"><img src="assets/img/m-icon.svg" className="img-fluid" /></span>
                  <h5>Cab</h5>
                </div></Link>
              </div>
              <div className="col-lg-2">
                <Link to="/corpadmin"><div className="choose_car_icon">
                  <span className="icon"><img src="assets/img/corporate-icon.svg" className="img-fluid" /></span>
                  <h5>Corporate</h5>
                </div></Link>
              </div>
              <div className="col-lg-2">
                <Link to="/eventadmin"><div className="choose_car_icon">
                  <span className="icon"><img src="assets/img/events.svg" className="img-fluid" /></span>
                  <h5>Events</h5>
                </div></Link>
              </div>
              <div className="col-lg-2">
                <Link to="/transadmin"><div className="choose_car_icon">
                  <span className="icon"><img src="assets/img/truck.svg" className="img-fluid" /></span>
                  <h5>Transport</h5>
                </div></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Adminhome