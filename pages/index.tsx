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
import Footer from '../components/pageHome/Footer'
import { UserStore } from '../stores/UserStore'
import s from './home.module.sass'
import Head from "next/head"
import Script from "next/script"

const Home: NextPage = observer((props) => {
    const store = useInjection(UserStore)

    return (
        <div className={s.main}>
            <Head>
              <title>▷▢  Another.DEV – Blockchain Development Services</title>
              <meta name='description' content='We offer a wide range of blockchain, NFT and cryptocurrencies solutions development and creative services (incl. DApps, marketplaces, NFT collections, DeFi, P2E games, wallets and more)'/>
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                
                {/* <Script>
                  {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-S24Y5DC7HX');
                  `}
                </Script> */}

              
            </Head>
            <StickyHeader />
            <MainScreen />
            <Development />
            <CustomerFocus />
            <Team />
            <FeaturedProjects />
            <Footer />
        </div>
    )
})

export default Home
