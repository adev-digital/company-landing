import classNames from 'classnames'
import { useInjection } from 'inversify-react'
import { observer } from 'mobx-react'
import type { NextPage } from 'next'
import StickyHeader from '../components/pageHome/StickyHeader'
import MainScreen from '../components/pageHome/MainScreen'
import Development from '../components/pageHome/Development'
import CustomerFocus from '../components/pageHome/CustomerFocus'
import Team from '../components/pageHome/Team'
import FeaturedProjects from '../components/pageHome/FeaturedProjects'
import { UserStore } from '../stores/UserStore'
import s from './home.module.sass'

const Home: NextPage = observer((props) => {
    const store = useInjection(UserStore)

    return (
        <div className={s.main}>
            <StickyHeader />
            <MainScreen />
            <Development />
            <CustomerFocus />
            <Team />
            <FeaturedProjects />
        </div>
    )
})

export default Home
