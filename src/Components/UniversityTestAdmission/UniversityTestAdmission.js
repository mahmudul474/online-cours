import React from "react";
import image from '../../assats/Rectangle 4 (1).png'
import image2 from '../../assats/mathematics-word (2).jpg'

const UniversityTestAdmission = () => {
  return (
    <div>
      {/* headline */}

      <div className="mt-10 lg:mt-24">
        <h1 className="w-full text-3xl lg:text-5xl font-extrabold text-center mb-10 lg:mb-16">
          University Test Admission
        </h1>
      </div>

      {/* course card*/}

      <div className="grid grid-cols-1 lg:grid-cols-3 mx-3 lg:mx-14 md:mx-10 mb-5 gap-10 lg:gap-24 mt-5">

        <div className="card card-compact bg-base-100 shadow-xl">

          <figure>
            <img
              src={image}
              alt=""
              className="w-full"
            />
          </figure>

          <div className="card-body">

            <div className="flex justify-evenly items-center">

              <p className="text-2xl font-semibold text-red-500"> Omar’s Basic Math </p>

              <p className="font-semibold text-emerald-600"> Free </p>

            </div>
 
            <div className="flex justify-between text-center mt-3 font-semibold">
              <p> <i class="fa-regular fa-clock"></i> 100+ Videos</p>
              <p> <i class="fa-regular fa-clock"></i> 50+ Chapter</p>
            </div>
             


            <hr className="hr-tag" />
            
            <div className="card-actions justify-evenly py-2 text-lg">

               <button className="see-details font-bold">See Details</button>

               <button className="see-details font-bold">Add To Card</button>
               
            </div>

          </div>

        </div>
        <div className="card card-compact bg-base-100 shadow-xl">

          <figure>
            <img
              src={image2}
              alt=""
              className="w-full"
            />
          </figure>

          <div className="card-body">

            <div className="flex justify-evenly items-center">

              <p className="text-2xl font-semibold text-red-500"> Omar’s Basic Math </p>

              <p className="font-semibold text-emerald-600"> 199 taka </p>

            </div>
 
            <div className="flex justify-between text-center mt-3 font-semibold">
              <p> <i class="fa-regular fa-clock"></i> 100+ Videos</p>
              <p> <i class="fa-regular fa-clock"></i> 50+ Chapter</p>
            </div>
             


            <hr className="hr-tag" />
            
            <div className="card-actions justify-evenly py-2 text-lg">

               <button className="see-details font-bold">See Details</button>

               <button className="see-details font-bold">Add To Card</button>
               
            </div>

          </div>

        </div>
        <div className="card card-compact bg-base-100 shadow-xl">

          <figure>
            <img
              src={image}
              alt=""
              className="w-full"
            />
          </figure>

          <div className="card-body">

            <div className="flex justify-evenly items-center">

              <p className="text-2xl font-semibold text-red-500"> Omar’s Basic Math </p>

              <p className="font-semibold text-emerald-600"> 399 taka </p>

            </div>
 
            <div className="flex justify-between text-center mt-3 font-semibold">
              <p> <i class="fa-regular fa-clock"></i> 100+ Videos</p>
              <p> <i class="fa-regular fa-clock"></i> 50+ Chapter</p>
            </div>
             


            <hr className="hr-tag" />
            
            <div className="card-actions justify-evenly py-2 text-lg">

               <button className="see-details font-bold">See Details</button>

               <button className="see-details font-bold">Add To Card</button>
               
            </div>

          </div>

        </div>


      </div>
    </div>
  );
};

export default UniversityTestAdmission;
