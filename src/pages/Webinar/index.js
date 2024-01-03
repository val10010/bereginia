import React, { lazy } from 'react';

import Header from './components/Header';
import Benefits from './components/Benefits';
import WebinarFor from './components/WebinarFor';
import TrialLesson from 'Components/TrialLesson';
import WebinarProgram from './components/WebinarProgram';
const Footer = lazy(() => import('Components/Footer'));

import style from  './style.scss';

const Webinar = () => {

    return (
        <>
            <div className={style.main}>
                <Header/>
                <WebinarFor/>
                <TrialLesson/>
                <WebinarProgram/>
                <Benefits/>
                <TrialLesson/>
                <Footer email="naturalmedical96@gmail.com" phone="+380 67 484 93 08"/>
            </div>
        </>
    );
};

export default Webinar;
