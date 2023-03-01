import React from "react";
import avatar from '../../assats/avatar.png'
import "./ProfileSetting.css";

const ProfileSetting = () => {
  return (
    <div className="flex-none lg:flex mx-3 lg:mx-20 mb:mx-6">
      {/* profile view  */}

      <div>

        <div className="card w-full lg:w-96 bg-base-100 shadow-md border">
          <div className="card-body">

            {/* avatar */}

            <div>

              <div className="avatar flex justify-center">

                <div className="w-24 rounded-full">

                  <img src={avatar} />


                </div>

              </div>

              <div className="text-center mt-5">

                 <div>
                    <p className="text-2xl font-bold">Aminur Rahman</p>
                    <p>aminurfahim@gmail.com</p>
                 </div>

              </div>

              <div className="ml-10 mt-8">

                 <div>
                    <p className="font-semibold mb-2"> <span><i class="fa-solid fa-eye"></i></span> View Profile </p>

                    <p className="font-semibold mb-2"> <span><i class="fa-brands fa-youtube"></i></span> My Course</p>

                    <p className="font-semibold mb-2"> <span><i class="fa-solid fa-user"></i></span> Profile </p>
                     
                     <p className="font-semibold mb-2"> <span><i class="fa-solid fa-bell"></i></span> Notification</p>

                     <p className="font-semibold mb-2"> <span><i class="fa-solid fa-gear"></i></span> Privacy </p>

                 </div>

              </div>
              
            </div>

            <div className="card-actions justify-start ml-8 mt-16">

                <button className="text-red-400"><i class="fa-solid fa-right-from-bracket"></i> <span className="font-bold">Logout</span> </button>
              
            </div>

          </div>
        </div>
      </div>


      {/* info update */}

      <div className="w-full ml-0 lg:ml-10 mt-10 lg:mt-0">
        <from>
          <input
            type="text"
            placeholder="Profile Name"
            className="input input-bordered w-full mb-5"
          />

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mb-5"
          />

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />

          {/* academic info  */}

          <p className="text-2xl font-bold mt-10 mb-5">Academic Information</p>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mb-5"
          />

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mb-5"
          />

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mb-5"
          />

          {/* input flex */}

          <div className="flex-none lg:flex ">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mb-5 mr-0 lg:mr-2"
            />

            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mb-5 ml-0 lg:ml-2"
            />
          </div>

          {/* Personal Information */}

          <p className="text-2xl font-bold mt-10 mb-5"> Personal Information</p>

          <div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mb-5"
            />

            <textarea
              className="textarea textarea-bordered w-full h-28 lg:h-48 mb-5"
              placeholder="Bio"
            ></textarea>
          </div>

          {/* Present Address*/}

          <p className="text-2xl font-bold mt-10 mb-5">Present Address</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mb-5"
            />

            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mb-5"
            />
          </div>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mb-5 "
          />

          <textarea
            className="textarea textarea-bordered w-full h-28 lg:h-48 mb-5"
            placeholder="Bio"
          ></textarea>

          <div>
            <button className="mb-5 lg:mb-10 button-update"> Update </button>
          </div>
        </from>
      </div>
    </div>
  );
};

export default ProfileSetting;
