import React from 'react';
import Button from 'Components/Button';

import style from './style.scss';

const Tariff = ({ price, name, title, list, className = '' }) => {
    return (
        <div className={`${style.container} ${className}`}>
            <div className={style.header}>
                <span className={style.name}>{ name }</span>
                <h5 className={style.title}>{ title }</h5>
            </div>
            <div className={style.content}>
                <p className={style.price}>{ price }</p>
                <ul className={style.list}>
                    {
                        list.map(item => (
                            <li key={item} className={style.item}>{ item }</li>
                        ))
                    }
                </ul>
            </div>
            <Button
                target="_blank"
                className={style.btn}
                href="https://t.me/bereginiaabot"
            >
                Подать заявку
            </Button>
        </div>
    );
};

export default Tariff;
