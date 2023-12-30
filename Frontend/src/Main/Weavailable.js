import React from 'react';
import './Weavailable.css';

function Weavailable() {
  return (
    <div>
    <section id="ready-car-drive" className="ready_drive_car">
                                    <div className="container-fluid">
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <div className="ready_car d-flex">
                                            <span><img src="assets/img/car-blue.svg" alt /></span>
                                            <span>
                                              <h5>38 +</h5>
                                              <h6>Vehicle models to choose from</h6>
                                            </span>
                                          </div>
                                        </div>
                                        <div className="col-lg-4">
                                          <div className="ready_car d-flex">
                                            <span><img src="assets/img/drive-blue.svg" alt /></span>
                                            <span>
                                              <h5>Self Drive / With Driver</h5>
                                              <h6>No branding on self-drive vehicle.</h6>
                                            </span>
                                          </div>
                                        </div>
                                        <div className="col-lg-4">
                                          <div className="ready_car d-flex">
                                            <span><img src="assets/img/map-blue.svg" alt /></span>
                                            <span>
                                              <h5>Map</h5>
                                              <h6>Get vehicle from 6 various locations.</h6>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <section id="avilable-here" className="avilable_here">
                                    <div className="container">
                                      <div className="avilable_title">
                                        <h1>We Are Available Here</h1>
                                      </div>
                                      <div className="row">
                                        <div className="col-lg-5">
                                          <div className="indore_avilable">
                                            <img src="assets/img/indore.png" className="img-fluid" />
                                            <h3>INDORE</h3>
                                          </div>
                                        </div>
                                        <div className="col-lg-7">
                                          <div className="bhopal_avilable">
                                            <img src="assets/img/bhopal.png" className="img-fluid"  />
                                            <h3>BHOPAL</h3>
                                          </div>
                                          <div className="gwalior_avilable">
                                            <img src="assets/img/gwalior.png" className="img-fluid" />
                                            <h3>GWALIOR</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
    </div>
  )
}

export default Weavailable