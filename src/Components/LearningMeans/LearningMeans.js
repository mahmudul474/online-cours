import React from "react";
import "./LearningMeans.css";

const LearningMeans = () => {
  return (
    <div className="LearningBackground-color mx-3 lg:mx-6 mt-10 lg:mt-24 mb-10 text-center py-3 px-8 pb-12">
      {/* headline */}

      <div className="mt-0 lg:mt-10  p-5 lg:p-24">
        <h1 className=" text-3xl lg:text-5xl font-bold text-center mb-2 -mt-0 lg:-mt-24">
          Learning Means A Lot
        </h1>

        <p className="text-xl lg:text-3xl mt-3 font-semibold text-center mb-10">
          Select your topic from our library
        </p>
      </div>

      {/* library set */}

      <div className="library-bg -mt-12">

      {/* flex-none lg:flex justify-between */}

        <div className="grid grid-cols-1 gap-2 lg:gap-4 lg:grid-cols-5 p-8 ">

          <button className="font-semibold text-xl library-button mb-3 lg:mb-0">Class 1-2</button>

          <button className="font-semibold text-xl library-button mb-3 lg:mb-0">Admission</button>

          <button className="font-semibold text-xl library-button mb-3 lg:mb-0">Job Exam</button>

          <button className="font-semibold text-xl library-button mb-3 lg:mb-0">Online Batch</button>

          <button className="font-semibold text-xl library-button mb-2 lg:mb-0">Skill</button>


        </div>

      </div>

    </div>
  );
};

export default LearningMeans;
