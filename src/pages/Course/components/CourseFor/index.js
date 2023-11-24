import React from 'react';
import Image from 'Components/Image';
import { ITEMS } from './constants';
import NumberedList from 'Components/NumberedList';

import style from './style.scss';

const CourseFor = () => {
    return (
        <section className={style.container}>
            <div className={style.content}>
                <h4 className={style.title}>
                    Для кого подойдет наш курс
                </h4>
                <p className={style.desc}>
                    Курс подойдет детям
                    <span className={style.age}>от 3 до 18 лет</span>
                    при следующих нарушениях
                </p>
                <div className={style.diagnosis}>
                    <Image className={style.diagnosisImg} src="images/course/diagnosis/1.jpg" alt="Вальгус" title="Вальгус"/>
                    <Image className={style.diagnosisImg} src="images/course/diagnosis/2.jpg" alt="Х образные ноги" title="Х образные ноги"/>
                    <Image className={style.diagnosisImg} src="images/course/diagnosis/3.jpg" alt="Сколиоз" title="Сколиоз"/>
                    <Image className={style.diagnosisImg } src="images/course/diagnosis/4.jpg" alt="Нарушение осанки" title="Нарушение осанки"/>
                </div>
            </div>
            <NumberedList classNames={style} className={style.items} list={ITEMS}/>
        </section>
    );
};

export default CourseFor;
