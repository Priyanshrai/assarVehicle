import React from 'react';
import './Document.css';
import { useState,useEffect } from 'react';
import { __apiURLDocument, __apiURLUser } from '../../apiURL';
import axios from 'axios';



function Document() {
  const [file, setFile] = useState()
  const [file1, setFile1] = useState()
  const [file2, setFile2] = useState()
  const [file3, setFile3] = useState()
  const [file4, setFile4] = useState()
  const [output , setOutput] = useState();
  const [ userDetails , setUserDetails ] = useState([]);
  const [ email , setEmail ] = useState();

  useEffect(()=>{
    setInterval(()=>{
      var email=localStorage.getItem("email");  
      axios.get(__apiURLUser+"fetch?email="+email).then((res)=>{
      setUserDetails(res.data[0]);
      setEmail(res.data[0].email);
  }).catch((err)=>{
      console.log(err);
  });



    },100)

  },[])

  
  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }
  const handleChange1=(event)=>{
    setFile1(event.target.files[0])
  }
  const handleChange2=(event)=>{
    setFile2(event.target.files[0])
  }
  const handleChange3=(event)=>{
    setFile3(event.target.files[0])
  }
  const handleChange4=(event)=>{
    setFile4(event.target.files[0])
  }
 
  
  const handleSubmit=(event)=>{
    event.preventDefault();
  
    var formData = new FormData();
    formData.append('email', email);
    formData.append('aadharfront', file);
    formData.append('aadharback', file1);
    formData.append('dlfront', file2);
    formData.append('dlback', file3);
    formData.append('selfie', file4);
  
    const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(__apiURLDocument+"save", formData, config).then((response) => {
      setOutput("Document Uploaded Successfully wait for 1 Hour.");
    
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
                  <h4 className="mt-2">ID And Documents</h4>
                </span>
                <div className="documents">
                  <div className="row">
                  <font color="black">{output}</font>
                  <form>
                  <label>
                   Registered Email Id:
                  <input type="text" disabled value={email}/>
                    </label>
                    <br/><br/>
                    <div className="col-lg-12">
                      <div className="row d-flex align-items-center text-center">
                        <div className="col-lg-6">
                          <div className="selfie_id">
                              <span><input type="file" aria-describedby required onChange={handleChange}/></span>
                              <h6>Aadhar Card Front</h6>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="selfie_id">
                              <span><input type="file" aria-describedby required onChange={handleChange1}/></span>
                              <h6>Aadhar Card Back</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="row d-flex align-items-center">
                        <div className="col-lg-12">
                          <div className="selfie_id">
                              <span><input type="file" aria-describedby required onChange={handleChange2}/></span>
                              <h6>Selfie</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="row d-flex align-items-center text-center">
                        <div className="col-lg-6">
                          <div className="selfie_id">
                              <span><input type="file" aria-describedby required onChange={handleChange3} /></span>
                              <h6>Driving Licence Front</h6>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="selfie_id">
                              <span><input type="file" aria-describedby required onChange={handleChange4}/></span>
                              <h6>Driving Licence Back</h6>
                          </div> 
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-4">
                      <span className="d-flex align-items-center justify-content-center">
                        <button className="btn btn-primary form_btn" onClick={handleSubmit} type="button">Submit</button>
                      </span>
                    </div>
                    </form>
                  </div>
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

export default Document;
