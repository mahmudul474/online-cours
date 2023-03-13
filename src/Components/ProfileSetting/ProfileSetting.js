import React from "react";
import avatar from '../../assats/avatar.png'
import ImageModal from "./ImageModal";
import "./ProfileSetting.css";

const ProfileSetting = () => {
     
  const handleOfUserInformation = (event) => {
     
    event.preventDefault()

   const form = event.target;

   const profileName = form.profileName.value;
   const mobileNumber = form.mobileNumber.value;
   const email = form.email.value;
   const certificateNumber = form.certificateNumber.value;
   const institution = form.institution.value;
   const group = form.group.value;
   const result = form.result.value;
   const passYear = form.passYear.value;
   const fatherName = form.fatherName.value;
   const motherName = form.motherName.value;
   const fatherOccupation = form.fatherOccupation.value;
   const birthPlace = form.birthPlace.value;
   const bloodGroup = form.bloodGroup.value;
   const aboutYourself = form.aboutYourself.value;
   const permanentDistrict = form.presentDistrict.value;
   const permanentPoliceStation = form.permanentPoliceStation.value;
   const permanentPostalCode = form.permanentPostalCode.value;
   const permanentDivision = form.permanentDivision.value;
   const permanentAddress = form.permanentAddress.value;
   const presentDistrict = form.permanentDistrict.value;
   const presentPoliceStation = form.presentPoliceStation.value;
   const presentPostalCode = form.presentPostalCode.value;
   const presentDivision = form.presentDivision.value;
   const presentAddress = form.presentAddress.value;
     
    console.log(profileName, mobileNumber, email, certificateNumber, institution, group, result, passYear, fatherName, motherName, fatherOccupation, birthPlace, bloodGroup, aboutYourself, permanentDistrict, permanentPoliceStation, permanentPostalCode, permanentDivision, permanentAddress,presentDistrict, presentPoliceStation, presentPostalCode, presentDivision, presentAddress)
  
  }
   

  return (
    <div className="flex-none lg:flex mx-3 lg:mx-20 mb:mx-6">
      {/* profile view  */}

      <div>

        <div className="card w-full lg:w-96 bg-base-100 shadow-md border">

          <div className="card-body">
            {/* avatar */}

            <div>

              <div className="avatar flex justify-center">

                <div className="w-24 rounded-full relative">

                  <img src={avatar} alt=""/>

                </div>

                {/* The button to open modal */}

                <div className=" absolute mt-2 ml-20 mb-4  px-2 ">
                      
                      <label htmlFor="my-modal-3" >
   
                           <i class="fa-solid fa-camera text-blue-600 text-xl bg-slate-300 px-2 py-1 rounded-full"></i>
   
                      </label> 
   
                    </div> 
   

                  <ImageModal/>          
   
              </div>

              <div className="text-center mt-5">

                <div>

                  <p className="text-2xl font-bold"> Aminur Rahman </p>
                  
                  <p> aminurfahim@gmail.com </p>

                </div>

              </div>

              <div className="ml-10 mt-8">
                <div>
                  <p className="font-semibold mb-2">
                    {" "}
                    <span>
                      <i class="fa-solid fa-eye"></i>
                    </span>{" "}
                    View Profile{" "}
                  </p>

                  <p className="font-semibold mb-2">
                    {" "}
                    <span>
                      <i class="fa-brands fa-youtube"></i>
                    </span>{" "}
                    My Course
                  </p>

                  <p className="font-semibold mb-2">
                    {" "}
                    <span>
                      <i class="fa-solid fa-user"></i>
                    </span>{" "}
                    Profile{" "}
                  </p>

                  <p className="font-semibold mb-2">
                    {" "}
                    <span>
                      <i class="fa-solid fa-bell"></i>
                    </span>{" "}
                    Notification
                  </p>

                  <p className="font-semibold mb-2">
                    {" "}
                    <span>
                      <i class="fa-solid fa-gear"></i>
                    </span>{" "}
                    Privacy{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="card-actions justify-start ml-8 mt-16">
              <button className="text-red-400">
                <i class="fa-solid fa-right-from-bracket"></i>{" "}
                <span className="font-bold">Logout</span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* info update */}

      <div className="w-full ml-0 lg:ml-10 mt-10 lg:mt-0">

        <form onSubmit={handleOfUserInformation}>

          <input
            type="text"
            name="profileName"
            placeholder="Profile Name"
            className="input input-bordered w-full mb-5"
          />

          <input
            type="text"
            name="mobileNumber"
            placeholder="Registered Mobile Number"
            className="input input-bordered w-full mb-5"
          />

          <input
            type="text"
            name="email"
            placeholder="E-mail Address*"
            className="input input-bordered w-full"
          />

          {/* academic info  */}

          <p className="text-2xl font-bold mt-10 mb-5">Academic Information</p>

          <input
            type="text"
            name="certificateNumber"
            placeholder="Certificate Number"
            className="input input-bordered w-full mb-5"
          />

          <input
            type="text"
            name="institution"
            placeholder="Institution"
            className="input input-bordered w-full mb-5"
          />

          <input
            type="text"
            name="group"
            placeholder="Group"
            className="input input-bordered w-full mb-5"
          />

          {/* input flex */}

          <div className="flex-none lg:flex ">

            <input
              type="text"
              name="result"
              placeholder="Result"
              className="input input-bordered w-full mb-5 mr-0 lg:mr-2"
            />

            <input
              type="text"
              name="passYear"
              placeholder="Pass Year"
              className="input input-bordered w-full mb-5 ml-0 lg:ml-2"
            />

          </div>

          {/* Personal Information */}

          <p className="text-2xl font-bold mt-10 mb-5"> Personal Information</p>

          <div>

            <input
              type="text"
              name="fatherName"
              placeholder="Father’s Name"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              name="motherName"
              placeholder="Mother’s Name"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              name="fatherOccupation"
              placeholder="Father’s Occupation"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              name="birthPlace"
              placeholder="Birth Place"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              name="bloodGroup"
              placeholder="Blood Group"
              className="input input-bordered w-full mb-5"
            />

            <textarea
              name="aboutYourself"
              className="textarea textarea-bordered w-full h-28 lg:h-48 mb-5"
              placeholder="Tell us more about yourself"
            ></textarea>

          </div>

          {/* Permanent Address */}

          <p className="text-2xl font-bold mt-10 mb-5">Permanent Address</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            <input
              type="text"
              name="permanentDistrict"
              placeholder="District"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              name="permanentPoliceStation"
              placeholder="Police Station"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              name="permanentPostalCode"
              placeholder="Postal Code"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              name="permanentDivision"
              placeholder="Division"
              className="input input-bordered w-full mb-5"
            />

          </div>

          <input
            type="text"
            name="permanentAddress"
            placeholder="Address"
            className="input input-bordered w-full mb-5 "
          />

          {/* Present Address*/}

          <p className="text-2xl font-bold mt-10 mb-5">Present Address</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            <input
              type="text"
              name="presentDistrict"
              placeholder="District"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              name="presentPoliceStation"
              placeholder="Police Station"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              name="presentPostalCode"
              placeholder="Postal Code"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              name="presentDivision"
              placeholder="Division"
              className="input input-bordered w-full mb-5"
            />

          </div>

          <input
            type="text"
            name="presentAddress"
            placeholder="Address"
            className="input input-bordered w-full mb-5 "
          />

          <div>
            <button type="submit" className="mb-5 lg:mb-10 button-update"> Update </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default ProfileSetting;
