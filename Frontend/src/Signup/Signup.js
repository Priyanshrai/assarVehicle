import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import {useState} from 'react';
import {__apiURLUser} from '../apiURL';

function Signup() {

  const [ output , setOutput ] = useState();
  const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ mobile , setMobile ] = useState();

  
  const handleSubmit=(evt)=>{
    evt.preventDefault();
    let userDetails={"name":name,"email":email,"password":password,"mobile":mobile };

    axios.post(__apiURLUser+"save",userDetails).then((response)=>{
        //console.log(response);
        setOutput(response.data.result);
        setName('');
        setEmail('');
        setPassword('');
        setMobile('');
      }).catch((err)=>{
        console.log(err);
    });

  }
   
  return (
    <div>
  <main id="main">
    <section id="login" className="login_sec">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="col-lg-8 mx-auto">
                  <span className="form_heading_title">
                    <h4>Signup</h4>
                  </span>
                  <center>
                  <font id="sucmsg" style={{"color":"#000066"}}>{output}</font>
                  </center>
                  <div className="form_all">
                  <form >
                      <div className="row">
                        <div className="col-lg-12 mb-4">
                          <div className="form-group">
                            <input type="text" className="form-control"  placeholder="User Name" name="fname" required value={name} onChange={e => setName(e.target.value)} />
                            <span className="icon_form_add"><i className="icofont-ui-user" /></span>
                          </div>
                        </div>
                        <div className="col-lg-12 mb-4">
                          <div className="form-group">
                            <input type="text" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="Please enter email id"   required/>
                            <span className="icon_form_add"><i className="icofont-envelope" /></span>
                          </div>
                        </div>
                        <div className="col-lg-12 mb-4">
                          <div className="form-group">
                            <input type="number" className="form-control" value={mobile} onChange={e => setMobile(e.target.value)} placeholder="Mobile No."   required />
                            <span className="icon_form_add"><i className="bx bxs-mobile" /></span>
                          </div>
                        </div>
                        <div className="col-lg-12 mb-4">
                          <div className="form-group">
                            <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"   required />
                            <span className="icon_form_add"><i className="bx bxs-lock-alt" /></span>
                          </div>
                        </div>
                        <div className="col-lg-12 mb-4 check_signup">
                          <div className="form-group">
                            <input type="checkbox" id="html" />
                            <label htmlFor="html" required>I agree with the terms and conditions</label>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <span className="d-flex align-items-center justify-content-center">
                            <button className="btn btn-primary form_btn" onClick={handleSubmit} type="button">Signup</button>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-flex bg-image" />
        </div>
      </div>
    </section>
  </main>
</div>

  )
}

export default Signup