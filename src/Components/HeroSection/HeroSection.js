import React from "react";
import './HeroSection.css'
import heroImg from '../../assats/illustration.png'

const HeroSection = () => {

  return (

    <div className="heroBg w-full h-full">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/* Text-content */}

        <div className="flex justify-center items-center">

          <div>

            <h1 className="text-2xl lg:text-5xl md:text-3xl text-set font-bold text-center lg:text-start">On the way to knowledge and <br /> purification convince!</h1>


           <div className="text-center lg:text-start">

           <button className="watchVideo-button mt-8">
            Watch Video
           </button>

          </div>

          </div>

        </div>

        {/* image-content */}

        <div className="flex justify-center items-center">

            <div >
               <img src={heroImg} alt="" className="mt-8 w-96" />
            </div>
            

        </div>

      </div>

    </div>
  );

};

export default HeroSection;
