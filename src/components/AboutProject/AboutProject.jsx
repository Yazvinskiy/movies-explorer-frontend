import React from 'react';
import './AboutProject.css'

const AboutProject = () => {
  return (
    <section className='project' id='project'>
      <div className='project__container'>
      <h2 className='project__title'>О проекте</h2>
      <div className='project__info'>
        <div>
          <h3 className='project__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div>
        <h3 className='project__subtitle'>На выполнение диплома ушло 5 недель</h3>  
        <p className='project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>  
      </div>
      <div className='project__plan'>
      <p className='project__timing project__timing-one'>1 неделя</p>
      <p className='project__timing'>4 недели</p>
      <p className='project__technology'>Back-end</p>
      <p className='project__technology'>Front-end</p>
      </div>
      </div>
    </section>
  )
}

export default AboutProject