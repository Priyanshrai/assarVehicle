import React from 'react';
import './sd.css';

import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div>

      <aside>
        <Link to="/sdadmin"><p id="sdhome"> Selfdrive Home </p></Link>


        <Link to="/sdadminmgmt">Admin Management</Link>
        <Link to="/sdcountrymgmt">Country Management</Link>
        <Link to="/sdstatemgmt"> State Management</Link>
        <Link to="/sdcitymgmt"> City Management</Link>
        <Link to="/sdmonitoring">Vehicle Monitoring</Link>
        <Link to="/sdListyourvehicle">List Your Vehicle Management</Link>
        <Link to="/sdvehiclemgmt">Vehicle Management</Link>
        <Link to="/sdusermgmt">User Management</Link>
        <Link to="/sddocmgmt">Document Management</Link>
        <Link to="/sdbookingmgmt">Booking Management</Link>
        <Link to="/sdcopartner"> Co-partner Management</Link>
        <Link to="/sdadvertisemgmt"> Advertisement Management</Link>
        <Link to="/sdlistingmgmt"> Listing Management</Link>
        <Link to="/sdtemplatemgmt">Templates Management</Link>
        <Link to="/sdfaremgmt"> Fare Management</Link>
        <Link to="/sdnotificationusermgmt"> Notification to User</Link>
        <Link to="/sdnotificationpartnermgmt"> Notification to Co-partner</Link>
        <Link to="/sdfuelmgmt"> Fuel Mangement</Link>
        <Link to="/sdmaintainancemgmt"> Maintenance Management</Link>
        <Link to="/sdrefralmgmt"> Refral Mangemnt</Link>
        <Link to="/sdrefundmgmt"> Refund Management</Link>
        <Link to="/sdtransactionmgmt"> Transaction Management</Link>
        <Link to="/sdcontentmgmt">Contet Management</Link>
        <Link to="/sdsosmgmt">SOS</Link>
      </aside>





    </div>
  )
}

export default Sidebar