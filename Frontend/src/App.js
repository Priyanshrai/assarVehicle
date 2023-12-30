import './App.css';
import React from "react";
import { Routes , Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Main from './Main/Main';
import Signup from './Signup/Signup';
import Profile from './Profile/Profile';
import Profiledetails from './Profile/Profiledetails'
import Vehiclecategory from './Selfdrive/Vehiclecategory/Vehiclecategory';
import Document from './Selfdrive/Document/Document';
import Choosevehicle from './Selfdrive/Choosevehicle/Choosevehicle';
import Billpay from './Selfdrive/Billpay/Billpay';
import Payment from './Selfdrive/Payment/Payment';
import Thankyou from './Selfdrive/Thankyou/Thankyou';
import Newpassword from './Newpassword/Newpassword';
import Tripdetail from './Tripdetail/Tripdetail';
import Taximain from './Taxi/Taximain/Taximain';
import Choosetaxi from './Taxi/Choosetaxi/Choosetaxi';
import Bookingconfirmation from './Taxi/Bookingconfirmation/Bookingconfirmation';
import Logout from './LogoutComponent/Logout';
import Testinomials from './Main/Testinomials';
import Otptaxi from './Taxi/Otptaxi/Otptaxi';
import Thankyoutaxi from './Taxi/Thankyoutaxi/Thankyoutaxi';
import Choosetw from './Selfdrive/Choosevehicle/Choosetw';
import Outstation from './Taxi/Choosetaxi/Outstation';
import Rentals from './Taxi/Choosetaxi/Rentals';
import Corporate from './Corporate/Corporate';
import Corpmain from './Corporate/Corpmain';
import Corplocal from './Corporate/Corplocal';
import Corptransportation from './Corporate/Corptransportation';
import Corptaxi from './Corporate/Corptaxi';
import Events from './Events/Event';
import Eventmain from './Events/Eventmain';
import EventCategory from './Events/EventCategory';
import Cab from './Cab/Cab';
import Cabmain from './Cab/cabmain';
import Seat from './Cab/seat';
import Verifyuser from './Verifyuser';
import Passengerform from './Cab/passengerform';

//SELFDRIVE ADMIN IMPORT
import Sdadmin from './admin/Sdadmin/Sdadmin';
import Sdusermgmt from './admin/Sdadmin/Sdusermgmt';
import Sdadminmgmt from './admin/Sdadmin/Sdadminmgmt';
import Sdcitymgmt from './admin/Sdadmin/Sdcitymgmt';
import Sdcountrymgmt from './admin/Sdadmin/Sdcountrymgmt';
import Sdstatemgmt from './admin/Sdadmin/Sdstatemgmt';
import Sdvehiclemgmt from './admin/Sdadmin/Sdvehiclemgmt';
import SdMonitoring from './admin/Sdadmin/SdMonitoring'
import SdListyourvehicle from './admin/Sdadmin/SdListyourvehicle'
import SdCopartner from './admin/Sdadmin/SdCopartner'
import SdAdvertisemgmt from './admin/Sdadmin/SdAdvertisemgmt'
import SdListingmgmt from './admin/Sdadmin/SdListingmgmt'
import SdBookingmgmt from './admin/Sdadmin/SdBookingmgmt'
import SdTemplatemgmt from './admin/Sdadmin/SdTemplatemgmt'
import SdFaremgmt from './admin/Sdadmin/SdFaremgmt'
import SdNotificationusermgmt from './admin/Sdadmin/SdNotificationusermgmt'
import SdNotificationpartnermgmt from './admin/Sdadmin/SdNotificationpartnermgmt'
import SdFuelmgmt from './admin/Sdadmin/SdFuelmgmt'
import SdMaintainancemgmt from './admin/Sdadmin/SdMaintainancemgmt'
import SdRefralmgmt from './admin/Sdadmin/SdRefralmgmt'
import SdRefundmgmt from './admin/Sdadmin/SdRefundmgmt'
import SdTransactionmgmt from './admin/Sdadmin/SdTransactionmgmt'
import SdContentmgmt from './admin/Sdadmin/SdContentmgmt'
import SdSosmgmt from './admin/Sdadmin/SdSosmgmt'
import Viewdoc from './admin/Sdadmin/Viewdoc'
//CAB ADMIN IMPORT
import Cabadmin from './admin/Cabadmin/cabadmin';
import Cabusermgmt from './admin/Cabadmin/cabusermgmt';
import Cabadminmgmt from './admin/Cabadmin/cabadminmgmt';
import Cabcitymgmt from './admin/Cabadmin/cabcitymgmt';
import Cabcountrymgmt from './admin/Cabadmin/cabcountrymgmt';
import Cabstatemgmt from './admin/Cabadmin/cabstatemgmt';
import Cabvehiclemgmt from './admin/Cabadmin/cabvehiclemgmt';
import CabMonitoring from './admin/Cabadmin/cabMonitoring'
import CabListyourvehicle from './admin/Cabadmin/cabListyourvehicle'
import CabCopartner from './admin/Cabadmin/cabCopartner'
import CabAdvertisemgmt from './admin/Cabadmin/cabAdvertisemgmt'
import CabListingmgmt from './admin/Cabadmin/cabListingmgmt'
import CabBookingmgmt from './admin/Cabadmin/cabBookingmgmt'
import CabTemplatemgmt from './admin/Cabadmin/cabTemplatemgmt'
import CabFaremgmt from './admin/Cabadmin/cabFaremgmt'
import CabNotificationusermgmt from './admin/Cabadmin/cabNotificationusermgmt'
import CabNotificationpartnermgmt from './admin/Cabadmin/cabNotificationpartnermgmt'
import CabFuelmgmt from './admin/Cabadmin/cabFuelmgmt'
import CabMaintainancemgmt from './admin/Cabadmin/cabMaintainancemgmt'
import CabRefralmgmt from './admin/Cabadmin/cabRefralmgmt'
import CabRefundmgmt from './admin/Cabadmin/cabRefundmgmt'
import CabTransactionmgmt from './admin/Cabadmin/cabTransactionmgmt'
import CabContentmgmt from './admin/Cabadmin/cabContentmgmt'
import Cabsosmgmt from './admin/Cabadmin/cabSosmgmt'





















function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/selfdrive" element={<Vehiclecategory />}></Route>
        <Route path="/twowheeler" element={<Choosetw />}></Route>
        <Route path="/car" element={<Choosevehicle />}></Route>
        <Route path="/Billpay" element={<Billpay />}></Route>
        <Route path="/Payment" element={<Payment />}></Route>
        <Route path="/Thankyou" element={<Thankyou />}></Route>
        <Route path="/thankyoutaxi" element={<Thankyoutaxi />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/user" element={<Profile />}></Route>
        <Route path="/admin" element={<Main />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Document" element={<Document />}></Route>
        <Route path="/userdetail" element={<Profiledetails />}></Route>
        <Route path="/changepassword" element={<Newpassword />}></Route>
        <Route path="/tripdetail" element={<Tripdetail />}></Route>
        <Route path="/taxi" element={<Taximain />}></Route>
        <Route path="/choosetaxi" element={<Choosetaxi />}></Route>
        <Route
          path="/Bookingconfirmation"
          element={<Bookingconfirmation />}
        ></Route>
        <Route path="/outstation" element={<Outstation />}></Route>
        <Route path="/rentals" element={<Rentals />}></Route>
        <Route path="/Testinomials" element={<Testinomials />}></Route>
        <Route path="/otptaxi" element={<Otptaxi />}></Route>
  {/*SELF DRIVE ADMIN DASHBOARD*/}
        <Route path="/sdadmin" element={<Sdadmin />}></Route>
        <Route path="/sdusermgmt" element={<Sdusermgmt />}></Route>
        <Route path="/sdadminmgmt" element={<Sdadminmgmt />}></Route>
        <Route path="/sdstatemgmt" element={<Sdstatemgmt />}></Route>
        <Route path="/sdcitymgmt" element={<Sdcitymgmt />}></Route>
        <Route path="/sdcountrymgmt" element={<Sdcountrymgmt />}></Route>
        <Route path="/sdvehiclemgmt" element={<Sdvehiclemgmt />}></Route>
        <Route path="/sdmonitoring" element={<SdMonitoring />}></Route>
        <Route
          path="/sdListyourvehicle"
          element={<SdListyourvehicle />}
        ></Route>
        <Route path="/sdcopartner" element={<SdCopartner />}></Route>
        <Route path="/sdadvertisemgmt" element={<SdAdvertisemgmt />}></Route>
        <Route path="/sdlistingmgmt" element={<SdListingmgmt />}></Route>
        <Route path="/sdbookingmgmt" element={<SdBookingmgmt />}></Route>
        <Route path="/sdtemplatemgmt" element={<SdTemplatemgmt />}></Route>
        <Route path="/sdfaremgmt" element={<SdFaremgmt />}></Route>
        <Route path="/ecat" element={<EventCategory />}></Route>
        <Route
          path="/sdnotificationusermgmt"
          element={<SdNotificationusermgmt />}
        ></Route>
        <Route
          path="/sdnotificationpartnermgmt"
          element={<SdNotificationpartnermgmt />}
        ></Route>
        <Route path="/sdfuelmgmt" element={<SdFuelmgmt />}></Route>
        <Route
          path="/sdmaintainancemgmt"
          element={<SdMaintainancemgmt />}
        ></Route>
        <Route path="/sdrefralmgmt" element={<SdRefralmgmt />}></Route>
        <Route path="/sdrefundmgmt" element={<SdRefundmgmt />}></Route>
        <Route
          path="/sdtransactionmgmt"
          element={<SdTransactionmgmt />}
        ></Route>
        <Route path="/sdcontentmgmt" element={<SdContentmgmt />}></Route>
        <Route path="/sdsosmgmt" element={<SdSosmgmt />}></Route>
        <Route path="/sddocmgmt" element={<Viewdoc />}></Route>
        {/*SELF DRIVE ADMIN DASHBOARD CLOSE*/}
        {/*CAB ADMIN DASHBOARD OPEN*/}
        <Route path="/Cabadmin" element={<Cabadmin />}></Route>
        <Route path="/Cabusermgmt" element={<Cabusermgmt />}></Route>
        <Route path="/Cabadminmgmt" element={<Cabadminmgmt />}></Route>
        <Route path="/Cabstatemgmt" element={<Cabstatemgmt />}></Route>
        <Route path="/Cabcitymgmt" element={<Cabcitymgmt />}></Route>
        <Route path="/Cabcountrymgmt" element={<Cabcountrymgmt />}></Route>
        <Route path="/Cabvehiclemgmt" element={<Cabvehiclemgmt />}></Route>
        <Route path="/Cabmonitoring" element={<CabMonitoring />}></Route>
        <Route
          path="/CabListyourvehicle"
          element={<CabListyourvehicle />}
        ></Route>
        <Route path="/Cabcopartner" element={<CabCopartner />}></Route>
        <Route path="/Cabadvertisemgmt" element={<CabAdvertisemgmt />}></Route>
        <Route path="/Cablistingmgmt" element={<CabListingmgmt />}></Route>
        <Route path="/Cabbookingmgmt" element={<CabBookingmgmt />}></Route>
        <Route path="/Cabtemplatemgmt" element={<CabTemplatemgmt />}></Route>
        <Route path="/Cabfaremgmt" element={<CabFaremgmt />}></Route>
        <Route path="/ecat" element={<EventCategory />}></Route>
        <Route
          path="/Cabnotificationusermgmt"
          element={<CabNotificationusermgmt />}
        ></Route>
        <Route
          path="/Cabnotificationpartnermgmt"
          element={<CabNotificationpartnermgmt />}
        ></Route>
        <Route path="/Cabfuelmgmt" element={<CabFuelmgmt />}></Route>
        <Route
          path="/Cabmaintainancemgmt"
          element={<CabMaintainancemgmt />}
        ></Route>
        <Route path="/Cabrefralmgmt" element={<CabRefralmgmt />}></Route>
        <Route path="/Cabrefundmgmt" element={<CabRefundmgmt />}></Route>
        <Route
          path="/Cabtransactionmgmt"
          element={<CabTransactionmgmt />}
        ></Route>
        <Route path="/Cabcontentmgmt" element={<CabContentmgmt />}></Route>
        <Route path="/Cabsosmgmt" element={<Cabsosmgmt />}></Route>

        {/*CAB ADMIN DASHBOARD CLOSE*/}
        <Route path="/corporate" element={<Corporate />}></Route>
        <Route path="/corpoutstation" element={<Corpmain />}></Route>
        <Route path="/corplocal" element={<Corplocal />}></Route>
        <Route
          path="/corptransportation"
          element={<Corptransportation />}
        ></Route>
        <Route path="/corptaxi" element={<Corptaxi />}></Route>
        <Route path="/event" element={<Events />}></Route>
        <Route path="/eventmain" element={<Eventmain />}></Route>
        <Route path="/cab" element={<Cab />}></Route>
        <Route path="/cabmain" element={<Cabmain />}></Route>
        <Route path="/passengerform" element={<Passengerform />}></Route>
        <Route path="/seat" element={<Seat />}></Route>
        <Route path="/verifyuser/:email" element={<Verifyuser />}></Route>
        
          {/* Other routes */}
          <Route path="/billpay/:vehicleId" component={<Billpay/>} />
        
      </Routes>
      <Footer />
      <div id="preloader" />
      <a href="/" className="back-to-top">
        <i className="icofont-simple-up" />
      </a>
    </div>
  );
}

export default App;
