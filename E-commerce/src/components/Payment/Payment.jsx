import React, { useContext, useEffect } from 'react'
import { cartContext } from '../../Context/CartContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Payment() {
const {cartId,getCartProducts}= useContext(cartContext)

    
    const nav =useNavigate();

    async function confirmCashOrder() {
        try {
          const {data}= await axios.post(`https://route-ecommerce.onrender.com/api/v1/orders/${cartId}`,{
                "shippingAddress":{
                    "details": document.querySelector('#address').value,
                    "phone": document.querySelector('#phone').value,
                    "city": document.querySelector('#city').value
                }
            },{
                headers:{'token':localStorage.getItem('tkn')}
            })
            if (data.status==='success') {
                nav('/allorders')
            }
        } catch (error) {
            console.log(error.response.data);
        }
        
    }
    async function confirmCreditOrder(){
        try {
            const {data}= await axios.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}`,{
            "shippingAddress":{
                "details": document.querySelector('#address').value,
                "phone": document.querySelector('#phone').value,
                "city": document.querySelector('#city').value
            }
        },{
            headers:{'token':localStorage.getItem('tkn')},
            params:{'url':'http//localhost4200'}
        })
        if (data.staus=="success") {
            window.open(data.session.url)
        }
        } catch (error) {
            console.log(error.response.data);
        }
    }
    useEffect(()=>{
        getCartProducts()
        console.log({cartId});
    }
    ,[])
  return <>
  
  <Helmet>

<title>Payment</title>
<meta name="description" content="This is the payment page of our website." />
</Helmet>
  <div className="container text-center mb-5">
    
    <div className="w-50 m-auto">
        <form >
            <label className='mt-5 ' htmlFor="address">Address Details</label>
            <input className=' form-control' type="text" id='address'  placeholder="Enter your Address details"/>

            <label className='mt-5' htmlFor="phone">Phone Number</label>
            <input className=' form-control' type="number" id='phone' laceholder="Enter your Phone details"/>

            <label className='mt-5' htmlFor="city">City</label>
            <input className=' form-control' type="text" id='city'  placeholder="Enter your City details"/>
            <button onClick={confirmCashOrder} type='button' className='btn btn-success mt-5'> Confirm Cash</button> 
            <button onClick={confirmCreditOrder} type='button' className='btn btn-success mt-5 mx-5'> Confirm Credit</button> 
        </form>
    </div>
  </div>
  
  </>
}
