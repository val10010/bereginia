import React from 'react';
import Menu from 'Components/Menu';
import Image from 'Components/Image';

import style from './style.scss';

const Header = () => {

    return (
        <header className={style.header} id="top">
            <Menu/>
            <h1 className={style.title}>
                запись вебинара "Здоровье осанки и стоп у детей"
            </h1>
            <p className={style.desc}>
                Узнайте, как уберечься от ошибок, которые делают 90% родителей и из-за незнания вредят своим детям, сами провоцируя «плоскостопие», вальгус и нарушения осанки у своих детей.
            </p>
            <Image src="images/webinar/webinar.jpg" className={style.img}/>
        </header>
    );
};

export default Header;
