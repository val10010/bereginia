import { buildClassName } from 'Utils'
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

const Slider = ({ reviews = [], classNames = {}, children, isBubblesNeeded, isButtonNeeded = true, className }) => {
    const [index, setIndex] = useState(0);
    const bubbles = isBubblesNeeded &&  Array.from({length: reviews.length}, (_, i) => i);

    const onNext = () => {
        setIndex(index < reviews.length - 1 ? index + 1 : index);
    };

    const onPrev = () => {
        setIndex(index > 0 ? index - 1 : index);
    };

    return (
        <>
            <Global styles={slideTransitionStyles} />
                <div className={`${className || ''}`}>
                    {
                        isButtonNeeded &&
                        <div className={`${buildClassName(['sliderButtons'], style, classNames)}`} hidden={reviews.length <= 1}>
                            <button onClick={onPrev} disabled={index === 0} className={`${buildClassName(['sliderPrevButton'], style, classNames)}`}>
                            </button>
                            <button onClick={onNext} disabled={index === reviews?.length - 1} className={`${buildClassName(['sliderNextButton'], style, classNames)}`}>
                            </button>
                        </div>
                    }
                    <SwitchTransition>
                        <CSSTransition
                            key={reviews[index]}
                            timeout={500}
                            classNames="slide"
                        >
                            { children[index] }
                        </CSSTransition>
                    </SwitchTransition>
                    {
                        isBubblesNeeded &&
                        <div className={style.bubbles}>
                            {
                                bubbles.map(numb => {
                                    return (
                                        <span
                                            key={numb}
                                            onClick={() => setIndex(numb)}
                                            className={`${style.bubble} ${numb === index ? style.bubbleActive : ''}`}
                                        />
                                    )
                                })
                            }
                        </div>
                    }
                </div>
        </>
    );
};

export default Slider;
