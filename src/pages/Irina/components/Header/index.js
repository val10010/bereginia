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
                    <button onClick={() => smoothScrollTo('plans')} className={style.item}>Консультации</button>
                    <button onClick={() => smoothScrollTo('steps')} className={style.item}>Как проходит консультация</button>
                    <button onClick={() => smoothScrollTo('reviews')} className={style.item}>Отзывы</button>
                </div>
                {
                  isDesktop && <div className={style.menuItems}>
                        <Link to="/ivan" className={style.item}>Иван Газин</Link>
                    </div>
                }
            </Menu>
            <div className={style.container}>
                <div className={style.content}>
                    <h2 className={style.title}>Ирина Газин</h2>
                    <p className={style.desc}>
                        Основатель и руководитель Центра Восстановительной Медицины и Нутрициологии «БЕРЕГИНЯ»
                    </p>
                    {
                        isMobile &&  <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdr7j_0PSmhRgYKK5LkBmLopgeWMDnckhOYpxucBq6gL_9MSw/viewform?pli=1" target="_blank" className={style.btn} >Записаться на консультацию</Button>
                    }

                    {
                        !isMobile
                        &&
                        <div className={style.block}>
                            <div className={style.happyClientBlock}>
                                <Image className={style.happyClient} src="../../../../images/irina/happy_client.jpg" alt="happy client"/>
                                <span className={style.imgDesc}>
                                счастливый пациент
                            </span>
                            </div>
                            <div className={style.box}>
                                <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdr7j_0PSmhRgYKK5LkBmLopgeWMDnckhOYpxucBq6gL_9MSw/viewform?pli=1" target="_blank" className={style.btn} >Записаться на консультацию</Button>
                                { isDesktop && <Image src="../../../../images/irina/header_flower.jpg" /> }
                            </div>
                        </div>
                    }
                </div>
                <div className={style.heroBlock}>
                    <Image  className={style.hero} src="../../../../images/irina/header_hero.jpg" alt="Irina Gazyn"/>
                    <div className={style.imgDescList}>
                        <span className={style.imgDesc}>
                            Превентивный нутрициолог
                        </span>
                        <span className={style.imgDesc}>
                            Висцеральный терапевт
                        </span>
                        <span className={style.imgDesc}>
                            Натуропат
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
