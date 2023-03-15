import React, { useEffect, useState } from "react";
import avatar from "../../assats/avatar.png";
import ImageModal from "./ImageModal";
import "./ProfileSetting.css";
import { useContext } from "react";

import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import useGetUserInfo from "../../Hooks/Custom-Hook/useGetUserInfo";
import { toast } from "react-hot-toast";

const ProfileSetting = () => {
  const { user } = useContext(AuthContext);

  const handleOfUserInformation = (event) => {
    event.preventDefault();

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
    const presentDistrict = form.presentDistrict.value;
    const permanentPoliceStation = form.permanentPoliceStation.value;
    const permanentPostalCode = form.permanentPostalCode.value;
    const permanentDivision = form.permanentDivision.value;
    const permanentAddress = form.permanentAddress.value;
    const permanentDistrict = form.permanentDistrict.value;
    const presentPoliceStation = form.presentPoliceStation.value;
    const presentPostalCode = form.presentPostalCode.value;
    const presentDivision = form.presentDivision.value;
    const presentAddress = form.presentAddress.value;

    const info = {
      name: profileName,
      phonNumber: mobileNumber,
      displayEmail: email,

      certificateNumber,
      institution,
      group,
      result,
      passYear,
      fatherName,
      motherName,
      fatherOccupation,
      birthPlace,
      bloodGroup,
      aboutYourself,
      permanentDistrict,
      permanentPoliceStation,
      permanentPostalCode,
      permanentDivision,
      permanentAddress,
      presentDistrict,
      presentPoliceStation,
      presentPostalCode,
      presentDivision,
      presentAddress,
    };

    fetch(`http://localhost:5000/user/${user?.email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("profile update succesfuly", 5000);
      });
  };

  const { isLoading, data, refetch } = useGetUserInfo(user?.email);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data.phonNumber);

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
                  {data?.photoURL ? (
                    <img src={data?.photoURL} alt="" />
                  ) : (
                    <img
                      src=" https://i.ibb.co/Hq2pL5h/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy.jpg"
                      alt=""
                    />
                  )}
                </div>

                {/* The button to open modal */}

                <div className=" absolute mt-2 ml-20 mb-4  px-2 ">
                  <label htmlFor="my-modal-3">
                    <i class="fa-solid fa-camera text-blue-600 text-xl bg-slate-300 px-2 py-1 rounded-full"></i>
                  </label>
                </div>

                <ImageModal
                  data={data}
                  handleOfUserInformation={handleOfUserInformation}
                />
              </div>

              <div className="text-center mt-5">
                <div>
                  <p className="text-2xl font-bold"> {data?.name} </p>

                  <p> aminurfahim@gmail.com </p>
                </div>
              </div>

              <div className="ml-10 mt-8">
                <div>
                  <p className="font-semibold mb-2">
                    <span>
                      <i class="fa-solid fa-eye"></i>
                    </span>{" "}
                    View Profile{" "}
                  </p>

                  <p className="font-semibold mb-2">
                    <span>
                      <i class="fa-brands fa-youtube"></i>
                    </span>{" "}
                    My Course
                  </p>

                  <p className="font-semibold mb-2">
                    <span>
                      <i class="fa-solid fa-user"></i>
                    </span>{" "}
                    Profile{" "}
                  </p>

                  <p className="font-semibold mb-2">
                    <span>
                      <i class="fa-solid fa-bell"></i>
                    </span>{" "}
                    Notification
                  </p>

                  <p className="font-semibold mb-2">
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
          {data?.name ? (
            <input
              required
              type="text"
              name="profileName"
              defaultValue={data?.name}
              className="input input-bordered w-full mb-5"
            />
          ) : (
            <input
              type="text"
              name="profileName"
              placeholder="Profile Name"
              className="input input-bordered w-full mb-5"
            />
          )}

          {data?.phonNumber ? (
            <input
              type="text"
              name="mobileNumber"
              defaultValue={data?.phonNumber}
              className="input input-bordered w-full mb-5"
            />
          ) : (
            <input
              placeholder="Phone-Number"
              type="text"
              name="mobileNumber"
              className="input input-bordered w-full mb-5"
            />
          )}
          {data?.displayEmail ? (
            <input
              type="text"
              name="email"
              defaultValue={data?.displayEmail}
              className="input input-bordered w-full"
            />
          ) : (
            <input
              type="text"
              required
              name="email"
              defaultValue={user?.email}
              className="input input-bordered w-full"
            />
          )}

          {/* academic info  */}

          <p className="text-2xl font-bold mt-10 mb-5">Academic Information</p>

          {data?.certificateNumber ? (
            <input
              type="text"
              name="certificateNumber"
              defaultValue={data?.certificateNumber}
              className="input input-bordered w-full mb-5"
            />
          ) : (
            <input
              type="text"
              name="certificateNumber"
              placeholder="Certificate Number"
              className="input input-bordered w-full mb-5"
            />
          )}

          {data?.institution ? (
            <input
              type="text"
              name="institution"
              defaultValue={data?.institution}
              className="input input-bordered w-full mb-5"
            />
          ) : (
            <input
              type="text"
              name="institution"
              placeholder="Institution"
              className="input input-bordered w-full mb-5"
            />
          )}

          {data?.group ? (
            <input
              type="text"
              name="group"
              defaultValue={data?.group}
              className="input input-bordered w-full mb-5"
            />
          ) : (
            <input
              type="text"
              name="group"
              placeholder="Group"
              className="input input-bordered w-full mb-5"
            />
          )}

          {/* input flex */}

          <div className="flex-none lg:flex ">
            {data?.result ? (
              <input
                type="text"
                name="result"
                defaultValue={data?.result}
                className="input input-bordered w-full mb-5 mr-0 lg:mr-2"
              />
            ) : (
              <input
                type="text"
                name="result"
                placeholder="Result"
                className="input input-bordered w-full mb-5 mr-0 lg:mr-2"
              />
            )}

            {data?.passYear ? (
              <input
                type="text"
                name="passYear"
                defaultValue={data?.passYear}
                className="input input-bordered w-full mb-5 ml-0 lg:ml-2"
              />
            ) : (
              <input
                type="text"
                name="passYear"
                placeholder="Pass Year"
                className="input input-bordered w-full mb-5 ml-0 lg:ml-2"
              />
            )}
          </div>

          {/* Personal Information */}

          <p className="text-2xl font-bold mt-10 mb-5"> Personal Information</p>

          <div>
            {data?.fatherName ? (
              <input
                name="fatherName"
                type="text"
                defaultValue={data?.fatherName}
                placeholder="Father’s Name"
                className="input input-bordered w-full mb-5"
              />
            ) : (
              <input
                type="text"
                name="fatherName"
                placeholder="Father’s Name"
                className="input input-bordered w-full mb-5"
              />
            )}

            {data?.motherName ? (
              <input
                type="text"
                name="motherName"
                defaultValue={data?.motherName}
                className="input input-bordered w-full mb-5"
              />
            ) : (
              <input
                type="text"
                name="motherName"
                placeholder="Mother’s Name"
                className="input input-bordered w-full mb-5"
              />
            )}

            {data?.fatherOccupation ? (
              <input
                type="text"
                defaultValue={data?.fatherOccupation}
                name="fatherOccupation"
                className="input input-bordered w-full mb-5"
              />
            ) : (
              <input
                type="text"
                name="fatherOccupation"
                placeholder="Father’s Occupation"
                className="input input-bordered w-full mb-5"
              />
            )}

            {data?.birthPlace ? (
              <input
                type="text"
                name="birthPlace"
                defaultValue={data?.birthPlace}
                className="input input-bordered w-full mb-5"
              />
            ) : (
              <input
                type="text"
                name="birthPlace"
                placeholder="Birth Place"
                className="input input-bordered w-full mb-5"
              />
            )}

            {data?.bloodGroup ? (
              <input
                type="text"
                defaultValue={data?.bloodGroup}
                name="bloodGroup"
                className="input input-bordered w-full mb-5"
              />
            ) : (
              <input
                type="text"
                name="bloodGroup"
                placeholder="Blood Group"
                className="input input-bordered w-full mb-5"
              />
            )}

            {data?.aboutYourself ? (
              <textarea
                name="aboutYourself"
                defaultValue={data?.aboutYourself}
                className="textarea textarea-bordered w-full h-28 lg:h-48 mb-5"
              ></textarea>
            ) : (
              <textarea
                name="aboutYourself"
                className="textarea textarea-bordered w-full h-28 lg:h-48 mb-5"
                placeholder="Tell us more about yourself"
              ></textarea>
            )}
          </div>

          {/* Permanent Address */}

          <p className="text-2xl font-bold mt-10 mb-5">Permanent Address</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {data?.permanentDistrict ? (
              <input
                type="text"
                name="permanentDistrict"
                defaultValue={data?.permanentDistrict}
                className="input input-bordered w-full mb-5"
              />
            ) : (
              <input
                type="text"
                name="permanentDistrict"
                placeholder="District"
                className="input input-bordered w-full mb-5"
              />
            )}

            {data?.permanentPoliceStation ? (
              <input
                type="text"
                name="permanentPoliceStation"
                defaultValue={data?.permanentPoliceStation}
                className="input input-bordered w-full mb-5"
              />
            ) : (
              <input
                type="text"
                name="permanentPoliceStation"
                placeholder="Police Station"
                className="input input-bordered w-full mb-5"
              />
            )}

            {data?.permanentPostalCode ? (
              <input
                type="text"
                name="permanentPostalCode"
                defaultValue={data?.permanentPostalCode}
                className="input input-bordered w-full mb-5"
              />
            ) : (
              <input
                type="text"
                name="permanentPostalCode"
                placeholder="Postal Code"
                className="input input-bordered w-full mb-5"
              />
            )}

            {data?.permanentDivision ? (
              <input
                type="text"
                name="permanentDivision"
                defaultValue={data?.permanentDivision}
                className="input input-bordered w-full mb-5"
              />
            ) : (
              <input
                type="text"
                name="permanentDivision"
                placeholder="Division"
                className="input input-bordered w-full mb-5"
              />
            )}
          </div>

          {data?.permanentAddress ? (
            <input
              type="text"
              name="permanentAddress"
              defaultValue={data?.permanentAddress}
              className="input input-bordered w-full mb-5 "
            />
          ) : (
            <input
              type="text"
              name="permanentAddress"
              placeholder="Address"
              className="input input-bordered w-full mb-5 "
            />
          )}

          {/* Present Address*/}

          <p className="text-2xl font-bold mt-10 mb-5">Present Address</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {data?.presentDistrict ? (
              <input
                type="text"
                name="presentDistrict"
                defaultValue={data?.presentDistrict}
                className="input input-bordered w-full mb-5"
              />
            ) : (
              <input
                type="text"
                name="presentDistrict"
                placeholder="District"
                className="input input-bordered w-full mb-5"
              />
            )}

            {data?.presentPoliceStation ? (
              <input
                type="text"
                name="presentPoliceStation"
                defaultValue={data?.presentPoliceStation}
                className="input input-bordered w-full mb-5"
              />
            ) : (
              <input
                type="text"
                name="presentPoliceStation"
                placeholder="Police Station"
                className="input input-bordered w-full mb-5"
              />
            )}

            {data?.presentPostalCode ? (
              <input
                type="text"
                name="presentPostalCode"
                defaultValue={data?.presentPostalCode}
                className="input input-bordered w-full mb-5"
              />
            ) : (
              <input
                type="text"
                name="presentPostalCode"
                placeholder="Postal Code"
                className="input input-bordered w-full mb-5"
              />
            )}

            {data?.presentDivision ? (
              <input
                type="text"
                name="presentDivision"
                defaultValue={data?.presentDivision}
                className="input input-bordered w-full mb-5"
              />
            ) : (
              <input
                type="text"
                name="presentDivision"
                placeholder="Division"
                className="input input-bordered w-full mb-5"
              />
            )}
          </div>

          {data?.presentAddress ? (
            <input
              type="text"
              name="presentAddress"
              defaultValue={data?.presentAddress}
              className="input input-bordered w-full mb-5 "
            />
          ) : (
            <input
              type="text"
              name="presentAddress"
              placeholder="Address"
              className="input input-bordered w-full mb-5 "
            />
          )}

          <div>
            <button type="submit" className="mb-5 lg:mb-10 button-update">
              Update{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetting;
