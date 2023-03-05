import React from 'react';

const NavfavouriteIcon = () => {

  return (

    <div className="dropdown dropdown-end">

    <label tabIndex={0} className="btn btn-ghost btn-circle ml-6">

    <div className="indicator">

    <i className="fa-regular fa-heart text-lg"></i>

     <span className="badge badge-sm indicator-item">2</span>

   </div>

   </label>

 <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">

   <div className="card-body">

     <span className="font-bold text-lg">2 Items</span>
     
     <span className="text-info">Subtotal: $999</span>

     <div className="card-actions">

       <button className="btn btn-primary btn-block">View cart</button>

     </div>

   </div>

 </div>

</div>

  );

};

export default NavfavouriteIcon;