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
            <Button className={`${style.btn} sp_popup_c49057a4-62ca-4722-bb0a-a33e7d6cafab`}>зарегистрироваться</Button>
        </section>
    );
};

export default WebinarProgram;
