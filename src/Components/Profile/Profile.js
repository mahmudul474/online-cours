import React from "react";
import image from '../../assats/mathematics-word (2).jpg'

const Profile = () => {

  return (

    <div className="mx-5 lg:mx-16 mb-5">


       <div className="text-center mt-5 lg:mt-10 mb-5 lg:mb-16">

          <h1 className="text-2xl lg:text-4xl font-bold"> <span className="text-blue-500">Md. Kowsar Ahamed</span> Welcome to  Omar's Academy
          </h1>

       </div>


      {/* course card */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        <div className="card w-full lg:card-side bg-base-100 shadow-xl">

          <figure>
            <img
              src={image}
              alt="Album"
              className="w-96"
            />
          </figure>

          <div className="card-body">

            <h2 className="card-title">New album is released!</h2>

            <p>Click the button to listen on Spotiwhy app.</p>

            <div className="card-actions justify-end">

              <button className="btn btn-primary">Listen</button>

            </div>

          </div>

        </div>

        <div className="card w-full lg:card-side bg-base-100 shadow-xl">

          <figure>
            <img
              src={image}
              alt="Album"
              className="w-96"
            />
          </figure>

          <div className="card-body">

            <h2 className="card-title">New album is released!</h2>

            <p>Click the button to listen on Spotiwhy app.</p>

            <div className="card-actions justify-end">

              <button className="btn btn-primary">Listen</button>

            </div>

          </div>

        </div>

      </div>


    </div>

  );

};

export default Profile;
