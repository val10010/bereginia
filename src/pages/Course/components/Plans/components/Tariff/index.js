import React, { useCallback } from 'react';
import { buildClassName } from 'Utils';
import Button from 'Components/Button';
import { useDispatch } from 'react-redux';
import * as actions from "Actions/actions";

import style from './style.scss';

const Tariff = ({ price, name, title, btnLink = '', list, className = '', classNames= {}, oldPrice, detailsContent, isPresentNeeded = false }) => {
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

    return (
        <div className={`${style.container} ${className}`}>
            <div className={style.header}>
                <span className={buildClassName(['name'], style, classNames )}>{ name }</span>
                <h5 className={style.title}>{ title }</h5>
            </div>
            <div className={buildClassName(['content'], style, classNames )}>
                { oldPrice && <p className={style.oldPrice}>{ oldPrice }</p> }
                <p className={style.price}>{ price }</p>
                <ul className={style.list}>
                    {
                        list.map(item => (
                            <li key={item} className={style.item}>{ item }</li>
                        ))
                    }
                </ul>
                {
                    isPresentNeeded && <p className={style.bonus}><span className={style.gift}/>  доступ к вебинару "Здоровье осанки и стоп у детей"</p>
                }
            </div>
            <Button
                href={btnLink}
                className={style.btn}
            >
                Купить
            </Button>
            {
                detailsContent &&
                    <p className={style.details}>
                        Продолжайте заниматься с терапевтом онлайн после завершения программы. <span onClick={handleDetailsBtnClick} className={style.detailsBtn} >
                            подробнее
                        </span>
                    </p>
            }
        </div>
    );
};

export default Tariff;
