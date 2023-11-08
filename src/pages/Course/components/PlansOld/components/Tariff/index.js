import React, { useCallback } from 'react';
import { buildClassName } from 'Utils';
import Button from 'Components/Button';
import { useDispatch } from 'react-redux';

import style from './style.scss';
import * as actions from "Actions/actions";

const Tariff = ({ price, name, title, list, className = '', classNames= {}, oldPrice, detailsContent }) => {
    const dispatch = useDispatch();
    const handleDetailsBtnClick = useCallback(() => {
        dispatch(actions.showPopup({
            contents: [{
                name: 'TariffDetails',
                props: {
                    ...detailsContent
                }
            }],
        }))
    }, [dispatch]);

    const handleBtnClick = useCallback(() => {
        dispatch(actions.showPopup({
            contents: [{
                name: 'ReservationForm',
                props: {
                    className: style.formInPopup,
                    title: 'План ' + name,
                    price,
                    btnonclick: {
                        actionName: 'showPopup',
                        props: {
                            contents: [{
                                name: 'Success'
                            }]
                        }
                    }
                }
            }]
        }))
    }, []);

    return (
        <div className={`${style.container} ${className}`}>
            <div className={style.header}>
                <span className={style.name}>{ name }</span>
                <h5 className={style.title}>{ title }</h5>
            </div>
            <div className={buildClassName(['content'], style, classNames )}>
                <p className={style.oldPrice}>{ oldPrice }</p>
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
                className={style.btn}
                onClick={handleBtnClick}
            >
                Подать заявку
            </Button>
            {
                detailsContent &&
                    <p className={style.details}>
                        Продолжайте заниматься с терапевтом онлайн после завершения программы. <br/>
                        <span
                            onClick={handleDetailsBtnClick}
                            className={style.detailsBtn}
                        >
                            подробнее
                        </span>
                    </p>
            }
        </div>
    );
};

export default Tariff;
