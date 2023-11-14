import React, { useState } from 'react';
import { buildClassName } from 'Utils'

import style from './style.scss';

const Tabs = ({ children, tabs, classNames = {} }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <ul className={`${buildClassName(['tabsItems'], style, classNames)}`}>
             {
                 tabs.map((tab, index) => (
                     <li
                         key={tab}
                         onClick={() => setActiveTab(index)}
                         className={`${buildClassName(
                             ['tabsItem', index === activeTab && 'active'], style, classNames)}
                         `}
                     >
                         { tab }
                     </li>
                 ))
             }
            </ul>
            <div className={`${buildClassName(['tabsContent'], style, classNames)}`}>
                {
                    children[activeTab]
                }
            </div>
        </>
    );
};

export default Tabs;
