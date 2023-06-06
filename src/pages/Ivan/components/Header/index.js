import React, { useContext } from 'react';
import Menu from 'Components/Menu';
import Image from 'Components/Image';
import { smoothScrollTo } from 'Utils';
import Button from 'Components/Button';
import { Link } from 'react-router-dom';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const Header = () => {
    const { isDesktop, isMobile } = useContext(DeviceContext);

    return (
        <header className={style.header} id="top">
            <Menu>
                <div className={style.menuItems}>
                    <button onClick={() => smoothScrollTo('plans')} className={style.item}>Тарифы курса</button>
                    <button onClick={() => smoothScrollTo('steps')} className={style.item}>Как проходит курс</button>
                    <button onClick={() => smoothScrollTo('reviews')} className={style.item}>Отзывы</button>
                </div>
                {
                  isDesktop && <div className={style.menuItems}>
                        <Link to="/irina" className={style.item}>Ирина Газин</Link>
                    </div>
                }
            </Menu>
            <div className={style.container}>
                <div className={style.content}>
                    <h2 className={style.title}>Иван Газин</h2>
                    <p className={style.desc}>
                        Ведущий специалист и основатель центра по нарушениям
                        опорно двигательного аппарата у детей и взрослых.
                    </p>
                    {
                        isMobile &&  <Button href="https://t.me/bereginiaabot" target="_blank" className={style.btn} >Записаться на консультацию</Button>
                    }

                    {
                        !isMobile
                        &&
                        <div className={style.block}>
                            <div className={style.happyClientBlock}>
                                <Image className={style.happyClient} src="../../../../images/ivan/happy_client.jpg" alt="happy client"/>
                                <span className={style.imgDesc}>
                                счастливый пациент
                            </span>
                            </div>
                            <div className={style.box}>
                                <Button href="https://t.me/bereginiaabot" target="_blank" className={style.btn} >Записаться на консультацию</Button>
                                { isDesktop && <Image src="../../../../images/ivan/header_leg.jpg" /> }
                            </div>
                        </div>
                    }
                </div>
                <div className={style.heroBlock}>
                    <Image  className={style.hero} src="../../../../images/ivan/header_hero.jpg" alt="Ivan Gazyn"/>
                    <div className={style.imgDescList}>
                        <span className={style.imgDesc}>
                            Физический терапевт
                        </span>
                        <span className={style.imgDesc}>
                            Шрот терапевт
                        </span>
                        <span className={style.imgDesc}>
                            Юмейхо терапевт
                        </span>
                        <span className={style.imgDesc}>
                            Мануальный терапевт
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
