import React from 'react';
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import './Profile.css';

function Profile() {
  const[ProfileContent , setProfileContent ]=useState();
  useEffect(() =>{
    setInterval(()=>{
                if(localStorage.getItem("role")=="admin")
                            {
                              setProfileContent(<div>
                                <main id="main">
                                 {/* ======= Hero Section ======= */}
                                 <section className="profile_bg_sec">
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
                                             <h4>{localStorage.getItem("name")}</h4>
                                             <h6>{localStorage.getItem("email")}</h6>
                                             <h6>{localStorage.getItem("mobile")}</h6>
                                             <div className="logout_btn">
                                               <a><Link to ="/logout">Logout</Link></a>
                                             </div>
                                           </div>
                                         </div>
                                            <span className="edit_p py-4 mr-4">
                                           <a><Link to="/useredetail"><img src="assets/img/edit_pencil.svg" /></Link></a>
                                         </span>
                                       </div>
                                     </div>
                                   </div>
                                 </section>
                               </main>
                             </div>
                             );
                            }
                            else if(localStorage.getItem("role")=="user")
                            {
                              setProfileContent(<div>
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
                                             <h4>{localStorage.getItem("name")}</h4>
                                             <h6>{localStorage.getItem("email")}</h6>
                                             <h6>{localStorage.getItem("mobile")}</h6>
                                             <div className="logout_btn">
                                               <a><Link to ="/document">Upload Documents for Self Drive Vehicle</Link></a>
                                             </div>
                                             <div className="logout_btn">
                                               <a><Link to ="/logout">Logout</Link></a>
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
                                         <span className="edit_p py-4 mr-4">
                                           <a><Link to="/userdetail"><img src="assets/img/edit_pencil.svg" /></Link></a>
                                         </span>
                                       </div>
                                       <div className="col-lg-7">
                                         <div className="sub_contain">
                                           <div className="h-ride">
                                             <h3>Your Rides</h3>
                                           </div>
                                           <div className="cancelled d-flex ">
                                             <div className="ride_cancel">
                                               <img src="assets/img/choose_1.png" alt />
                                               <h6>Hatchback-Car</h6>
                                             </div>
                                             <div className="time_ride">
                                               <h4>Today 11:30 AM</h4>
                                               <h5>Mini Outstation CRN4563218855</h5>
                                               <h6 className="indore_bullet">Indore</h6>
                                               <h6 className="ujjain_bullet">Ujjain</h6>
                                             </div>
                                             <div className="driver">
                                               <img src="assets/img/driver.svg" className="img-fluid" />
                                               <h5><a href="#" className>Cancelled</a></h5>
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
                                               <h6 className="indore_bullet">Indore</h6>
                                               <h6 className="ujjain_bullet">Ujjain</h6>
                                             </div>
                                             <div className="driver">
                                               <img src="assets/img/driver.svg" className="img-fluid" />
                                               <h5><a href="#" className="color_c">420</a></h5>
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
                                               <h6 className="indore_bullet">Indore</h6>
                                               <h6 className="ujjain_bullet">Ujjain</h6>
                                             </div>
                                             <div className="driver">
                                               <img src="assets/img/driver.svg" className="img-fluid" />
                                               <h5><a href="#" className>Cancelled</a></h5>
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
                                               <h6 className="indore_bullet">Indore</h6>
                                               <h6 className="ujjain_bullet">Ujjain</h6>
                                             </div>
                                             <div className="driver">
                                               <img src="assets/img/driver.svg" className="img-fluid" />
                                               <h5><a href="#" className="color_c">220</a></h5>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </section>
                               </main>
                             </div>
                             );
                            }
                          },10)
  },[]);
  
  return (
  <div>{ProfileContent}</div>
  )
}

export default Profile