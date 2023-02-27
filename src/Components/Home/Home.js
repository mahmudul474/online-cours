import React from 'react';
import AcademicPages from '../../Pages/AcademicPages/AcademicPages';
import BookStorePages from '../../Pages/BookStorePages/BookStorePages';
import LearningMeansPages from '../../Pages/LearningMeansPages/LearningMeansPages';
import OnlineBatchPages from '../../Pages/OnlineBatchPages/OnlineBatchPages';
import PreparationforJobsPages from '../../Pages/PreparationForJobsPages/PreparationforJobsPages';
import QuestionBankPages from '../../Pages/QuestionBankPages/QuestionBankPages';
import UniversityTestAdmissionPages from '../../Pages/UniversityTestAdmissionPages/UniversityTestAdmissionPages';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {
  return (
    <div>
        <HeroSection></HeroSection>
        <AcademicPages></AcademicPages>
        <UniversityTestAdmissionPages/>
        <PreparationforJobsPages/>
        <OnlineBatchPages/>
        <BookStorePages/>
        <LearningMeansPages/>
        <QuestionBankPages></QuestionBankPages>
    </div>
  );
};

export default Home;