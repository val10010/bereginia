import React, {useContext} from 'react';
import Tariff from './components/Tariff';
import { DeviceContext } from "Contexts/Device/DeviceContext";
import {PREMIUM, STANDARD, GROUP, ECONOM, INDEPENDENT, GROUP_TOGGLE, INDEPENDENT_TOGGLE, STANDARD_TOGGLE, PREMIUM_TOGGLE } from './constants';

import style from './style.scss';

const Plans = () => {
    const { isMobile } = useContext(DeviceContext);

    return (
        <section className={style.container} id="plans">
            <h4 className={style.title}>Тарифы</h4>
            <div className={style.tariffs}>
                {
                    isMobile &&
                    <Tariff
                        oldPrice="7900 грн"
                        price="6900 грн"
                        name="Самостоятельный"
                        list={ECONOM}
                        classNames={style}
                        className={style.premium}
                        title="Вальгус, плоскостопие + осанка"
                        btnLink="https://secure.wayforpay.com/button/b04664a51a6da"
                    />
                }
                <Tariff
                    oldPrice="9900 грн"
                    price="8900 грн (набор закрыт)"
                    name="Групповой"
                    list={GROUP}
                    toggle={GROUP_TOGGLE}
                    classNames={style}
                    className={style.premium}
                    title="Вальгус, плоскостопие + осанка"
                    btnLink="https://secure.wayforpay.com/button/b5e8afffbd767"
                />
                <Tariff
                    oldPrice="13900 грн"
                    price="12900 грн"
                    name="Пакет индивидуальных  онлайн-тренировок с физическим терапевтом"
                    list={INDEPENDENT}
                    toggle={INDEPENDENT_TOGGLE}
                    classNames={style}
                    className={style.premium}
                    title="Вальгус, плоскостопие + осанка, сколиоз"
                    btnLink="https://secure.wayforpay.com/button/bfbf16033cf2e"
                />
            </div>
            <div className={style.tariffs}>
                <Tariff
                    oldPrice="15900 грн"
                    price="14900 грн"
                    name="Индивидуальный Стандарт"
                    list={STANDARD}
                    toggle={STANDARD_TOGGLE}
                    classNames={style}
                    isPresentNeeded={true}
                    className={style.premium}
                    title="Вальгус, плоскостопие + осанка, сколиоз"
                    btnLink="https://secure.wayforpay.com/button/b9a2e30740578"
                />
                <Tariff
                    oldPrice="22900 грн"
                    price="21900 грн"
                    name="Индивидуальный Премиум"
                    list={PREMIUM}
                    toggle={PREMIUM_TOGGLE}
                    classNames={style}
                    className={style.vip}
                    isPresentNeeded={true}
                    title="Вальгус, плоскостопие + осанка, сколиоз с доступом навсегда"
                    btnLink="https://secure.wayforpay.com/button/bc2abe5c3756e"
                />
            </div>
        </section>
    );
};

export default Plans;
