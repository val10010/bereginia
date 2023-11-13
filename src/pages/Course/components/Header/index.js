import React, { useContext, useCallback } from 'react';
import Menu from 'Components/Menu';
import Image from 'Components/Image';
import { smoothScrollTo } from 'Utils';
import Button from 'Components/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from 'Actions/actions';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const Header = () => {
    const { isDesktop, isMobile } = useContext(DeviceContext);

    const dispatch = useDispatch();

    const handleBtnClick = useCallback(() => {
        dispatch(actions.showPopup({
            contents: [{
                name: 'ReservationForm',
                props: {
                    className: style.formInPopup,
                    title: 'Консультация',
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
        <header className={style.header} id="top">
            <Menu>
                {
                  isDesktop && <div className={style.menuItems}>
                        <Link to="/ivan" className={style.item}>Иван Газин</Link>
                        <Link to="/irina" className={style.item}>Ирина Газин</Link>
                        <Link to="/course" className={style.item}>Онлайн курс «Осанка и вальгус»</Link>
                        <Link to="/webinar" className={style.item}>Вебинар</Link>
                    </div>
                }
            </Menu>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.title}>
                        <div className={style.titleFisrt}>
                            <p className={style.titlePart}>«Вальгус</p>
                            <Image className={style.titleIcon} src="../../../../images/course/header-icon.png" alt="happy client" />
                            <p>+</p>
                        </div>
                        <p className={style.titleFisrt}>осанка, сколиоз»</p>
                    </div>

                    <div className={style.headerCourse}>
                        <Image className={style.headerPicture} src="../../../../images/course/header-picture.png" />
                        <div className={style.correctionCourse}>
                            <div className={style.course}>
                                <p className={style.courseTitle}>Онлайн-курс коррекции</p>
                                <p className={style.courseSubtitle}>
                                    Излечите нарушения осанки и ножек у вашего ребенка 
                                    за 1-3 мес без операции с помощью революционных методик!
                                </p>
                                <p className={style.courseDescription}>
                                    Занимайтесь в удобное для вас время с максимальной эффективностью под полным контролем профессионала!
                                </p>

                                <div className={style.courseBtns}>
                                    <button className={style.courseFirstBtn}>Смотреть тарифы</button>
                                    <button className={style.courseSecondBtn}>Записаться на консультацию</button>
                                </div>
                            </div>
                        </div>
                        <Image className={style.correctionBg} src="../../../../images/course/header-cover.png" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
