import Image from 'Components/Image';
import Button from 'Components/Button';
import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import * as actions from 'Actions/actions';

import style from './style.scss';


const Webinar = () => {
    const dispatch = useDispatch();
    const handleBtnClick = useCallback(() => {
        dispatch(actions.showPopup({
            contents: [{
                name: 'ReservationForm',
                props: {
                    className: style.formInPopup,
                    title: 'Вебинар',
                    price: '13€',
                    btnonclick: {
                        actionName: 'showPopup',
                        props: {
                            contents: [{
                                name: 'Success'
                            }]
                        }
                    }
                }
            }]
        }))
    }, []);

    return (
        <section className={style.container} id="webinar">
            <div className={style.content}>
                <div className={style.top}>
                    <p className={style.sticker}>Запись Вебинара на тему</p>
                    <p className={style.price}>
                        <span className={style.oldPrice}>15€</span>
                        13€
                    </p>
                </div>
                <h3 className={style.title}>
                    “Здоровье осанки и стоп у детей и влияние ДСТ на эти нарушения”
                </h3>
                <p className={style.desc}>
                    В этом вебинаре, теперь доступном в записи,
                    подробно рассматриваются важность здоровой осанки
                    и стоп у детей и влияние дисплазии соединительной
                    ткани на нарушения опорно двигательного аппарата.
                    Запись включает практические советы и предлагает
                    доступ в закрытый телеграм-чат для дальнейшей обратной связи.
                    Поддержите свое стремление к здоровому развитию вашего ребенка,
                    присоединяйтесь к нашему сообществу.
                </p>
                <Button
                    className={style.btn}
                    onClick={handleBtnClick}
                >
                    Купить доступ
                </Button>
            </div>
            <Image className={style.img} src="../../../../images/ivan/webinar.jpg" alt="webinar"/>
        </section>
    );
};

export default Webinar;
