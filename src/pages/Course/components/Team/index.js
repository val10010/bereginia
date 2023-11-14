import React, {useCallback} from 'react';
import Image from "Components/Image";
import { TEAM_LIST } from './constants';
import { useDispatch } from 'react-redux';

import style from './style.scss';
import * as actions from "Actions/actions";

const Team = () => {
    const dispatch = useDispatch();
    const videoSrc = 'videos/course/trial_lesson.mp4'

    const handleBtnClick = useCallback(() => {
        dispatch(actions.showPopup({
            classNames: style,
            isFloatCloseBtn: true,
            contents: [{
                name: 'Video',
                props: {
                    src: videoSrc
                }
            }]
        }))
    }, []);

    return (
        <section className={style.container}>
            <div className={style.content}>
                <h4 className={style.title}>Команда и кураторы курса</h4>
                <p className={style.desc}>
                    На курсе у каждого ученика есть куратор.
                    Это дипломированные специалисты с многолетним опытом работы в клинике Берегиня,
                    которые помогут в освоении программы и закроют любые ваши вопросы.
                </p>
            </div>
            <div className={style.team}>
                {
                    TEAM_LIST.map(({ name, desc, imgSrc }) => (
                        <div className={style.teamItem}>
                            <Image className={style.teamItemImg} src={imgSrc} />
                            <div className={style.teamItemContent}>
                                <h5 className={style.teamItemTitle}>{ name }</h5>
                                <p className={style.teamItemDesc}>{ desc }</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={style.videoBtn} onClick={handleBtnClick}>
                Смотреть фрагмент онлайн занятия с куратором
            </div>
        </section>
    );
};

export default Team;
