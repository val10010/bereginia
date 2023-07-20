import React, { useId } from 'react';
import Tariff from './components/Tariff';
import { PLANS } from './constants';

import style from './style.scss';

const Plans = () => {
    return (
        <section className={style.container} id="plans">
            <h4 className={style.title}>Консультации</h4>
            <div className={style.wrapper}>
                {
                    PLANS.map((item) => (
                        <Tariff key={useId()} {...item} />
                    ))
                }
            </div>
        </section>
    );
};

export default Plans;
