import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import NavfavouriteIcon from "../NavfavouriteIcon/NavfavouriteIcon";
import NavAddToCard from "../NavAddToCard/NavAddToCard";
import NavNotification from "../NavNotification/NavNotification";
import NavProfileAvatar from "../NavProfileAvatar/NavProfileAvatar";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";

const Navbar = () => {

  const { user } = useContext(AuthContext);

  const navInfo = (

    <>

      <li className="font-bold ml-0 lg:ml-5">
        <Link to="/">Home</Link>
      </li>

      <li className="font-bold">
        <Link>Class 1-12</Link>
      </li>

      <li className="font-bold">
        <Link>Job Preparation</Link>
      </li>

      <li className="font-bold">
        <Link>Admission Test</Link>
      </li>

      <li className="font-bold">
        <Link>Online Batch</Link>
      </li>
      <li className="font-bold">
        <Link>Book Store</Link>
      </li>

      <li className="font-bold">
        <Link>Skill Development</Link>
      </li>

    </>

  );


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


          <Link
            to="/"
            className="btn btn-ghost mr-5 text-xl uppercase p-0 navLogo-text"
          >
            Omar Academy
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal gap-0 m-0">
            {navInfo} 
          </ul>

        </div>

        {/* avatar and dropdown  */}

        <div className="navbar-end">
          {/* Favourite icon */}

          {
            user?.emailVerified === true ? 
            <>
               <NavfavouriteIcon />

{/* add to card */}

<NavAddToCard />

{/* notification */}

<NavNotification />

{/* avatar */}

<NavProfileAvatar />
            </>
           :
            
           <>

          <p className="mr-5">
            <Link to="/login" className="font-bold text-blue-600">Login</Link>
          </p>

          <p className="font-bold text-blue-600">

            <Link to="/signUp">Sign Up</Link>

          </p>
             
           </>

          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;
