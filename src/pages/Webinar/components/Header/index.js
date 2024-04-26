import React from 'react';
import Menu from 'Components/Menu';
import Image from 'Components/Image';
import Button from 'Components/Button';

import style from './style.scss';

const Header = () => {

    return (
        <header className={style.header} id="top">
            <Menu/>
            <div className={style.wrapperContent}>
                <div className={style.content}>
                    <h3 className={style.smallTitle}>Вебинар</h3>
                    <h1 className={style.title}>
                        КАК ВЫРАСТИТЬ РЕБЕНКА СО ЗДОРОВЫМИ НОЖКАМИ И ОСАНКОЙ
                    </h1>
                    <p className={style.desc}>
                        Узнайте, как уберечься от ошибок, которые делают 90% родителей и из-за незнания вредят своим детям, сами провоцируя «плоскостопие», вальгус и нарушения осанки у своих детей.
                    </p>
                    <p className={style.date}>
                        Ждём Вас:
                        <span>
                            18 мая, 18:00
                        </span>
                    </p>
                    <Button
                        variant="primary"
                        className={style.button}
                    >
                        зарегистрироваться
                    </Button>
                </div>
                <Image src="images/webinar/hero.jpg" className={style.img}/>
            </div>
        </header>
    );
};

export default Header;
