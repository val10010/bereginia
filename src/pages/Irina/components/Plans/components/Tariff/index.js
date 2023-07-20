import React, { useId } from 'react';
import Button from 'Components/Button';
import NumberedList from 'Components/NumberedList';

import style from './style.scss';

const Tariff = ({ prices, name, list, className = '' }) => {
    return (
        <div className={`${style.container} ${className}`}>
            <div className={style.header}>
                <span className={style.name}>{ name }</span>
                <div className={style.prices}>
                    {
                        prices.length > 1
                            ?
                                prices.map(({ price, name }) => (
                                    <div key={useId()}>
                                        <h5 className={style.price}>{ price }</h5>
                                        <p className={style.priceName}> { name } </p>
                                    </div>
                                ))
                            : <h5 className={style.price}>{ prices[0].price }</h5>
                    }
                </div>
            </div>
            <div className={style.content}>
                <p className={style.tariffTitle}>Что входит:</p>
                <NumberedList list={list} className={style.list} classNames={style}/>
            </div>
            <Button
                target="_blank"
                variant="primary"
                className={style.btn}
                href="https://docs.google.com/forms/d/e/1FAIpQLSdr7j_0PSmhRgYKK5LkBmLopgeWMDnckhOYpxucBq6gL_9MSw/viewform?pli=1"
            >
                Подать заявку
            </Button>
        </div>
    );
};

export default Tariff;
