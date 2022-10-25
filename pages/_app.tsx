import '../styles/app.sass'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { RootStore } from '../stores/RootStore'
import { Provider } from 'inversify-react'
import { ModalsContainer, ModalsEnum } from '../modals'
import ReactGA from "react-ga"
ReactGA.initialize('G-S24Y5DC7HX')

const rootStore = new RootStore()
const container = rootStore.container

function MyApp({ Component, pageProps }: AppProps) {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [])

    // try reconnect to web3
    useEffect(() => {
        rootStore.walletStore.tryReconnect()
    }, [])

    return (
        <>
        <Script
                  src="https://www.googletagmanager.com/gtag/js?id=G-S24Y5DC7HX"
                  strategy="afterInteractive"
                />
        <Script
                  id="gtag-init"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-S24Y5DC7HX',{
                    page_path: window.location.pathname,
                  });
                    `}}
                />

        
        
        <Provider container={container}>
            <Component {...pageProps} />
            <ModalsContainer />
        </Provider>
        </>

    )
}

export default MyApp
