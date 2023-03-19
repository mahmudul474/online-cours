import { createBrowserRouter } from "react-router-dom";
import ShopingCart from "../../Cards/ShopingCart/ShopingCart";
import AcademyDetails from "../../Components/AcademyDetails/AcademyDetails";
import Login from "../../Components/Login/Login";
import Profile from "../../Components/Profile/Profile";
import ProfileSetting from "../../Components/ProfileSetting/ProfileSetting";
import SignUp from "../../Components/SignUp/SignUp";
import Main from "../../Layout/Main/Main";
import HomePages from "../../Pages/HomePages/HomePages";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePages></HomePages>,
      },

      {
        path: "/profile",
        element: <Profile></Profile>,
      },

      {
        path: "/profileSetting",
        element: <ProfileSetting></ProfileSetting>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },

      {
        path: "/academyDetails",
        element: (
          <PrivateRoute>
           
            <AcademyDetails /> 
          </PrivateRoute>
        ),
      },

       {
        path:"/shop",
        element:<ShopingCart></ShopingCart>

       }



    ],
  },
]);

export default routers;
