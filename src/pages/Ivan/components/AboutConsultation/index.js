import React from 'react';
import Image from 'Components/Image';
import { REVIEWS } from './constants';
import Slider from 'Components/Slider';
import Button from 'Components/Button';
import { Link } from 'react-router-dom';

import style from './style.scss';

const AboutConsultation = () => {
    return (
        <div className={style.container} id="consultation">
            <div className={style.content}>
                <h5 className={style.title}>Как проходит онлайн диагностика?</h5>
                <div className={style.contentBlock}>
                    <span className={`${style.number} ${style.first}`}> 1 шаг </span>
                    <p className={style.desc}>
                        Я отправляю вам протокол осмотра, в него входят домашние задания:
                        отпечатки стоп, фото стоп и осанки, различные тесты.
                        Вы всё делаете в домашних условиях по инструкции,
                        если что-то непонятно — мы вам поможем.
                        После все результаты осмотра отправляете мне в <Link className={style.textHighlighted}  to='https://t.me/ivangazin' target="_blank">телеграм</Link>.
                    </p>
                </div>
                <div className={style.contentBlock}>
                    <span className={`${style.number} ${style.second}`}> 2 шаг </span>
                    <p className={style.desc}>
                        Я составляю подробный видео разбор нарушений опорно-двигательного
                        аппарата ребёнка по фото, видео и тестам, составляю анкету пациента
                        с описанием нарушений, и отправляю вам.
                    </p>
                </div>
                <div className={style.contentBlock}>
                    <span className={`${style.number} ${style.third}`}> 3 шаг </span>
                    <p className={style.desc}>
                        После того, как вы ознакомились с материалами — в оговоренное
                        время мы с вами созваниваемся по видео/аудио связи,
                        я отвечаю на ваши вопросы и даю подробные рекомендации.
                    </p>
                </div>
                <div className={style.box}>
                    <Button
                        className={style.btn}
                        href="https://secure.wayforpay.com/button/b57ebd74e0e6b"
                    >
                        Записаться на консультацию
                    </Button>
                    <Link className={style.link} to='https://t.me/ivangazin' target="_blank">связаться в телеграм</Link>
                </div>
            </div>
            <Slider reviews={REVIEWS} isBubblesNeeded={true} isButtonNeeded={false} className={style.slider}>
                {
                    REVIEWS.map(item => (
                        <div key={item} className={style.sliderImgContainer}>
                            <Image className={style.sliderImg} src={item} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default AboutConsultation;
