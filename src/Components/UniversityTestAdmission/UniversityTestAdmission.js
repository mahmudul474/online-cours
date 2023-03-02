import React, { useEffect, useState } from "react";
import image from '../../assats/Rectangle 4 (1).png'
import image2 from '../../assats/mathematics-word (2).jpg'
import UniversityTestAdmissionMap from "../UniversityTestAdmissionMap/UniversityTestAdmissionMap";

const UniversityTestAdmission = () => {
   
  const [universityTestes, setUniversityTestes] = useState([])

  useEffect(() => {

    fetch('UniversityTestAdmission.json')
     .then(res => res.json())
     .then(data => setUniversityTestes(data))
     .catch(e => console.error(e))

  },[])

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

         {
           universityTestes.map(universityTest => <UniversityTestAdmissionMap
             key={universityTest.id} universityTestData = {universityTest}
           ></UniversityTestAdmissionMap>)
         }



      </div>
    </div>
  );
};

export default UniversityTestAdmission;
