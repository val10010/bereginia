import { Link } from 'react-router-dom';
import React from 'react';

import style from './style.scss';

const Desktop = ({ children }) => {

    return (
        <nav className={style.menu}>
            <Link to='/' className={style.logo}>Bereginia.com</Link>
            { children }
        </nav>
    );
};

export default Desktop;
