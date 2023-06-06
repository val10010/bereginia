import React, { lazy } from 'react';
import Header from './components/Header';
const Footer = lazy(() => import('Components/Footer'));

import style from './style.scss';

const Home = () => {
    return (
        <div className={style.main}>
            <Header/>
            <Footer/>
        </div>
    );
};

export default Home;
