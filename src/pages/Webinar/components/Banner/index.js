import React from 'react';
import Button from 'Components/Button';

import style from './style.scss';

const TrialLesson = () => {
    return (
        <section className={style.container}>
            <h4 className={style.title}>
                Начните изменения прямо сейчас
            </h4>
            <Button className={`${style.btn} sp_popup_c49057a4-62ca-4722-bb0a-a33e7d6cafab`}>зарегистрироваться</Button>
        </section>
    );
};

export default TrialLesson;
