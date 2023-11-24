import React from 'react';
import Toggle from 'Components/Toggle';
import { WEEKLY_PLAN } from './constants'
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
                            Освоение программы под контролем и с поддержкой терапевта в течении 3 меcяцев.
                        </h4>
                        <ol className={style.list}>
                            {
                                WEEKLY_PLAN.map(({ title, desc }) => (
                                    <Toggle key={title} className={style.toggle} classNames={style} >
                                        <li className={style.item} > { title } </li>
                                        <div className={style.desc}>
                                            <p className={style.descItem}>{desc}</p>
                                        </div>
                                    </Toggle>
                                ))
                            }
                        </ol>
                        <h4 className={style.stepTitle}>
                            Все видео уроки доступны навсегда
                        </h4>
                    </StepWrapper>
                </div>
                <div className={style.forthStep}>
                    <StepWrapper classNames={style}>
                        <p className={style.stepNumber}>4 этап</p>
                        <h4 className={style.stepTitle}>Повторная консультация, оценка динамики</h4>
                        <p className={style.stepDesc}>
                            При необходимости проводится коррекция программы
                            с учетом изменений, для дальнейших самостоятельных
                            занятий 2 раза в неделю: 1 раз самостоятельно,
                            2 раз - с обратной связью терапевта.
                        </p>
                    </StepWrapper>
                </div>
            </div>
        </section>
    );
};

export default CourseSteps;
