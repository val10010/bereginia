import React from 'react';
import Toggle from 'Components/Toggle';

import { FAQ_LIST } from './constants';

import style from './style.scss';

const FAQ = () => {
    return (
        <section className={style.container} id="faq">
            <h4 className={style.title}>FAQ</h4>
            <ol className={style.list}>
                {
                    FAQ_LIST.map(({ title, desc }) => (
                        <Toggle key={title} className={style.toggle}>
                            <li className={style.item} > { title } </li>
                            <div className={style.desc}>
                                {desc.map((item, index) => (
                                    <p className={style.descItem} key={index}>{item}</p>
                                ))}
                            </div>
                        </Toggle>
                    ))
                }
            </ol>
        </section>
    );
};

export default FAQ;
