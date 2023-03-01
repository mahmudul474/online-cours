import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
import Google from "../Google/Google";

const Login = () => {

  return (

    <div className="mx-3 lg:mx-16  mt-20 lg:mt-16 ">

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">

        {/* headline */}

        <div className="hidden lg:block welcome-bg">

          <div className="flex justify-center mt-32 height-wel">

            <div>

              <p className="text-2xl lg:text-4xl font-bold mb-2">

                A Warm Welcome to

              </p>

              <p className="text-2xl lg:text-4xl font-bold wel-Omr-text">

                 Omar’s Academy

              </p>

            </div>

          </div>

        </div>

        <div className="bg-base-200 w-full lg:w-3/4 shadow-2xl">
          <div className="mx-16">
            {/* Text SignUp */}

            <div className="flex-none lg:flex justify-between items-center mt-6 mb-6 lg:mb-10">

              <h1 className="text-3xl font-bold mb-2 lg:mb-0">Login</h1>

              <Link to='/signUp' className="underline already-text">
                   Create New Account
              </Link>

            </div>

            {/* form start */}

            <div className="mb-10">

              <form>
                

                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full mb-4 lg:mb-10 rounded-none py-5 lg:py-7"
                  required
                />


                <input
                  type="text"
                  placeholder="Password"
                  className="input input-bordered w-full mb-10 lg:mb-16 rounded-none py-5 lg:py-7"
                  required
                />

                 <button className="Sign-Up-Button font-bold text-white mb-5">
                  Login
                 </button>

                 {/* <button className="Sign-Up-Button font-bold text-white mb-5"> 
                   Google 
                  </button> */}

                 <Google/>

              </form>

            </div>


          </div>


        </div>

      </div>

    </div>

  );
};

export default Login;
