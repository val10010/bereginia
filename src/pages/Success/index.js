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
                    <h1 className={style.title}>Оплата прошла успешно</h1>
                    {
                        page === 'webinar'
                            ?
                            <>
                                <p className={style.desc}>Благодарим за покупку! Перейдите в телеграм канал, для получения записи вебинара.</p>
                                <Button href='https://t.me/+1P82lClMbMM2MTEy' className={style.btn}>
                                    перейти в телеграм канал
                                </Button>
                            </>
                            :
                            <>
                                <p className={style.desc}>
                                    Благодарим за покупку. В ближайшее время мы с вами свяжемся и предоставим доступ к продукту
                                </p>
                                <Button href={'/' + page} className={style.btn}>
                                    вернуться назад
                                </Button>
                            </>


                    }
                </section>
                <section className={style.products}>
                    <h3 className={style.productsTitle}>Все продукты</h3>
                    <div className={style.wrapper}>
                        <div className={style.product}>
                            <Image src="images/success/1-product.jpg" className={style.productImg}/>
                            <h4 className={style.productTitle}>Курс «Вальгус + осанка, сколиоз»</h4>
                            <p className={style.productDesc}>
                                Вылечите нарушения осанки и стоп у ребенка
                                при поддержке опытный кураторов с огромным опытом.
                            </p>
                        </div>
                        <div className={style.product}>
                            <Image src="images/success/2-product.jpg"  className={style.productImg}/>
                            <h4 className={style.productTitle}>Вебинар «Здоровье осанки и стоп у детей»</h4>
                            <p className={style.productDesc}>
                                Узнайте, как уберечься от ошибок, которые делают 90% родителей
                                и из-за незнания вредят своим детям, сами провоцируя «плоскостопие»,
                                вальгус и нарушения осанки у своих детей.
                            </p>
                        </div>
                    </div>
                </section>
                <Footer email="naturalmedical96@gmail.com" phone="+380 67 484 93 08"/>
            </div>
        </>
    );
};

export default Success;
