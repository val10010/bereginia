import React, { useContext } from 'react';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import Tablet from './components/Tablet';
import Mobile from './components/Mobile';
import Desktop from './components/Desktop';

const Menu = ({ children }) => {
    const { isMobile, isTablet, isDesktop  } = useContext(DeviceContext);

    return (
        <>
            { isMobile && <Mobile>{ children }</Mobile> }
            { isTablet && <Tablet>{ children }</Tablet> }
            { isDesktop && <Desktop>{ children }</Desktop> }
        </>
    );
};

export default Menu;
