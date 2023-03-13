import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Google from "../Google/Google";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import Loading from "../Loading/Loading";
import { saveuserInfo } from "../../api/userinfo";

const Login = () => {
  const { loginUser, forgatPassword, loading, setLoading } =
    useContext(AuthContext);

  const [userEmailForForgetPassword, setUserEmailForForgetPassword] =
    useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");

  console.log(error);

  const loginHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const user = result.user;

        setLoading(true);
        if (loading) {
          return <Loading />;
        }
        const information = {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL,
        };
        saveuserInfo(information);
        navigate(from, { replace: true });
        setLoading(false);
        console.log(user);
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const emailBlurHandle = (event) => {
    const email = event.target.value;
    setUserEmailForForgetPassword(email);
    //  console.log(email)
  };

  const forgetPasswordHandle = () => {
    if (!userEmailForForgetPassword) {
      alert("Please provide your email address");
      return;
    }

    forgatPassword(userEmailForForgetPassword)
      .then(() => {
        alert("Reset password link send your email. Please check your email");
      })
      .catch((e) => console.error(e));
  };

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

              <Link to="/signUp" className="underline already-text">
                Create New Account
              </Link>
            </div>

            {/* form start */}

            <div className="mb-10">
              <form onSubmit={loginHandler}>
                <input
                  onBlur={emailBlurHandle}
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full mb-4 lg:mb-10 rounded-none py-5 lg:py-7"
                  required
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full mb-5 lg:mb-5 rounded-none py-5 lg:py-7"
                  required
                />

                <div className="flex justify-between">
                  <p className="text-red-500 font-semibold"> {error} </p>

                  <p
                    onClick={forgetPasswordHandle}
                    className="text-blue-600 font-semibold mb-5 lg:mb-10 text-end cursor-pointer"
                  >
                    Forget password?
                  </p>
                </div>

                <button className="Sign-Up-Button font-bold text-white mb-5">
                  Login
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

export default Login;
