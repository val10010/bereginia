import React from 'react';
import Map from 'Components/Map';
import { ReactSVG } from 'react-svg'
import { smoothScrollTo } from 'Utils';
import { Link } from 'react-router-dom';


import style from './style.scss';

const Footer = () => {
    return (
        <footer className={style.footer} >
            <nav className={style.nav}>
                <Link to='/' className={style.logo}>Bereginia</Link>
                <div className={style.row}>
                    <div className={style.column}>
                        <h5 className={style.title}>Специалисты</h5>
                        <Link to='/ivan' className={style.link}>Иван Газин</Link>
                        <Link to='/irina' className={style.link}>Ирина Газин</Link>
                    </div>
                    <div className={style.column}>
                        <h5 className={style.title}>Курс</h5>
                        <button onClick={() => smoothScrollTo('plans')} className={style.link}>Тарифы</button>
                        <button onClick={() => smoothScrollTo('steps')} className={style.link}>Этапы курса</button>
                        <button onClick={() => smoothScrollTo('reviews')} className={style.link}>Отзывы</button>
                        <button onClick={() => smoothScrollTo('faq')} className={style.link}>Fag</button>
                    </div>
                    <div className={style.column}>
                        <h5 className={style.title}>Контакты</h5>
                        <Link to='mailto:naturalmedical96@gmail.com' className={style.link}>naturalmedical96@gmail.com</Link>
                        <Link to='tel:+380 67 484 93 08' className={style.link}>+380 67 484 93 08</Link>
                    </div>
                </div>
            </nav>
            <ReactSVG  onClick={() => smoothScrollTo('top')} className={style.arrowToTop} src="../../images/arrow.svg"/>
            <Map className={style.map}/>
            <div className={style.bottom}>
                <p>Все права защищены. 2023</p>
                <Link className={style.item} >Политика конфидециальности</Link>
                <p>Дизайн разработан <Link className={style.textHighlighted}>Andrii S.</Link></p>
            </div>
        </footer>
    );
};

export default Footer;
