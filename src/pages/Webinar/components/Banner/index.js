import React from 'react';
import Button from 'Components/Button';

import style from './style.scss';

const TrialLesson = () => {
    return (
        <section className={style.container}>
            <h4 className={style.title}>
                Начните изменения прямо сейчас
            </h4>
            <p className={style.desc}>
                Ценные знания от экспертов за 490 грн вместо 1200 грн.
            </p>
            <Button href="https://secure.wayforpay.com/button/b13239f540d8b" className={style.btn}>Получить доступ</Button>
        </section>
    );
};

export default TrialLesson;
