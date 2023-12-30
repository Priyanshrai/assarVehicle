import { useState, useEffect, React } from 'react';
import { __apiURLUser, __apiURLDocument } from '../../apiURL';
import axios from 'axios';
import Sidebar from './Sidebar';
import { Link, useParams, useNavigate } from 'react-router-dom';

function Viewdoc() {
  const params = useParams();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);
  const [sdDetails, setSDDetails] = useState([]);



  useEffect(() => {
    setInterval(() => {
      axios.get(__apiURLDocument + "fetch?").then((response) => {
        setUserDetails(response.data);
      }).catch((err) => {
        console.log(err);
      });
    }, 100);
  }, []);

  const manageSelfdriveStatus = (_id, sd) => {
    if (sd == "blocked") {
      let updatesdDetails = { "condition_obj": { "_id": _id }, "content_obj": { "selfdrivestatus": 0 } };
      axios.patch(__apiURLUser + "update", updatesdDetails).then(() => {
        navigate("/sddocmgmt");
      });
    }
    else {
      let updatesdDetails = { "condition_obj": { "_id": _id }, "content_obj": { "selfdrivestatus": 1 } };
      axios.patch(__apiURLUser + "update", updatesdDetails).then(() => {
        navigate("/sddocmgmt");
      });
    }
  }


  const manageUserStatus = (_id, s) => {
    if (s == "block") {
      let updateDetails = { "condition_obj": { "_id": _id }, "content_obj": { "status": 0 } };
      axios.patch(__apiURLDocument + "update", updateDetails).then(() => {
        navigate("/sddocmgmt");
      });
    }
    else if (s == "verify") {
      let updateDetails = { "condition_obj": { "_id": _id }, "content_obj": { "status": 1 } };
      axios.patch(__apiURLDocument + "update", updateDetails).then(() => {
        navigate("/sddocmgmt");
      });
    }
    else {
      axios.delete(__apiURLDocument + "delete/" + _id).then(() => {
        navigate("/sddocmgmt");
      });
    }
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
              <h1 id="vmd">Document Management</h1></center>
            <div className='container-parcha'>
              <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Add New Document
              </button>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  <form>
                    <div className="form-groupone">
                      <label className='mgmt'>Email address</label>
                      <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-groupone">
                      <label className='mgmt' for="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button id="b5" type="button" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
              <table id='tableuser' className="table table-bordered">
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Aaddhar Front</th>
                  <th>Aaddhar Back</th>
                  <th>Licence Front</th>
                  <th>Licence Back</th>
                  <th>Selfie</th>
                  <th>Info</th>
                  <th>Status</th>
                  <th>Delete</th>
                </tr>
                {
                  userDetails.map((row) => {
                    const af = '/assets/uploads/aadharfront/' + row.aadharfrontname;
                    const ab = '/assets/uploads/aadharback/' + row.aadharbackname;
                    const dlf = '/assets/uploads/dlfront/' + row.dlfrontname;
                    const dlb = '/assets/uploads/dlback/' + row.dlbackname;
                    const sl = '/assets/uploads/selfie/' + row.selfiename;
                    return (
                      <tr>
                        <td>{row._id}</td>
                        <td>{row.email}</td>
                        <td><img src={af} height="120" width="150" style={{ overflow: "hidden" }} onClick={(e) => (e.currentTarget.style = { transform: "scale(1.25)", overflow: "hidden" })} /></td>
                        <td><img src={ab} height="120" width="150" /></td>
                        <td><img src={dlf} height="120" width="150" /></td>
                        <td><img src={dlb} height="120" width="150" /></td>
                        <td><img src={sl} height="120" width="150" /></td>
                        <td>{row.info}</td>
                        <td>
                          {
                            row.status == 0 &&
                            <a style={{ "color": "green" }} onClick={() => { manageUserStatus(row._id, "verify") }} >Verify User</a>
                          }
                          {
                            row.status == 1 &&
                            <a style={{ "color": "orange" }} onClick={() => { manageUserStatus(row._id, "block") }} >Block User</a>
                          }
                        </td>
                        <td>
                          <a style={{ "color": "red" }} onClick={() => { manageUserStatus(row._id, "delete") }} >Delete</a>
                        </td>
                      </tr>
                    )
                  })
                }

                {
                  sdDetails.map((row) => (
                    <tr>
                      <td>
                        {
                          row.selfdrivestatus == 0 &&
                          <a style={{ "color": "green" }} onClick={() => { manageSelfdriveStatus(row._id, "verified") }} >Approved</a>
                        }
                        {
                          row.selfdrivestatus == 1 &&
                          <a style={{ "color": "orange" }} onClick={() => { manageSelfdriveStatus(row._id, "blocked") }} >NotApproved</a>
                        }
                      </td>
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

export default Viewdoc