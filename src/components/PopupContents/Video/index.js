import React from 'react';
import { Video as VideoComponent } from 'Components/Video';

import style from './style.scss';

export const Video = ({ key, props }) => {
    return (
        <div key={key} className={style.container}>
            <VideoComponent {...props}  classNames={style}/>
        </div>
    );
};
