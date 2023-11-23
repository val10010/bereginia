import React, { useEffect } from 'react';
import Menu from 'Components/Menu';
import Image from 'Components/Image';
import Button from 'Components/Button';
import Footer from 'Components/Footer';
import { useNavigate } from "react-router-dom";

import style from './style.scss';

const Success = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    const navigate = useNavigate();

    useEffect( () => {
        if(!page) {
            return navigate('/');
        }
    }, [])

    return (
        <>
            <Menu/>
            <div className={style.container}>
                <section className={style.header}>
                    <h1 className={style.title}>Произошла ошибка</h1>
                    <p className={style.desc}>
                        Во время оплаты произошла ошибка, это могло случиться по следующим причинам:
                    </p>
                    <div className={style.wrapper}>
                        <div className={style.column}>
                            <div className={style.card}>
                                <h4 className={style.cardTitle}>
                                    Недостаточно средств на карте / счете
                                </h4>
                                <p className={style.cardDesc}>
                                    Пожалуйста, проверьте свой баланс и убедитесь,
                                    что на счете достаточно средств для совершения оплаты.
                                    При необходимости пополните свой банковский счет или воспользуйтесь другим методом оплаты.
                                </p>
                            </div>
                            <div className={style.card}>
                                <h4 className={style.cardTitle}>
                                    Технические сбои
                                </h4>
                                <p className={style.cardDesc}>
                                    Временные технические проблемы могут привести к неудачной оплате.
                                    Обновите страницу и повторите попытку.
                                    Повторите попытку оплаты или подождите некоторое время и повторите позже.
                                </p>
                            </div>
                        </div>
                        <div className={style.column}>
                            <div className={style.card}>
                                <h4 className={style.cardTitle}>
                                    Ошибки в банковских данных
                                </h4>
                                <p className={style.cardDesc}>
                                    При вводе банковских данных могли возникнуть опечатки или ошибки.
                                    Убедитесь, что вы верно ввели номер карты, дату и код безопасности.
                                    Перепроверьте введенные банковские данные и повторите попытку оплаты.
                                </p>
                            </div>
                            <div className={style.card}>
                                <h4 className={style.cardTitle}>
                                    Блокировка карты для онлайн-платежей
                                </h4>
                                <p className={style.cardDesc}>
                                    Некоторые банки блокируют карты для онлайн-платежей из-за безопасности.
                                    Свяжитесь с вашим банком, чтобы уточнить, не блокирована ли ваша карта.
                                    Свяжитесь с банком и уточните, возможно ли совершение онлайн-транзакций.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Button href={'/' + page} className={style.btn}>
                        Попробовать снова
                    </Button>
                </section>
                <Footer email="naturalmedical96@gmail.com" phone="+380 67 484 93 08"/>
            </div>
        </>
    );
};

export default Success;
