import React from 'react';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Profile.css';
import { __apiURLUser } from '../apiURL.js';
import axios from 'axios';



function AdminDetail() {
  const [ userDetails , setUserDetails ] = useState([]);
  const [ output , setOutput ] = useState();
   const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  const [ mobile , setMobile ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();    
  
      
  useEffect(()=>{
    setInterval(() => {
        var email=localStorage.getItem("email");  
        axios.get(__apiURLUser+"fetch?email="+email).then((res)=>{
        setUserDetails(res.data[0]);
        setName(res.data[0].name);
        setEmail(res.data[0].email);
        setCity(res.data[0].city);
        setMobile(res.data[0].mobile);   
    }).catch((err)=>{
        console.log(err);
    });

  },100); 
  },[]);
  const handleSubmit=(evt)=>{
    evt.preventDefault();
    let content_obj={"name":name,"mobile":mobile,"city":city,"gender":gender};
    let updateDetails={"condition_obj":{"email":email},"content_obj":content_obj};
    axios.patch(__apiURLUser+"update",updateDetails).then((response)=>{
        setOutput("Profile edited successfully...");  
      }).catch((err)=>{
        console.log(err);
    });
  }  
return ( 
<div>  
<main id="main">
    {/* ======= Hero Section ======= */}
    <section className="profile_bg_sec ">
    </section>
    <section className="profile">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="profile_amanda">
              <div className="row">
                <div className="col-lg-6">
                  <div className="avatar-upload">
                    <div className="avatar-edit">
                      <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
                      <label htmlFor="imageUpload" />
                    </div>
                    <div className="avatar-preview">
                      <div className="imagePreview">
                      </div>
                    </div>
                  </div>
                  <div className="detail_name text-center">
                    <h4>{localStorage.getItem("name")}</h4>
                    <h6>{localStorage.getItem("email")}</h6>
                    <h6>{localStorage.getItem("mobile")}</h6>
                    <div className="logout_btn">
                     <a><Link to ="/logout">Logout</Link></a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                  <div className="gender">
                  <font style={{"color":"blue"}}>{output}</font>
                    <form>
                      <div className="f_set">
                        <div className="form-group">
                          <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" value={city} onChange={e => setCity(e.target.value)}  />
                        </div>
                        <div className="form-group">
                          <input type="number" className="form-control" value={mobile} onChange={e => setMobile(e.target.value)} placeholder="Enter Mobile No." />
                        </div>
                      </div>
                      <label className="pt-4"><b>Choose Gender</b></label>
                      <div className="gen_category form-group d-flex align-items-center justify-content-between">
                        <ul>
                          <li><a><input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} />Male</a></li>
                          <li><a><input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} />Female</a></li>
                          <li><a><input type="radio" name="gender" value="other" onChange={e => setGender(e.target.value)} />Other</a></li>
                        </ul>   
                        <button className="btn btn-primary form_btn" onClick={handleSubmit} type="button">Submit</button>
                      </div>
                      <div className="text-right cpw">
                        <a><Link to="/changepassword">Change Password</Link></a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
  )
}

export default AdminDetail