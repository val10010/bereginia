import Image from 'Components/Image';
import Video from 'Components/Video';
import { buildClassName } from 'Utils';
import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import * as actions from 'Actions/actions';

import style from './style.scss'

const VideoInPopupWithPreview = ({ videoSrc, imageSrc, classNames={}, ...videoProps }) => {
    const dispatch = useDispatch();

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
        <div className={`${buildClassName(['videoBlock'], style, classNames)}`}>
            {
                <div className={`${buildClassName(['videoBg'], style, classNames)}`}>
                    { imageSrc && <Image src={imageSrc}  className={`${buildClassName(['videoBgImg'], style, classNames)}`}/> }
                    <button onClick={handleBtnClick} className={`${buildClassName(['videoBtn'], style, classNames)}`}/>
                </div>
            }
        </div>
    );
};

export default VideoInPopupWithPreview;
