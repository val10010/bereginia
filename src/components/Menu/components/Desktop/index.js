import React from 'react';
import { NavLink } from 'react-router-dom';
import { DESKTOP_LINKS } from '../../constants';

import style from './style.scss';

const Desktop = () => {
    return (
        <nav className={style.menu}>
            <NavLink to='/' className={style.logo}>Bereginia.com</NavLink>
            <div>
                {
                    DESKTOP_LINKS.map(({ path, name }) => (
                        <NavLink
                            to={path}
                            className={({ isActive }) =>
                                isActive ? style.active + ' ' + style.item : style.item
                            }
                        >
                            { name }
                        </NavLink>
                    ))
                }
            </div>
        </nav>
    );
};

export default Desktop;
