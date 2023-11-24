import React, { useContext } from 'react';
import Menu from 'Components/Menu';
import Image from 'Components/Image';
import Button from 'Components/Button';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const Header = () => {
    const { isDesktop, isMobile } = useContext(DeviceContext);

    return (
        <header className={style.header} id="top">
            <Menu/>
            <div className={style.container}>
                <div className={style.content}>
                    <h2 className={style.title}>Иван Газин</h2>
                    <p className={style.desc}>
                        Ведущий специалист и основатель центра по нарушениям
                        опорно двигательного аппарата у детей и взрослых.
                    </p>
                    {
                        isMobile &&
                        <Button
                            className={style.btn}
                            href="https://secure.wayforpay.com/button/b57ebd74e0e6b"
                        >
                            Записаться на консультацию
                        </Button>
                    }

                    {
                        !isMobile
                        &&
                        <div className={style.block}>
                            <div className={style.happyClientBlock}>
                                <Image className={style.happyClient} src="images/ivan/happy_client.jpg" alt="happy client"/>
                                <span className={style.imgDesc}>
                                счастливый пациент
                            </span>
                            </div>
                            <div className={style.box}>
                                <Button
                                    className={style.btn}
                                    href="https://secure.wayforpay.com/button/b57ebd74e0e6b"
                                >
                                    Записаться на консультацию
                                </Button>
                                { isDesktop && <Image src="images/ivan/header_leg.jpg" /> }
                            </div>
                        </div>
                    }
                </div>
                <div className={style.heroBlock}>
                    <Image  className={style.hero} src="images/ivan/header_hero.jpg" alt="Ivan Gazyn"/>
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
