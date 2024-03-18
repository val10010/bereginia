import React from 'react';

import style from './style.scss';

const Guarantee = () => {
    return (
        <section className={style.container}>
            <h3 className={style.title}>Мы гарантируем</h3>
            <div className={style.points}>
                <div className={style.point}>
                    <h4 className={style.pointTitle}>Первое</h4>
                    <p className={style.pointDesc}>
                        Уникальную программу, подобранную с учетом
                        нарушений конкретно вашего ребенка
                    </p>
                </div>
                <div className={style.point}>
                    <h4 className={style.pointTitle}>Второе</h4>
                    <p className={style.pointDesc}>
                        Работу со всеми нарушениями комплексно.
                        Ведь в 90% случаев вальгусная установка стоп и колен происходит
                        не из-за проблем с мышцами стопы.
                    </p>
                </div>
                <div className={style.point}>
                    <h4 className={style.pointTitle}>Третье</h4>
                    <p className={style.pointDesc}>
                        Полный контроль над качеством и правильностью
                        техники выполнения упражнений.
                        Поддержка с обратной связью после курса.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Guarantee;
