import React, { useState } from "react";
import { toast } from "react-hot-toast";


const ImageModal = () => {

  const [img, setImg] = useState();

  const handleImg = (e) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("image", img);
    const url =
      "https://api.imgbb.com/1/upload?key=361db61aaf2e5a08fc416c3257898005";

    fetch(url, {
      method: "POST",
      body: formData
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

         <button
            type="button"
            className="absolute top-48 mr-40 focus:outline-none mx-2 text-blue-600 hover:text-blue-700 w-6 h-6 ml-48"
          >
            <label htmlFor="image">
              <input
              onChange={handleImg}
                accept="image/*"
                type="file"
                name="image"
                id="image"
                className="hidden"
              />

              <i class="fa-solid fa-image text-4xl"></i>
            </label>

          </button>
          

          {/* avatar */}

          <div className="flex justify-center ">

            <div className="avatar">

              <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

                <img src="img" alt=""/>

              </div>

            </div>

          </div>
         </div>

         <div className="modal-action">

    <label htmlFor="my-modal-3"  type="submit" className="btn bg-blue-500">Post</label>

       <label htmlFor="my-modal-3" className="btn bg-red-500">Cancel</label>
      
     </div>

    </div>
         
      </form>

    </div>
  );
};

export default ImageModal;
