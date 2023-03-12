import React, { useEffect, useState } from "react";
import "./Accademic.css";
import image from "../../assats/academy-class.png";
import AcademicMap from "../AcademicMap/AcademicMap";

const Academic = () => {
  ///hello user
  const [academices, setAcademices] = useState([]);

  useEffect(() => {
    fetch("Academic.json")
      .then((res) => res.json())
      .then((data) => setAcademices(data))
      .catch((e) => console.error(e));
  }, []);

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
        {academices.map((academic) => (
          <AcademicMap key={academic.id} academicData={academic}></AcademicMap>
        ))}
      </div>
    </div>
  );
};

export default Academic;
