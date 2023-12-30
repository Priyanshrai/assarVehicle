import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; 
import React from 'react';

function Auth()
{
    const navigate = useNavigate();

    useEffect(()=>{
     var path=window.location.pathname;
     if(path=="/admin" || path=="/sdadmin" || path=="/cabadmin" || path=="/corpadmin")
     {
      if(!localStorage.getItem("token") || localStorage.getItem("role")!="admin")   
        navigate("/logout")
     }
     else if(path=="/user")
     {
      if(!localStorage.getItem("token") || localStorage.getItem("role")!="user")   
        navigate("/logout");
     }
     else
     {
        if(localStorage.getItem("role")=="admin")            
            navigate("/admin");
        else if(localStorage.getItem("role")=="user")
            navigate("/user");
        else
            navigate("/");    
     }
    },[]);
    
    return(
        <div></div>
    )
}

export default Auth;