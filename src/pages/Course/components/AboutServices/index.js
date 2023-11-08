import React from 'react';

import { LIST } from './constants';

import style from './style.scss';

const AboutServices = () => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>Мы лечим заболевания опорно двигательного аппарата</h2>
            <div className={style.content}>
                <p className={style.desc}>
                    Симпотомы нарушений ода очень обширны.
                    От вальгусной установки стоп до сколиоза, что приводит к неприятным последствиям. Мы даем полный анализ всех проблем и пути их решения
                </p>
                <div className={style.block}>
                    <h3 className={style.listTitle}>Последствия нарушения опорно двигательного аппарата</h3>
                    <ul className={style.list}>
                        {
                            LIST.map(item => (
                                <li key={item} className={style.item}>{ item }</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutServices;
