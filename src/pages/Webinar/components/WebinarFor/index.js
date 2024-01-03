import React from 'react';
import Image from 'Components/Image';
import { ReactSVG } from 'react-svg'

import style from './style.scss';

const WebinarFor = () => {
    return (
        <section className={style.container}>
            <h3 className={style.title}>
                Для кого этот вебинар?
            </h3>
            <div className={style.wrapper}>
                <div className={style.card}>
                    <p className={style.cardDesc}>
                        Если вы осознанная мама младенца от 0 мес. до 2 лет и хотите узнать,
                        как вовремя предотвратить и выявить нарушения развития ножек и осанки у вашего ребенка.
                        <ReactSVG src="images/webinar/plus.svg" className={style.plusIcon}/>
                    </p>
                    <Image src="images/webinar/cards/1.jpg" className={style.cardImg}/>
                </div>
                <div className={style.card}>
                    <p className={style.cardDesc}>
                        Если ребенку в 2-4 года поставили диагноз «плоскостопие»,
                        вальгус или Х-образные ноги, и сказали, что ничего не надо делать, так как «само пройдет»
                        <ReactSVG src="images/webinar/plus.svg" className={style.plusIcon}/>
                    </p>
                    <Image src="images/webinar/cards/2.jpg" className={style.cardImg}/>
                </div>
                <div className={style.card}>
                    <p className={style.cardDesc}>
                        Если у вас гибкий ребенок с гипермобильными суставами,
                        у которого часто случаются вывихи и подвывихи суставов, и вам сказали,
                        что это генетика, которая «не лечится».
                        <ReactSVG src="images/webinar/plus.svg" className={style.plusIcon}/>
                    </p>
                    <Image src="images/webinar/cards/3.jpg" className={style.cardImg}/>
                </div>
                <div className={style.cardLast}>
                    <h4 className={style.cardTitle}>Общий результат после вебинара</h4>
                    <p className={style.cardDesc}>
                        Разберетесь в настоящей причине ваших нарушений,
                        узнаете современные эффективные методы их лечения.
                        Узнаете, почему упражнения, которые вы делаете, не помогают.
                        Получите самые эффективные упражнения от вальгуса и
                        «плоскостопия» для мышц стопы, основанные на моем многолетнем опыте.
                    </p>
                </div>
            </div>
            <h3 className={style.title}>
                Если вы годами безрезультатно лечите:
            </h3>
            <div className={style.diagnosises}>
                <div className={style.diagnosis}>
                    <span className={`${style.step} ${style.stepOne}`}>01</span> сколиоз
                </div>
                <div className={style.diagnosis}>
                    <span className={`${style.step} ${style.stepTwo}`}>02</span> плоскостопие
                </div>
                <div className={style.diagnosis}>
                    <span className={`${style.step} ${style.stepThree}`}>03</span> вальгус
                </div>
                <div className={style.diagnosis}>
                    <span className={`${style.step} ${style.stepFour}`}>04</span> нарушение осанки
                </div>
            </div>
            <p className={style.desc}>
                этими неэффективными и устаревшими методами лечения:
            </p>
            <div className={style.systems}>
                <div className={style.system}>
                    <Image src="images/webinar/systems/1.jpg" className={style.systemImg}/>
                    <p className={style.systemDesc}>
                        Ортопедическая обувь и стельки
                    </p>
                </div>
                <div className={style.system}>
                    <Image src="images/webinar/systems/2.jpg" className={style.systemImg}/>
                    <p className={style.systemDesc}>
                        Электрофорез с кальцием
                    </p>
                </div>
                <div className={style.system}>
                    <Image src="images/webinar/systems/3.jpg" className={style.systemImg}/>
                    <p className={style.systemDesc}>
                        Обычная гимнастика и лечебная физкультура
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WebinarFor;
