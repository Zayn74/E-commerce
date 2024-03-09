import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function MySlider() {


    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 500,
     
    }
    
 

  return <>
      <Slider {...settings}>
        <div className="item">
        <div className="container crBg active">
          <div className="row p-5 ">
            <div className="mx-auto col-md-8 col-lg-6 order-lg-last active ">
              <img
                src={require("../../images/img/banner_img_01.jpg")}
                className=" img-fluid"
                alt=""
              />
            </div>
            <div className=" col-lg-6 mb-0 d-flex align-items-center ">
              <div className="text-align-left">
                <h3 className=' h1 text-success'>JUST GO!</h3>
                <p className='p'>Experience Your Shoping Like Never Before</p>
              </div>
            </div>
          </div>
        </div>
        </div>
     
      <div className="item">
        <div className="container crBg">
          <div className="row p-5">
            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
              <img
                src={require("../../images/img/banner_img_02.jpg")}
                className=" img-fluid"
                alt=""
              />
            </div>
            <div className=" col-lg-6 mb-0 d-flex align-items-center ">
              <div className="text-align-left">
                <h2 className=' h2'>Make Shoping EASY!</h2>
                <p className='p'>New Leve Of Shopping Online</p>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="item">
        <div className="container crBg">
          <div className="row p-5">
            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
              <img
                src={require("../../images/img/banner_img_03.jpg")}
                className=" img-fluid"
                
                alt=""
              />
            </div>
            <div className=" col-lg-6 mb-0 d-flex align-items-center ">
              <div className="text-align-left">
                <h2 className=' h2'>Find The Best For You</h2>
                <p className='p'>The Best Products In The Market, Just For You</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </Slider>
    </>
  
}
