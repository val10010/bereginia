import React, {useCallback} from 'react';
import Button from 'Components/Button';
import {useDispatch} from 'react-redux';
import * as actions from 'Actions/actions';

import style from './style.scss';

const Callback = () => {
    const dispatch = useDispatch();
    const handleBtnClick = useCallback(() => {
        dispatch(actions.showPopup({
            contents: [{
                name: 'ReservationForm',
                props: {
                    className: style.formInPopup,
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
        <section className={style.container}>
            <div className={style.content}>
                <h4 className={style.title}>Остались вопросы?</h4>
                <p className={style.desc}>
                    Вы всегда можете с нам связаться и получить
                    ответы на все свои вопросы и сомнения ☺. Заполняйте форму или пишите напрямую ⌨.
                </p>
            </div>
            <div className={style.buttons}>
                <Button
                    className={style.btn}
                    onClick={handleBtnClick}
                >
                    Оформить заявку
                </Button>
                <Button
                    target="_blank"
                    variant="secondary"
                    className={style.btn}
                    href="https://t.me/ivangazin"
                >
                    Написать в телеграм
                </Button>
            </div>
        </section>
    );
};

export default Callback;
