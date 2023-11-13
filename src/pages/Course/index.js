import React, { lazy } from 'react';

import FAQ from './components/FAQ';
import Plans from './components/Plans';
import Header from './components/Header';
import CourseSteps from './components/CourseSteps';
const Footer = lazy(() => import('Components/Footer'));
import style from './style.scss';
import Reviews from './components/Reviews';
import AboutCourse from './components/AboutCourse';
import Provide from './components/Provide';
import AboutServices from './components/AboutServices';

const Course = () => {
    return (
        <div className={style.main}>
            <Header />
            <AboutCourse />
            <Provide />
            <AboutServices />
            <CourseSteps/>
            <Reviews />
            <Plans/>
            <FAQ/>
            <Footer email="naturalmedical96@gmail.com" phone="+380 67 484 93 08"/>
        </div>
    );
};

export default Course;
