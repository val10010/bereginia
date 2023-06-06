import { smoothScrollTo } from 'Utils';
import { Link } from 'react-router-dom';
import { useLockBodyScroll } from 'Hooks';
import React, { useState, useCallback } from 'react';

import style from './style.scss';

const Mobile = () => {
    const [isActive, setActive] = useState(false);

    useLockBodyScroll(isActive);

    const handleCloseBtnClick = useCallback(() => setActive(false), [setActive])
    const handleOpenBtnClick = useCallback(() => setActive(true), [setActive])
    const handleItemMenuClick = useCallback((id) => {
        setActive(false);
        smoothScrollTo(id);
    }, [setActive, smoothScrollTo]);

    return (
       <>

           <nav className={`${style.menu} ${isActive ? style.active : ''}`}>
               <Link to='/' className={style.logo}>Bereginia.com</Link>
               { !isActive
                   ? <button  className={style.openBtn} onClick={handleOpenBtnClick}>Меню</button>
                   : <button  className={style.closeBtn} onClick={handleCloseBtnClick}>закрыть</button> }
           </nav>

           {
               isActive
                   &&
                    <div className={`${style.menuBox} ${isActive ? style.active : ''}`} >
                        <nav>
                            <ul className={style.row}>
                                <li className={style.column}>
                                    <h5 className={style.title}>Специалисты</h5>
                                    <Link to='/ivan' className={style.menuItem}>Иван Газин</Link>
                                    <Link to='/irina' className={style.menuItem}>Ирина Газин</Link>
                                </li>
                                <li className={style.column}>
                                    <h5 className={style.title}>Курс</h5>
                                    <button
                                        className={style.menuItem}
                                        onClick={() => handleItemMenuClick('plans')}
                                    >
                                        Тарифы
                                    </button>
                                    <button
                                        className={style.menuItem}
                                        onClick={() => handleItemMenuClick('steps')}
                                    >
                                        Этапы курса
                                    </button>
                                    <button
                                        className={style.menuItem}
                                        onClick={() => handleItemMenuClick('reviews')}
                                    >
                                        Отзывы
                                    </button>
                                    <button
                                        className={style.menuItem}
                                        onClick={() => handleItemMenuClick('faq')}
                                    >
                                        Fag
                                    </button>
                                </li>
                                <li className={style.column}>
                                    <h5 className={style.title}>Контакты</h5>
                                    <Link to='mailto:naturalmedical96@gmail.com'  className={style.menuItem}>naturalmedical96@gmail.com</Link>
                                    <Link to='tel:+380 67 484 93 08' className={style.menuItem}>+380 67 484 93 08</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className={style.bottom}>
                            <Link to='/privacy-policy' className={style.item}>Политика конфидециальности</Link>
                            <div className={style.item}>2023. Все права защищены</div>
                        </div>
                    </div>
           }
       </>
    );
};

export default Mobile;
