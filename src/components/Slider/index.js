import React, { useState } from 'react';
import { css, Global } from '@emotion/react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import style from './style.scss'

const slideTransitionStyles = css`
  .slide-enter,
  .slide-appear {
    opacity: 0;
    transform: translateX(5%);
  }
  .slide-enter-active,
  .slide-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms, transform 500ms;
  }
  .slide-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .slide-exit-active {
    opacity: 0;
    transform: translateX(-5%);
    transition: opacity 500ms, transform 500ms;
  }
`;

const Slider = ({ reviews, children }) => {
    const [index, setIndex] = useState(0);

    const onNext = () => {
        setIndex(index < reviews.length - 1 ? index + 1 : index);
    };

    const onPrev = () => {
        setIndex(index > 0 ? index - 1 : index);
    };

    return (
        <>
            <Global styles={slideTransitionStyles} />
                <div className={style.wrapper}>
                    <div className={style.buttons} hidden={reviews.length <= 1}>
                        <button onClick={onPrev} disabled={index === 0} className={style.prevButton}>
                        </button>
                        <button onClick={onNext} disabled={index === reviews.length - 1} className={style.nextButton}>
                        </button>
                    </div>
                    <SwitchTransition>
                        <CSSTransition
                            key={reviews[index]}
                            timeout={500}
                            classNames="slide"
                        >
                            { children[index] }
                        </CSSTransition>
                    </SwitchTransition>
                </div>
        </>
    );
};

export default Slider;
