import React from "react";
import {Outlet}  from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function Layout({crrUser,deleteUSerData}) {
  return<>
    <Navbar deleteUSerData={deleteUSerData}  crrUser={crrUser} />
    <Outlet />

      <footer style={{'background-color':'rgba(33,41,52,255)'}} >

      <div className="  p-2">
        <h2 className=" ms-2 text-success fw-bold text-capitalize">Get Our App </h2>
        <p className="text-white-50">we will send you link, open it on your phone to download the app</p>
      </div>

      <div className=" container justify-content-between container d-flex ">
      <input type="text" className=" ms-5 w-75 form-control " placeholder="Emali@gmail.com" />
      <button className=" btn btn-warning btn-md fw-bold"> Subscribe </button>
      </div>
      
      <div className=" container-fluid d-flex justify-content-between pt-5">

        <div className="leftSide">
          <ul className=" list-unstyled d-flex ">
            <li>
              <h6 className="text-white-50">Payment Partners</h6>
            </li>

            <li className=" text-warning ms-2">
              <i className="text-white-50 fa-brands fa-cc-paypal"></i>
            </li>

            <li className=" text-warning ms-2">
              <i className="text-white-50 fa-brands fa-cc-mastercard"></i>
            </li>

            <li className=" text-warning ms-2"> 
              <i className="text-white-50 fa-brands fa-cc-amazon-pay"></i>
            </li>
          </ul>
        </div>

        <div className="rightSide d-flex align-items-center">

            <h6 className="text-white-50">Get Deliveries with Zayn Market</h6>

            <button className=" btn btn-dark btn-sm mx-2">
              <i className="fa-brands fa-app-store me-2"></i>
              <span>Available on App Store</span>
            </button>   

            <button className=" btn btn-dark btn-sm ">
              <i className="fa-brands fa-google-play me-2"></i>
              <span>Available on Play Store</span>
            </button>
        </div>
      </div>    
    </footer>
  </>
}
