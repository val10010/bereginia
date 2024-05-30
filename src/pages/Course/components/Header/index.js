import React, { useContext } from 'react';
import Menu from 'Components/Menu';
import Image from 'Components/Image';
import Button from 'Components/Button';
import { ReactSVG } from 'react-svg';
import { smoothScrollTo } from 'Utils';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const Header = () => {
    const { isTablet, isMobile } = useContext(DeviceContext);

    return (
        <header className={style.header} id="top">
            <Menu isHideBurger={true}/>
            <div className={style.content}>
                <h1 className={style.title}>
                    <span className={style.titleInner}>«Вальгус  <ReactSVG className={style.titleIcon} src="images/course/3D-icon.svg" /></span> {'+ '}
                    {
                        !isMobile &&  <br/>
                    }
                    осанка, сколиоз»
                </h1>
                <div className={style.wrapper}>
                    {
                        !isTablet && <Image  className={style.hero} src="images/course/hero.jpg" alt='Вальгус 3д + осанка, сколиоз'/>
                    }
                    {
                        isTablet && <Image  className={style.hero} src="images/course/hero_tablet.jpg" alt='Вальгус 3д + осанка, сколиоз'/>
                    }
                    <div className={style.info}>
                        <h3 className={style.subtitle}>Онлайн-курс коррекции</h3>
                        <p className={style.desc}>
                            Излечите нарушения осанки и ножек у вашего ребенка без операции
                            с помощью революционных методик!
                        </p>
                        <p className={style.desc}>
                            Занимайтесь в удобное для вас время с максимальной
                            эффективностью под полным контролем профессионала!
                        </p>
                        <div className={style.btnWrapper}>
                           <Button
                               className={style.btn}
                               onClick={() => smoothScrollTo('plans')}
                           >
                               Смотреть тарифы
                           </Button>
                           <Button
                               className={style.btn} variant="secondary"
                               onClick={() => smoothScrollTo('trialLesson')}
                           >
                               Получить пробный урок
                           </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
