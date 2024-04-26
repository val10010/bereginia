import React from 'react';
import Image from 'Components/Image';
import Toggle from 'Components/Toggle';
import NumberedList from 'Components/NumberedList';

import style from './style.scss';

const WebinarFor = () => {
    return (
        <section className={style.container}>
            <h3 className={style.title}>
                Для кого этот вебинар?
            </h3>
            <h3 className={style.subtitle}>
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
            <div className={style.wrapper}>
                <div className={style.card}>
                    <Toggle classNames={style} className={style.cardToggle}>
                        <div>
                            <p className={style.cardDesc}>
                                Если вы осознанная мама младенца от 0 мес. до 2 лет и хотите узнать,
                                как вовремя предотвратить и выявить нарушения развития ножек и осанки у вашего ребенка.
                            </p>
                            <Image src="images/webinar/cards/1.jpg" className={style.cardImg}/>
                        </div>
                        <div>
                            <h5 className={style.cardInnerTitle}>Ваш результат после вебинара:</h5>
                            <p className={style.cardInnerDesc}>Узнаете, как на самом деле формируется детская стопа и осанка, и как вам вовремя повлиять на ее правильное развитие, чтобы не допустить вальгуса и «плоскостопия» в будущем.</p>
                            <NumberedList
                                classNames={style}
                                className={style.cardInnerList}
                                list={[
                                  'Разберетесь в критериях выбора правильной обуви для ребенка в любом магазине на любой бюджет, а также нужен ли супинатор для первых шагов.',
                                  'Научитесь самостоятельно диагностировать нарушения у своего ребенка и сможете вовремя ему помочь.'
                                ]}
                            />
                        </div>
                    </Toggle>
                </div>
                <div className={style.card}>
                    <Toggle classNames={style} className={style.cardToggle}>
                        <div>
                            <p className={style.cardDesc}>
                                Если ребенку в 2-4 года поставили диагноз «плоскостопие»,
                                вальгус или Х-образные ноги, и сказали, что ничего не надо делать, так как «само пройдет»
                            </p>
                            <Image src="images/webinar/cards/2.jpg" className={style.cardImg}/>
                        </div>
                        <div>
                            <h5 className={style.cardInnerTitle}>Ваш результат после вебинара:</h5>
                            <p className={style.cardInnerDesc}>Узнаете, как на самом деле формируется детская стопа и осанка, и как вам вовремя повлиять на ее правильное развитие, чтобы не допустить вальгуса и «плоскостопия» в будущем.</p>
                            <NumberedList
                                classNames={style}
                                className={style.cardInnerList}
                                list={[
                                    'Поймете, почему у одних детей вальгус проходит сам, а у других – нет. И как самой вовремя начать действовать еще на раннем этапе, когда ребенку можно легко помочь выйти из вальгуса.',
                                    'Сэкономите деньги и время вашего ребенка.'
                                ]}
                            />
                        </div>
                    </Toggle>
                </div>
                <div className={style.card}>
                    <Toggle classNames={style} className={style.cardToggle}>
                    <div>
                        <p className={style.cardDesc}>
                            Если у вас гибкий ребенок с гипермобильными суставами,
                            у которого часто случаются вывихи и подвывихи суставов, и вам сказали,
                            что это генетика, которая «не лечится».
                        </p>
                        <Image src="images/webinar/cards/3.jpg" className={style.cardImg}/>
                    </div>
                    <div>
                        <h5 className={style.cardInnerTitle}>Ваш результат после вебинара:</h5>
                        <p className={style.cardInnerDesc}>Узнаете, как на самом деле формируется детская стопа и осанка, и как вам вовремя повлиять на ее правильное развитие, чтобы не допустить вальгуса и «плоскостопия» в будущем.</p>
                        <NumberedList
                            classNames={style}
                            className={style.cardInnerList}
                            list={[
                                'Узнаете, что на самом деле такая гибкость происходит у ребенка вследствие нарушения – дисплазии соединительной ткани.',
                                'Поймете, как помочь своему ребенку'
                            ]}
                        />
                    </div>
                    </Toggle>
                </div>
                <div className={style.cardLast}>
                    <h4 className={style.cardTitle}>Общий результат после вебинара</h4>
                    <p className={style.cardDesc}>
                        <NumberedList
                            classNames={style}
                            className={style.cardInnerList}
                            list={[
                                'Разберетесь в настоящей причине ваших нарушений, узнаете современные эффективные методы их лечения.',
                                'Узнаете, почему упражнения, которые вы делаете, не помогают.',
                                'Получите бесплатную экспресс-диагностику по фото ребенка от эксперта в лечении вальгуса, плоскостопия и осанки, физического терапевта Ивана Газин.'
                            ]}
                        />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WebinarFor;
