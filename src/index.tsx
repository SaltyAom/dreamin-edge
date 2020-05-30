import { h } from 'preact'
import { useEffect } from 'preact/hooks'

import store from './store'
import { StoreContext } from 'storeon/preact'

import ErrorBoundary from './layouts/errorBoundary'
import DataProvider from './layouts/dataProvider'

import Router from './router'

import './styles/init.styl'

const App = () => {
    useEffect(() => {
        document.addEventListener('touchstart', () => null, { passive: true })
    }, [])

    return (
        <main>
            <ErrorBoundary>
                <StoreContext.Provider value={store}>
                    <DataProvider>
                        <Router />
                    </DataProvider>
                </StoreContext.Provider>
            </ErrorBoundary>
        </main>
    )
}

export default App
