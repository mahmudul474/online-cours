import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";


const Navbar = () => {
   
   const navInfo = (
    <>
        <li className="font-bold ml-0 lg:ml-5">
          
          <Link>Home</Link>

        </li>

        <li className="font-bold">
            
            <Link>Class 1-12</Link>

        </li>

        <li className="font-bold">
           
           <Link>Job Preparation</Link>

        </li>

        <li className="font-bold"><Link>Admission Test</Link></li>

        <li className="font-bold">
          <Link>Online Batch</Link>
        </li>

        <li className="font-bold">
          <Link>Book Store</Link>
        </li>

        <li className="font-bold">
          <Link>Skill Development</Link>
        </li>

        <li className="font-bold">
          <Link>Question Bank</Link>
        </li>
     
    </>
   )

  return (
    <div className="mx-0 lg:mx-8 py-5">

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                  
                  {navInfo}

            </ul>

          </div>
            {/* <img src={navlogo} alt="" className="img-fluid p-0" /> */}
            <Link className="btn btn-ghost mr-5 text-xl uppercase p-0 navLogo-text">Omr Academy</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
               
               {navInfo}

               

          </ul>
        </div>

        {/* avatar and dropdown  */}
        <div className="navbar-end">

          
      {/* fvrt icon */}

        <div className="dropdown dropdown-end">

         <label tabIndex={0} className="btn btn-ghost btn-circle">

         <div className="indicator">

         <i className="fa-regular fa-heart text-lg ml-8 lg:ml-0 md:ml-0 "></i>

          <span className="badge badge-sm indicator-item">2</span>

        </div>

        </label>

      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">

        <div className="card-body">

          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>

          <div className="card-actions">

            <button className="btn btn-primary btn-block">View cart</button>

          </div>

        </div>

      </div>

    </div>

    {/* add to card */}

        <div className="dropdown dropdown-end">

         <label tabIndex={0} className="btn btn-ghost btn-circle">

         <div className="indicator">

          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 lg:ml-0 md:ml-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>

          <span className="badge badge-sm indicator-item">8</span>

        </div>

        </label>

      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
     
     {/* notification */}

    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-0 lg:mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item mr-0 lg:mr-5">2</span>
        </div>
      </label>


      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">

          <span className="font-bold text-lg">4 Items</span>
          <span className="text-info">Subtotal: $999</span>

          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>

          </div>
        </div>
      </div>
    </div>

    {/* avatar */}

    <div className="dropdown dropdown-end">

      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">

          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />

        </div>
      </label>

      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

        <li>

          <a className="justify-between">

            Profile

            <span className="badge">New</span>

          </a>

        </li>

        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>

    </div>
          
        </div>


      </div>
    </div>
  );
};

export default Navbar;
