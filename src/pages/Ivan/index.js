import React, { lazy, useEffect } from 'react';

import FAQ from './components/FAQ';
import Header from './components/Header';
import Awards from './components/Awards';
import Webinar from './components/Webinar';
import Reviews from './components/Reviews';
import { useScrollToByURLParam } from 'Hooks';
import AboutCourse from './components/AboutCourse';
import CourseSteps from './components/CourseSteps';
import AboutServices from './components/AboutServices';
import AboutConsultation from './components/AboutConsultation';
const Footer = lazy(() => import('Components/Footer'));

import style from  './style.scss';

const Home = () => {
    useScrollToByURLParam('block');

    return (
        <>
            <div className={style.main}>
                <Header/>
                <Awards/>
                <AboutServices/>
                <AboutConsultation/>
                <CourseSteps/>
                <Reviews/>
                <FAQ/>
                <Footer email="naturalmedical96@gmail.com" phone="+380 67 484 93 08"/>
            </div>
        </>
    );
};

export default Home;
