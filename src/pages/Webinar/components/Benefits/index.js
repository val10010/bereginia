import React from 'react';
import { ReactSVG } from 'react-svg'

import style from './style.scss';

const Benefits = () => {
    return (
        <section className={style.container}>
            <h4 className={style.title}>Вы также получите:</h4>
            <div className={style.card}>
                <ReactSVG src="images/webinar/chat.svg" />
                <p className={style.desc}>
                    Бесплатную экспресс-диагностику по фото ребенка и отпечаткам стоп от Ивана Газин.
                </p>
            </div>
        </section>
    );
};

export default Benefits;
