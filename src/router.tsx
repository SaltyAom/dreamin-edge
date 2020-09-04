import { h } from 'preact'

import AppLayout from './layouts/app'

import useLocation from 'wouter/use-location'

import Index from './routes/index'
import Receipt from './routes/receipt'
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

        case '/receipt':
            return (
                <AppLayout>
                    <Receipt />
                </AppLayout>
            )

        default:
            return <NotFound />
    }
}

export default Pages
