import React from 'react';
import './QuestionBank.css'

const QuestionBank = () => {
  return (
    <div className='mb-10'>

        <div className="mt-10 lg:mt-16">

         <h1 className="w-full text-3xl lg:text-5xl font-bold text-center mb-5">

             Question Bank

         </h1>

        </div>

        <div className='text-center'>

           <h1 className='text-xl font-semibold'>

            Various including academic, job recruitment and admission tests <br /> Previous question papers of the exam are included <br /> Suggestion and model questions

          </h1>

           <button className='question-button text-xl mt-4'>

               <i class="fa-solid fa-greater-than"></i>

           </button>

        </div>

    </div>
  );
};

export default QuestionBank;