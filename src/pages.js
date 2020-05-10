import Index from "./pages/index"

import useLocation from "wouter/use-location"

const Pages = () => {
    const [location] = useLocation()

    switch (location) {
        case "/":
            return <Index />

        case "/hello":
            return <h1>Hello Preact</h1>

        default:
            return <h1>404</h1>
    }
}

export default Pages
