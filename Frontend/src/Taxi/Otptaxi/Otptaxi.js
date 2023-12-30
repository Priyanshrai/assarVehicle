import React from 'react';
import "./Otptaxi.css";



function Otptaxi() {
  return (
    <div> <div>
    <main id="main">
      <section id="login" className="login_sec">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-6 bg-light">
            <div className="confirmation">
            <div className="col-md-12 align-self-center">
              <img src="assets/img/hatchback-car-i10.svg" className="img-fluid"/>
              <hr style={{background: 'white',color: 'white',borderColor: 'white',height: '3px'}}/>
              <p>Hatchback</p>
            </div>
          </div>
          <div id="demo_1">
          <p> Enter your 4 Digit Otp</p>
          <input type="text" className="form-control"  placeholder="OTP" aria-describedby required />
          <div id="OTPBUTTON">
          <button type="button" className="btn btn-terniary">SUBMIT</button>
          </div>
          <h6 style={{color: '#990066',textAlign:'center'}}>Resend</h6>
          </div>
            </div>
            <div className="col-md-6 d-none d-md-flex bg-image" />
          </div>
        </div>
      </section>
    </main>
  </div></div>
  )
}

export default Otptaxi