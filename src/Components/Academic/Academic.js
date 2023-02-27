import React from "react";
import "./Accademic.css";
import image from '../../assats/academy-class.png'

const Academic = () => {
  return (
    <div>
      {/* headline */}

      <div className="">

        <h1 className="w-full text-3xl lg:text-5xl font-extrabold text-center mt-10 mb-2">
          Academic
        </h1>

        <p className="text-2xl font-semibold text-center text-color mb-10">
          Sub heading here
        </p>

      </div>

      {/* corse sub heading card */}

      <div className="grid grid-cols-1 lg:grid-cols-3 mx-3 lg:mx-14 md:mx-10 mb-5 gap-10 lg:gap-24 mt-5">

        <div className="card card-compact bg-base-100 shadow-xl p-0">

          <figure>
            <img
              src={image}
              alt="Shoes"
              className="w-full"
            />
          </figure>

          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Class 1-4</h2>
             
             <div className="flex justify-around">
                
                 <div className="font-semibold">
                    <p>10,000+ Free Videos</p>
                    <p>Live Class</p>
                 </div>
                 
                 <div className="font-semibold">
                   <p>500 Subject</p>
                   <p className="text-center">MCQ Test</p>
                 </div>

             </div>

             <hr className="hr-tag" />
            
            <div className="card-actions justify-center py-2 text-lg">

               <button className="see-details font-bold">See Details</button>
               
            </div>

          </div>

        </div>

        <div className="card card-compact bg-base-100 shadow-xl p-0">

          <figure>
            <img
              src={image}
              alt="Shoes"
              className="w-full"
            />
          </figure>

          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Class 1-4</h2>
             
             <div className="flex justify-around">
                
                 <div className="font-semibold">
                    <p>10,000+ Free Videos</p>
                    <p>Live Class</p>
                 </div>
                 
                 <div className="font-semibold">
                   <p>500 Subject</p>
                   <p className="text-center">MCQ Test</p>
                 </div>

             </div>

             <hr className="hr-tag" />
            
            <div className="card-actions justify-center py-2 text-lg">

               <button className="see-details font-bold">See Details</button>
               
            </div>

          </div>

        </div>
        <div className="card card-compact bg-base-100 shadow-xl p-0">

          <figure>
            <img
              src={image}
              alt="Shoes"
              className="w-full"
            />
          </figure>

          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Class 1-4</h2>
             
             <div className="flex justify-around">
                
                 <div className="font-semibold">
                    <p>10,000+ Free Videos</p>
                    <p>Live Class</p>
                 </div>
                 
                 <div className="font-semibold">
                   <p>500 Subject</p>
                   <p className="text-center">MCQ Test</p>
                 </div>

             </div>

             <hr className="hr-tag" />
            
            <div className="card-actions justify-center py-2 text-lg">

               <button className="see-details font-bold">See Details</button>
               
            </div>

          </div>

        </div>


      </div>


    </div>
  );
};

export default Academic;
