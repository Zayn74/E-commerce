import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import $ from "jquery"
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Register() {
let user={
  name:'',
  phone:'',
  email:'',
  password:'',
  rePassword:'',
}

const navigate=useNavigate()
// useNavigate is from routerDom to navigate to where you want
async function myRegisterApi(obj){

  try{ 

    let res =await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signup', obj)
    console.log(res.data);
    if (res.data.message== 'success'){
      $('.successMsg').fadeIn(1000, function () {
          navigate('/login')
        
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

/** API WITH AXIOS IN SHORT=>
- first try and catch:
try is where code succeed and what you want to hapen  when  the code run  successfully
catch is where code has errors and what you want to do when that error happens
 */

let myFormik= useFormik({
  initialValues:user,

  onSubmit:function(values){
    console.log('hello', values)
    myRegisterApi(values)
  },

  validate:function (values) {
    let errors={};

    if (values.name.length < 3 || values.name.length > 10) {
      errors.name="Name must be more than 3 characters and less than 10 characters"  
    }
    if (!values.email.includes('@')|| !values.email.includes('.com')) {
      errors.email='email must be valid'
    }
    if( !values.phone.match( /^(02)?01[0125][0-9]{8}$/ )){
      errors.phone = "Phone must be egyptian number";
    }
    if( values.password. length < 6 || values. password. length > 12 ){
      errors.password = "Password Must be from 6 to 12 character only"
    }
    if (values.password != values.rePassword) {
      errors.rePassword='password and repassword must be matched'
      
    }
    return errors;
  }
})
/**  how to use formik:-
FORMIK IS:Library => Handle Form with an object, validation
HANDLING FORM=>
- first you need to connect your object with initialValues
- second you need to define onsubmit that takes func will do what  you need
- third connect your formik to your form by onSubmit={myFormik.handleSubmit}
- fourth to to make the input take the data from user and prevent read only we need to use onChange={myFormik.handleChange}
- fifth to take values that user added and define it with each specified object
  you need to connect each object value with targeted input by value={myFormik.values.rePassword} if we need repassword value as ex

HANDLING VALIDATION=>
- we have a function called validate which returns objects of error messages
- inside this function we check our inputs using if else statements
- when the input is not correct we add the message in errors object with its property as key and value as error massage
- then we show this message in a div that made in ternary operator
- .touched is build in func that tells that i clicked on it
- onBlur={myFormik.handleBlur} that means that user got out of the input and if the input is not correct shows the message
  on another meaning onblur dosent make the error shows immediately to user 
  */

  return (
    <>
        <Helmet>

<title>Register</title>
<meta name="description" content="This is the register page of our website." />
</Helmet>
      <div className="container py-5">

        <h2>Registaration Form</h2>

        <div style={{'display':'none'}} className="errorMsg alert alert-danger text-center "> Email already exists!</div>

        <div style={{'display':'none'}} className="successMsg alert alert-success text-center "> Registered successfuly </div>

        <form onSubmit={myFormik.handleSubmit}>

          <label className='mt-3'htmlFor="name">Name</label>
          <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.name} type="text" className=" form-control" id="name" placeholder="Name" />
          {myFormik.errors.name && myFormik.touched.name? <div className=" alert alert-danger text-center">{myFormik.errors.name}</div>:''}

          <label className='mt-3'htmlFor="email">Email</label>
          <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.email} type="text" className=" form-control" id="email" placeholder="Email" />
          {myFormik.errors.email && myFormik.touched.email? <div className=" alert alert-danger text-center">{myFormik.errors.email}</div>:''}
          
          <label className='mt-3'htmlFor="phone">Phone</label>
          <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.phone} type="text" className=" form-control" id="phone" placeholder="Phone" />
          {myFormik.errors.phone && myFormik.touched.phone?<div className=" alert alert-danger text-center">{myFormik.errors.phone}</div>:''}

          <label className='mt-3'htmlFor="password">Password</label>
          <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.password} type="password" className=" form-control" id="password" placeholder="password"  />
          {myFormik.errors.password && myFormik.touched.password?<div className=" alert alert-danger text-center">{myFormik.errors.password}</div>:''}

          <label className='mt-3'htmlFor="rePassword" >rePassword</label>
          <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.rePassword} type="password" className=" form-control" id="rePassword" placeholder="rePassword"  />
          {myFormik.errors.rePassword && myFormik.touched.rePassword? <div className=" alert alert-danger text-center">{myFormik.errors.rePassword}</div>:''}

          <button type="submit" className="btn btn-outline-warning btn-md mt-4 mb-5">Submit </button>
        </form>
      </div>
    </>
  );
}
