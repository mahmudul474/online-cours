import React, { useState } from "react";
import { toast } from "react-hot-toast";

const ImageModal = ({ setImg, img, handleOfUserInformation }) => {
  const handleImg = (e) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("image", img);
    const url =
      "https://api.imgbb.com/1/upload?key=361db61aaf2e5a08fc416c3257898005";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const img = imgData.data.url;
        setImg(img);
      })
      .catch((e) => {
        toast.error("internet  problem");
      });
  };

  return (
    <div>
      {/* Put this part before </body> tag */}

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />

      <form className="modal ">
        <div className="modal-box relative">
          <div className="flex justify-center relative items-center">
            {/* avatar */}

            <div className="flex justify-center ">
              <div className="avatar">
                <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {img ? (
                    <img src={img} alt="" />
                  ) : (
                    <img
                      src="https://i.ibb.co/ypNYFVK/istockphoto-931643150-612x612.jpg"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="modal-action flex items-center ">
            {img ? (
              <label htmlFor="my-modal-3" className="btn bg-blue-500">
                Post
              </label>
            ) : (
              <button type="button">
                <label htmlFor="image">
                  <input
                    onChange={handleImg}
                    accept="image/*"
                    type="file"
                    name="image"
                    id="image"
                    className="hidden"
                  />

                  <h1 className="bg-blue-600 cursor-pointer text-white rounded-lg w-34  p-3">
                    Upload
                  </h1>
                </label>
              </button>
            )}

            <label
              htmlFor="my-modal-3"
              className="btn bg-red-500"
              onClick={() => setImg("")}
            >
              Cancel
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ImageModal;
