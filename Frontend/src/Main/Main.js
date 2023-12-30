import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import './Testinomials.css';
import Abouthome from './Abouthome';
import Weavailable from './Weavailable';
import Feedback from './Feedback';
import Banner from './Banner';
import Vocal from './Vocal';
import Adminhome from '../admin/Adminhome';
import './Main.css';


function Main() {
  const[ MainContent, setmainContent ] = useState();
  useEffect(()=>{
            setInterval(()=>{

            
                            if(localStorage.getItem("role")=="admin")
                            {
                              setmainContent(<div>{<Adminhome/>}</div>);
                            }
                            else 
                            {
                              setmainContent(<div>
                                <main id="main">
                                  {/* ======= Hero Section ======= */}
                                  <section id="hero" className="d-flex align-items-center">
                                    <div className="container" data-aos="zoom-out" data-aos-delay={100}>
                                      <div className="col-lg-7">
                                        <h1>CHOOSE A CAR ON BUDGET</h1>
                                      </div>
                                    </div>
                                  </section>
                                  <section id="choose-car" className="choose_car">
                                    <div className="container-fluid">
                                      <div className="row">
                                        <div className="col-lg-2">
                                        <Link to ="/Selfdrive"><div className="choose_car_icon">
                                            <span className="icon"><img src="assets/img/self-drive.svg" className="img-fluid" /></span>
                                            <h5>Selfdrive</h5>
                                          </div></Link>
                                        </div>
                                        <div className="col-lg-2">
                                        <Link to ="/Taxi"><div className="choose_car_icon">
                                            <span className="icon"><img src="assets/img/taxi-white.svg" className="img-fluid" /></span>
                                            <h5>Taxi</h5>
                                          </div></Link>
                                        </div>
                                        <div className="col-lg-2">
                                        <Link to ="/cab"> <div className="choose_car_icon">
                                            <span className="icon"><img src="assets/img/m-icon.svg" className="img-fluid" /></span>
                                            <h5>Cab</h5>
                                          </div></Link>
                                        </div>
                                        <div className="col-lg-2">
                                        <Link to ="/corporate"><div className="choose_car_icon">
                                            <span className="icon"><img src="assets/img/corporate-icon.svg" className="img-fluid" /></span>
                                            <h5>Corporate</h5>
                                          </div></Link>
                                        </div>
                                        <div className="col-lg-2">
                                        <Link to ="/Event"><div className="choose_car_icon">
                                            <span className="icon"><img src="assets/img/events.svg" className="img-fluid" /></span>
                                            <h5>Events</h5>
                                          </div></Link>
                                        </div>
                                        <div className="col-lg-2">
                                        <Link to ="/Transport"><div className="choose_car_icon">
                                           <span className="icon"><img src="assets/img/truck.svg" className="img-fluid" /></span>
                                            <h5>Transport</h5>
                                          </div></Link>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                 
                                  <div><Abouthome /></div>
                                  <div><Weavailable /></div>
 <div>                                 
<section className="testimonials-one">
  <div className="container">
    <div className="row">
      <div id="customers-testimonials" className="owl-carousel">
        <div className="item">
            <div className="shadow-effect">
              <img className="img-responsive" src="assets/img/slide_one.png" alt />
              <div className="item-details">
                <h5>Vehicle for Every Pocket</h5>
                <p>We have you covered for all your needs to Choose
                  from our range of Two Wheelers, Hatchbacks, Sedans,
                  SUVs, MUVs and even Luxury cars, we have Vehicle to
                  suit every pocket</p>
                <a href="#">Read More <i className="icofont-simple-right" /></a>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="shadow-effect">
              <img className="img-responsive" src="assets/img/slide_two.png" alt />
              <div className="item-details">
                <h5>Secure and Safe Rides</h5>
                <p>We have you covered for all your needs to Choose
                  from our range of Two Wheelers, Hatchbacks, Sedans,
                  SUVs, MUVs and even Luxury cars, we have Vehicle to
                  suit every pocket</p>
                <a href="#">Read More <i className="icofont-simple-right" /> </a>
              </div>
            </div>
          </div>
          {/*END OF TESTIMONIAL 2 */}
          {/*TESTIMONIAL 3 */}
          <div className="item">
            <div className="shadow-effect">
              <img className="img-responsive" src="assets/img/slide_three.png" alt />
              <div className="item-details">
                <h5>Car Rental For Self Driven</h5>
                <p>We have you covered for all your needs to Choose
                  from our range of Two Wheelers, Hatchbacks, Sedans,
                  SUVs, MUVs and even Luxury cars, we have Vehicle to
                  suit every pocket</p>
                <a href="#">Read More <i className="icofont-simple-right" /> </a>
              </div>
            </div>
          </div>
          {/*END OF TESTIMONIAL 3 */}
          {/*TESTIMONIAL 4 */}
          <div className="item">
            <div className="shadow-effect">
              <img className="img-responsive" src="assets/img/slide_one.png" alt />
              <div className="item-details">
                <h5>Car Rental For Self Driven</h5>
                <p>We have you covered for all your needs to Choose
                  from our range of Two Wheelers, Hatchbacks, Sedans,
                  SUVs, MUVs and even Luxury cars, we have Vehicle to
                  suit every pocket</p>
                <a href="#">Read More <i className="icofont-simple-right" /> </a>
              </div>
            </div>
          </div>
          {/*END OF TESTIMONIAL 4 */}
          {/*TESTIMONIAL 5 */}
          <div className="item">
            <div className="shadow-effect">
              <img className="img-responsive" src="assets/img/slide_two.png" alt />
              <div className="item-details">
                <h5>Secure and Safe Rides</h5>
                <p>We have you covered for all your needs to Choose
                  from our range of Two Wheelers, Hatchbacks, Sedans,
                  SUVs, MUVs and even Luxury cars, we have Vehicle to
                  suit every pocket</p>
                <a href="#">Read More <i className="icofont-simple-right" /> </a>
              </div>
            </div>
          </div>
          {/*END OF TESTIMONIAL 5 */}
        </div>
     </div>
  </div>
</section>
</div>
                                  <div><Vocal/></div>
                                  <div><Feedback/></div>
                                  <div><Banner/></div>
                                </main>
                                {/* End #main */}
                                
                                
                                    </div>);
                            }
                          },100)
  },[])
  return (
    
  
<div>{MainContent}</div>
  
  )
}

export default Main