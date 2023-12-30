import './Footer.css';
import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

function Footer() {
  

 
    const[FooterContent , setFooterContent ] = useState();
    useEffect(()=>{
      setInterval(()=>{
                  if(localStorage.getItem("role")=="admin")
                  {
                    setFooterContent( <div> 

                      {/* ======= Footer ======= */}
                      <footer id="footer">
                       <div className="container pt-3 text-center">
                          <div className="copyright">
                          Copyright © 2023  Assar Vehicle Rental Services Pvt. Ltd. All rights reserved Site
                          </div>
                        </div>
                      </footer>
                      {/* ======End Footer====== */}
                    
                    </div>);
                  }
                  else
                  {
                    setFooterContent(<div> 

                      {/* ======= Footer ======= */}
                      <footer id="footer">
                        <div className="footer-top">
                          <div className="container">
                            <div className="row bor_bottom_w">
                              <div className="col-lg-4 footer-links policy_sec">
                                <ul>
                                  <li><a><Link to="/Policy/CSR">CSR Policy</Link></a></li>
                                  <li><a><Link to="/Blogs">Blogs</Link></a></li>
                                  <li><a><Link to="/Notice">Notices</Link></a></li>
                                  <li><a><Link to="/Franchise">Become a franchise</Link></a></li>
                                  <li><a><Link to="/Bussiness-solution">Business Solutions</Link></a></li>
                                  <li><a><Link to="/Transportation-solution">Transport Solutions</Link></a></li>
                                </ul>
                              </div>
                              <div className="col-lg-4 footer-links">
                                <h4>Keep in Touch</h4>
                                <ul>
                                  <li><a><Link to="#">Info@assarcab.com</Link></a></li>
                                  <li><a><Link to="#">Support@assarcab.com</Link></a></li>
                                </ul>
                                <span className="static_link">
                                  <a><Link to="/policy/Terms-conditions">Terms and conditions</Link></a>
                                  <a><Link to="/policy/Privacy-policy">Privacy Policy</Link></a>
                                </span>
                              </div>
                              <div className="col-lg-4 footer-links justify-content-center">
                                <h4>Our Telephones</h4>
                                <ul>
                                  <li>
                                    <a><Link to="#"><img src="assets/img/phone-white.svg" className="img-fluid pr-2" />+91 910-910-1851</Link></a>
                                  </li>
                                  <li>
                                    <a><Link to="#"><img src="assets/img/telephone-white.svg" className="img-fluid pr-2" /> 0731-3564526</Link></a>
                                  </li>
                                </ul>
                                <span className="store_icon">
                                  <a href="#"><img src="assets/img/apple-store.png" className="img-fluid" /></a>
                                  <a href="#"><img src="assets/img/google-store.png" className="img-fluid" /></a>
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <span><Link to="/"><img src="assets/img/footer-logo.svg" className="img-fluid" /></Link></span>
                              </div>
                              <div className="col-lg-6 d-flex align-items-center justify-content-end">
                                <div className="social_link">
                                  <a href="https://wa.me/+9109999666"><i className="bx bxl-whatsapp" /></a>
                                  <a href="https://www.linkedin.com/company/assar-vehicle-rental-services-pvt-ltd"><i className="bx bxl-linkedin-square" /></a>
                                  <a href="https://www.instagram.com/assarvehicle"><i className="bx bxl-instagram" /></a>
                                  <a href="https://twitter.com/assarvehicle"><i className="bx bxl-twitter" /></a>
                                  <a href="https://www.facebook.com/Assarvehicle/"><i className="bx bxl-facebook-square" /></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="container pt-3 text-center">
                          <div className="copyright">
                          Copyright © 2023  Assar Vehicle Rental Services Pvt. Ltd. All rights reserved Site
                          </div>
                        </div>
                      </footer>
                      {/* ======End Footer====== */}
                    
                    </div>);
                  }
                },100)
    },[])
  
  return (
    <div> {FooterContent} </div>
    
  )
}

export default Footer