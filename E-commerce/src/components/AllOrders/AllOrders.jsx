import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import { Link } from 'react-router-dom';

export default function AllOrders({crrUser}) {

    const [AllOrders, setAllOrders] = useState(null)

    async function getAllOrders (){

        try {
            const {data}= await axios.get(`https://route-ecommerce.onrender.com/api/v1/orders/user/${crrUser.id}`)
            setAllOrders(data)
            console.log(AllOrders);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        setAllOrders()
        getAllOrders();
    }, [])
  return<>
    <Helmet>

<title>Your Orders</title>
<meta name="description" content="This is the all of your orders page of our website." />
</Helmet>

  {/* {AllOrders?   <div className="container">
    <h2>Hello USer</h2>

    <div className="row">
        {AllOrders.map(function(order,idx){
            return<div key={idx} className="col-md-3">
            <div className="orders">

                <div className="container">
                    <div className="row ">
                        {order.cartItems.map(function (item,index) {
                            return<div className="col-sm-3" key={index}>
                            <div className="item">
                                <img src={item.product.imageCover} className='w-100' alt={item.product.title} />
                                <h4>{item.product.title}</h4>
                                <h5>Count:{item.count}</h5>
                                <h5>Price:{item.price}</h5>
                                <h5>Price: {order.totalOrderPrice} </h5>
                <h5> Order Type: {order.paymentMethodType} </h5>
                <p>this order deliverd to ({order.shippingAddress.details}) in ({order.shippingAddress.city})
                with number of({order.shippingAddress.phone} )</p>

                            </div>
                        </div>
                        })}
                        
                    </div>
                </div>
             
            </div>
        </div>
        })}

        
    </div>
  </div>:<LoadingScreen/>}

  </>
} */}


 {AllOrders? <div className="container-fluid my-5"style={{'background-color':'rgba(128, 128, 128, 0.114)'}}>


         <div className="row gy-5">
            <h3 className='text-center fw-bold'>All Your Orders History </h3>
        {AllOrders.map(function (order,idx) {

            return <div key={idx} className=" col-sm-12   ">

                      <div className="  item productWrap rounded-5">
                      
                      <div className="container card rounded d-flex">
                    <div className="row ">
                        {order.cartItems.map(function (item,index) {
                            return<div className="d-flex col-sm-2" key={index}>
                            <div className="item">
                                <img src={item.product.imageCover} className='card-img img-fluid rounded-5"' alt={item.product.title} />
                                <h4>{item.product.title.slice(0,10)}</h4>
                                <h5><span className='text-success fw-bold'>Quantity:</span> {item.count}</h5>
                                <h5><span className='text-success fw-bold'>Price:</span> {item.price}</h5>
                                <h5> <span className='text-success fw-bold'>Total Price:</span> {order.totalOrderPrice} </h5>
                <h5> <span className='text-success fw-bold'>Order Type:</span> {order.paymentMethodType} </h5>
                <p><span className='text-success fw-bold'>This Order Deiverd To:</span> {order.shippingAddress.details} in {order.shippingAddress.city}
                <span className='text-success fw-bold'> <br/>With Number of:</span> {order.shippingAddress.phone} </p>

                            </div>
                        </div>
                        })}
                        
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