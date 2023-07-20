import React, { useId } from 'react';
import { STEPS } from './constants';

import style from './style.scss';

const ConsultationSteps = () => {
    return (
        <section className={style.container} id="steps">
            <h3 className={style.title}>Как проходит консультация?</h3>
            <div className={style.content}>
                {
                    STEPS.map(({ title, desc, id }) => (
                        <div key={useId()} className={style.item}>
                            <h5 className={style.itemTitle}>{ title }</h5>
                            <div className={style.blockDesc}>
                                {
                                    desc.map((item) => (
                                        <p key={useId()} className={style.itemDesc}>{ item }</p>
                                    ))
                                }
                            </div>
                            <p className={style.numb}>{ id }</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default ConsultationSteps;
