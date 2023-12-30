import React from 'react';
import { useState, useEffect } from 'react';
import './Profile.css';
import UserDetail from './Userdetail.js';
import AdminDetail from './Admindetail.js';

function ProfileDetails() {
   const[ProfileContent,setProfilecontent]=useState();

  useEffect(()=>{
    setInterval(()=>{
  
                           if(localStorage.getItem("role")=="admin")
                            {
                              setProfilecontent(<div><AdminDetail/></div>);
                            }
                            else if(localStorage.getItem("role")=="user")
                            {
                              setProfilecontent(<div><UserDetail/></div>);
                            }    
                          },10)                            
        
          });
         



  return (

<div>{ProfileContent}</div>
  )
}

export default ProfileDetails