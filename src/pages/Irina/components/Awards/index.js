import React from 'react';
import { AWARDS_LIST } from './constants';

import style from './style.scss';
import Image from "Components/Image";

const Awards = () => {
    return (
        <section className={style.container}>
            <h3 className={style.title}>Награды</h3>
            <div className={style.content}>
                <p className={style.desc}>
                    Качество лечения подтвержденно не только довольными пациентами,
                    но и многолетним трудом, который подтверждают следующие награды
                </p>
                <ul className={style.list}>
                    {
                        AWARDS_LIST.map((item, i) => (
                            <li key={item} className={style.item}>
                                <Image className={style.img} src={'../../../../images/ivan/awards/' + i + '.png'}/>
                                <span className={style.itemDesc}>{ item }</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default Awards;
