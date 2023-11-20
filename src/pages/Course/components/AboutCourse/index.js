import React from 'react';
import VideoWithPreview from 'Components/VideoWithPreview';

import style from './style.scss';

const AboutCourse = () => {
    return (
        <section className={style.container}>
            <div className={style.content}>
                <h3 className={style.title}>Про курс</h3>
                <div className={style.descBlock}>
                    <p>
                        Метод коррекции сколиоза по немецкой методике Катарины <span>Катарины Шрот </span>
                        золотым стандартом лечения без операции и совершил прорыв в лечении сколиоза!
                    </p>
                    <p>
                        По показаниям в команде с опытным нутрициологом  корректируем дисплазию соединительной ткани,
                        которая приводит к вальгусу и сколиозу, работая с дефицитными состояниями.
                    </p>
                    <p>
                        Мы корректируем сколиоз 3 ст. всего за 1 ч в день даже без корсета Шено,
                        в котором ребенку пришлось бы ходить по 20 часов в сутки.
                    </p>
                </div>
            </div>
            <VideoWithPreview
                classNames={style}
                videoSrc="videos/course/about_course.mp4"
                imageSrc="images/course/preview_about_course.jpg"
            />
        </section>
    );
};

export default AboutCourse;
