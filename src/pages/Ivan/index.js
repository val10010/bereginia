import React, { lazy } from 'react';

import FAQ from './components/FAQ';
import Plans from './components/Plans';
import Header from './components/Header';
import Awards from './components/Awards';
import Reviews from './components/Reviews';
import AboutCourse from './components/AboutCourse';
import CourseSteps from './components/CourseSteps';
import AboutServices from './components/AboutServices';
import AboutConsultation from './components/AboutConsultation';
const Footer = lazy(() => import('Components/Footer'));

import style from  './style.scss';

const Home = () => {
    return (
        <div className={style.main}>
            <Header/>
            <Awards/>
            <AboutServices/>
            <AboutConsultation/>
            <AboutCourse/>
            <Plans/>
            <CourseSteps/>
            <Reviews/>
            <FAQ/>
            <Footer email="naturalmedical96@gmail.com" phone="+380 67 484 93 08"/>
        </div>
    );
};

export default Home;
