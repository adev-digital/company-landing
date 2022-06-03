import React from 'react'
import s from './home.module.sass'
import classNames from 'classnames'
import Link from 'next/link'

const StickyHeader = () => {
    return (
        <div className={classNames(s.headerWrapper, s.blockWrapper, s.container)}>
            <h1 className={s.visuallyHidden}>
                NFT & blockchain projects development team
            </h1>
            <a className={s.logo} href="#">– ANOTHER.DEV</a>
            <nav className={s.mainNav}>
                <ul className={s.mainNav__list}>
                    <li className={s.mainNav__item}>
                        <Link href='#development'>service</Link>
                    </li>
                    <li className={s.mainNav__item}>
                        <Link href='#projects'>projects</Link>
                    </li>
                    <li className={s.mainNav__item}>
                        <a href="#">dao <span>soon</span></a>
                    </li>
                </ul>
            </nav>
            {/*<button className={s.connectButton} type="button">connect wallet</button>*/}
        </div>
    )
}

export default StickyHeader
