import React, { useEffect, useState } from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Brands from "./components/Brands/Brands";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import BrandProducts from './components/BrandProducts/BrandProducts';
import Shop from './components/Shop/Shop'
import { jwtDecode } from "jwt-decode";
import Profile from './components/Profile/Profile';
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./Context/CartContext";
import Payment from './components/Payment/Payment';
import AllOrders from './components/AllOrders/AllOrders';
import { Offline, Online } from "react-detect-offline";
import Landing from "./components/Landing/Landing";



export default function App() {

function Test({children}) {
if (crrUser==null) {
  return <Navigate to= "/login"/> // this navigate is from "react-router-dom" not like the hook
}else{
  return <>
  {children}
  </>
}

}
/*
this Test function is actully a component that we can call it like any component in the router
any function component must have return with jsx
this component protect our routes that user cant go to it unless he logged in
*/
  const [crrUser, setCrrUser] = useState(null)


function getUserData() {
  const userData = jwtDecode(localStorage.getItem('tkn'))
  setCrrUser(userData)
  
}

function deleteUSerData() {
  localStorage.removeItem("tkn");
  setCrrUser(null);
  
}
  const router = createBrowserRouter([

    {path: '', element: <Layout deleteUSerData={deleteUSerData} crrUser={crrUser} />, children: [

      { path: '', element: <CartContextProvider><Landing /></CartContextProvider> },
      
      { path: 'home', element:<CartContextProvider> <Landing /> </CartContextProvider> },

        { path: 'Shop', element: <Test><CartContextProvider><Shop /></CartContextProvider>  </Test> },

        { path: 'brandproducts/:id', element: <BrandProducts /> },

        { path: 'brand', element: <Brands /> },
        { path: 'allorders', element:  <Test><AllOrders crrUser={crrUser}/></Test>  },

        { path: 'payment', element:<Test> <CartContextProvider><Payment /></CartContextProvider></Test>  },

        { path: 'cart', element: <Test><CartContextProvider><Cart /></CartContextProvider></Test> },

        { path: 'prodetails/:id', element: <Test> <CartContextProvider><ProductDetails /></CartContextProvider></Test> }, //any component can be written like html comp and anything inside will be its children

        { path: 'login', element: <Login getUserData={getUserData} /> }, //get user data here is sending props to login

        { path: 'register', element: <Register /> },

        { path: 'profile', element: <Test><Profile deleteUSerData={deleteUSerData} crrUser={crrUser}/></Test> },

        {path:'*', element: <div className="d-flex justify-content-center align-content-center img-fluid">
          <img src={require('../src/images/error.jpg')} alt="error" />
        </div>}
      ]}
  ])

  useEffect(function () { //this useEffect we used it to prevent losing visual data in reload
    if(localStorage.getItem('tkn')!=null&&crrUser==null){ // we cant ask the localStorage only cause of its always has data
      getUserData()
    }
  },[])

  return <>
  
  <Offline>
  <div style={{'left':'0', 'z-index':'9999'}}  className=" succesMsg bg-dark position-fixed bottom-0 alert text-white text center">No Internet Connection </div>
  </Offline>
      <RouterProvider router={router} />
    </>
  
}
