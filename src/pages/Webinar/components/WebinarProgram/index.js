import Image from 'Components/Image';
import Button from 'Components/Button';
import React, { useContext } from 'react';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const WebinarProgram = () => {
    const { isMobile } = useContext(DeviceContext);

    return (
        <section className={style.container}>
            <h4 className={style.title}>О спикере</h4>
            <p className={style.desc}>
                Вебинар проводит физический, мануальный терапевт, специалист в лечении вальгуса и сколиоза у детей с 10-летним опытом, Иван Васильевич Газин. Награжден орденами "Медична слава України" и "Мастер Золотые руки". Помог вылечить вальгус, плоскостопие и нарушения осанки ужеболее, чем у тысячи детей.
            </p>
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
            </div>
            <Button href="https://secure.wayforpay.com/button/b13239f540d8b" className={`${style.btn}`}>Купить</Button>
        </section>
    );
};

export default WebinarProgram;
