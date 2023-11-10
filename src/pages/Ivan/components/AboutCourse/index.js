import { smoothScrollTo } from 'Utils';
import VideoWithPreview from 'Components/VideoWithPreview';
import Button from 'Components/Button';
import React, { useContext } from 'react';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const AboutCourse = () => {
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
                <VideoWithPreview videoSrc="videos/ivan/about-services.mp4" isOpenInPopup={true}/>
            </div>
        </section>
    );
};

export default AboutCourse;
