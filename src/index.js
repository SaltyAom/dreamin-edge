import { useEffect } from "preact/hooks"

import store from "./store"
import { StoreContext } from "storeon/preact"

import StoreLayout from "./layouts/store"

import Pages from "./pages"

import "./styles/init.styl"

const App = () => {
    useEffect(() => {
        document.addEventListener("touchstart", () => null, true)
    }, [])

    return (
        <StoreContext.Provider value={store}>
            <StoreLayout>
                <Pages />
            </StoreLayout>
        </StoreContext.Provider>
    )
}

export default App
