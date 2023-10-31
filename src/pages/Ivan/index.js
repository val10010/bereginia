import React, { lazy, useEffect } from 'react';

import FAQ from './components/FAQ';
import Plans from './components/Plans';
import Header from './components/Header';
import Awards from './components/Awards';
import Webinar from './components/Webinar';
import Reviews from './components/Reviews';
import { useScrollToByURLParam } from 'Hooks';
import AboutCourse from './components/AboutCourse';
import CourseSteps from './components/CourseSteps';
import AboutServices from './components/AboutServices';
import AboutConsultation from './components/AboutConsultation';
import DynamicScriptLoader from 'Components/DynamicScriptLoader';
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
                <AboutCourse/>
                <Webinar/>
                <Plans/>
                <CourseSteps/>
                <Reviews/>
                <FAQ/>
                <Footer email="naturalmedical96@gmail.com" phone="+380 67 484 93 08"/>
            </div>
            <DynamicScriptLoader
                scriptUrl="https://pop-ups.sendpulse.com/assets/loader.js"
                dataAttributes={{'chats-widget-id': 'ada2b302-3e54-45f5-a726-1f9e2d2abdd5'}}
            />
        </>
    );
};

export default Home;
