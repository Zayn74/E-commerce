import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Accordion from "../Accordion/Accordion";

export default function Brands() {
  const [allBrands, setBrands] = useState(null);
  async function getAllBrandsApi() {
    const res = await axios.get(
      "https://route-ecommerce.onrender.com/api/v1/brands"
    );
    setBrands(res.data.data);
  }
  useEffect(function () {
    getAllBrandsApi();
  }, []);

  return <>
      <Helmet>

<title>Brands</title>
<meta name="description" content="This is our brands page of our website." />
</Helmet>
      {allBrands ? (
        <div className="container-fluid ">
          <div className="row">
            
            <div className="col-lg-3 pt-5 ">
              <div className="title">
                <h3 className=" text-success text-capitalize">Our Brands</h3>
          <Accordion/>
              </div>
            </div>

<div className="col-lg-9">
  <div className="row pt-5">
  {allBrands.map(function (brands, idx) {
              return (
                <div key={idx} className=" card col-lg-3 rounded ">
                  <Link to={`/brandproducts/${brands._id}`}>
                    <div className="brand text-bold">
                      <img
                        src={brands.image}
                        className=" img-fluid"
                        alt={brands.name}
                      />
                      <h6 className="text-center text-dark">{brands.name}</h6>
                    </div>
                  </Link>
                </div>
              );
            })}
  </div>
 
</div>
     
          </div>
        </div>
      ) : (
      <LoadingScreen/>
      )}
    </>
  
}
