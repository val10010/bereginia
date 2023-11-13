import React from 'react';

import { STEPS } from './constants';

import style from './style.scss';

const CourseSteps = () => {
    return (
        <section className={style.container} id="steps">
            <div className={style.content}>
                <div className={style.block}>
                    <div className={style.blockTitle}>
                        <h4 className={style.title}>Как проходит курс</h4>
                        <p className={style.subTitle}>
                            Наша программа делиться на 4 этапа, о каждом подробно расскажем. Скрольте.
                        </p>
                    </div>
                </div>
                
                <div className={style.block}>
                    <div className={style.blockList}>
                        <ul className={style.list}>
                            {
                                STEPS.map(({ title, desc, id, clas, lol }) => (
                                    <div key={id} className={`${style.clas}${clas}`}>
                                      <li className={style.item}>
                                        <p className={style.itemId}>{id} этап</p>
                                        <h5 className={style.itemTitle}>{title}</h5>
                                        {lol && (
                                          <div className={style.lol}>kek</div>
                                        )}
                                        <p className={style.itemDesc}>{desc}</p>
                                      </li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CourseSteps;
