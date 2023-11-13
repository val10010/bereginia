import React from 'react';
import Image from "Components/Image";

import { LIST } from './constants';

import style from './style.scss';

const AboutServices = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.block}>
                    <div className={style.courseFor}>
                        <h2 className={style.title}>
                            Для кого подойдет наш курс
                        </h2> 

                        <p className={style.subTitle}>
                            Курс подойдет детям 
                            <p className={style.blueText} >от 3 до 18 лет</p>
                            со следующими нарушениями
                        </p>

                        <div className={style.pictures}>
                            <Image src={'../../../../images/course/CourseFor/1.png'}/>
                            <Image src={'../../../../images/course/CourseFor/2.png'}/>
                            <Image src={'../../../../images/course/CourseFor/3.png'}/>
                            <Image src={'../../../../images/course/CourseFor/4.png'}/>
                        </div>
                    </div>
                </div>

                <div className={style.block}>
                    <ul className={style.list}>
                        {
                            LIST.map(item => (
                                <li key={item} className={style.item}>{ item }</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutServices;
