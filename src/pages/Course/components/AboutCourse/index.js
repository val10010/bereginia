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
                        Метод коррекции сколиоза по немецкой методике <span>Катарины Шрот </span>
                        является золотым стандартом лечения без операции и совершил прорыв в лечении сколиоза!
                    </p>
                    <p>
                        Выявляем и корректируем дисплазию соединительной ткани, которая приводит к вальгусу и сколиозу.
                    </p>
                    <p>
                        В команде с опытным нутрициологом по показаниям: работаем с дефицитными состояниями микро- и макроэлементов крови.
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
