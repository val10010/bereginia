import React from 'react';
import Tariff from './components/Tariff';
import { PREMIUM, VIP } from './constants';

import style from './style.scss';

const Plans = () => {
    return (
        <div className={style.container} id="plans">
            <h4 className={style.title}>Тарифы</h4>
            <div className={style.tariffs}>
                <Tariff
                    price="489€"
                    name="Премиум"
                    list={PREMIUM}
                    classNames={style}
                    className={style.premium}
                    title="Вальгус-3D осанка сколиоз"
                    detailsContent={{
                        priceForOne: '800 грн. / 20€',
                        priceForFive: '3000 грн. / 74€'
                    }}
                />
                <Tariff
                    price="999€"
                    name="VIP"
                    list={VIP}
                    classNames={style}
                    className={style.vip}
                    title="VIP с Газин И.В Сколиоз / Вальгус"
                    detailsContent={{
                        priceForOne: '1500 грн. / 38€',
                        priceForFive: '6000 грн. / 150€'
                    }}
                />
            </div>
        </div>
    );
};

export default Plans;
