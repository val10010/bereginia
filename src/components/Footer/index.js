import React from 'react';
import Map from 'Components/Map';
import { ReactSVG } from 'react-svg'
import { smoothScrollTo } from 'Utils';
import { Link } from 'react-router-dom';
import { TABLET_MOBILE_LINKS } from './constants';


import style from './style.scss';

const Footer = ({ email, phone }) => {
    return (
        <footer className={style.footer} >
            <nav className={style.nav}>
                <Link to='/' className={style.logo}>Bereginia</Link>
                <div className={style.row}>
                    <div className={style.column}>
                        <h5 className={style.title}>Специалисты</h5>
                        {
                            TABLET_MOBILE_LINKS.specialists.map(({ path, name }) => (
                                <Link to={path} className={style.link}>{ name }</Link>
                            ))
                        }
                    </div>
                    <div className={style.column}>
                        <h5 className={style.title}>Продукты</h5>
                        {
                            TABLET_MOBILE_LINKS.products.map(({ path, name }) => (
                                <Link to={path} className={style.link}>{ name }</Link>
                            ))
                        }
                    </div>
                    <div className={style.column}>
                        <h5 className={style.title}>Контакты</h5>
                        <Link to={`mailto:${email}`} className={style.link}>{ email }</Link>
                        <Link to={`tel:${phone}`} className={style.link}>{ phone }</Link>
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
