import React from 'react';
import Image from 'Components/Image';
import Slider from 'Components/Slider';

import { REVIEWS } from './constants';

import style from './style.scss';

const Reviews = () => {
    return (
        <section className={style.container}>
            <div className={style.content}>
                <div className={style.descContainer}>
                    <h4 className={style.title}>Результат от курса</h4>
                    <p className={style.desc}>
                        На ваших глазах будут выравниваться
                        стопы и коленные суставы, спинка.  Будет меняться
                        походка ребенка, он перестанет жаловаться
                        на постоянные боли и усталость.
                    </p>
                </div>
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

export default Reviews;
