import { smoothScrollTo } from 'Utils';
import Button from 'Components/Button';
import React, { useContext, useState } from 'react';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const AboutCourse = () => {
    const [isShow, setShow] = useState(false)
    const { isDesktop } = useContext(DeviceContext);

    return (
        <section className={style.container}>
            <h4 className={style.title}>
                Курс Ивана Газина - ваше <br/> решение проблемы
            </h4>
            <div className={style.content}>
                <div className={style.block}>
                    <p className={style.desc}>
                        Мы создали курс, который поможет справится
                        с всеми возможными проблемами опорно двигательного
                        аппарата, приложив нужное количество усилий и дисциплины
                    </p>
                    {isDesktop && <Button onClick={() => smoothScrollTo('plans')} variant="secondary" className={style.mainBtn}>перейти к тарифам</Button>}
                </div>
                <div className={style.videoBlock}>
                    {
                       !isShow && <div className={style.videoBg}>
                            <button onClick={() => setShow(true)} className={style.videoBtn}/>
                        </div>
                    }
                    {
                      isShow && <video src="../../../../videos/ivan/about-services.mp4" className={style.video} controls autoPlay>
                            Ваш браузер не поддерживает воспроизведение видео.
                        </video>
                    }
                </div>
            </div>
        </section>
    );
};

export default AboutCourse;
