import React from 'react';
import './AboutHome.css';

function Abouthome() {
  return (
    <div>
    {/* ======= About Section ======= */}
    <section id="about" className="about">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-6" data-aos="zoom-out" data-aos-delay={100}>
          <img src="assets/img/alto-pan-2.png" className="img-fluid" alt />
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay={100}>
          <h3>Are You Ready?</h3>
          <p>
            We, Assar Vehicle, situated at Indore, Madhya Pradesh, have a profound understanding of our consumers travel needs and preferences. We aim to offer individuals as well as corporate a wide range of cars on
            hire. We have well maintained &amp; luxurious cars which help to make your travel comfortable and pleasing. We are passionate &amp; professional at the same time which help us deliver outstanding services to our
            clients. Get in touch with us to get the best travel solution.
          </p>
          <button type="button" className="btn btn-primary read_more">Read More <i className="icofont-simple-right" /> </button>
        </div>
      </div>
    </div>
  </section>
  {/* End About Section */}
    
    
    
    
    
    
    </div>
  )
}

export default Abouthome