import React from 'react';
import StepWrapper from './components/StepWrapper';

import style from './style.scss';

const CourseSteps = () => {
    return (
        <section className={style.container}>
            <div className={style.content}>
                <h4 className={style.title}>
                    Как проходит курс
                </h4>
                <p className={style.desc}>
                    Наша программа делится на 4 этапа, о каждом подробно расскажем. Скрольте.
                </p>
            </div>
            <div className={style.steps}>
               <div className={style.firstStep}>
                   <StepWrapper classNames={style}>
                       <p className={style.stepNumber}>1 этап</p>
                       <h4 className={style.stepTitle}>Консультация Газин И. В.</h4>
                       <p className={style.stepDesc}>
                           Видео разбор всех нарушений ребенка,
                           рекомендации, нужны ли рентген-снимки,
                           и какие, после чего звонок по аудио-либо видеосвязи до 1 часа с
                           рекомендациями и ответами на все ваши вопросы, рассмотрением рентген снимков.
                       </p>
                   </StepWrapper>
               </div>
                <div className={style.secondStep}>
                    <StepWrapper classNames={style}>
                        <p className={style.stepNumber}>2 этап</p>
                        <h4 className={style.stepTitle}>Подбор программы</h4>
                        <p className={style.stepDesc}>
                            Подбор индивидуальной максимально эффективной
                            программы с учетом всех нарушений ребенка;
                        </p>
                    </StepWrapper>
                </div>
                <div className={style.thirdStep}>
                    <StepWrapper classNames={style}>
                        <p className={style.stepNumber}>3 этап</p>
                        <h4 className={style.stepTitle}>
                            Освоение программы самостоятельно либо с поддержкой специалиста. Подробнее читайте в разделе тарифов
                        </h4>
                    </StepWrapper>
                </div>
                <div className={style.forthStep}>
                    <StepWrapper classNames={style}>
                        <p className={style.stepNumber}>4 этап</p>
                        <h4 className={style.stepTitle}>Повторная консультация, оценка динамики</h4>
                    </StepWrapper>
                </div>
            </div>
        </section>
    );
};

export default CourseSteps;
