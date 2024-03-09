import React, { useEffect, useState } from 'react'
import MySlider from '../MySlider/MySlider'
import { Helmet } from "react-helmet";
import axios from 'axios';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { Link } from 'react-router-dom';


export default function Landing() {
    const [mostSold, setAllMostSold] = useState(null)
    

    async function getMostSold() {

        try {
          const {data} = await axios.get(
            "https://route-ecommerce.onrender.com/api/v1/products"
          );
          console.log(data);
          setAllMostSold(data.data);
        }
        catch (e) {
          console.log("errrr", e);
        }
      }

useEffect(() => {
    getMostSold()
},[])
  return <>

<Helmet>

<title> Home</title>
<meta name="description" content="This is the home page of our website." />
</Helmet>

{mostSold? <div className="container-fluid ">
<MySlider/>
  <div className="row text-center pt-5 mt-5">
      <div className="col-sm-6 m-auto">
          <h1>Categories of The Month</h1>
          <p> Experience The Most Purshased Items</p>
      </div>
  </div>
  
  <div className="row align-items-center justify-content-center  pt-5">
    
        {mostSold.slice(36,39).map(function (sold,idx) {
            return  <div key={idx} className="  col-sm-3 ">
                 <Link to={`/prodetails/${sold.id}`}>
                <div className="item">
                <img className='rounded-circle img-fluid' src= {sold.imageCover} alt="" />
            <h5 className=' text-center text-black '> {sold.title.slice(0,17)}</h5>
                </div>
                </Link>
        </div>
        })}
       
    </div>
</div>:<LoadingScreen/>}

{mostSold?<div className="container-fluid featured pb-5 mt-5">

  <div className="row text-center pt-5">
      <div className="col-sm-6 m-auto">
          <h1>Featured Products</h1>
          <p> Shop Our New Items</p>
      </div>
  </div>
  
  <div className="row align-items-center justify-content-center pt-5 m-auto">
    
        {mostSold.slice(0,3).map(function (sold,idx) {  
            return  <div key={idx} className=" col-sm-3 ">
                <Link to={`/prodetails/${sold.id}`}>
                <div className="item">
                <img className='rounded-circle rounded-5 img-fluid' src= {sold.imageCover} alt="" />
                <h5 className=' text-center text-black mt-2  '> {sold.title.slice(0,17)}</h5>
                </div>
                </Link>
        </div>
        })}
       
    </div>
</div>:<LoadingScreen/>}





  
  
  </>
}
