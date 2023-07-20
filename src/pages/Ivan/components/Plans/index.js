import React, {useContext} from 'react';
import Tariff from './components/Tariff';
import ExtraTariff from './components/ExtraTariff';
import { STANDARD, PREMIUM, VIP, EXTRA } from './constants';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const Plans = () => {
    const { isMobile } = useContext(DeviceContext);

    return (
        <div className={style.container} id="plans">
            <h4 className={style.title}>Тарифы</h4>
            <div className={style.tariffs}>
                <Tariff
                    price="199€"
                    oldPrice="300€"
                    name="Стандарт"
                    list={STANDARD}
                    classNames={style}
                    title="Вальгус"
                    className={style.standard}
                />
                <Tariff
                    price="449€"
                    oldPrice="600€"
                    name="Премиум"
                    list={PREMIUM}
                    classNames={style}
                    isDetailsNeeded={true}
                    className={style.premium}
                    title="Вальгус-3D осанка / Сколиоз с терапевтом"
                />
                <Tariff
                    price="999€"
                    oldPrice="1500€"
                    name="VIP"
                    list={VIP}
                    classNames={style}
                    className={style.vip}
                    isDetailsNeeded={true}
                    title="VIP с Газин И.В Сколиоз / Вальгус"
                />
            </div>
            <div className={style.extraTariff}>
                {
                    !isMobile &&
                    <p className={style.desc}>
                        Специально для вас мы создали отдельний тариф,
                        который включает в себя полноценную программу леченияс
                        куратором, доведения до результата а также спецаильные материалы от нас.
                    </p>
                }
                <ExtraTariff
                    price="599€"
                    oldPrice="800€"
                    firstName="Оптимальный"
                    secondName="Премиум"
                    list={EXTRA}
                    classNames={style}
                    className={style.extra}
                    isDetailsNeeded={true}
                    title="Вальгус-3D осанка / Сколиоз с терапевтом"
                />
            </div>
        </div>
    );
};

export default Plans;
