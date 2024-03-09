import React, { useEffect } from 'react'
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import $ from 'jquery'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

export default function Cart() {

  const {cartProducts,totalCartPrice,numOfCartItems,removeProduct,updateCount,getCartProducts,cartId}=useContext(cartContext)

  async function removeMyProductBtn(id) {
    if (await removeProduct(id)==true) {
      $('.removeMsgg').fadeIn(300,function () {
        setTimeout(() => {
          $('.removeMsgg').fadeOut(300)
        },3000)
      })
    }
    
  }

  useEffect(function () {
    getCartProducts()
    },[])
    
  return<>
    <Helmet>

<title>Cart</title>
<meta name="description" content="This is the cart page of our website." />
</Helmet>

  <div style={{'left':'0', 'z-index':'9992','display':'none'}}  className=" removeMsgg bg-dark position-fixed bottom-0 alert text-white text center">Product Removed Successfully</div>

{cartProducts? <div style={{'background-color':'rgba(128, 128, 128, 0.114)'}} className=" container-fluid py-5">
  <h1 className="text-center " >Your Shopping Bag</h1>
    <div className="row">
      <div className="col-lg-4">
        <div className="title">
        
    <div className=' justify-content-between align-items-center card border-start border-success border-5  border-0 mt-4'>

    <h3 >Total Price: <span className="text-primary ">{ totalCartPrice }</span></h3>
    <Link to='/payment'>
    <button className='btn btn-success me-5'>Confirm</button>
    </Link>
   
    </div>
        </div>
 
      </div>
    

    
    <div className="col-lg-8">
      <div className="row mt-4 ">
      {cartProducts.map(function(pro,idx){return<div key={idx} className="  col-lg-3">

<div className="product bg-light rounded rounded-5 mb-5 ">

  <img src={pro.product.imageCover} className='img-fluid rounded rounded-5' alt={pro.product.title} />
  <h4>{pro.product.title.slice(0,11)}</h4>
  <div className="d-flex">
  <h6 className='me-4'>Count:{pro.count}</h6>
  <h6>Price:{pro.price}</h6>
  </div>

<div className="d-flex justify-content-around " onChange={function (e)  {updateCount(pro.product.id, e.target.value)}}>
<select name="quantatity" className=' form-control' >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
{/* <input type="number" className=' form-control text-dark w-50'  onChange={function (e)  {updateCount(pro.product.id, e.target.value)}}/> */}
  <button onClick={function(){removeMyProductBtn(pro.product.id)}} className='btn btn-danger  ms-5 '>Remove</button>
</div>


</div>
</div>})}
      </div>

     

    </div>
    </div>
  </div>:<LoadingScreen/>}

</>
}