import "./sd.css";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, React } from "react";
import { __apiURLCity } from "../../apiURL";
import axios from "axios";

function Sdcitymgmt() {
  const navigate = useNavigate();
  const [CityDetails, setCityDetails] = useState([]);
  const [output, setOutput] = useState();
  const [code, setCode] = useState();
  const [date, setDate] = useState();
  const [coadd, setCoadd] = useState();
  const [number, setNumber] = useState();
  const [cityname, setCityname] = useState();
  useEffect(() => {
    setInterval(() => {
      axios
        .get(__apiURLCity + "fetch")
        .then((response) => {
          setCityDetails(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 100);
  }, []);

  const manageUserStatus = (_id, s) => {
    if (s == "block") {
      let updateDetails = {
        condition_obj: { _id: _id },
        content_obj: { status: 0 },
      };
      axios.patch(__apiURLCity + "update", updateDetails).then(() => {
        navigate("/sdcitymgmt");
      });
    } else if (s == "verify") {
      let updateDetails = {
        condition_obj: { _id: _id },
        content_obj: { status: 1 },
      };
      axios.patch(__apiURLCity + "update", updateDetails).then(() => {
        navigate("/sdcitymgmt");
      });
    } else {
      axios.delete(__apiURLCity + "delete/" + _id).then(() => {
        navigate("/sdcitymgmt");
      });
    }
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let userDetails = {
      cityname: cityname,
      citycode: code,
      number: number,
      date: date,
      coaddress: coadd,
    };
    axios
      .post(__apiURLCity + "save", userDetails)
      .then((response) => {
        //console.log(response);
        setOutput(response.data.result);
        setCityDetails("");
        setNumber("");
        setCode("");
        setCoadd("");
        setDate("");
      })
      .catch((err) => {
        console.log(err);
      });
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
              <h1 id="vmd">City Management</h1>
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
                Add New City
              </button>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  <font id="sucmsg" style={{ color: "#000066" }}>
                    {output}
                  </font>
                  <form>
                    <div class="form-groupone">
                      <label className="mgmt" for="exampleInputEmail1">
                        City Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        value={cityname}
                        onChange={(e) => setCityname(e.target.value)}
                        placeholder="Enter City Name"
                      />
                    </div>
                    <div class="form-groupone">
                      <label className="mgmt" for="exampleInputPassword1">
                        City Code
                      </label>
                      <input
                        type="string"
                        class="form-control"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Enter City Code"
                      />
                    </div>
                    <div class="form-groupone">
                      <label className="mgmt" for="exampleInputPassword2">
                        Office Number
                      </label>
                      <input
                        type="string"
                        class="form-control"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Enter City Dial Code"
                      />
                    </div>
                    <div class="form-groupone">
                      <label className="mgmt" for="exampleInputPassword3">
                        Office Addrress
                      </label>
                      <input
                        type="string"
                        class="form-control"
                        value={coadd}
                        onChange={(e) => setCoadd(e.target.value)}
                        placeholder="Enter City Status"
                      />
                    </div>
                    <div class="form-groupone">
                      <label className="mgmt" for="exampleInputPassword3">
                        Start Date
                      </label>
                      <input
                        type="Date"
                        class="form-control"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Ente working Start date "
                      />
                    </div>
                    <button
                      id="b5"
                      onClick={handleSubmit}
                      type="button"
                      class="btn btn-primary"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <table id="tableuser" className="table table-bordered">
                <tr>
                  <th>ID</th>
                  <th>City Name</th>
                  <th>City Code</th>
                  <th>Office Number</th>
                  <th>Office Addrress</th>
                  <th>Start Date</th>
                  <th>Status</th>
                  <th>Delete</th>
                </tr>
                {CityDetails.map((row) => (
                  <tr>
                    <td>{row._id}</td>
                    <td>{row.cityname}</td>
                    <td>{row.citycode}</td>
                    <td>{row.number}</td>
                    <td>{row.coaddress}</td>
                    <td>{row.date}</td>
                    <td>
                      {row.status == 0 && (
                        <a
                          style={{ color: "green" }}
                          onClick={() => {
                            manageUserStatus(row._id, "verify");
                          }}
                        >
                          WORKING
                        </a>
                      )}
                      {row.status == 1 && (
                        <a
                          style={{ color: "orange" }}
                          onClick={() => {
                            manageUserStatus(row._id, "block");
                          }}
                        >
                          CLOSED
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

export default Sdcitymgmt;
