import React, { useContext } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import Google from "../Google/Google";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";

const SignUp = () => {

  const { signUpUser , loading, setProfile, emailVerification} = useContext(AuthContext);

  const signUpHandle = (event) => {

    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const password = form.password.value;

    // console.log(name, email, phoneNumber, password)

    signUpUser(email, password)

      .then((result) => {

        const user = result.user;

        if(loading){
          return <h1>loading...</h1>
        }
        userNamePhoneNumberSet(name, number)

        emailVerification()
         .then(() => {
          alert('Please check your email address')
         })
        console.log(user);
      })
      .catch((e) => console.error(e));

  };

  const userNamePhoneNumberSet = (name, number) => {

    const profile = {
      displayName: name,
      phoneNumber: number,
    };

    console.log(profile)

    setProfile(profile)
    .then(() => {})
    .catch((e) => console.error(e));

  }

  return (
    <div className="mx-3 lg:mx-16 mt-10 welcome-bg height-set-welcome-div mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 ">
        {/* headline */}

        <div className="hidden lg:block ">
          <div className="flex justify-center mt-48">
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
              <h1 className="text-3xl font-bold mb-2 lg:mb-0">Sign Up</h1>

              <Link to="/login" className="underline already-text">
                Already have an account !
              </Link>
            </div>

            {/* form start */}

            <div className="mb-10">
              <form onSubmit={signUpHandle}>

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input input-bordered w-full mb-4 rounded-none py-5 lg:py-7"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full mb-4 rounded-none py-5 lg:py-7"
                  required
                />

                <input
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  className="input input-bordered w-full mb-4 rounded-none py-5 lg:py-7"
                  required
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full mb-10 rounded-none py-5 lg:py-7"
                  required
                />

                <button type="submit" className="Sign-Up-Button mb-5 font-bold">
                  Sign Up
                </button>

              </form>

              <Google />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
