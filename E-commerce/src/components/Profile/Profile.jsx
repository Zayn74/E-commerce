import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom';

export default function Profile({crrUser,deleteUSerData}) {
  const  navigate=useNavigate();
function logoutDone() {
  deleteUSerData()
navigate('/login')
}

  return <>
      <Helmet>

<title>Profile</title>
<meta name="description" content="This is your profile page of our website." />
</Helmet>


        <div className="container-fluid pb-5  " style={{'background-color':'rgba(128, 128, 128, 0.122)'}}>
          <div className="row pt-5">
            <div className="col-lg-3 rowOne ">
              <div className="titlee ">

                  
                <div className="container rounded ms-5 d-flex  bg-white text-capitalize border-start border-5 border-info ">
                <i className="fa-regular fa-circle-user fw-bold fs-1 pt-3 pe-3"></i>
                <h3 className='py-3'>Hi, {crrUser.name}</h3>
                </div>

                <div className="row allOrder product ">
                <Link to="/allOrders">
                <div className="border-start border-5 border-dark align-items-center justify-content-center mt-2 pt-2  ms-5 rounded bg-white text-capitalize w-75 h-75  d-flex ">
                  <h5 className='  text-dark text-center '>All Orders</h5>
                </div>
                </Link>
                    </div>

                    <div className="row product ">
                      
                <Link to="/allOrders">
                <div className="border-start border-5 border-dark align-items-center justify-content-center pt-2 mt-2  rounded ms-5 bg-white text-capitalize w-75 h-75 d-flex ">
                  <h5 className='  text-dark text-center '>About Us</h5>
                </div>
                </Link>
                    </div>
                    <div className="row product ">
                      
                <Link >
                <div onClick={logoutDone} className="border-start border-5 border-danger align-items-center justify-content-center pt-2 mt-2  rounded ms-5 bg-white text-capitalize w-75 h-75 d-flex ">
                  <h5 className=' text-dark text-center '>Log Out</h5>
                </div>
                </Link>
                    </div>
              </div>
            </div>

<div className="col-lg-9 mb-5 pb-5 ">
  <div className=" ms-5 row pt-5  card">
                <div className=" d-flex justify-content-center align-content-center pb-5   rounded ">
                <div className='px-3 w-100'>
          <label htmlFor="email">Email</label>
          <input className='form-control ' placeholder='email@gmail.com' type="email"  id='email'/>
        </div>
        
        <div className='px-3 w-100'>
          <label htmlFor="firstName">First Name</label>
          <input className='form-control ' placeholder='Name' type="text" id='firstName' />
        </div>

        <div className='px-3 w-100'>
          <label htmlFor="lastName">Last Name</label>
          <input className='form-control ' placeholder='Last Name' type="text" id='lastName' />
        </div>
      </div>
      

      <div className='d-flex justify-content-center align-content-center pb-5 '>
        <div className='px-3 w-100 '>
          <label htmlFor="phone">Phone</label>
          <input className='form-control ' placeholder='enter your phone' type="phone"  id='email'/>
          <div className='fw-medium fs-6 pt-2'>This can be used to login across all zayn apps.</div>
        </div>

        <div className='px-3 w-100'>
          <label htmlFor="Brithday">Birthday</label>
          <input className='form-control ' placeholder='Name' type="date" id='Brithday' />
          <div className=' fw-medium fs-6 pt-2'>Get offers on your special day!</div>
        </div>

<div className="px-3 w-100 ">
  <div>
    <div>
      <label htmlFor="gender">Gender</label>
    </div>
    <div>
      <div className='d-flex justify-content-between align-content-between '>
      <button className='form-control  ms-1' type="radio" id='gender'><i className='fa-solid fa-male text-primary'></i> Male</button>
      <button className='form-control ms-1' type="radio" id='gender'><i className='fa-solid fa-female text-danger'></i> Female</button>
      </div>
    </div>
  </div>
</div>

      </div>
      <button className='btn btn-success btn-lg ms-3 mb-5 rounded-2'> Update Information</button>

  </div>
</div>
     
          </div>
        </div>
      
    </>
  
}
























//   <div className=' my-5'>
//   <h1 className=' fw-bold ms-5 fs-1 ps-5'>Welcome {crrUser.name} <i className="fa-solid fa-bolt-lightning text-warning" ></i></h1>
//   </div>

//   <section className='container me-5 p-5 rounded-3' style={{'background-color':'rgba(128, 128, 128, 0.114)'}}>
//     <h1 className='pb-3'>Profile Info</h1>
//     <form className='' action="" >
//       <div className='d-flex justify-content-center align-content-center pb-5'>
//         <div className='px-3 w-100'>
//           <label htmlFor="email">Email</label>
//           <input className='form-control ' placeholder='email@gmail.com' type="email"  id='email'/>
//         </div>
//         <div className='px-3 w-100'>
//           <label htmlFor="firstName">First Name</label>
//           <input className='form-control ' placeholder='Name' type="text" id='firstName' />
//         </div>
//         <div className='px-3 w-100'>
//           <label htmlFor="lastName">Last Name</label>
//           <input className='form-control ' placeholder='Last Name' type="text" id='lastName' />
//         </div>
//       </div>
      

//       <div className='d-flex justify-content-center align-content-center pb-5 '>
//         <div className='px-3 w-100 '>
//           <label htmlFor="phone">Phone</label>
//           <input className='form-control ' placeholder='enter your phone' type="phone"  id='email'/>
//           <div className='fw-medium fs-6 pt-2'>This can be used to login across all zayn apps.</div>
//         </div>

//         <div className='px-3 w-100'>
//           <label htmlFor="Brithday">Birthday</label>
//           <input className='form-control ' placeholder='Name' type="date" id='Brithday' />
//           <div className=' fw-medium fs-6 pt-2'>Get offers on your special day!</div>
//         </div>

// <div className="px-3 w-100 ">
//   <div>
//     <div>
//       <label htmlFor="gender">Gender</label>
//     </div>
//     <div>
//       <div className='d-flex justify-content-between align-content-between '>
//       <button className='form-control  ms-1' type="radio" id='gender'><i className='fa-solid fa-male text-primary'></i> Male</button>
//       <button className='form-control ms-1' type="radio" id='gender'><i className='fa-solid fa-female text-danger'></i> Female</button>
//       </div>
//     </div>
//   </div>
// </div>
//       </div>
     
//

//     </form>
//   </section>
  
//   </>
// }
