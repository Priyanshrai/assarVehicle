import './Header.css';
import React from 'react'
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Auth/Auth';


function Header() {

  const [ HeaderContent, setHeaderContent ] = useState();

  useEffect(()=>{
    setInterval(()=>{
                 if(localStorage.getItem("role")=="admin")
                {
                  setHeaderContent(<div>
                    <div>
                    {/* ======= Top Bar ======= */}
                    <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
                      <div className="container d-flex justify-content-end">
                        <div className="social-links align-items-left">
                          <a className="instagram"><Link to="/">Wellcome Admin Panel</Link> </a>
                          <a className="skype"><Link to ="/">{ localStorage.getItem("email") }</Link></a>
                           <a className="contact-info"><Link to ="/">{ localStorage.getItem("name") }</Link></a>
                        </div>
                      </div>
                    </div>
                    {/* ======= Header ======= */}
                    <header id="header" className="fixed-top">
                      <div className="container d-flex align-items-center">
                        <a className="logo mr-auto"><Link to="/"><img src="assets/img/logo-white.svg" alt /></Link></a>
                        <nav className="nav-menu d-none d-lg-block">
                          <ul>
                            <li><a><Link to= "/">Admin Panel</Link></a></li>
                            <span>
                            <Link to ="/user"><a className="icon_user_profile" data-toggle="modal" data-target="#exampleModal"><i className="bx bx-user-circle" /></a></Link>
                            </span>
                          </ul>
                        </nav>
                        {/* .nav-menu */}
                      </div>
                    </header>
                    {/* End Header */}
                  </div>
                  </div>);
                }
                else if(localStorage.getItem("role")=="user")
                {
                  setHeaderContent(<div>
                    <div data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="0" class="">
                    <button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>
                    <nav class="mobile-nav d-lg-none">
                    <ul>
                        <li className="active"><a><Link to= "/">Home</Link></a></li>
                        <li ><a><Link to="/aboutus">About</Link></a></li>
                        <li ><a><Link to="/contact">Contact</Link></a></li>
                        <li ><a><Link to="/Drivewithassar">Drive with Assar</Link></a></li>
                        <li ><a><Link to="/Franchise">Franchise</Link></a></li>
                        <span>
                            <a href="#" class="icon_user_profile" data-toggle="modal" data-target="#exampleModal"><i class="bx bx-user-circle"></i></a>
                        </span>
                    </ul>
                </nav>
                <div class="mobile-nav-overly"></div> 
                                      
                                        {/* ======= Top Bar ======= */}
                    <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
                      <div className="container d-flex justify-content-end">
                        <div className="social-links align-items-left">
                          <a className="twitter"><Link to ="/List-your-vehicle">List your vehicle</Link></a>
                          <a className="facebook"><Link to ="/Offers">Offers</Link></a> 
                          <a className="instagram"><Link to="/Carsubscription">Car Subscription</Link> </a>
                          <a className="skype"><Link to ="/Carrer">Carrer</Link></a>
                           <a className="contact-info icofont-phone"><Link to ="/Phone">+91-910-9999-666</Link></a>
                        </div>
                      </div>
                    </div>
                    {/* ======= Header ======= */}
                    <header id="header" className="fixed-top">
                      <div className="container d-flex align-items-center">
                        <a className="logo mr-auto"><Link to="/"><img src="assets/img/logo-white.svg" alt /></Link></a>
                        <nav className="nav-menu d-none d-lg-block">
                          <ul>
                            <li className="active"><a><Link to= "/">Home</Link></a></li>
                            <li ><a><Link to="/aboutus">About</Link></a></li>
                            <li ><a><Link to="/contact">Contact</Link></a></li>
                            <li ><a><Link to="/Drivewithassar">Drive with Assar</Link></a></li>
                            <li ><a><Link to="/Franchise">Franchise</Link></a></li>
                            <span>
                            <Link to ="/user"><a className="icon_user_profile" data-toggle="modal" data-target="#exampleModal"><i className="bx bx-user-circle" /></a></Link>
                            </span>
                          </ul>
                        </nav>
                        {/* .nav-menu */}
                      </div>
                    </header>
                    {/* End Header */}
                    



                  </div>
                  
                      </div>);
                }
                else
                {
                  setHeaderContent(<div>
                    
                     {/* ======= Top Bar ======= */}
                    <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
                      <div className="container d-flex justify-content-end">
                        <div className="social-links align-items-left">
                          <a className="twitter"><Link to ="/List-your-vehicle">List your vehicle</Link></a>
                          <a className="facebook"><Link to ="/Offers">Offers</Link></a> 
                          <a className="instagram"><Link to="/Carsubscription">Car Subscription</Link> </a>
                          <a className="skype"><Link to ="/Carrer">Carrer</Link></a>
                           <a className="contact-info icofont-phone"><Link to ="/Phone">+91-910-9999-666</Link></a>
                        </div>
                      </div>
                    </div>
                    {/* ======= Header ======= */}
                    <header id="header" className="fixed-top">
                      <div className="container d-flex align-items-center">
                        <a className="logo mr-auto"><Link to="/"><img src="assets/img/logo-white.svg" alt /></Link></a>
                        <nav className="navbar navbar-expand-lg d-none d-lg-block navbar-light nav-menu">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"><a className="nav-link"><Link to= "/">Home</Link></a></li>
                        <li className="nav-item" ><a className="nav-link"><Link to="/aboutus">About</Link></a></li>
                        <li className="nav-item" ><a className="nav-link"><Link to="/contact">Contact</Link></a></li>
                        <li className="nav-item"><a className="nav-link"><Link to="/Drivewithassar">Drive with Assar</Link></a></li>
                        <li className="nav-item"><a className="nav-link"><Link to="/Franchise">Franchise</Link></a></li>
                        <span>
                        <Link to ="/login"><a className="icon_user_profile" data-toggle="modal" data-target="#exampleModal"><i className="bx bx-user-circle" /></a></Link>
                        </span>
                    </ul>
                  </div>
                </nav>
                        
                        {/* .nav-menu */}
                      </div>
                    </header>
                    {/* End Header */}
                    



                 
                  
                      </div>);
                }
              },100)
   
  },[]);


  return (
    
    <div> 
  {/*<Auth />*/}
    {HeaderContent} </div>
  );
}

export default Header