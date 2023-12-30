import "./sd.css";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, React } from "react";
import { __apiURLUser } from "../../apiURL";
import axios from "axios";

function Sdadminmgmt() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    setInterval(() => {
      axios
        .get(__apiURLUser + "fetch?role=admin")
        .then((response) => {
          setUserDetails(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 100);
  }, []);

  const manageSelfdriveStatus = (_id, sd) => {
    if (sd == "blocked") {
      let updatesdDetails = {
        condition_obj: { _id: _id },
        content_obj: { selfdrivestatus: 0 },
      };
      axios.patch(__apiURLUser + "update", updatesdDetails).then(() => {
        navigate("/sdadminmgmt");
      });
    } else {
      let updatesdDetails = {
        condition_obj: { _id: _id },
        content_obj: { selfdrivestatus: 1 },
      };
      axios.patch(__apiURLUser + "update", updatesdDetails).then(() => {
        navigate("/sdadminmgmt");
      });
    }
  };

  const manageUserStatus = (_id, s) => {
    if (s == "block") {
      let updateDetails = {
        condition_obj: { _id: _id },
        content_obj: { status: 0 },
      };
      axios.patch(__apiURLUser + "update", updateDetails).then(() => {
        navigate("/sdadminmgmt");
      });
    } else if (s == "verify") {
      let updateDetails = {
        condition_obj: { _id: _id },
        content_obj: { status: 1 },
      };
      axios.patch(__apiURLUser + "update", updateDetails).then(() => {
        navigate("/sdadminmgmt");
      });
    } else {
      axios.delete(__apiURLUser + "delete/" + _id).then(() => {
        navigate("/sdadminmgmt");
      });
    }
  };

  return (
    <div>
      <div id="home-collapse">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <center>
              <h1 id="vmd">Admin Mangement</h1>
            </center>
            <div className="container-parcha">
              <button
                class="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Add New Admin
              </button>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  <form>
                    <div className="form-groupone">
                      <label className="mgmt">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-groupone">
                      <label className="mgmt" for="exampleInputPassword1">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <label className="mgmt">Country Management </label>
                    <div className="row">
                      <div className="form-checkone col-lg-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          Indore
                        </label>
                      </div>
                    </div>
                    <label className="mgmt">State Management </label>
                    <div className="row">
                      <div className="form-checkone col-lg-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          Indore
                        </label>
                      </div>
                    </div>
                    <label className="mgmt">City Management </label>
                    <div className="row">
                      <div className="form-checkone col-lg-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          Indore
                        </label>
                      </div>
                    </div>
                    <label className="mgmt">Vehicle Monitoring </label>
                    <div className="row">
                      <div className="form-checkone col-lg-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          Indore
                        </label>
                      </div>
                    </div>
                    <label className="mgmt">
                      List your Vehicle Management{" "}
                    </label>
                    <div className="row">
                      <div className="form-checkone col-lg-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          Indore
                        </label>
                      </div>
                    </div>
                    <label className="mgmt">Vehicle Management </label>
                    <div className="row">
                      <div className="form-checkone col-lg-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          Indore
                        </label>
                      </div>
                    </div>
                    <label className="mgmt">Vehicle Management </label>
                    <div className="row">
                      <div className="form-checkone col-lg-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          Indore
                        </label>
                      </div>
                    </div>
                    <label className="mgmt">Vehicle Management </label>
                    <div className="row">
                      <div className="form-checkone col-lg-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          Indore
                        </label>
                      </div>
                    </div>
                    <label className="mgmt">Vehicle Management </label>
                    <div className="row">
                      <div className="form-checkone col-lg-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          Indore
                        </label>
                      </div>
                    </div>
                    <label className="mgmt">Vehicle Management </label>
                    <div className="row">
                      <div className="form-checkone col-lg-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          Indore
                        </label>
                      </div>
                    </div>
                    <label className="mgmt">Vehicle Management </label>
                    <div className="row">
                      <div className="form-checkone col-lg-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          Indore
                        </label>
                      </div>
                    </div>
                    <button id="b5" type="button" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <table id="tableuser" className="table table-bordered">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Selfdrive Status</th>
                  <th>Info</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {userDetails.map((row) => (
                  <tr>
                    <td>{row._id}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.mobile}</td>
                    <td>
                      {row.selfdrivestatus == 0 && (
                        <a
                          style={{ color: "green" }}
                          onClick={() => {
                            manageSelfdriveStatus(row._id, "verified");
                          }}
                        >
                          Approved
                        </a>
                      )}
                      {row.selfdrivestatus == 1 && (
                        <a
                          style={{ color: "orange" }}
                          onClick={() => {
                            manageSelfdriveStatus(row._id, "blocked");
                          }}
                        >
                          NotApproved
                        </a>
                      )}
                    </td>
                    <td>{row.info}</td>
                    <td>
                      {row.status == 0 && (
                        <a
                          style={{ color: "green" }}
                          onClick={() => {
                            manageUserStatus(row._id, "verify");
                          }}
                        >
                          Verify User
                        </a>
                      )}
                      {row.status == 1 && (
                        <a
                          style={{ color: "orange" }}
                          onClick={() => {
                            manageUserStatus(row._id, "block");
                          }}
                        >
                          Block User
                        </a>
                      )}
                    </td>
                    <td>
                      <a
                        style={{ color: "red" }}
                        onClick={() => {
                          manageUserStatus(row._id, "delete");
                        }}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sdadminmgmt;
