import React from 'react';
import { useState } from 'react';
import { __apiURLUser } from '../apiURL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Login.css';



function Login() {
  const navigate = useNavigate();
  const [ output , setOutput ] = useState();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  
  
  const handleSubmit=(evt)=>{
    evt.preventDefault();
    let userDetails={"email":email,"password":password};

    axios.post(__apiURLUser+"login",userDetails).then((response)=>{
        //console.log(response.data);
        localStorage.setItem("token",response.data.token);
        const obj=response.data.userDetails;
        localStorage.setItem('name',obj.name);
        localStorage.setItem('email',obj.email);
        localStorage.setItem('password',obj.password);
        localStorage.setItem('mobile',obj.mobile);
        localStorage.setItem('address',obj.address);
        localStorage.setItem('city',obj.city);
        localStorage.setItem('gender',obj.gender);
        localStorage.setItem('role',obj.role);
        localStorage.setItem('status',obj.status);
        localStorage.setItem('info',obj.info);
        
        obj.role=="admin"?navigate("/admin"):navigate("/user");
        
        }).catch((err)=>{
            localStorage.setItem("token","error");            
            setOutput("Invalid user please login or verify your account....");
            setEmail('');
            setPassword('');
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
                      <h4>Login</h4>
                    </span>
                    <font style={{"color":"blue"}}>{output}</font>
                    <div className="form_all">
                    <form onSubmit={handleSubmit} >
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="input-group">
                              <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="Please enter email id" aria-describedby required />
                              <span className="icon_form_add"><i className="icofont-envelope" /></span>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="input-group">
                              <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="Please enter Password" aria-describedby required />
                              <span className="icon_form_add"><i className="bx bxs-lock-alt" /></span>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="login-or">
                              <hr className="hr-or" />
                              <span className="span-or">Forgot Password</span>
                            </div>
                          </div>
                          <div className="col-lg-12">
                          <span className="d-flex align-items-center justify-content-between">
                          <button className="btn btn-primary form_btn" type="submit"><Link to ="/signup" style={{color:"white"}}>Signup</Link></button>
                              <button className="btn btn-primary form_btn" type="submit">Login</button>
                            </span>
                            <div className="d-flex align-items-center justify-content-center icon_social">
                              <span> <a href="#"><i className="bx bxl-google" /> </a> </span>
                              <span> <a href="#"><i className="bx bxl-facebook" /> </a></span>
                              <span> <a href="#"><i className="bx bxl-twitter" /> </a></span>
                            </div>
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

export default Login