import React from 'react';
import VideoInPopupWithPreview from 'Components/VideoInPopupWithPreview';
import { REVIEWS_LIST } from './constants';

import style from './style.scss';

const VideoReviews = () => {
    return (
        <section className={style.container}>
            <h3 className={style.title}>
                Нашу программу освоило уже более 1000 детей,
                которые получили желаемый результат, что подтверждают отзывы пациентов.
            </h3>
            <div className={style.wrapper}>
                <p className={style.desc}>
                    К нам обращались дети с очень разными нарушениями и диагнозами,
                    которые не могли вылечить годами. Благодаря нашей команде,
                    все они справились с проблемами и ведут здоровый образ жизни.
                </p>
                <div className={style.reviewsList}>
                    {
                        REVIEWS_LIST.map(({ videoSrc, imgSrc, name }) => (
                            <div className={style.review}>
                                <VideoInPopupWithPreview
                                    imageSrc={imgSrc}
                                    classNames={style}
                                    videoSrc={videoSrc}
                                />
                                <span className={style.name}>{ name }</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default VideoReviews;
