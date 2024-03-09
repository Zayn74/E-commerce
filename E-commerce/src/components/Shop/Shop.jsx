import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { cartContext } from "../../Context/CartContext";
import $ from 'jquery';
import { Helmet } from "react-helmet";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function Home() {
  const {addProductToCart,removeProduct}=useContext(cartContext)
  const [allProducts, setAllProducts] = useState(null);


  async function getAllProductsApi() {

    try {
      const res = await axios.get(
        "https://route-ecommerce.onrender.com/api/v1/products"
      );
      console.log(res);
      setAllProducts(res.data.data);
    }
    catch (e) {
      console.log("errrr", e);
    }
  }
  async function addMyProductBtn(id,idx){

    if(await addProductToCart(id)==true){
      $('.succesMsg').fadeIn(300,function(){
        setTimeout(()=>{
          $('.succesMsg').fadeOut(3000)
      },200)
    })
    $(`#addBtn${idx}`).fadeOut(500)
    $(`#rmvBtn${idx}`).fadeIn(500)
}}

async function removeMyProductBtn(id,idx) {
  if (await removeProduct(id)==true) {
    $('.removeMsg').fadeIn(300,function(){
      setTimeout(()=>{
        $('.removeMsg').fadeOut(3000)
    },200)
  })
  $(`#addBtn${idx}`).fadeIn(500)
  $(`#rmvBtn${idx}`).fadeOut(500)
}}


  useEffect( function () {
    getAllProductsApi()
  }, []);

  return <>
  <Helmet>

    <title>Shop</title>
    <meta name="description" content="This is the shop page of our website." />
  </Helmet>


{allProducts? <div className="container-fluid mt-5 pb-5"style={{'background-color':'rgba(128, 128, 128, 0.114)'}}>
<div style={{'left':'0', 'z-index':'9999','display':'none'}}  className=" succesMsg bg-dark position-fixed bottom-0 alert text-white text center">Product Added Successfully</div>
<div  style={{'left':'0', 'z-index':'9999','display':'none'}}   className=" removeMsg bg-dark position-fixed bottom-0 alert text-white text center">Product Removed Successfully</div>

        <div className="row gy-5">
          {allProducts.map(function (product,idx) {

            return <div key={idx} className=" col-sm-2 product ">

                      <div className="  item productWrap rounded-5">
                      <Link to={`/prodetails/${product.id}`}>

                        <div className="upper card rounded-5">
                          <img src={product.imageCover} alt={product.title} className="card-img img-fluid rounded-5"   />
                          <h5 className=" text-center">{product.title.slice(0, product.title.indexOf(' ', 10))}</h5>
                          <h6 className=" text-center">{product.category.name}</h6>

                            <div className="d-flex align-content-center justify-content-center">
                              <h6 className=" text-center me-5">price: { product.priceAfterDiscount? <>
                                <span className=" text-decoration-line-through">{product.price}</span>
                                  <span className="ms-2">{product.priceAfterDiscount}</span>
                                    </>:<span>{product.price}</span>}</h6>
                                    <h6 className=" ms-3 ">
                            <i className="fa-solid fa-star text-warning"></i>
                            {product.ratingsAverage} </h6>
                                </div>
                          </div>
                          </Link>
                      
                        <div className="lower mb-3 pt-2 ms-5">
                        <div className="layer">
                            <div  className='card-img-overlay ' >
                              <button id={`addBtn${idx}`} onClick={function () {addMyProductBtn(product.id,idx)}}className="btn btn-success " > Add To Cart  <i className="fa-solid fa-cart-shopping"></i></button>
                              <button onClick={function(){removeMyProductBtn(product.id,idx)}} id={`rmvBtn${idx}`} className="btn btn-danger ms-3" style={{'display':'none'}} >Remove <i className="fa-solid fa-xmark"> </i></button>
                          </div>
                            </div>
           
                        </div>
                    </div>
                    
                    </div>
            
          })}
        </div>
      </div> : <LoadingScreen/> 
      }

    </>
  
    }