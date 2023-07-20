import React, { lazy } from 'react';

const FAQ = lazy(() => import('./components/FAQ'));
const Plans = lazy(() => import('./components/Plans'));
const Footer = lazy(() => import('Components/Footer'));
const Header = lazy(() => import('./components/Header'));
const Awards = lazy(() => import('./components/Awards'));
const Reviews = lazy(() => import('./components/Reviews'));
const AboutCourse = lazy(() => import('./components/AboutCourse'));
const Specialization = lazy(() => import('./components/Specialization'));
const ConsultationSteps = lazy(() => import('./components/ConsultationSteps'));

import style from './style.scss';

const Home = () => {
    return (
        <div className={style.main}>
            <Header/>
            <Awards/>
            <Specialization/>
            <AboutCourse/>
            <Plans/>
            <ConsultationSteps/>
            <Reviews/>
            <FAQ/>
            <Footer email="iragazin96@gmail.com" phone="+380675581452"/>
        </div>
    );
};

export default Home;
