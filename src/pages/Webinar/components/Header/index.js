import React, {useEffect, useRef } from 'react';
import Menu from 'Components/Menu';
import Image from 'Components/Image';
import Button from 'Components/Button';

import style from './style.scss';

const Header = () => {
    const btn = useRef(null);
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');

    useEffect( () => {
        if(page) {
            setTimeout(() => {
                btn?.current?.click();

            }, 1500)
        }
    }, [])

    return (
        <header className={style.header} id="top">
            <Menu isHideBurger={true} />
            <div className={style.wrapperContent}>
                <div className={style.content}>
                    <h3 className={style.smallTitle}>Вебинар</h3>
                    <h1 className={style.title}>
                        КАК ВЫРАСТИТЬ РЕБЕНКА СО ЗДОРОВЫМИ НОЖКАМИ И ОСАНКОЙ
                    </h1>
                    <p className={style.desc}>
                        Узнайте, как уберечься от ошибок, которые делают 90% родителей и из-за незнания вредят своим детям, сами провоцируя «плоскостопие», вальгус и нарушения осанки у своих детей.
                    </p>
                    <p className={style.subdesc}>
                      Запись вебинара будет.
                    </p>
                    <p className={style.date}>
                        Ждём Вас:
                        <span>
                           08.06.24 17:00
                        </span>
                    </p>
                    <button ref={btn} style={{opacity: 0}} className={`sp_popup_c49057a4-62ca-4722-bb0a-a33e7d6cafab`} >зарегистрироваться</button>
                    <Button href="https://secure.wayforpay.com/button/b13239f540d8b" className={`${style.button}`} >зарегистрироваться</Button>
                </div>
                <Image src="images/webinar/hero.jpg" className={style.img}/>
            </div>
        </header>
    );
};

export default Header;
