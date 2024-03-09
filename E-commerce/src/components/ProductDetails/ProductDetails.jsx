import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import $ from "jquery"
import { Helmet } from "react-helmet";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function ProductDetails() {

  const {addProductToCart,removeProduct}= useContext(cartContext)

  async function addMyProduct() {

    if (await addProductToCart(allProDetails.id)==true ) {

      $('.successMsg').fadeIn(1000,function () {

        setTimeout(() => {
          $('.successMsg').fadeOut(1000) 
        }, 3000);
      })
      $('.removeBtn').fadeIn(500)
      $('.addBtn').fadeOut(500)
    }
  }
  async function removeMyProduct(id){
    if(await removeProduct(id)==true){
      $('.removeMsg').fadeIn(300, function () {
        setTimeout(() => {
          $('.removeMsg').fadeOut(3000) 
        }, 2000);
      })
      $('.addBtn').fadeIn(1000)
      $('#rmvBtn').fadeOut(1000)
    }
    
  }

  const id = useParams();

  const [allProDetails, setProDetails] = useState(null);

  async function proDetailsApi() {
    try {
      const res = await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id.id}`);
      setProDetails(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    proDetailsApi();
}, []);

  return <>

      {allProDetails ? 
      
        <div className="container  my-5 py-5">
                <Helmet>

<title>{allProDetails.title}</title>
<meta name="description" content="This is the product details page of our website." />
</Helmet>
          <div className="row">
            <div className="col-md-3">
              <img
                src={allProDetails.imageCover}
                alt={allProDetails.title}
                className="img-fluid card rounded-5"
              />
            </div>
            <div className="col-md-9 ">
              <h2 className="fw-bold text-success  ">{allProDetails.title}</h2>
              <p>{allProDetails.description}</p>
              <h5>Price: {allProDetails.price}</h5>
              <h5>Quantity: {allProDetails.quantity}</h5>
              <button onClick={addMyProduct} className="addBtn btn btn-warning ">Add Product To Cart</button>
              <button id="rmvBtn" onClick={function () {removeMyProduct(allProDetails.id)}} style={{'display':'none'}} className=" removeBtn btn btn-danger ">Remove Product From Cart</button>
              <div className="alet alert-success text-center successMsg" style={{'display':'none'}}> Product Added Successfully!</div>
              <div className="alet alert-success text-center removeMsg" style={{'display':'none'}}> Product removed Successfully!</div>
            </div>
          </div>
        </div>
       : 
       <LoadingScreen/>
      }
    </>
}
