import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assats/avatar.png';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';


const NavProfileAvatar = () => {

  const { user, logOut } = useContext(AuthContext);
   
  const logOutHandle = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };


  return (
    
    <div className="dropdown dropdown-end">

      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

        <div className="w-10 rounded-full">

          <img src={avatar} alt="" />

        </div>

      </label>

      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

        <li>

          <Link to='/profile' className="justify-between">

            Profile

            <span className="badge">New</span>

          </Link>

        </li>

        <li>

          <Link to='/profileSetting'>Settings</Link>

        </li>

        <li><button onClick={logOutHandle}>Logout</button></li>

      </ul>

    </div>

  );

};

export default NavProfileAvatar;