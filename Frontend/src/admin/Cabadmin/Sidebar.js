import React from 'react';
import './Cab.css';

import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div>

      <aside>
        <Link to="/Cabadmin"><p id="sdhome"> Cab Dashboard Home </p></Link>


        <Link to="/Cabadminmgmt">Admin Management</Link>
        <Link to="/Cabcountrymgmt">Country Management</Link>
        <Link to="/Cabstatemgmt"> State Management</Link>
        <Link to="/Cabcitymgmt"> City Management</Link>
        <Link to="/Cabmonitoring">Vehicle Monitoring</Link>
        <Link to="/CabListyourvehicle">List Your Vehicle Management</Link>
        <Link to="/Cabvehiclemgmt">Vehicle Management</Link>
        <Link to="/Cabusermgmt">User Management</Link>
        <Link to="/Cabdocmgmt">Document Management</Link>
        <Link to="/Cabbookingmgmt">Booking Management</Link>
        <Link to="/Cabcopartner"> Co-partner Management</Link>
        <Link to="/Cabadvertisemgmt"> Advertisement Management</Link>
        <Link to="/Cablistingmgmt"> Listing Management</Link>
        <Link to="/Cabtemplatemgmt">Templates Management</Link>
        <Link to="/Cabfaremgmt"> Fare Management</Link>
        <Link to="/Cabnotificationusermgmt"> Notification to User</Link>
        <Link to="/Cabnotificationpartnermgmt"> Notification to Co-partner</Link>
        <Link to="/Cabfuelmgmt"> Fuel Mangement</Link>
        <Link to="/Cabmaintainancemgmt"> Maintenance Management</Link>
        <Link to="/Cabrefralmgmt"> Refral Mangemnt</Link>
        <Link to="/Cabrefundmgmt"> Refund Management</Link>
        <Link to="/Cabtransactionmgmt"> Transaction Management</Link>
        <Link to="/Cabcontentmgmt">Contet Management</Link>
        <Link to="/Cabsosmgmt">SOS</Link>
      </aside>





    </div>
  )
}

export default Sidebar