import React from 'react';
import Button from 'Components/Button';

import style from './style.scss';

const TrialLesson = () => {
    return (
        <section className={style.container} id="trialLesson">
            <h4 className={style.title}>
                Получите пробный урок лично от Ивана
            </h4>
            <p className={style.desc}>
                Длительность урока — 1 час за 600 грн вместо 1200 грн.
            </p>
            <Button className={style.btn}>Получить урок</Button>
        </section>
    );
};

export default TrialLesson;
