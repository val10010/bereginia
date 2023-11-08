import React from 'react';

import { STEPS } from './constants';

import style from './style.scss';

const CourseSteps = () => {
    return (
        <section className={style.container} id="steps">
            <h4 className={style.title}>Как проходит курс?</h4>
            <ul className={style.list}>
                {
                    STEPS.map(({ title, desc, id}) => (
                        <li key={title} className={style.item}>
                            <h5 className={style.itemTitle}>{ title }</h5>
                            <p className={style.itemDesc}>{ desc }</p>
                            <p className={style.itemId}>{ id }</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default CourseSteps;
