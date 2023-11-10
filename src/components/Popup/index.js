import React from 'react';

import style from './style.scss';
import {buildClassName} from "Utils";

const Popup = ({ isOpen, onClose, children, classNames = {}, isFloatCloseBtn = false }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={style.popupOverlay} onClick={onClose}>
            {
                isFloatCloseBtn &&
                <button className={`${buildClassName(['popupFloatCloseBtn'], style, classNames)}`} onClick={onClose}>
                    закрыть
                </button>
            }
            <div
                onClick={(e) => e.stopPropagation()}
                className={`${buildClassName(['popupContainer'], style, classNames)}`}
            >
                {children}
                {
                    !isFloatCloseBtn &&
                    <button className={`${buildClassName(['popupCloseBtn'], style, classNames)}`} onClick={onClose}>
                    </button>
                }
            </div>
        </div>
    );
};

export default Popup;
