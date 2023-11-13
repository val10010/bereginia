import React from 'react';

import style from './style.scss';

const Provide = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h2 className={style.title}>Мы гарантируем</h2>

                <div className={style.subtitle}>
                    Первые результаты коррекции уже через 
                    <p className={style.blueText}>4 недели!</p>
                </div>

                <div className={style.cardList}>
                    <div className={style.card}>
                        <div className={style.cardTitle}>Первое</div>
                        <div className={style.cardDescription}>
                            Уникальную программу, подобранную с учетом нарушений 
                            конкретно вашего ребенка, видео уроки с доступом 
                            <p className={style.blueText}>навсегда</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <div className={style.cardTitle}>Второе</div>
                        <div className={style.cardDescription}>
                            Работу со всеми нарушениями комплексно. Ведь в 90% 
                            случаев вальгусная установка стоп и колен происходит 
                            не из-за проблем с мышцами стопы.
                        </div>
                    </div>

                    <div className={style.card}>
                        <div className={style.cardTitle}>Третье</div>
                        <div className={style.cardDescription}>
                            Полный контроль над качеством и правильностью техники 
                            выполнения упражнений. Поддержка с обратной связью после курса.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Provide;