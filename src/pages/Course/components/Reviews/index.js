import React from 'react';
import Image from 'Components/Image';
import Slider from 'Components/Slider';

import { REVIEWS } from './constants';

import style from './style.scss';

const Reviews = () => {
    return (
        <section className={style.container} id="reviews">
            <h4 className={style.title}>Наши отзывы</h4>
            <div className={style.content}>
                <div className={style.descContainer}>
                    <p className={style.desc}>
                        Нашу программу проходят более 3000 пациентов в год,
                        у которых в 99% наблюдается положительная динамика уже на базовом курсе.
                    </p>
                </div>
                <Slider reviews={REVIEWS}>
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

export default Reviews;
