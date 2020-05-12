import { h } from 'preact'

import AppLayout from './layouts/app'

import useLocation from 'wouter/use-location'

const Pages = () => {
    const [location] = useLocation()

    switch (location) {
        case '/':
            const Index = require('./pages/index').default
            return (
                <AppLayout withSort withSearch>
                    <Index />
                </AppLayout>
            )

        case '/order':
            const Order = require('./pages/order').default
            return (
                <AppLayout>
                    <Order />
                </AppLayout>
            )

        default:
            const NotFound = require('./pages/404').default
            return <NotFound />
    }
}

export default Pages
