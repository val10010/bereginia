import Image from 'Components/Image';
import Video from 'Components/Video';
import { buildClassName } from 'Utils'
import React, { useState } from 'react';

import style from './style.scss';

const VideoWithPreview = ({ videoSrc, imageSrc, classNames={}, ...videoProps }) => {
    const [isShow, setShow] = useState(false)

    return (
        <div className={`${buildClassName(['videoBlock'], style, classNames)}`}>
            {
                !isShow
                &&
                <div className={`${buildClassName(['videoBg'], style, classNames)}`}>
                    { imageSrc && <Image src={imageSrc}  className={`${buildClassName(['videoBgImg'], style, classNames)}`}/> }
                    <button onClick={() => setShow(true)} className={`${buildClassName(['videoBtn'], style, classNames)}`}/>
                </div>
            }
            {
               isShow
               &&
               <Video src={videoSrc} classNames={style} {...videoProps}/>
            }
        </div>
    );
};

export default VideoWithPreview;
