import { h } from 'preact'

import AppLayout from './layouts/app'

import useLocation from 'wouter/use-location'

import Index from './routes/index'
import Order from './routes/order'
import NotFound from './routes/404'

const Pages = () => {
    const [location] = useLocation()

    switch (location) {
        case '/':
            return (
                <AppLayout withSort withSearch>
                    <Index />
                </AppLayout>
            )

        case '/order':
            return (
                <AppLayout>
                    <Order />
                </AppLayout>
            )

        default:
            return <NotFound />
    }
}

export default Pages
