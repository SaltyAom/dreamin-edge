import Index from "./pages/index"
import NotFound from './pages/404'

import useLocation from "wouter/use-location"

const Pages = () => {
    const [location] = useLocation()

    switch (location) {
        case "/":
            return <Index />

        default:
            return <NotFound />
    }
}

export default Pages
