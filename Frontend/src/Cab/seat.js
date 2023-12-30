import React from 'react'
import './cab.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Seat() {
  
  return (
    <div>
   <section id="cab_main" className="d-flex align-items-center">
  </section>
<div>
  <div className="Inner_line">
    <div className="container">
      <div className="result_heading"><h4> Indore <img src="assets/img/arrow-pointing-to-right_white.png" alt width="16px" /> Bhopal  | Mahindra Marazzo ( AC Cab ) </h4></div>
    </div>
  </div>
  <div className="gray_line">
    <div className="container">
      <div className="left_dates">
        <span> Sun 3 Aug</span>
        <div className="timings1 current_time">
          <a href="seat_booking.html">  <button> 10:30 AM </button> </a>
        </div>
        <div className="timings1">
          <a href="seat_booking.html">  <button> 11:30 AM </button> </a>
        </div>
        <div className="timings1">
          <a href="seat_booking.html">  <button> 01:00 PM </button> </a>
        </div>
        <div className="timings1 ">
          <a href="seat_booking.html">  <button> 2:30 PM </button> </a>
        </div>
        <div className="timings1">
          <a href="seat_booking.html">  <button> 3:45 PM </button> </a>
        </div>
        <div className="timings1 time_disable1">
          <a href="seat_booking.html">  <button> 5:00 PM </button> </a>
        </div>
        <div className="timings1">
          <a href="seat_booking.html">  <button> 6:15 PM </button> </a>
        </div>
        <div className="timings1">
          <a href="seat_booking.html">  <button> 7:00 PM </button> </a>
        </div>
        <div className="timings1">
          <a href="seat_booking.html">  <button> 8:30 PM </button> </a>
        </div>
      </div>
    </div>
  </div>
  <div className="seat_booking">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="indicate">
            <img src="assets/img/available.png" />
            <p>Seat Available</p>
          </div>
          <div className="indicate">
            <img src="assets/img/Selected.png" />
            <p>Seat Selected</p>
          </div>
          <div className="indicate">
            <img src="assets/img/booked.png" />
            <p>Seat Booked</p>
          </div>
          <div className="indicate">
            <img src="assets/img/Female_booked.png" />
            <p>Seat Booked</p>
          </div>
        </div>
        <div className="col-md-4 col-md-offset-2">
          <div className="seat_inner">
            <h2> Window Seat</h2>
            <section id="seats">
              <input id="seat-1" className="seat-select" type="checkbox" defaultValue={1} name="seat[]" />
              <label htmlFor="seat-1" className="seat" />
              <input id="seat-2" className="seat-select" type="checkbox" defaultValue={2} name="seat[]" />
              <label htmlFor="seat-2" className="seat" />
              <input id="seat-3" className="seat-select " type="checkbox" defaultValue={3} name="seat[]" />
              <label htmlFor="seat-3" className="seat seat-booked" />
            </section>
          </div>
        </div>
        <div className="col-md-5 ">
          <div className="seat_inner">
            <h2>Regular Seat</h2>
            <section id="seats">
              <input id="seat-4" className="seat-select" type="checkbox" defaultValue={4} name="seat[]" />
              <label htmlFor="seat-4" className="seat" />
            </section>
          </div>
        </div>
        <div className="col-md-12">
          <div className="down_area">
            <button data-toggle="modal" data-target="#myModal"> Pay Rs.440 &amp; Book Now </button>
          </div>
        </div>	 
      </div> 
    </div>
  </div>
</div>
{/*<-- Modal -->*/}
<div className="modal" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header pop_head">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
        <h4 className="modal-title" id="myModalLabel">Indore <img src="assets/img/arrow-pointing-to-right_white.png" width={18} /> Bhopal  12 Aug 2020 | Tata Tigor AC ( 4+D seater ) </h4>
      </div>
      <div className="modal-body">
        <div>
          {/* Nav tabs */}
          <ul className="nav nav-tabs pop_bord" role="tablist">
            <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Boarding point</a></li>
            
            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Dropping Point</a></li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="home">
              <div className="radio_btn_area">
                <label className="container_radio"> 6:00 AM - Rajendra nagar <p> ROUTE #1#</p>
                  <input type="radio" defaultChecked="checked" name="radio1" />
                  <span className="checkmark" />
                </label>
                <label className="container_radio"> 6:03 AM - Chankya Puri Square <p> ROUTE #1# (MP)</p>
                  <input type="radio" name="radio1" />
                  <span className="checkmark" />
                </label>
                <label className="container_radio"> 6:06 AM - Annapurna Temple <p> ROUTE #1#</p>
                  <input type="radio" name="radio1" />
                  <span className="checkmark" />
                </label>
                <label className="container_radio"> 6:08 AM - Usha Nagar Squar <p> ROUTE #1#</p>
                  <input type="radio" name="radio1" />
                  <span className="checkmark" />
                </label>
                <label className="container_radio"> 6:11 AM - Mhownaka <p> ROUTE #1#</p>
                  <input type="radio" name="radio1" />
                  <span className="checkmark" />
                </label>
                <label className="container_radio"> 6:16 AM - Bada Ganpati <p>ROUTE #1#</p>
                  <input type="radio" name="radio1" />
                  <span className="checkmark" />
                </label>
                <label className="container_radio"> 6:19 AM - Imli Bazar <p> ROUTE #1#</p>
                  <input type="radio" name="radio1" />
                  <span className="checkmark" />
                </label>
                <label className="container_radio"> 6:23 AM - Nagar Nigam <p>ROUTE #1#</p>
                  <input type="radio" name="radio1" />
                  <span className="checkmark" />
                </label>
                <label className="container_radio"> 6:25 AM - Jail Road <p> ROUTE #1#</p>
                  <input type="radio" name="radio1" />
                  <span className="checkmark" />
                </label><label className="container_radio"> 6:35 AM - Palasia <p> ROUTE #1#</p>
                  <input type="radio" name="radio1" />
                  <span className="checkmark" />
                </label>
                <label className="container_radio"> 6:41 AM - LIG Square <p> ROUTE #1#</p>
                  <input type="radio" name="radio1" />
                  <span className="checkmark" />
                </label><label className="container_radio"> 6:52 AM - Star Square <p> ROUTE #1#</p>
                  <input type="radio" name="radio1" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="profile"> 
              <div className="radio_btn_area">
                <label className="container_radio"> 9:20 AM - Bhopal Airport <p> ROUTE #1#</p>
                  <input type="radio" defaultChecked="checked" name="radio" />
                  <span className="checkmark" />
                </label>
                <label className="container_radio"> 9:31 AM - Lal Ghati <p> ROUTE #1#</p>
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label>
                <label className="container_radio"> 9:49 AM - Bhopal Junction <p> ROUTE #1#</p>
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label>
                <label className="container_radio"> 10:06 AM - ISBT - Habibganj <p> ROUTE #1#</p>
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <h4><strong>Amount ₹ 440.00 (Inclusive Tax and Insurance)  </strong></h4>
          <Link to="/passengerform"><button type="button" className="pop_btn">Confirm Booking</button></Link>
        </div>
      </div>
    </div>
  </div>
</div>




    



 




    
    </div>
  )
}

export default Seat