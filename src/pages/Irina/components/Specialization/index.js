import { LIST } from './constants';
import Toggle from 'Components/Toggle';
import React, { useCallback } from 'react';
import NumberedList from 'Components/NumberedList';

import style from './style.scss';


const Specialization = () => {
    const NumberOfDiseases = useCallback(({ count }) => (
        <p className={style.diseases}>
            { count } заболевания
        </p>
    ), [])

    return (
        <section className={style.container}>
            <h3 className={style.title}>Специализация по следующим <br/> хроническим заболеваниям</h3>
            <div className={style.content}>
                <div className={style.desc}>
                    <p>Вы получите полноценную поэтапную консультацию позволяющую комплексно оценивать проблемы со здоровьем (лабораторная и инструментальная диагностика, опросники). </p>
                    <br/>
                    <p>Ваш организм рассматривается интегративно с учётом сопутствующих проблем и состояний. Возможно долгосрочное ведение до результата! </p>
                </div>
                <ol className={style.list}>
                    {
                        LIST.map(({ title, desc = [] }, index) => (
                            <Toggle key={title} className={`${style.toggle} ${desc.length === 0 ? style.empty : ''}`} hasOpen={index === 0}>
                                <li className={style.toggleItem} > { title } {desc.length !== 0 && <NumberOfDiseases count={desc?.length + 1} /> } </li>
                                <NumberedList classNames={style} className={style.inner} list={desc}/>
                            </Toggle>
                        ))
                    }
                </ol>
            </div>
        </section>
    );
};

export default Specialization;
