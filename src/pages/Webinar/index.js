import React, { lazy } from 'react';

import Banner from './components/Banner';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Feedbacks from './components/Feedbacks';
import WebinarFor from './components/WebinarFor';
import WebinarProgram from './components/WebinarProgram';
const Footer = lazy(() => import('Components/Footer'));

import style from  './style.scss';

const Webinar = () => {

    return (
        <>
            <div className={style.main}>
                <Header/>
                <WebinarFor/>
                <Banner/>
                <WebinarProgram/>
                <Benefits/>
                <Banner/>
                <Feedbacks/>
                <Footer email="naturalmedical96@gmail.com" phone="+380 67 484 93 08"/>
            </div>
        </>
    );
};

export default Webinar;
