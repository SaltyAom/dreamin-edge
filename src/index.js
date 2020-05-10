import store from "./store"
import { StoreContext } from "storeon/preact"

import StoreLayout from "./layouts/store"

import Pages from "./pages"

import "./styles/init.styl"

const App = () => (
    <StoreContext.Provider value={store}>
        <StoreLayout>
            <Pages />
        </StoreLayout>
    </StoreContext.Provider>
)

export default App
