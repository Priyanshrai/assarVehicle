import React from 'react'
import './cab.css';
import { Link } from 'react-router-dom';

function Passengerform() {
  return (
    <div>
  <div className="serch_resultarea">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="person_detail">
            <h4> Passenger Details </h4> 
            <div className="col-md-12">
              <p>Passenger 1 details </p> 
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name </label>
                <input type="Text" className="form-control" id="exampleInputEmail1" placeholder />
              </div>
            </div>
            <div className="col-md-8 clearfix">
              <label htmlFor="exampleInputEmail1">Gender </label>
              <div role="tabpanel" className="tab-pane" id="profile"> 
                <div className="radio_btn_area">
                  <label className="container_radio"> Male
                    <input type="radio" defaultChecked="checked" name="radio" />
                    <span className="checkmark" />
                  </label>
                  <label className="container_radio"> Female
                    <input type="radio" name="radio" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Age </label>
                <input type="Text" className="form-control" id="exampleInputEmail1" placeholder />
              </div>
            </div>
            <div className="col-md-12 contact_del">
              <h3>Insurance of Rs. 2.5 is Included on fare price</h3>
            </div>
            <div className="col-md-12 detail-amount">
              <h3>Total Amout :  ₹ 610</h3>
             <Link to="/Payment"> <button> Proceed to Pay </button></Link>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Passengerform