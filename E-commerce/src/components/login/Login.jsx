import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import $ from "jquery"
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Login({getUserData}) { //get user data here is recieving props from app
  let user={
    password:'',
    email:'',
  }
  
  const navigate=useNavigate()

  async function myLoginApi(obj){
    try{ 
      
      let res =await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signin', obj)
      console.log(res.data);
      if (res.data.message== 'success'){

        $('.successMsg').fadeIn(1000, function () {
            navigate('/home')

            localStorage.setItem('tkn', res.data.token)
            getUserData()
          
        })
      }
  }

    catch{
      $('.errorMsg').fadeIn(1000, function () {
        setTimeout(() => {
          $('.errorMsg').fadeOut(1000)
        }, 3000);
      })
    }
  }

  let myFormik= useFormik({
    initialValues:user,
    
  
    onSubmit:function(values){
      console.log('hello', values)
      myLoginApi(values)
    },
  
    validate:function (values) {
      let errors={};

      if (!values.email.includes('@')|| !values.email.includes('.com')) {
        errors.email='email must be valid'
      }

      if( values.password.length < 6 || values.password.length > 12 ){
        errors.password = "Password Must be from 6 to 12 character only"
      }
      return errors;
    }
  })
  
    return (
      <>
      
    <Helmet>

<title>Login</title>
<meta name="description" content="This is the login page of our website." />
</Helmet>
        <div className="container py-5">
  
          <h2>LOGIN</h2>
  
          <div style={{'display':'none'}} className="errorMsg alert alert-danger text-center "> Email or password not correct</div>
  
          <div style={{'display':'none'}} className="successMsg alert alert-success text-center "> Logged In Successfuly </div>
  
          <form onSubmit={myFormik.handleSubmit}>
  
            <label className='mt-3'htmlFor="email">Email</label>
            <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.email} type="text" className=" form-control" id="email" placeholder="Email" />
            {myFormik.errors.email && myFormik.touched.email? <div className=" alert alert-danger text-center">{myFormik.errors.email}</div>:''}
            
            <label className='mt-3'htmlFor="password">Password</label>
            <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.password} type="password" className=" form-control" id="password" placeholder="password"  />
            {myFormik.errors.password && myFormik.touched.password?<div className=" alert alert-danger text-center">{myFormik.errors.password}</div>:''}
  
            <button type="submit" className="btn btn-outline-warning btn-md mt-4 mb-5">Submit </button>
          </form>
        </div>
      </>
    );
  }