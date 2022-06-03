import React from 'react'
import s from './home.module.sass'
import classNames from 'classnames'

const Team = () => {
    return (
        <section className={classNames(s.team, s.container)}>
            <div className={s.infoBlockWrapper}>
                <div className={s.team__text}>
                    <h2 className={s.team__title}>
                        Well-rounded <b>team</b>
                    </h2>
                    <p className={s.team__description}>
                        Continuously improving and agile working processes
                        offers rapid error-free customer solutions, without
                        compromising on quality. What you may treat as an error
                        is just a mirage. But what is definitely real –{' '}
                        <strong>structure and visibility of our work.</strong>
                    </p>
                </div>
                <a className={s.downLink} href="#"></a>
            </div>
        </section>
    )
}

export default Team
