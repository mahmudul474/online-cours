import React from "react";
import { Link } from "react-router-dom";

const AcademicMap = ({ academicData }) => {
  const { classes, id, videoCount, subjectCount, courseImg } = academicData;

  return (
    <div className="card card-compact bg-base-100 shadow-xl p-0">
      <figure>
        <img src={courseImg} alt="Shoes" className="w-full" />
      </figure>

      <div className="card-body">
        <h2 className="text-center text-2xl font-bold">Class {classes}</h2>

        <div className="flex justify-around">
          <div className="font-semibold">
            <p>{videoCount} + Free Videos</p>

            <p>Live Class</p>
          </div>

          <div className="font-semibold">
            <p>{subjectCount} Subject</p>

            <p className="text-center">MCQ Test</p>
          </div>
        </div>

        <hr className="hr-tag" />

        <div className="card-actions justify-center py-2 text-lg">
          <Link to="/academyDetails">
            <button className="see-details font-bold">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AcademicMap;
