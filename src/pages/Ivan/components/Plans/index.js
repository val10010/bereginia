import React from 'react';

import Tariff from './components/Tariff';
import { STANDARD, PREMIUM, VIP } from './constants';

import style from './style.scss';

const Plans = () => {
    return (
        <div className={style.container} id="plans">
            <h4 className={style.title}>Тарифы</h4>
            <div className={style.tariffs}>
                <Tariff
                    price="200€"
                    name="Стандарт"
                    list={STANDARD}
                    classNames={style}
                    title="Вальгус / осанка"
                    className={style.standard}
                />
                <Tariff
                    price="449€"
                    name="Премиум"
                    list={PREMIUM}
                    classNames={style}
                    title="Вальгус-3D осанка / Сколиоз с терапевтом"
                    className={style.premium}
                />
                <Tariff
                    price="999€"
                    name="VIP"
                    list={VIP}
                    classNames={style}
                    title="VIP с Газин И.В Сколиоз / Вальгус"
                    className={style.vip}
                />
            </div>
        </div>
    );
};

export default Plans;
