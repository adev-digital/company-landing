import React from 'react'
import s from './home.module.sass'
import classNames from 'classnames'
import FeaturedCard from '../FeaturedCard'

const FeaturedProjects = () => {
    return (
        <section className={classNames(s.featuredProjects, s.container)}>
            <div className={s.blockWrapper}>
                <div className={s.featuredProjects__text}>
                    <h2 className={s.featuredProjects__title}>
                        Featured <b>projects</b>
                    </h2>
                    <p className={s.featuredProjects__description}>
                        Last night I had a dream about all kinds of projects.
                        Then I woke up and realized – that’s our website.
                    </p>
                </div>
            </div>
            <div className={s.featuredProjects__cards}>
                <FeaturedCard
                    headingBold="Pocmon "
                    heading="ecosystem"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    tags={['NFT', 'Smartcontracts']}
                />
                <FeaturedCard
                    headingBold="Pocmon "
                    heading="ecosystem"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    tags={['NFT', 'Mobile', 'Smartcontracts']}
                />
            </div>
        </section>
    )
}

export default FeaturedProjects
