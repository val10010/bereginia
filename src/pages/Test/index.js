import React, { lazy } from 'react';
import Header from 'Main/pages/Ivan/components/Header'
const Footer = lazy(() => import('Components/Footer'));
import {Test} from 'Main/devlink/Test';

import style from './style.scss';

const Home = () => {
    return (
        <div className={style.main}>
            <Header/>
            <Test/>
            <Footer email="naturalmedical96@gmail.com" phone="+380 67 484 93 08"/>
        </div>
    );
};

export default Home;
