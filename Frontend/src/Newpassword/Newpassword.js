import {Link} from 'react-router-dom';
import { React, useState , useEffect } from 'react';
import { __apiURLUser } from '.././apiURL';
import axios from 'axios';

function Newpassword() {
  const [output , setOutput] = useState();
  const [opass , setOldpass] = useState();
  const [npass , setNewpass] = useState();
  const [cnpass , setCNewpass] = useState();

  const handleSubmit=(evt)=>{
    evt.preventDefault();
    if(opass==localStorage.getItem('password'))
    {
      if(npass==cnpass)
      {
        let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cnpass}};
        axios.patch(__apiURLUser+"update",updateDetails).then((response)=>{
          setCNewpass('');
          setNewpass('');
          setOldpass('');
          setOutput("Password changed successfully...");
            
          }).catch((err)=>{
            console.log(err);
        });
      }
      else
        setOutput("New & Confirm new password mismatch....");
    }
    else
      setOutput("Invalid old password , please try again....");
  }  

return (
    <div>
  <main id="main">
    {/* ======= Hero Section ======= */}
    <section className="profile_bg_sec ">
    </section>
    <section className="profile">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="profile_amanda">
              <div className="row">
                <div className="col-lg-6">
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
                    <h4>{localStorage.name}</h4>
                    <h6>{localStorage.email}</h6>
                    <h6>{localStorage.mobile}</h6>
                    <div className="logout_btn">
                    <a><Link to ="/logout">Logout</Link></a>
                  </div>
                  </div>
                  </div>
                <div className="col-lg-6">
                  <div className="gender">
                  <font style={{"color":"blue"}}>{output}</font>
                    <form>
                      <div className="f_set">
                        <div className="form-group">
                          <input type="password" className="form-control" value={opass} onChange={e => setOldpass(e.target.value)} placeholder="Enter old Password" />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" value={npass} onChange={e => setNewpass(e.target.value)} placeholder="Enter New Password" />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" id="pwd" value={cnpass} onChange={e => setCNewpass(e.target.value)} placeholder="Confirm New Password" />
                        </div>
                        <div className="form-group text-center pt-5">
                          <button className="btn btn-primary form_btn" onClick={handleSubmit} type="button">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
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
            <div className="sub_contain mt-0">
              <div className="cancelled d-flex ">
                <div className="ride_cancel">
                  <img src="assets/img/choose_1.png" alt />
                  <h6>Hatchback-Car</h6>
                </div>
                <div className="time_ride">
                <h4>Today 11:30 AM</h4>
                          <h5>Mini Outstation CRN4563218855</h5>
                          <h6 class="indore_bullet">Indore</h6>
                          <h6 class="ujjain_bullet">Ujjain</h6> 
                </div>
                <div className="driver">
                 <img src="assets/img/driver.svg" class="img-fluid" />
                          <h5><a href="#" class="">Cancelled</a></h5>
                </div>
              </div>
              <div className="cancelled d-flex ">
                <div className="ride_cancel">
                  <img src="assets/img/choose_1.png" alt />
                  <h6>Hatchback-Car</h6>
                </div>
                <div className="time_ride">
                   <h4>Today 11:30 AM</h4>
                          <h5>Mini Outstation CRN4563218855</h5>
                          <h6 class="indore_bullet">Indore</h6>
                          <h6 class="ujjain_bullet">Ujjain</h6>
                </div>
                <div className="driver">
                  <img src="assets/img/driver.svg" class="img-fluid" />
                          <h5><a href="#" class="color_c">420</a></h5> 
                </div>
              </div>
              <div className="cancelled d-flex ">
                <div className="ride_cancel">
                  <img src="assets/img/choose_1.png" alt />
                  <h6>Hatchback-Car</h6>
                </div>
                <div className="time_ride">
                <h4>Today 11:30 AM</h4>
                          <h5>Mini Outstation CRN4563218855</h5>
                          <h6 class="indore_bullet">Indore</h6>
                          <h6 class="ujjain_bullet">Ujjain</h6>
                </div>
                <div className="driver">
               <img src="assets/img/driver.svg" class="img-fluid" />
                          <h5><a href="#" class="">Cancelled</a></h5>
                </div>
              </div>
              <div className="cancelled d-flex ">
                <div className="ride_cancel">
                  <img src="assets/img/choose_1.png" alt />
                  <h6>Hatchback-Car</h6>
                </div>
                <div className="time_ride">
                  <h4>Today 11:30 AM</h4>
                          <h5>Mini Outstation CRN4563218855</h5>
                          <h6 class="indore_bullet">Indore</h6>
                          <h6 class="ujjain_bullet">Ujjain</h6> 
                </div>
                <div className="driver">
                  <img src="assets/img/driver.svg" class="img-fluid" />
                          <h5><a href="#" class="color_c">220</a></h5>
                </div>
              </div>
              <Link to="/tripdetail"><div className="cancelled all_rides">
                <a>See all rides </a>
              </div></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

  )
}

export default Newpassword