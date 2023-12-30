import { Navigate , useParams , useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import { __apiURLUser } from './apiURL';
import axios from 'axios';

function Verifyuser()
{
    const params = useParams(); 
    

    useEffect(()=>{

     axios.get(__apiURLUser+"fetch?email="+params.email).then((response)=>{
        if(response.data[0].__v==0)
        {
            var updateDetails={"condition_obj":{"email":params.email},"content_obj":{"status":1,"__v":1}}; 
            axios.patch(__apiURLUser+"update",updateDetails).then((response)=>{
               console.log("User verified....");    
            });    
        }       
     });   
    },[]);

    return(
        <div>
            <Navigate to='/login' />
        </div>
    )
}

export default Verifyuser;