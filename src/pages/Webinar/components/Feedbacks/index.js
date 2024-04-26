import React from 'react';
import Slider from 'Components/Slider';
import { REVIEWS } from "./constants";
import Image from 'Components/Image';

import style from './style.scss';

const Feedbacks = () => {
    return (
        <section className={style.container}>
            <h4 className={style.title}>Отзывы о вебинаре</h4>
           <div className={style.content}>
               <Slider reviews={REVIEWS} classNames={style}>
                   {
                       REVIEWS.map(item => (
                           <div key={item} className={style.reviewImgContainer}>
                               <Image className={style.reviewImg} src={item} />
                           </div>
                       ))
                   }
               </Slider>
           </div>
        </section>
    );
};

export default Feedbacks;
