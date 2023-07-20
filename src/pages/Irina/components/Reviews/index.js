import React from 'react';
import { ReactSVG } from 'react-svg';
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
                        Более 1000 человек восстановили свое здоровье и улучшили качество жизни после консультации с Ириной
                    </p>
                </div>
                <Slider reviews={REVIEWS}>
                    {
                        REVIEWS.map(({title, desc}) => (
                            <div key={title} className={style.reviewContainer}>
                                <ReactSVG src="../../../../images/irina/quotes.svg" />
                                <h6 className={style.reviewTitle}>{ title }</h6>
                                <p className={style.reviewDesc}>{ desc }</p>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    );
};

export default Reviews;
