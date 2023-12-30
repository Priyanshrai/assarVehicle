import "./Cab.css";
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Cabadmin() {
  return (
    <div>
      <div id="home-collapse">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <div className="container-admin p-3 rounded" id="admincontainr">
              <center>
                <h1
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "monospace",
                  }}
                >
                  CAB DASHBOARD
                </h1>
                <hr
                  style={{
                    background: "#000066",
                    color: "#000066",
                    borderColor: "#000066",
                    height: "5px",
                    borderRadius: "8px",
                  }}
                />
              </center>
              <div className="row">
                <div className="col-lg-3 p-2">
                  <div
                    className="card"
                    style={{ width: "14rem", height: "18rem" }}
                  >
                    <img
                      className="card-img-top"
                      src="assets/img/two-wheeler.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Listed Two-Wheeler</h5>
                      <p className="card-text">
                        Total- 100 <br />
                        Breakdown - 18
                        <br /> Maintainance -10 <br /> Running- 18{" "}
                      </p>
                      <Link to="/">
                        <a className="btn">More Information ></a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 p-2">
                  <div
                    className="card"
                    style={{ width: "14rem", height: "18rem" }}
                  >
                    <img
                      className="card-img-top"
                      src="assets/img/earnings.png"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Earning</h5>
                      <p className="card-text">
                        Carbon Credit-20
                        <br />
                        Upcoming-Rs.30000
                        <br />
                      </p>
                      <Link to="/">
                        <a className="btn">More Information></a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 p-2">
                  <div
                    className="card"
                    style={{ width: "14rem", height: "18rem" }}
                  >
                    <img
                      className="card-img-top"
                      src="assets/img/User_Icon.png"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Total Users</h5>
                      <p className="card-text">
                        Existing - 80 <br /> New - 78
                        <br /> BlackList - 78 <br /> x{" "}
                      </p>
                      <Link to="/">
                        <a className="btn">More Information ></a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 p-2">
                  <div
                    className="card"
                    style={{ width: "14rem", height: "18rem" }}
                  >
                    <img
                      className="card-img-top"
                      src="assets/img/Counsuption.png"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Fuel Consumption</h5>
                      <p className="card-text">
                        Petrol- 100 Ltr <br />
                        Diesel- 100 Ltr <br />
                        CNG- 100 Kg <br />
                        Electric- 100 kw
                      </p>
                      <Link to="/">
                        <a className="btn">More Information ></a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 p-2">
                  <div
                    className="card"
                    style={{ width: "14rem", height: "18rem" }}
                  >
                    <img
                      className="card-img-top"
                      src="assets/img/refund.png"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Refund to Users</h5>
                      <p className="card-text">
                        Total User- 10 <br />
                        Amount -Rs.18000{" "}
                      </p>
                      <Link to="/">
                        <a className="btn">More Information ></a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 p-2">
                  <div
                    className="card"
                    style={{ width: "14rem", height: "18rem" }}
                  >
                    <img
                      className="card-img-top"
                      src="assets/img/transactions.png"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Transactions</h5>
                      <p className="card-text">
                        Transaction-2000
                        <br />
                        Total Collection-Rs.130000
                        <br />
                      </p>
                      <Link to="/">
                        <a className="btn">More Information></a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 p-2">
                  <div
                    className="card"
                    style={{ width: "14rem", height: "18rem" }}
                  >
                    <img
                      className="card-img-top"
                      src="assets/img/copartner.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Total Copartners</h5>
                      <p className="card-text">
                        Existing - 80 <br /> Onboarding - 78
                        <br /> BlackList - 78 <br /> x{" "}
                      </p>
                      <Link to="/">
                        <a className="btn">More Information ></a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 p-2">
                  <div
                    className="card"
                    style={{ width: "14rem", height: "18rem" }}
                  >
                    <img
                      className="card-img-top"
                      src="assets/img/Litsted.png"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Listed Cars</h5>
                      <p className="card-text">
                        Total- 100 <br /> Breakdown- 10
                        <br />
                        Running-40
                        <br />
                        Standby- 12
                        <br />
                        Maintainance-12
                      </p>
                      <Link to="/">
                        <a className="btn">More Information ></a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 p-2">
                  <div
                    className="card"
                    style={{ width: "14rem", height: "18rem" }}
                  >
                    <img
                      className="card-img-top"
                      src="assets/img/services.png"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Services</h5>
                      <p className="card-text">
                        Country-1
                        <br />
                        State- 2 <br /> City- 10
                        <br />
                        Rural-18
                      </p>
                      <Link to="/">
                        <a className="btn">More Information ></a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 p-2">
                  <div
                    className="card"
                    style={{ width: "14rem", height: "18rem" }}
                  >
                    <img
                      className="card-img-top"
                      src="assets/img/sos.png"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">SOS</h5>
                      <p className="card-text">
                        Raised Request-100
                        <br />
                        Resolved- 92 <br /> Pending- 8
                      </p>
                      <Link to="/">
                        <a className="btn">More Information ></a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 p-2">
                  <div
                    className="card"
                    style={{ width: "14rem", height: "18rem" }}
                  >
                    <img
                      className="card-img-top"
                      src="assets/img/admin.png"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Admin</h5>
                      <p className="card-text">
                        Co-admin-10
                        <br />
                        Subadmin- 12
                      </p>
                      <Link to="/">
                        <a className="btn">More Information ></a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 p-2">
                  <div
                    className="card"
                    style={{ width: "14rem", height: "18rem" }}
                  >
                    <img
                      className="card-img-top"
                      src="assets/img/trip.png"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Trips</h5>
                      <p className="card-text">
                        Completed-1000
                        <br />
                        Upcoming- 112
                      </p>
                      <Link to="/">
                        <a className="btn">More Information </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cabadmin;
