import React, { lazy } from 'react';

import FAQ from './components/FAQ';
import Team from './components/Team';
import Header from './components/Header';
import { Plans } from 'Main/devlink/Plans';
import Reviews from './components/Reviews';
import Callback from './components/Callback';
import Guarantee from './components/Guarantee';
import Feedbacks from './components/Feedbacks';
import CourseFor from './components/CourseFor';
import TrialLesson from './components/TrialLesson';
import AboutCourse from './components/AboutCourse';
import CourseSteps from './components/CourseSteps';
import VideoReviews from './components/VideoReviews';
const Footer = lazy(() => import('Components/Footer'));

import style from  './style.scss';

const Course = () => {

    return (
        <>
            <div className={style.main}>
                <Header/>
                <AboutCourse/>
                <Guarantee/>
                <CourseFor/>
                <CourseSteps/>
                <Reviews/>
                <Team/>
                <Plans/>
                <VideoReviews/>
                <Feedbacks/>
                <FAQ/>
                <TrialLesson/>
                <Callback/>
                <Footer email="naturalmedical96@gmail.com" phone="+380 67 484 93 08"/>
            </div>
        </>
    );
};

export default Course;
