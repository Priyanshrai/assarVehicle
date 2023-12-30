import './Cab.css';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, React } from 'react';
import { __apiURLState } from '../../apiURL';
import axios from 'axios';


function Cabstatemgmt() {
  const navigate = useNavigate();
  const [stateDetails, setStateDetails] = useState([]);
  const [output, setOutput] = useState();
  const [code, setCode] = useState();
  const [date, setDate] = useState();
  const [hoadd, setHoadd] = useState();
  const [statename, setStatename] = useState();

  useEffect(() => {
    setInterval(() => {
      axios.get(__apiURLState + "fetch").then((response) => {
        setStateDetails(response.data);
      }).catch((err) => {
        console.log(err);
      });
    }, 10);
  }, []);

  const manageUserStatus = (_id, s) => {
    if (s == "block") {
      let updateDetails = { "condition_obj": { "_id": _id }, "content_obj": { "status": 0 } };
      axios.patch(__apiURLState + "update", updateDetails).then(() => {
        navigate("/sdstatemgmt");
      });
    }
    else if (s == "verify") {
      let updateDetails = { "condition_obj": { "_id": _id }, "content_obj": { "status": 1 } };
      axios.patch(__apiURLState + "update", updateDetails).then(() => {
        navigate("/sdstatemgmt");
      });
    }
    else {
      axios.delete(__apiURLState + "delete/" + _id).then(() => {
        navigate("/sdstatemgmt");
      });

    }
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let userDetails = { "statename": statename, "statecode": code, "date": date, "hoaddress": hoadd };
    axios.post(__apiURLState + "save", userDetails).then((response) => {
      //console.log(response);
      setOutput(response.data.result);
      setStateDetails('');
      setCode('');
      setHoadd('');
      setDate('');
    }).catch((err) => {
      console.log(err);
    });

  }

  return (
    <div>
      <div id="home-collapse">
        <div className='row'>
          <div className='col-lg-3'>
            <Sidebar />
          </div>
          <div className='col-lg-9'>
            <center>
              <h1 id="vmd">State Management</h1></center>
            <div className='container-parcha'>
              <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Add New State
              </button>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  <font id="sucmsg" style={{ "color": "#000066" }}>{output}</font>
                  <form>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputEmail1">State Name</label>
                      <input type="text" class="form-control" value={statename} onChange={e => setStatename(e.target.value)} placeholder="Enter State Name" />
                    </div>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputPassword1">State Code</label>
                      <input type="string" class="form-control" value={code} onChange={e => setCode(e.target.value)} placeholder="Enter State Code" />
                    </div>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputPassword3">Head Office Address</label>
                      <input type="string" class="form-control" value={hoadd} onChange={e => setHoadd(e.target.value)} placeholder="Enter State Status" />
                    </div>
                    <div class="form-groupone">
                      <label className='mgmt' for="exampleInputPassword3">Start Date</label>
                      <input type="Date" class="form-control" value={date} onChange={e => setDate(e.target.value)} placeholder="Ente working Start date " />
                    </div>
                    <button id="b5" onClick={handleSubmit} type="button" class="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
              <table id='tableuser' className="table table-bordered">
                <tr>
                  <th>ID</th>
                  <th>State Name</th>
                  <th>State Code</th>
                  <th>Head Office</th>
                  <th>Start Date</th>
                  <th>Status</th>
                  <th>Info</th>
                </tr>
                {
                  stateDetails.map((row) => (
                    <tr>
                      <td>{row._id}</td>
                      <td>{row.statename}</td>
                      <td>{row.statecode}</td>
                      <td>{row.hoaddress}</td>
                      <td>{row.date}</td>
                      <td>
                        {
                          row.status == 0 &&
                          <a style={{ "color": "green" }} onClick={() => { manageUserStatus(row._id, "verify") }} >Working</a>
                        }
                        {
                          row.status == 1 &&
                          <a style={{ "color": "orange" }} onClick={() => { manageUserStatus(row._id, "block") }} >Closed</a>
                        }
                      </td>
                      <td>{row.info}</td>
                    </tr>
                  ))

                }
              </table>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Cabstatemgmt