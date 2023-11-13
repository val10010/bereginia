import { smoothScrollTo } from 'Utils';
import Button from 'Components/Button';
import NumberedList from 'Components/NumberedList';
import React, { useContext, useState } from 'react';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const AboutCourse = () => {
    const [isShow, setShow] = useState(false)
    const { isDesktop } = useContext(DeviceContext);

    return (
        <section className={style.container}>
            <div className={style.header}>
                <h4 className={style.title}>
                    Про Курс
                </h4>
                <div className={style.description}>
                    <p>
                        Метод коррекции сколиоза по немецкой методике 
                        Катарины Шрот является золотым стандартом лечения 
                        без операции и совершил прорыв в лечении сколиоза!
                    </p>
                    <p>
                        Выявляем и корректируем дисплазию соединительной 
                        ткани, которая приводит к вальгусу и сколиозу.
                    </p>
                    <p>
                        В команде с опытным нутрициологом по показаниям: 
                        работаем с дефицитными состояниями микро- и макроэлементов крови.
                    </p>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.videoBlock}>
                    {
                       !isShow && <div className={style.videoBg}>
                            <button onClick={() => setShow(true)} className={style.videoBtn}/>
                        </div>
                    }
                    {
                      // isShow && <video src="../../../../videos/ivan/about-services.mp4" className={style.video} controls autoPlay preload="metadata">
                      //       Ваш браузер не поддерживает воспроизведение видео.
                      //   </video>
                    }
                </div>
            </div>
        </section>
    );
};

export default AboutCourse;
