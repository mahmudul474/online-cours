import React from "react";
import './DetailsCardOfCourse.css'
import image from '../../assats/Rectangle 4 (1).png'
import arow from '../../assats/Vector (6).png'
import books from "../../assats/book-store.png"


const DetailsCardOfCourse = () => {

  return (

    <div className="flex-none lg:flex justify-center">

      {/* components parents div */}

      <div>

        {/* course card */}

        <div className="mt-5 lg:mt-10 mb-5 lg:mb-10">

          <div className="card card-compact lg:w-96 bg-base-100 shadow-xl rounded-none">
            
            <figure>

              <img
                src={image}
                alt="imageName"
                className="details-image"
              />

            </figure>

            <div className="card-body">

              <div className="flex justify-between items-center">

                  <h2 className="font-semibold text-xl">Omar’s Basic Math</h2>

                  <p className="font-semibold text-blue-600 ml-5 text-xl">300taka</p>

                  <button className="btn-ghost p-2 text-2xl"> <i class="fa-sharp fa-regular fa-heart"></i> </button>

              </div>

              
             {/* buy now button */}

              <div className="card-actions justify-center">

                <button className="buy-now-button mt-5 mb-5">Buy Now</button>

              </div>

                  <hr className="hr-tag text-gray-200" />

                  {/* details */}

              <div className="grid grid-cols-2 mx-5">
                  
                  <div>

                      <ul>
                          
                          <li className="flex items-center mb-2"><img src={arow} alt="" className="mr-2" /> <span>Free Videos</span> </li>
                          <li className="flex items-center mb-2"><img src={arow} alt="" className="mr-2" /> <span>Free Videos</span> </li>
                         
                      </ul>                     
 
                  </div>


                  <div>

                  <ul>
                          
                          <li className="flex items-center mb-2"><img src={arow} alt="" className="mr-2" /> <span>Free Videos</span> </li>
                          <li className="flex items-center mb-2"><img src={arow} alt="" className="mr-2" /> <span>Free Videos</span> </li>
                         
                      </ul> 

                  </div>

              </div>


            </div>

          </div>

        </div>

        {/* Omar's books */}

        <div>

        <div className="card card-compact lg:w-96 bg-base-100 shadow-xl rounded-none mb-5">
            
            <figure>

              <img
                src={books}
                alt="imageName"
                className="details-image"
              />

            </figure>

            <div className="card-body">

              <div className="flex justify-between items-center">

                  <h2 className="font-semibold text-xl">Omar’s Basic Math</h2>

                  <p className="font-semibold text-blue-600 ml-5 text-xl">500taka</p>


              </div>

              
             {/* buy now button */}

              <div className="card-actions justify-center">

                <button className="buy-now-button mt-5 mb-5">Know More</button>

              </div>

                  {/* details */}

              


            </div>

          </div>
           
        </div>

        {/* Omar's books */}

      </div>

    </div>
  );
};

export default DetailsCardOfCourse;
