import React from 'react';
import Tariff from './components/Tariff';
import {PREMIUM, STANDARD, GROUP, INDEPENDENT } from './constants';

import style from './style.scss';

const Plans = () => {
    return (
        <section className={style.container} id="plans">
            <h4 className={style.title}>Тарифы</h4>
            <div className={style.tariffs}>
                <Tariff
                    price="6 900 грн"
                    name="Самостоятельный"
                    list={INDEPENDENT}
                    classNames={style}
                    className={style.premium}
                    title="Вальгус, плоскостопие + осанка"
                    btnLink="https://secure.wayforpay.com/button/bfbf16033cf2e"
                />
                <Tariff
                    price="8 900 грн"
                    name="Групповой"
                    list={GROUP}
                    classNames={style}
                    className={style.premium}
                    title="Вальгус, плоскостопие + осанка"
                    btnLink="https://secure.wayforpay.com/button/b5e8afffbd767"
                />
            </div>
            <div className={style.tariffs}>
                <Tariff
                    price="13 900 грн"
                    name="Индивидуальный Стандарт"
                    list={STANDARD}
                    classNames={style}
                    isPresentNeeded={true}
                    className={style.premium}
                    title="Вальгус, плоскостопие + осанка, сколиоз"
                    detailsContent={{
                        priceForOne: '800 грн. / 20€',
                        priceForFive: '3000 грн. / 74€'
                    }}
                    btnLink="https://secure.wayforpay.com/button/b9a2e30740578"
                />
                <Tariff
                    price="21 900 грн"
                    name="Индивидуальный Премиум"
                    list={PREMIUM}
                    classNames={style}
                    className={style.vip}
                    isPresentNeeded={true}
                    title="Вальгус, плоскостопие + осанка, сколиоз с доступом навсегда"
                    detailsContent={{
                        priceForOne: '1500 грн. / 38€',
                        priceForFive: '6000 грн. / 150€'
                    }}
                    btnLink="https://secure.wayforpay.com/button/bc2abe5c3756e"
                />
            </div>
        </section>
    );
};

export default Plans;
