import React from 'react';

import style from './style.scss';

export const TariffDetails = ({ key, props }) => {
    return (
        <div key={key} className={style.container}>
            <p className={style.infoTitle}>После окончания курса вы можете продолжать заниматься с терапевтом индивидуально в формате онлайн занятий.</p>
            <div className={style.content}>
                <p className={style.item}>
                    <span className={style.price}>{ props.priceForFive }</span>
                    цена за 5 занятий
                </p>
                <p className={style.item}>
                    <span className={style.price}>{ props.priceForOne }</span>
                    цена за 1 занятие
                </p>
            </div>
        </div>
    );
};
