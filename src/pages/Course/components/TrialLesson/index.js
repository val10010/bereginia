import React from 'react';
import Button from 'Components/Button';

import style from './style.scss';

const TrialLesson = () => {
    return (
        <section className={style.container} id="trialLesson">
            <h4 className={style.title}>
                Получите пробный урок с куратором
            </h4>
            <p className={style.desc}>
                Для тех, кто прошел консультацию Газин И. В. Длительность урока — 1 час за 600 грн вместо 1200 грн.
            </p>
            <Button
                className={style.btn}
                href="https://secure.wayforpay.com/button/b55e960221a4c"
            >
                Получить урок
            </Button>
        </section>
    );
};

export default TrialLesson;
