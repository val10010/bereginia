import React from 'react';
import { buildClassName } from 'Utils'

import style from './style.scss';

export const Video = ({ src, classNames = {}, ...videoProps}) => {
    return (
        <video
            controls
            autoPlay
            src={src}
            preload="auto"
            { ...videoProps}
            className={`${buildClassName(['video'], style, classNames)}`}
        >
            Ваш браузер не поддерживает воспроизведение видео.
        </video>
    );
};

export default Video;
