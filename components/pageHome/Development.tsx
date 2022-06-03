import React from 'react'
import s from './home.module.sass'
import classNames from 'classnames'

const Development = () => {
    return (
        <section className={classNames(s.development, s.container)} id='targetDevelopment'>
            <div className={s.infoBlockWrapper}>
                <div className={s.development__text}>
                    <h2 className={s.development__title}>
                        <b>End-to-end</b> development
                    </h2>
                    <p className={s.development__description}>
                        Development of different scaled decentralized
                        applications (DApp), cryptocurrency, NFTs and whatever
                        you can dream of.
                        <strong> Even catgirls.</strong> Last but not least:
                        production capacity <s>over 9000h</s> over 2000h - gotta
                        go fast.
                    </p>
                </div>
                <a className={s.downLink} href="#"></a>
            </div>
        </section>
    )
}

export default Development
