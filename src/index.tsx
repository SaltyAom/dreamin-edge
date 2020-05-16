import { h } from 'preact'
import { useEffect } from 'preact/hooks'

import store from './store'
import { StoreContext } from 'storeon/preact'

import ErrorBoundary from './layouts/errorBoundary'
import DataProvider from './layouts/dataProvider'

import Pages from './pages'

import './styles/init.styl'

const App = () => {
    useEffect(() => {
        document.addEventListener('touchstart', () => null, { passive: true })
    }, [])

    return (
        <div>
            <ErrorBoundary>
                <StoreContext.Provider value={store}>
                    <DataProvider>
                        <Pages />
                    </DataProvider>
                </StoreContext.Provider>
            </ErrorBoundary>
        </div>
    )
}

export default App
