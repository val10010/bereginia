import { smoothScrollTo } from 'Utils';
import Button from 'Components/Button';
import NumberedList from 'Components/NumberedList';
import React, { useContext, useState } from 'react';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import { LIST } from  './constants';

import style from './style.scss';

const AboutCourse = () => {
    const [isShow, setShow] = useState(false)
    const { isDesktop } = useContext(DeviceContext);

    return (
        <section className={style.container}>
            <h4 className={style.title}>
                Лечение с помощью <br/>  консультаций от Ирины
            </h4>
            <div className={style.content}>
                <div className={style.block}>
                    <p className={style.desc}>
                        Основные инструменты в профессиональной деятельности это:
                    </p>
                    <NumberedList className={style.list} classNames={style} list={LIST} />
                    {isDesktop && <Button onClick={() => smoothScrollTo('plans')} variant="secondary" className={style.mainBtn}>перейти к тарифам</Button>}
                </div>
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
