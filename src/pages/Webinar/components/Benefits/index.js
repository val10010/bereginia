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
                    ДОСТУП В ЧАТ ОБРАТНОЙ СВЯЗИ от Ивана Газин,
                    где вы сможете уточнить все интересующие вас вопросы после просмотра вебинара.
                </p>
            </div>
            <h5 className={style.subtitle}>Бонусные материалы</h5>
            <div className={style.card}>
                <ReactSVG src="images/webinar/movie.svg" />
                <p className={style.desc}>
                    Гайд «Алгоритм самостоятельной диагностики нарушений стоп и осанки в домашних условиях»
                </p>
            </div>
            <div className={style.card}>
                <ReactSVG src="images/webinar/movie.svg" />
                <p className={style.desc}>
                    Видеоурок от Ивана Газин с самыми эффективными упражнениями от вальгуса для мышц стопы.
                </p>
            </div>
        </section>
    );
};

export default Benefits;
