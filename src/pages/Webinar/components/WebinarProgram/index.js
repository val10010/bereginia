import Image from 'Components/Image';
import Button from 'Components/Button';
import React, { useContext } from 'react';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const WebinarProgram = () => {
    const { isMobile } = useContext(DeviceContext);

    return (
        <section className={style.container}>
            <div className={style.wrapper}>
                <h4 className={style.title}>Программа вебинара</h4>
                <p className={style.desc}>
                    Вебинар состоит из двух частей, каждую из которых ведут
                    высококвалифицированные специалисты в своей области с многолетним опытом работы.
                </p>
            </div>

            <div className={style.wrapper}>
                <div className={style.card}>
                    <div className={style.imageBlock}>
                        <Image src={isMobile ? 'images/webinar/ivan-mobile.jpg' : 'images/webinar/ivan.jpg'}  className={style.img}/>
                        <div className={style.floatingBlock}>
                            <div className={style.author}>
                                Иван Газин
                            </div>
                            <div className={style.duration}>
                                2 часа
                            </div>
                        </div>
                    </div>
                    <h5 className={style.cardTitle}>
                        Первая часть
                    </h5>
                    <p className={style.cardDesc}>
                        «Как вырастить ребенка со здоровыми ножками и осанкой на всю жизнь»
                    </p>
                </div>
                <div className={style.card}>
                    <div className={style.imageBlock}>
                        <Image src={isMobile ? 'images/webinar/irina-mobile.jpg' : 'images/webinar/irina.jpg'}  className={style.img}/>
                        <div className={style.floatingBlock}>
                            <div className={style.author}>
                                Ирина Газин
                            </div>
                            <div className={style.duration}>
                                2 часа
                            </div>
                        </div>
                    </div>
                    <h5 className={style.cardTitle}>
                        Вторая часть
                    </h5>
                    <p className={style.cardDesc}>
                        «Дисплазия соединительной ткани и ее влияние на нарушения развития стоп и осанки»
                    </p>
                </div>
            </div>

            <Button href="https://secure.wayforpay.com/button/b13239f540d8b" className={style.btn}>Получить доступ к вебинару</Button>
        </section>
    );
};

export default WebinarProgram;
