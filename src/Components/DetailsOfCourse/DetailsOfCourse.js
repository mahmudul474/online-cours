import React from 'react';
import DetailsCardOfCourse from '../DetailsCardOfCourse/DetailsCardOfCourse';
import DetailsTextOfCourse from '../DetailsTextOfCourse/DetailsTextOfCourse';

const DetailsOfCourse = () => {

  return (

    <div className='mx-5 lg:mx-16'>

      {/* grid  */}
         
         <div className='grid grid-cols-1 lg:grid-cols-2'>
              
               <div>
                   
                   <DetailsTextOfCourse/>

               </div> 

               <div>

                  <DetailsCardOfCourse/>

               </div>

         </div>

    </div>

  );

};

export default DetailsOfCourse;