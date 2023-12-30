import "./Cab.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, React } from "react";
import { __apiURLUser } from "../../apiURL";
import axios from "axios";
import Sidebar from "./Sidebar";

function CabAdvertisemgmt() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    setInterval(() => {
      axios
        .get(__apiURLUser + "fetch?role=user")
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
        navigate("/sdusermgmt");
      });
    } else {
      let updatesdDetails = {
        condition_obj: { _id: _id },
        content_obj: { selfdrivestatus: 1 },
      };
      axios.patch(__apiURLUser + "update", updatesdDetails).then(() => {
        navigate("/sdusermgmt");
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
        navigate("/sdusermgmt");
      });
    } else if (s == "verify") {
      let updateDetails = {
        condition_obj: { _id: _id },
        content_obj: { status: 1 },
      };
      axios.patch(__apiURLUser + "update", updateDetails).then(() => {
        navigate("/sdusermgmt");
      });
    } else {
      axios.delete(__apiURLUser + "delete/" + _id).then(() => {
        navigate("/sdusermgmt");
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
              <h1 id="vmd">Advertise Management</h1>
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
                Add New Promo Code
              </button>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  <form>
                    <div class="form-groupone">
                      <label className="mgmt" for="exampleInputEmail1">
                        Country Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Country Name"
                      />
                    </div>
                    <div class="form-groupone">
                      <label className="mgmt" for="exampleInputPassword1">
                        Country Code
                      </label>
                      <input
                        type="string"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter Country Code"
                      />
                    </div>
                    <div class="form-groupone">
                      <label className="mgmt" for="exampleInputPassword2">
                        Dial Code
                      </label>
                      <input
                        type="string"
                        class="form-control"
                        id="exampleInputPassword2"
                        placeholder="Enter Country Dial Code"
                      />
                    </div>
                    <div class="form-groupone">
                      <label className="mgmt" for="exampleInputPassword3">
                        Status
                      </label>
                      <input
                        type="string"
                        class="form-control"
                        id="exampleInputPassword3"
                        placeholder="Enter Country Status"
                      />
                    </div>
                    <div class="form-groupone">
                      <label className="mgmt" for="exampleInputPassword3">
                        Start Date
                      </label>
                      <input
                        type="Date"
                        class="form-control"
                        id="exampleInputPassword4"
                        placeholder="Ente working Start date "
                      />
                    </div>
                    <button id="b5" type="submit" class="btn btn-primary">
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

export default CabAdvertisemgmt;
