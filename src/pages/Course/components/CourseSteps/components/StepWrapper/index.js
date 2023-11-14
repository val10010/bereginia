import React from 'react';
import { buildClassName } from 'Utils'

import style from './style.scss';

const StepWrapper = ({ children, classNames }) => {
    return (
        <div className={`${buildClassName(['stepWrapperContainer'], style, classNames)}`}>
            { children }
        </div>
    );
};

export default StepWrapper;
