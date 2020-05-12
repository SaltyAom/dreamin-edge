import AppLayout from "./layouts/app"

import Index from "./pages/index"
import Order from "./pages/order"
import NotFound from "./pages/404"

import useLocation from "wouter/use-location"

const Pages = () => {
    const [location] = useLocation()

    switch (location) {
        case "/":
            return (
                <AppLayout withSort withSearch>
                    <Index />
                </AppLayout>
            )

        case "/order":
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
