import React, { lazy } from 'react';

import FAQ from './components/FAQ';
import Plans from './components/Plans';
import Header from './components/Header';
import Awards from './components/Awards';
import Reviews from './components/Reviews';
import AboutCourse from './components/AboutCourse';
import CourseSteps from './components/CourseSteps';
import AboutServices from './components/AboutServices';
const Footer = lazy(() => import('Components/Footer'));

import style from  './style.scss';

const Home = () => {
    return (
        <div className={style.main}>
            <Header/>
            <Awards/>
            <AboutServices/>
            <AboutCourse/>
            <Plans/>
            <CourseSteps/>
            <Reviews/>
            <FAQ/>
            <Footer/>
        </div>
    );
};

export default Home;
